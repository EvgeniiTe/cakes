import React from "react";

export const ErrorIndicator = (props) => {
  const { error } = props;
  return <div>{error.toString()}</div>;
};
