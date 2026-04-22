export type Categories = {
  id: bigint;
  name: string;
  image: string;
};

export interface Manufacturer {
  name: string;
  origin: string;
  description: string;
  image_path: string;
}

export interface ProductLine {
  id: bigint;
  name: string;
  image_path: string;
}

export interface CategoryManufacturer {
  category_id: bigint;
  id: bigint;
  manufacturer_id: bigint;
  manufacturers: Manufacturer;
  product_lines: ProductLine[];
}

export interface Product {
  id: bigint;
  name: string;
  image_path: string;
}

export type CategoriesData = {
  id: bigint;
  name: string;
  image: string;
};