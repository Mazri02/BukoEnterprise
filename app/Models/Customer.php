<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    // Specify the table name if different from the default
    protected $table = 'customer';
    protected $primaryKey = 'CustomerID';
    public $incrementing = true;
    public $timestamps = false;

    // Define fillable fields
    protected $fillable = [
        'CustomerID',
        'CustomerPhone',
        'CustomerEmail',
        'CustomerAddress1',
        'CustomerAddress2',
        'CustomerPostcode',
        'CustomerCity',
        'CustomerPayment',
    ];
}
