import React from "react";
import { withApiRequest } from "../hoc-helpers/withApiRequest";


import * as S from "./styled";


const Temp = (props) => {
  const { response } = props;

  const navMainMap = response.map(({ navMainWord, navMainRef }) => {
    return (
        <S.Li key={navMainWord}>
          <a href={navMainRef}>{navMainWord}</a>
        </S.Li>
      );
    });

  return (
<S.Nav>
        <S.Ul>{navMainMap}</S.Ul>
      </S.Nav>
)
};

export const HeaderNav = withApiRequest("getNavMain", Temp);
