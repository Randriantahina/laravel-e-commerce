import api from './api';

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface CategoryProductsResponse {
  success: boolean;
  data: any[];
  category: any;
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

export interface CategoryFilters {
  min_price?: number;
  max_price?: number;
  brand?: string;
  min_rating?: number;
  sort_by?: 'created_at' | 'price' | 'rating' | 'name' | 'popularity';
  sort_order?: 'asc' | 'desc';
  per_page?: number;
  page?: number;
}

class CategoryService {
  async getCategories(): Promise<ApiResponse<any[]>> {
    const response = await api.get('/categories');
    return response.data;
  }

  async getCategory(id: string | number): Promise<ApiResponse<any>> {
    const response = await api.get(`/categories/${id}`);
    return response.data;
  }

  async getCategoryProducts(id: string | number, filters: CategoryFilters = {}): Promise<CategoryProductsResponse> {
    const response = await api.get(`/categories/${id}/products`, { params: filters });
    return response.data;
  }
}

export default new CategoryService();
