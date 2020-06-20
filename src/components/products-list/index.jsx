import React from "react";

import * as S from "./styled";

import { DrawImage } from "../draw-image";

export const ProductsList = ({ data, selectItem }) => {
  const items = data.map((item) => {
    const { id, name, picture } = item;
    return (
      <S.Item key={name} onClick={() => selectItem(id)}>
        <DrawImage src={picture} width="180px" alt={name} />
        <S.ItemName>{name}</S.ItemName>
      </S.Item>
    );
  });

  return <S.Items>{items}</S.Items>;
};
