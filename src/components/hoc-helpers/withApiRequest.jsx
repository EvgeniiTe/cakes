import React, { Component } from "react";
import {
  getAllCakes,
  getNavMain,
  mainInfoFill,
  storyInfoFill,
} from "../../services/service";

export const withApiRequest = (getData, Wrapped) => {
  return class extends Component {
    state = { data: [] };

    // componentDidUpdate(prevProps) {
    //   if (this.props.getData !== prevProps.getData) {
    //     this.update();
    //   }
    // }

    getFunctions = {
      getAllCakes,
      getNavMain,
      mainInfoFill,
      storyInfoFill,
    };

    componentDidMount() {
      this.getInfo();
    }

    getInfo() {
      const getFunction = this.getFunctions[`${getData}`];

      getFunction().then((data) => {
        this.setState({ data });
      });
    }

    render() {
      const { data } = this.state;

      return <Wrapped response={data} />;
    }
  };
};
