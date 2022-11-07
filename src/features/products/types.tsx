export type Product = {
    id: number;
    title: string;
    price: number,
    description: string,
    image: string,
    category: string,
    cartQuantity: number
};

export type ProductsState = {
    status: "loading" | "rejected" | "success";
    
    list: Product[];
  };