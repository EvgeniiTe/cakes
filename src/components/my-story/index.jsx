import React, { Component } from "react";
import { storyInfoFill } from "../../services/service";
import { PMap } from "../p-map";
import { CreateHeading } from "../create-heading";
import * as S from "./styled";

export class MyStory extends Component {
  state = { storyInfo: [] };

  componentDidMount() {
    this.getStoryInfo();
  }

  getStoryInfo() {
    storyInfoFill().then((data) => {
      this.setState({ storyInfo: data });
    });
  }

  render() {
    const { storyInfo } = this.state;

    return (
      <S.Story>
        <CreateHeading h="h2" text="Моя история" />
        <PMap data={storyInfo} />
      </S.Story>
    );
  }
}
