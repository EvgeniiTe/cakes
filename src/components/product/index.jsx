import React from "react";

import { connect } from "react-redux";
import * as S from "./styled";

import { DrawImage } from "../draw-image";
import { Loader } from "../loader";
import { ErrorIndicator } from "../error-indicator";
import { withApiRequest } from "../hoc-helpers/withApiRequest";
import { compose } from "../../utils";

const ProductImg = { marginLeft: "auto" };

const ProductRender = ({ selectedItem: { name, description, picture } }) => {
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
};

export const ProductContainer = (props) => {
  const { selectedItem, loading, error } = props;

  if (selectedItem === null && loading === false && error === null) {
    return null;
  }

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorIndicator error={error} />;
  }

  return <ProductRender selectedItem={selectedItem} />;
};

const mapStateToProps = ({ productSelected }) => {
  const { selectedItem, loading, error } = productSelected;
  return { selectedItem, loading, error };
};

export const Product = compose(
  withApiRequest(),
  connect(mapStateToProps)
)(ProductContainer);
