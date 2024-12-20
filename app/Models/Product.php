<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    // Specify the table name if different from the default
    protected $table = 'products';
    protected $primaryKey = 'CUSTID';
    public $incrementing = true;
    public $timestamps = false;

    // Define fillable fields
    protected $fillable = [
        'ProductImage',
        'ProductName',
        'ProductCategory',
        'ProductPrice',
        'ProductIngredient',
        'ProductStock'
    ];
}
