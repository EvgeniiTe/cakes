import React, { Component } from "react";
import { mainInfoFill } from "../../services/service";
import { PMap } from "../p-map";
import { CreateDiv } from "../create-div";
import { CreateHeading } from "../create-heading";
import * as S from "./styled";

export class MainInfo extends Component {
  state = { mainInfo: [] };

  componentDidMount() {
    this.getMainInfo();
  }

  getMainInfo() {
    mainInfoFill().then((data) => {
      this.setState({ mainInfo: data });
    });
  }

  render() {
    const { mainInfo } = this.state;

    const linkStory = () => {
      return <S.MyStoryLink href="#MyStory">Моя история</S.MyStoryLink>;
    };

    return (
      <S.MainInfo>
        <CreateHeading h="h1" text="Торты на заказ" />
        <PMap data={mainInfo} />
        <CreateDiv className="MyStoryLink" childEl={linkStory} />
      </S.MainInfo>
    );
  }
}
