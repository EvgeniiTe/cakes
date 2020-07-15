import React from "react";

export const ParagraphsLineByLine = ({ data }) => {
  const dataMap = data.map((item) => {
    return <p>{item}</p>;
  });

  return dataMap;
};
