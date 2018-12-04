import React from "react";
import { withRouter } from "next/router";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.onKeydown = this.onKeydown.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.onKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  }
  
  onKeydown(e) {
    // backspace key
    if (e.keyCode === 8) {
      this.props.router.back();
    }
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

export default withRouter(Layout);
