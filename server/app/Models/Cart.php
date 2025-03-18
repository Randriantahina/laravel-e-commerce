<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;

    // Indiquez les attributs que vous pouvez remplir en masse
    protected $fillable = ['product_id', 'quantity', 'session_id'];
}
