import React from "react";

import { Header } from "../header";
import { MainInfo } from "../main-info";
import { Products } from "../products";
import { MyStory } from "../my-story";
import { Footer } from "../footer";
import * as S from "./styled";

export const App = () => (
  <>
    <S.GlobalStyle />
    <Header />
    <main>
      <S.MainContainer>
        <MainInfo />
        <Products />
        <MyStory />
      </S.MainContainer>
    </main>
    <Footer />
  </>
);
