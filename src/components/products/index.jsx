import React, { Component } from "react";

import { ProductsList } from "../products-list";
import { Product } from "../product";
import * as S from "./styled";
import { withApiRequest } from "../hoc-helpers/withApiRequest";

class Temp extends Component {
  state = { itemId: null };

  selectItem = (itemId) => {
    this.setState({ itemId });
  };

  render() {
    const { itemId } = this.state;
    const { response } = this.props;

    return (
      <S.Products>
        <ProductsList data={response} selectItem={this.selectItem} />
        <Product itemId={itemId} />
      </S.Products>
    );
  }
}

export const Products = withApiRequest("getAllCakes", Temp);
