<?php

namespace App\Http\Controllers;

use App\Models\Stock;
use Illuminate\Http\Request;

class StockController extends Controller
{
    public function getStock(){
        return Stock::select('StockID AS Action','StockNumber AS Stock', 'StockItem AS Ingredient', 'StockPrice AS Price', 'StockDate AS Date', 'StockSupplier AS Supplier')->get();
    }
    
    public function addStock(Request $req) {
        $stock = new Stock();
        $stock->StockSupplier= $req->StockSupplier;
        $stock->StockNumber = $req->StockNumber;
        $stock->StockPrice = $req->StockPrice;
        $stock->StockItem = $req->StockItem;
        $stock->StockDate = $req->StockDate;

        $stock->save();
        
        return response()->json([
            "status"=>200,
            "message"=>'Success, Stock Added'
        ]);
    }

    public function editStock(Request $req){
        Stock::where('StockID',$req->StockID)->update([
            "StockSupplier" => $req->StockSupplier,
            "StockNumber" => $req->StockNumber,
            "StockPrice" => $req->StockPrice,
            "StockItem" => $req->StockItem,
            "StockDate" => $req->StockDate
        ]);

        return response()->json([
            "status"=>200,
            "message"=>'Success, Stock Updated'
        ]);
    }

    public function searchStock(Request $req){
        return Stock::where('StockID',$req->StockID)->first();
    }

    public function deleteStock(Request $req){
        Stock::where('StockID',$req->StockID)->delete();
        return response()->json([
            "status"=>200,
            "message"=>'Success, Stock Delete'
        ]);
    }
}

