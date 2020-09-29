import React from "react";

export const DrawImage = ({ styleName, src, height, width, alt, title }) => (
  <img
    style={styleName}
    src={src}
    height={height}
    width={width}
    alt={alt}
    title={title}
  />
);
