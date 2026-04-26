export type ProductItem = {
  ingredient: string;
};

export type Product = {
  id: number;
  name: string;
  price: string;
  description: ProductItem[];
  shortDescription: string;
  catalogImage: string;
  detailImage: string;
  category: "PICADAS TRADICIONALES" | "OTROS";
};
