# 🚀 API Documentation - ECommerce Backend

## 📋 Vue d'ensemble

Cette API REST Laravel fournit tous les endpoints nécessaires pour faire fonctionner le frontend e-commerce. Elle utilise JWT pour l'authentification et PostgreSQL comme base de données.

## 🔧 Configuration

### Serveur de développement
```bash
cd server
php artisan serve --host=0.0.0.0 --port=8000
```

### Base URL
```
http://localhost:8000/api/v1
```

## 🔐 Authentification

L'API utilise JWT (JSON Web Tokens) pour l'authentification. Les tokens doivent être inclus dans l'en-tête Authorization :

```
Authorization: Bearer {token}
```

### Endpoints d'authentification

#### POST `/auth/register`
Inscription d'un nouvel utilisateur.

**Body:**
```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john@example.com",
  "password": "password123",
  "password_confirmation": "password123",
  "phone": "0123456789"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {...},
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
    "token_type": "bearer",
    "expires_in": 3600
  }
}
```

#### POST `/auth/login`
Connexion utilisateur.

**Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

#### GET `/auth/me`
Récupérer les informations de l'utilisateur connecté.
*Requiert l'authentification*

#### POST `/auth/logout`
Déconnexion utilisateur.
*Requiert l'authentification*

#### POST `/auth/refresh`
Renouveler le token JWT.
*Requiert l'authentification*

## 🛍️ Produits

### GET `/products`
Récupérer la liste des produits avec pagination et filtres.

**Paramètres de requête:**
- `search` (string) - Recherche dans le nom, description, marque
- `category` (int) - ID de la catégorie
- `brand` (string) - Nom de la marque
- `min_price` (float) - Prix minimum
- `max_price` (float) - Prix maximum
- `min_rating` (float) - Note minimum
- `featured` (boolean) - Produits vedettes uniquement
- `sort_by` (string) - `created_at`, `price`, `rating`, `name`, `popularity`
- `sort_order` (string) - `asc`, `desc`
- `per_page` (int) - Nombre d'éléments par page (max 50)
- `page` (int) - Numéro de page

**Response:**
```json
{
  "success": true,
  "data": [...],
  "meta": {
    "current_page": 1,
    "last_page": 5,
    "per_page": 12,
    "total": 60,
    "from": 1,
    "to": 12
  },
  "links": {
    "first": "http://localhost:8000/api/v1/products?page=1",
    "last": "http://localhost:8000/api/v1/products?page=5",
    "prev": null,
    "next": "http://localhost:8000/api/v1/products?page=2"
  }
}
```

### GET `/products/featured`
Récupérer les produits vedettes.

### GET `/products/{id}`
Récupérer un produit spécifique par ID ou slug.

### GET `/products/{id}/related`
Récupérer les produits similaires.

## 📂 Catégories

### GET `/categories`
Récupérer toutes les catégories avec leur hiérarchie.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Électronique",
      "slug": "electronique",
      "description": "Smartphones, ordinateurs, gadgets...",
      "image": "https://...",
      "children": [
        {
          "id": 2,
          "name": "Smartphones",
          "slug": "smartphones",
          ...
        }
      ]
    }
  ]
}
```

### GET `/categories/{id}`
Récupérer une catégorie spécifique par ID ou slug.

### GET `/categories/{id}/products`
Récupérer les produits d'une catégorie avec pagination et filtres.

**Paramètres de requête:** (mêmes que `/products` sauf `category`)

## 📊 Structure des données

### Produit
```json
{
  "id": 1,
  "name": "iPhone 15 Pro Max 256GB",
  "slug": "iphone-15-pro-max-256gb",
  "description": "Description complète...",
  "short_description": "Description courte...",
  "sku": "IPH15PM-256-TN",
  "price": "1229.00",
  "original_price": "1399.00",
  "stock_quantity": 15,
  "in_stock": true,
  "status": "active",
  "images": ["https://...", "https://..."],
  "features": ["Écran 6,7 pouces", "Puce A17 Pro"],
  "brand": "Apple",
  "rating": "4.80",
  "reviews_count": 324,
  "is_featured": true,
  "categories": [...],
  "created_at": "2025-08-10T08:20:03.000000Z",
  "updated_at": "2025-08-10T08:20:03.000000Z"
}
```

### Catégorie
```json
{
  "id": 1,
  "name": "Électronique",
  "slug": "electronique",
  "description": "Smartphones, ordinateurs...",
  "image": "https://...",
  "parent_id": null,
  "is_active": true,
  "sort_order": 1,
  "children": [...],
  "parent": null
}
```

### Utilisateur
```json
{
  "id": 1,
  "name": "John Doe",
  "first_name": "John",
  "last_name": "Doe",
  "email": "john@example.com",
  "phone": "0123456789",
  "is_active": true,
  "created_at": "2025-08-10T08:20:03.000000Z"
}
```

## 🔍 Exemples d'utilisation

### Rechercher des produits Apple
```bash
curl "http://localhost:8000/api/v1/products?search=Apple&sort_by=price&sort_order=asc"
```

### Produits d'une catégorie avec prix maximum
```bash
curl "http://localhost:8000/api/v1/categories/1/products?max_price=1000"
```

### Connexion utilisateur
```bash
curl -X POST "http://localhost:8000/api/v1/auth/login" \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password"}'
```

## ⚠️ Codes d'erreur

- `200` - Succès
- `201` - Créé avec succès
- `400` - Requête invalide
- `401` - Non authentifié
- `403` - Accès interdit
- `404` - Ressource non trouvée
- `422` - Erreurs de validation
- `500` - Erreur serveur

## 🔒 Sécurité

- Toutes les données sont validées côté serveur
- Les mots de passe sont hachés avec bcrypt
- Protection CSRF activée
- CORS configuré pour le frontend
- Tokens JWT avec expiration

## 🚀 Prochaines fonctionnalités

- [ ] Gestion du panier (sessions/base de données)
- [ ] Système de commandes complet
- [ ] Gestion des avis produits
- [ ] Liste de souhaits
- [ ] Notifications push
- [ ] Système de coupons/réductions
- [ ] Gestion des stocks en temps réel
- [ ] API d'administration complète
