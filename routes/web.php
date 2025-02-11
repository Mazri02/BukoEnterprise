<?php

use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\SalesController;
use App\Http\Controllers\StockController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\CheckPermission;
use App\Http\Controllers\MailController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('AboutUs');
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// });

Route::get('/LoginPage', function () {
    return Inertia::render('LoginPage');
})->name('LoginPage');

Route::get('/AboutUs', function () {
    return Inertia::render('AboutUs');
});


Route::post('/Login', [UserController::class, "login"]);
Route::get('/Logout', [UserController::class, "logout"]);
Route::get('/Category', [ProductController::class, "getCategory"]);
Route::get('/Product', [ProductController::class, "getProduct"]);
Route::post('/Payment', [CustomerController::class, "addCustomerOrder"]);

Route::middleware(CheckPermission::class)->group(function () {
    Route::get('/AdminSales', function () {
        return Inertia::render('Admin/Sales');
    })->name('AdminSales');
    Route::get('/AdminOverview', function () {
        return Inertia::render('Admin/Overview');
    })->name('AdminOverview');
    Route::get('/AdminStock', function () {
        return Inertia::render('Admin/Stock');
    })->name('AdminStock');
    Route::get('/AdminProduct', function () {
        return Inertia::render('Admin/Product');
    })->name('AdminProduct');
    Route::get('/Admin/Products', [ProductController::class, "getProduct"]);
    Route::get('/Admin/Category', [ProductController::class, "getCategory"]);
    Route::get('/Admin/Sales', [SalesController::class, "getSales"]);
    Route::get('/Admin/Stock', [StockController::class, "getStock"]);
    Route::get('/Admin/Profit', [ProductController::class, "getProductProfit"]);
    Route::get('/Admin/Stats', [ProductController::class, "getStats"]);
    Route::post('/Admin/ChangePass', [UserController::class, "changePassword"]);
    Route::get('/Admin/Overview', [ProductController::class, "getOverview"]);
    Route::post('/Admin/DeleteSales', [SalesController::class, "deleteSales"]);
    Route::post('/Admin/SuccessSales', [SalesController::class, "successSales"]);
    Route::post('/Admin/FailedSales', [SalesController::class, "failedSales"]);
    Route::post('/Admin/AddProduct', [ProductController::class, "addProduct"]);
    Route::post('/Admin/AddStock', [StockController::class, "addStock"]);
    Route::post('/Admin/EditStock', [StockController::class, "editStock"]);
    Route::post('/Admin/SearchStock', [StockController::class, "searchStock"]);
    Route::post('/Admin/DeleteStock', [StockController::class, "deleteStock"]);
    Route::post('/Admin/DeleteProduct', [ProductController::class, "deleteProduct"]);
    Route::post('/Admin/SearchProduct', [ProductController::class, "searchProduct"]);
    Route::post('/Admin/EditProduct', [ProductController::class, "editProduct"]);
});


Route::get('/ContactForm', function () {
    return Inertia::render('ContactForm');
});

Route::post('/Feedback', [FeedbackController::class, 'store']);

Route::get('/Menu', function () {
    return Inertia::render('Menu');
});

Route::get('/Checkout', function () {
    return Inertia::render('Checkout');
})->name('Checkout');

Route::get('/Payment', function () {
    return Inertia::render('Payment');
})->name('Payment');

Route::post('/send-email', [MailController::class, 'sendEmail']);

Route::get('/OrderTracking', function () {
    return Inertia::render('OrderTracking');
});
Route::get('/Admin/Sales', [SalesController::class, "getSales"]);

require __DIR__ . '/auth.php';
