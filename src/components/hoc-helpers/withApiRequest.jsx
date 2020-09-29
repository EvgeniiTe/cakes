import React from "react";

import { CakesServiceConsumer } from "../service-context";

export const withApiRequest = () => (Wrapped) => {
  return (props) => {
    return (
      <CakesServiceConsumer>
        {(serviceFunctions) => {
          return <Wrapped {...props} serviceFunctions={serviceFunctions} />;
        }}
      </CakesServiceConsumer>
    );
  };
};
