import api from './api';

export interface ProductFilters {
  search?: string;
  category?: string;
  brand?: string;
  min_price?: number;
  max_price?: number;
  min_rating?: number;
  featured?: boolean;
  sort_by?: 'created_at' | 'price' | 'rating' | 'name' | 'popularity';
  sort_order?: 'asc' | 'desc';
  per_page?: number;
  page?: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  meta: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number;
    to: number;
  };
  links: {
    first: string;
    last: string;
    prev?: string;
    next?: string;
  };
}

class ProductService {
  async getProducts(filters: ProductFilters = {}): Promise<PaginatedResponse<any>> {
    const response = await api.get('/products', { params: filters });
    return response.data;
  }

  async getProduct(id: string | number): Promise<ApiResponse<any>> {
    const response = await api.get(`/products/${id}`);
    return response.data;
  }

  async getFeaturedProducts(): Promise<ApiResponse<any[]>> {
    const response = await api.get('/products/featured');
    return response.data;
  }

  async getRelatedProducts(id: string | number): Promise<ApiResponse<any[]>> {
    const response = await api.get(`/products/${id}/related`);
    return response.data;
  }

  async searchProducts(query: string, filters: Omit<ProductFilters, 'search'> = {}): Promise<PaginatedResponse<any>> {
    return this.getProducts({ ...filters, search: query });
  }
}

export default new ProductService();
