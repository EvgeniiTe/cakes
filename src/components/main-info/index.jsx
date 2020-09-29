import React from "react";
import { ParagraphsLineByLine } from "../paragraphs-line-by-line";
import { CreateDiv } from "../create-div";
import { CreateHeading } from "../create-heading";
import * as S from "./styled";
import { withApiRequest } from "../hoc-helpers/withApiRequest";
import { withWebsiteContent } from "../hoc-helpers/withWebsiteContent";
import { compose } from "../../utils";

const MainInfoRender = (props) => {
  const { response } = props;

  const linkStory = () => {
    return <S.MyStoryLink href="#MyStory">Моя история</S.MyStoryLink>;
  };

  return (
    <S.MainInfo>
      <CreateHeading h="h1" text="Торты на заказ" />
      <ParagraphsLineByLine data={response} />
      <CreateDiv className="MyStoryLink" childEl={linkStory} />
    </S.MainInfo>
  );
};

export const MainInfo = compose(
  withApiRequest(),
  withWebsiteContent("getMainInfoFill")
)(MainInfoRender);
