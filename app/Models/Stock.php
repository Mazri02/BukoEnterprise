<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stock extends Model
{
    use HasFactory;

    // Specify the table name if different from the default
    protected $table = 'stock';
    protected $primaryKey = 'StockID';
    public $incrementing = true;
    public $timestamps = false;

    // Define fillable fields
    protected $fillable = [
        'StockNumber',
        'StockSupplier',
        'StockPrice',
        'StockItem',
        'StockDate',
    ];
}
