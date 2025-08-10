<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Électronique',
                'slug' => 'electronique',
                'description' => 'Smartphones, ordinateurs, gadgets et accessoires high-tech',
                'image' => 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'sort_order' => 1,
                'children' => [
                    [
                        'name' => 'Smartphones',
                        'slug' => 'smartphones',
                        'description' => 'Téléphones mobiles et accessoires',
                        'sort_order' => 1,
                    ],
                    [
                        'name' => 'Ordinateurs',
                        'slug' => 'ordinateurs',
                        'description' => 'Laptops, PC de bureau et composants',
                        'sort_order' => 2,
                    ],
                    [
                        'name' => 'Audio',
                        'slug' => 'audio',
                        'description' => 'Écouteurs, enceintes et équipements audio',
                        'sort_order' => 3,
                    ],
                ]
            ],
            [
                'name' => 'Mode',
                'slug' => 'mode',
                'description' => 'Vêtements, chaussures et accessoires de mode',
                'image' => 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'sort_order' => 2,
                'children' => [
                    [
                        'name' => 'Vêtements Homme',
                        'slug' => 'vetements-homme',
                        'description' => 'Mode masculine',
                        'sort_order' => 1,
                    ],
                    [
                        'name' => 'Vêtements Femme',
                        'slug' => 'vetements-femme',
                        'description' => 'Mode féminine',
                        'sort_order' => 2,
                    ],
                    [
                        'name' => 'Chaussures',
                        'slug' => 'chaussures',
                        'description' => 'Chaussures pour tous',
                        'sort_order' => 3,
                    ],
                ]
            ],
            [
                'name' => 'Maison & Jardin',
                'slug' => 'maison-jardin',
                'description' => 'Mobilier, décoration et équipements pour la maison',
                'image' => 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'sort_order' => 3,
                'children' => [
                    [
                        'name' => 'Mobilier',
                        'slug' => 'mobilier',
                        'description' => 'Meubles pour toute la maison',
                        'sort_order' => 1,
                    ],
                    [
                        'name' => 'Décoration',
                        'slug' => 'decoration',
                        'description' => 'Objets déco et accessoires',
                        'sort_order' => 2,
                    ],
                ]
            ],
            [
                'name' => 'Sports & Loisirs',
                'slug' => 'sports-loisirs',
                'description' => 'Équipements sportifs et articles de loisirs',
                'image' => 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'sort_order' => 4,
            ],
            [
                'name' => 'Beauté & Santé',
                'slug' => 'beaute-sante',
                'description' => 'Cosmétiques, soins et produits de santé',
                'image' => 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'sort_order' => 5,
            ],
            [
                'name' => 'Livres',
                'slug' => 'livres',
                'description' => 'Romans, BD, manuels et e-books',
                'image' => 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'sort_order' => 6,
            ],
        ];

        foreach ($categories as $categoryData) {
            $children = $categoryData['children'] ?? [];
            unset($categoryData['children']);

            $category = Category::create($categoryData);

            foreach ($children as $childData) {
                $childData['parent_id'] = $category->id;
                Category::create($childData);
            }
        }
    }
}
