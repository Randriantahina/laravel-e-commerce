<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'product_name',
        'product_image',
        'product_price',
        'size',
        'color',
        'quantity',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
