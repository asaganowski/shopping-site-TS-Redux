import { createAsyncThunk } from "@reduxjs/toolkit";
import {Product} from "./types"

export const getProducts = createAsyncThunk<Product[]>(
  "products/getProducts", 
  
  async () => {
    const response = await fetch(
        "https://fakestoreapi.com/products"
      );

      const data: Product[] = await response.json();
      
      return data;
  }
);

// I could have used RTK Query, but this time I wanted to practice createAsynkThunk