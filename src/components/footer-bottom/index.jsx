import React from "react";
import { CreateDiv } from "../create-div";
import { footerElements } from "../header-footer-elements";
import * as S from "../footer/styled";

export const FooterBottom = () => {
  const footerElementsMap = footerElements.map(
    ({ element, className, props }) => (
      <CreateDiv key={element} childEl={element(props)} className={className} />
    )
  );

  return <S.FooterContainer>{footerElementsMap}</S.FooterContainer>;
};
