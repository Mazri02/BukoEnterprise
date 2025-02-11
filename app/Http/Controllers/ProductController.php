<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Product; // Import the Product model
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class ProductController {
    public function getProduct() {
        return Product::all();  
    }

    public function getCategory() { // Fetch all product categories 
        return Product::all()->groupBy('ProductCategory')->keys(); 
    }

    public function addProduct(Request $req) {
        $product = new Product();

        $fileName = $req->ProductName.'.'.$req->file('ProductImage')->getClientOriginalExtension(); 
        $filePath = '../'.$req->file('ProductImage')->move('products',$fileName);

        $product->ProductName = $req->ProductName;
        $product->ProductImage = $filePath;
        $product->ProductCategory = $req->ProductCategory;
        $product->ProductPrice = $req->ProductPrice;
        $product->ProductIngredient = $req->ProductIngredient;
        $product->ProductStock = $req->ProductStock;

        $product->save();
        
        return response()->json([
            "status"=>200,
            "message"=>'Success, Product Added'
        ]);
    }

    public function searchProduct(Request $req){
        return Product::where('ProductID',$req->ProductID)->first();
    }

    public function editProduct(Request $req){
        Product::where('ProductID',$req->ProductID)->update([
            "ProductName" => $req->ProductName,
            "ProductPrice" => $req->ProductPrice,
            "ProductStock" => $req->ProductStock,
            "ProductIngredient" => $req->ProductIngredient
        ]);

        return response()->json([
            "status"=>200,
            "message"=>'Success, Product Updated'
        ]);
    }

    public function deleteProduct(Request $req){
        Product::where('ProductID',$req->ProductID)->delete();
        return response()->json([
            "status"=>200,
            "message"=>'Success, Product Delete'
        ]);
    }

    public function getProductProfit(){
        $productProfits = DB::table('order as O')
            ->join('products as P', 'P.ProductID', '=', 'O.ProductID')
            ->join('customer as C', 'C.CustomerID', '=', 'O.CustomerID')
            ->select(
                'P.ProductID',
                'P.ProductName',
                'P.ProductImage',
                DB::raw('COUNT(P.ProductID) as Count'),
                DB::raw('SUM(P.ProductPrice) as Profit')
            )
            ->groupBy('P.ProductID', 'P.ProductName', 'P.ProductImage')
            ->orderBy('Profit', 'DESC')
            ->take(5) 
            ->get();

        return $productProfits;
    }

    public function getOverview()
    {
        $totalCustomers = DB::table('order')
            ->select(DB::raw('COUNT(DISTINCT CustomerID)'))
            ->toSql();

        $summary = DB::table('order as O')
            ->join('products as P', 'P.ProductID', '=', 'O.ProductID')
            ->join('customer as C', 'C.CustomerID', '=', 'O.CustomerID')
            ->select(
                DB::raw('SUM(P.ProductPrice) AS Profit'),
                DB::raw('COUNT(O.CustomerID) AS `Order`'),
                DB::raw("($totalCustomers) AS Customers")
            )
            ->first();

        return $summary;
    }

    public function getStats() { 
        $orders = DB::table('order as O')
        ->join('products as P', 'P.ProductID', '=', 'O.ProductID')
        ->join('customer as C', 'C.CustomerID', '=', 'O.CustomerID')
        ->select(DB::raw('DATE_FORMAT(O.ORDERDATE, "%Y-%m") as OrderMonth'), DB::raw('SUM(P.ProductPrice) as TotalPrice'))
        ->groupBy('OrderMonth')
        ->orderBy('OrderMonth', 'asc')
        ->take(5)
        ->get();

        return $orders;
    }
}
