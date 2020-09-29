import React from "react";

import { DrawImage } from "../draw-image";

export const Logo = ({ height }) => {
  return <DrawImage src="./pic/logo.png" height={height} alt="logo" />;
};
