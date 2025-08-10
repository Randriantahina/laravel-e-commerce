import { useState, useEffect } from 'react';
import productService from '../services/productService';
import type { ProductFilters } from '../services/productService';

export const useProducts = (filters: ProductFilters = {}) => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [meta, setMeta] = useState<any>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await productService.getProducts(filters);
        setProducts(response.data);
        setMeta(response.meta);
      } catch (err: any) {
        setError(
          err.response?.data?.message ||
            'Erreur lors du chargement des produits'
        );
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [JSON.stringify(filters)]);

  return { products, loading, error, meta };
};

export const useFeaturedProducts = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await productService.getFeaturedProducts();
        setProducts(response.data);
      } catch (err: any) {
        setError(
          err.response?.data?.message ||
            'Erreur lors du chargement des produits vedettes'
        );
        console.error('Error fetching featured products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  return { products, loading, error };
};

export const useProduct = (id: string | number) => {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await productService.getProduct(id);
        setProduct(response.data);
      } catch (err: any) {
        setError(
          err.response?.data?.message || 'Erreur lors du chargement du produit'
        );
        console.error('Error fetching product:', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  return { product, loading, error };
};
