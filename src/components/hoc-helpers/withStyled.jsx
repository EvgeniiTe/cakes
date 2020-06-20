import React from "react";

export const withStyle = (Styled, Wrapped) => {
  return (props) => {
    return (
      <Styled>
        <Wrapped {...props} />
      </Styled>
    );
  };
};
