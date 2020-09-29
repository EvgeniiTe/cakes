import React from "react";
import * as S from "./styled";

import { MainInfo } from "../main-info";
import { Products } from "../products";
import { MyStory } from "../my-story";

export const HomePage = () => {
  return (
    <main>
      <S.MainContainer>
        <MainInfo />
        <Products />
        <MyStory />
      </S.MainContainer>
    </main>
  );
};
