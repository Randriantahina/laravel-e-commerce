<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'product_name' => 'required|string',
            'product_image' => 'required|string',
            'product_price' => 'required|numeric',
            'size' => 'required|string',
            'color' => 'required|string',
            'quantity' => 'required|integer|min:1',
        ]);

        $order = Order::create([
            'user_id' => Auth::id(),
            ...$request->only(['product_name', 'product_image', 'product_price', 'size', 'color', 'quantity']),
        ]);

        return response()->json($order, 201);
    }

    public function index()
    {
        $orders = Order::where('user_id', Auth::id())->get();
        return response()->json($orders);
    }
}
