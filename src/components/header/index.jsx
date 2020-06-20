import React from "react";

import * as S from "./styled";

import { HeaderTop } from "../header-top";
import { HeaderNav } from "../header-nav";

export const Header = () => (
  <S.Header>
    <HeaderTop />
    <HeaderNav />
  </S.Header>
);
