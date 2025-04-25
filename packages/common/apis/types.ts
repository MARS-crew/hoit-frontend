// API 응답 기본 구조
export interface ApiResponse<T = any> {
  data: T;
  status: number;
  message: string;
  success: boolean;
}

// 페이지네이션 정보
export interface PaginationMeta {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalCount: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

// 페이지네이션된 API 응답
export interface PaginatedResponse<T = any> extends ApiResponse {
  data: {
    items: T[];
    meta: PaginationMeta;
  };
}

// 사용자 타입
export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

// 상품 타입
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
} 