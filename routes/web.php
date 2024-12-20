<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
});

Route::get('/LoginPage', function () {
    return Inertia::render('LoginPage');
});

Route::get('/AboutUs', function () {
    return Inertia::render('AboutUs');
});

Route::get('/ContactForm', function () {
    return Inertia::render('ContactForm');
});

Route::get('/OrderTracking', function () {
    return Inertia::render('OrderTracking');
});

require __DIR__ . '/auth.php';
