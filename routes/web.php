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

Route::get('/Template', function () {
    return Inertia::render('Template');
});

require __DIR__.'/auth.php';
