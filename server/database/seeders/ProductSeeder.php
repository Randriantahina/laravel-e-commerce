<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            [
                'name' => 'iPhone 15 Pro Max 256GB Titane Naturel',
                'slug' => 'iphone-15-pro-max-256gb-titane-naturel',
                'description' => 'L\'iPhone 15 Pro Max redéfinit ce qu\'un smartphone peut faire. Avec son design en titane de qualité aérospatiale, sa puce A17 Pro révolutionnaire et son système de caméra Pro avancé, il offre des performances exceptionnelles dans un format élégant.',
                'short_description' => 'Le smartphone le plus avancé d\'Apple avec puce A17 Pro et design en titane.',
                'sku' => 'IPH15PM-256-TN',
                'price' => 1229.00,
                'original_price' => 1399.00,
                'stock_quantity' => 15,
                'brand' => 'Apple',
                'rating' => 4.8,
                'reviews_count' => 324,
                'is_featured' => true,
                'images' => [
                    'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                    'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                ],
                'features' => [
                    'Écran Super Retina XDR de 6,7 pouces',
                    'Puce A17 Pro avec GPU 6 cœurs',
                    'Système de caméra Pro 48 Mpx',
                    'Zoom optique 5x',
                    'Autonomie jusqu\'à 29 heures de lecture vidéo',
                    'Résistant aux éclaboussures, à l\'eau et à la poussière (IP68)',
                    'Face ID pour une authentification sécurisée',
                    'Compatible 5G'
                ],
                'categories' => ['electronique']
            ],
            [
                'name' => 'MacBook Air M2 13" 512GB',
                'slug' => 'macbook-air-m2-13-512gb',
                'description' => 'Le MacBook Air M2 combine performance exceptionnelle et design ultra-fin. Avec la puce M2 d\'Apple, il offre une puissance incroyable pour tous vos projets créatifs et professionnels.',
                'short_description' => 'Ordinateur portable ultra-fin avec puce M2 et écran Liquid Retina.',
                'sku' => 'MBA-M2-512',
                'price' => 1199.00,
                'original_price' => 1499.00,
                'stock_quantity' => 8,
                'brand' => 'Apple',
                'rating' => 4.9,
                'reviews_count' => 156,
                'is_featured' => true,
                'images' => [
                    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                ],
                'features' => [
                    'Puce Apple M2 avec CPU 8 cœurs',
                    'GPU 10 cœurs',
                    '512 Go de stockage SSD',
                    'Écran Liquid Retina 13,6 pouces',
                    'Caméra FaceTime HD 1080p',
                    'Autonomie jusqu\'à 18 heures',
                    'Poids de seulement 1,24 kg'
                ],
                'categories' => ['electronique']
            ]
        ];

        foreach ($products as $productData) {
            $categoryNames = $productData['categories'];
            unset($productData['categories']);

            $product = Product::create($productData);

            // Attach categories
            foreach ($categoryNames as $categoryName) {
                $category = Category::where('slug', $categoryName)->first();
                if ($category) {
                    $product->categories()->attach($category->id);
                }
            }
        }
    }
}
