import { ActionNames } from "../constants/action-names";
import { IProduct } from "../types";

export const setProducts = (products: IProduct[]) => {
  return {
    type: ActionNames.SET_PRODUCTS,
    payload: products,
  };
};

export const selecttProduct = (product: IProduct) => {
  return {
    type: ActionNames.SELECTED_PRODUCT,
    payload: product,
  };
};
