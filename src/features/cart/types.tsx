import { Product } from "../products/types";

export type CartState = {
    cartItems: Product[],
    totalQuantity: number,
    totalAmount: number,
};
  
