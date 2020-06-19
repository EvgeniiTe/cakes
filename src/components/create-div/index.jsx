import React from "react";
import * as S from "./styled";

export const CreateDiv = ({ className, childEl }) => (
  <S.CreateDiv className={className}>
    {typeof childEl === "function" ? childEl({}) : childEl}
  </S.CreateDiv>
);
