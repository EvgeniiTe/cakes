import React from "react";
import { Link } from "react-router-dom";
import { withApiRequest } from "../hoc-helpers/withApiRequest";
import { withWebsiteContent } from "../hoc-helpers/withWebsiteContent";
import { compose } from "../../utils";

import * as S from "./styled";

const HeaderNavRender = (props) => {
  const { response } = props;

  const navMainMap = response.map(({ navMainWord, navMainRef }) => {
    return (
      <S.Li key={navMainWord}>
        <Link to={navMainRef}>{navMainWord}</Link>
      </S.Li>
    );
  });

  return (
    <S.Nav>
      <S.Ul>{navMainMap}</S.Ul>
    </S.Nav>
  );
};

export const HeaderNav = compose(
  withApiRequest(),
  withWebsiteContent("getNavMain")
)(HeaderNavRender);
