import React, { Component } from "react";

export const withWebsiteContent = (functionName) => (Wrapped) => {
  return class extends Component {
    state = { data: [] };

    componentDidMount() {
      this.getInfo();
    }

    getInfo() {
      const { serviceFunctions } = this.props;
      const getFunction = serviceFunctions[`${functionName}`];

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
