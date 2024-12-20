<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SalesController extends Controller
{
    public function getSales()
    {
        $salesData = DB::table('order as O')
            ->join('products as P', 'P.ProductID', '=', 'O.ProductID')
            ->join('customer as C', 'C.CustomerID', '=', 'O.CustomerID')
            ->select(
                'O.CUSTOMERID AS CustomerID',
                'O.CUSTOMERID AS Action',
                DB::raw('GROUP_CONCAT(P.PRODUCTNAME SEPARATOR ",") AS ListItem'),
                DB::raw('GROUP_CONCAT(P.PRODUCTPRICE SEPARATOR ",") AS Price'),
                DB::raw('GROUP_CONCAT(O.ORDERQUANTITY SEPARATOR ",") AS Quantity'),
                DB::raw('SUM(P.PRODUCTPRICE) AS Total'),
                'C.CUSTOMEREMAIL AS Email',
                DB::raw('GROUP_CONCAT(DISTINCT O.OrderDate SEPARATOR ",") AS Date'),
                DB::raw('GROUP_CONCAT( DISTINCT O.OrderStatus SEPARATOR ",") AS Status')
            )
            ->groupBy('C.CustomerID')
            ->get();

        return $salesData;
    }

    public function failedSales(Request $req){
        Order::where('CustomerID',$req->CustomerID)->update([
            "OrderStatus" => 'Failed'
        ]);

        return response()->json([
            "status"=>200,
            "message"=>'Success, Product Updated'
        ]);
    }

    public function successSales(Request $req){
        Order::where('CustomerID',$req->CustomerID)->update([
            "OrderStatus" => 'Success'
        ]);

        return response()->json([
            "status"=>200,
            "message"=>'Success, Product Updated'
        ]);
    }

    public function deleteSales(Request $req){
        Order::where('CustomerID',$req->CustomerID)->delete();
        return response()->json([
            "status"=>200,
            "message"=>'Success, Order Delete'
        ]);
    }
}
