export interface ProductItems {
  id: string;
  image: string;
  title: string;
  price: number;
  prevPrice?: number;
  newest: boolean;
  bestSeller: boolean;
  featured: boolean;
  trending: boolean;
  category: string;
  rating: number;
}

export interface TopCategoriesItems {
  id: string;
  image: string;
  category: string;
  total: string;
}
