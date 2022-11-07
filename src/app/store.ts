import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productsReducer from "../features/products/productsSlices";
import cartReducer from "../features/cart/cartSlice"
import { 
  TypedUseSelectorHook, 
  useSelector 
} from "react-redux";


export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<
  RootState
> = useSelector;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
