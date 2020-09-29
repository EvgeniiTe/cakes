import React from "react";

export const ParagraphsLineByLine = ({ data }) => {
  const dataMap = data.map((item, index) => {
    return <p key={`${index + item.length}`}>{item}</p>;
  });

  return dataMap;
};
