import React, { Component } from "react";

import * as S from "./styled";

import { getCake } from "../../services/service";
import { DrawImage } from "../draw-image";

const ProductImg = { marginLeft: "auto" };

export class Product extends Component {
  state = { selectedItem: null };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId } = this.props;

    if (typeof itemId !== "number") {
      return;
    }

    getCake(itemId).then((item) => {
      this.setState({ selectedItem: item });
    });
  }

  render() {
    const { selectedItem } = this.state;

    if (!selectedItem) {
      return null;
    }

    const { name, description, picture } = selectedItem;

    return (
      <S.Product>
        <S.ProductContainer>
          <S.ProductName>{name}</S.ProductName>
          <S.ProductInfo>{description}</S.ProductInfo>
        </S.ProductContainer>
        <DrawImage
          styleName={ProductImg}
          src={picture}
          width="600px"
          alt={name}
        />
      </S.Product>
    );
  }
}
