import React, { Component } from "react";

import { getNavMain } from "../../services/service";
import * as S from "./styled";

export class HeaderNav extends Component {
  state = { navMain: [] };

  componentDidMount() {
    this.getNavInfo();
  }

  getNavInfo() {
    getNavMain().then((data) => {
      this.setState({ navMain: data });
    });
  }

  render() {
    const { navMain } = this.state;

    const navMainMap = navMain.map(({ navMainWord, navMainRef }) => {
      return (
        <S.Li key={navMainWord}>
          <a href={navMainRef}>{navMainWord}</a>
        </S.Li>
      );
    });

    return (
      <S.Nav>
        <S.Ul>{navMainMap}</S.Ul>
      </S.Nav>
    );
  }
}
