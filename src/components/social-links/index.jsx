import React from "react";
import * as S from "./styled";

import { DrawImage } from "../draw-image";

export const SocialLinks = () => {
  return (
    <S.SocialLinks>
      <S.SocialLink>
        <a
          href="https://www.instagram.com/bohemian_cakes/"
          target="_blank"
          className="social-link"
        >
          <DrawImage
            className=""
            src="./pic/inst.png"
            height="40px"
            alt=""
            title="Instagram"
          />
        </a>
      </S.SocialLink>
    </S.SocialLinks>
  );
};
