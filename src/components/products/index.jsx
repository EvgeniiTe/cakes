import React, { Component } from "react";

import { ProductsList } from "../products-list";
import { Product } from "../product";
import { getAllCakes } from "../../services/service";
import * as S from "./styled";

export class Products extends Component {
  state = {
    itemId: null,
    dataList: [],
  };

  componentDidMount() {
    this.getDataList();
  }

  getDataList() {
    getAllCakes().then((data) => {
      this.setState({ dataList: data });
    });
  }

  selectItem = (itemId) => {
    this.setState({ itemId });
  };

  render() {
    const { itemId, dataList } = this.state;

    return (
      <S.Products>
        <ProductsList data={dataList} selectItem={this.selectItem} />
        <Product itemId={itemId} />
      </S.Products>
    );
  }
}
