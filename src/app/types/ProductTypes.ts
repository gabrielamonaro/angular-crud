interface Product {
  id: string;
  image: string;
  name: string;
  price: number;
  rating: number;
}

interface ProductApiReturn {
  items: Product[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}

interface CreateProduct {
  image: string;
  name: string;
  price: number;
  rating: number;
}
