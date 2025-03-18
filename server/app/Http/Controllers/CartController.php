<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Models\CartItem;

class CartController extends Controller {
    // Ajouter un produit au panier
    public function addToCart(Request $request) {
        $cartItem = CartItem::where('product_name', $request->product_name)->first();

        if ($cartItem) {
            $cartItem->increment('quantity');
        } else {
            CartItem::create($request->all());
        }

        return response()->json(['message' => 'Produit ajouté au panier']);
    }

    // Récupérer les produits du panier
    public function getCart() {
        return response()->json(CartItem::all());
    }

    // Supprimer un produit du panier
    public function removeFromCart($id) {
        CartItem::destroy($id);
        return response()->json(['message' => 'Produit supprimé']);
    }

    // Obtenir le nombre total d'articles dans le panier
    public function getCartCount() {
        return response()->json(['count' => CartItem::sum('quantity')]);
    }
}