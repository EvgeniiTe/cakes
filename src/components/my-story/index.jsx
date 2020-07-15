import React from "react";
import { ParagraphsLineByLine } from "../paragraphs-line-by-line";
import { CreateHeading } from "../create-heading";
import * as S from "./styled";
import { withApiRequest } from "../hoc-helpers/withApiRequest";

const Temp = (props) => {
  const { response } = props;

  return (
<S.Story>
        <CreateHeading h="h2" text="Моя история" />
        <ParagraphsLineByLine data={response} />
      </S.Story>
  );
};


export const MyStory = withApiRequest("storyInfoFill", Temp);

