<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('cart_items', function (Blueprint $table) {
            $table->id();
            $table->string('product_name');
            $table->decimal('price', 8, 2);
            $table->string('image'); 
            $table->integer('quantity')->default(1);
            $table->timestamps();
        });
    }

    public function down(): void {
        Schema::dropIfExists('cart_items');
    }
};
