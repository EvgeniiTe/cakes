import React, { Component } from "react";

import { getNavMain } from "../../services/service";
import { Nav, Ul, Li } from "./styled";

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
        <Li key={navMainWord}>
          <a href={navMainRef}>{navMainWord}</a>
        </Li>
      );
    });

    return (
      <Nav>
        <Ul>{navMainMap}</Ul>
      </Nav>
    );
  }
}
