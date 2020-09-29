import { updateProductsList } from "./updateProductsList";
import { updateProduct } from "./updateProduct";

export const reducer = (state, action) => {
  return {
    productsList: updateProductsList(state, action),
    productSelected: updateProduct(state, action),
  };
};
