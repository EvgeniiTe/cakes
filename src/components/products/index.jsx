import React from "react";

import { ProductsList } from "../products-list";
import { Product } from "../product";
import * as S from "./styled";

export const Products = () => {
  return (
    <S.Products>
      <ProductsList />
      <Product />
    </S.Products>
  );
};
