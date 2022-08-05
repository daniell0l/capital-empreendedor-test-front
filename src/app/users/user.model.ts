
export interface User {
  name: string;
  email: string;
  isActive: boolean;
  phone: string;
  revenue: number;
  agreedTerms: boolean;
}

export interface ResponseUsers {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}
