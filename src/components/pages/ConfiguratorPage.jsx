import React from "react";
import * as S from "./styled";

import { Configurator } from "../configurator";

export const ConfiguratorPage = () => {
  return (
    <main>
      <S.MainContainer>
        <Configurator />
      </S.MainContainer>
    </main>
  );
};
