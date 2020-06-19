import React from "react";
import { CreateDiv } from "../create-div";
import { headerElements } from "../header-footer-elements";
import * as S from "./styled";

export const HeaderTop = () => {
  const headerElementsMap = headerElements.map(
    ({ element, className, props }) => (
      <CreateDiv key={element} childEl={element(props)} className={className} />
    )
  );
  return <S.HeaderContainer>{headerElementsMap}</S.HeaderContainer>;
};
