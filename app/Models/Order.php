<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    // Specify the table name if different from the default
    protected $table = 'order';
    protected $primaryKey = 'OrderID';
    public $incrementing = true;
    public $timestamps = false;

    // Define fillable fields
    protected $fillable = [
        'OrderDate',
        'OrderStatus'
    ];
}
