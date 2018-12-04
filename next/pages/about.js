import React from "react";

export default class extends React.Component {
  static async getInitialProps({ req }) {
    return {
      userAgent: req ? req.headers["user-agent"] : navigator.userAgent
    };
  }

  render() {
    return (
      <div>
        <h1>About Page</h1>
        <p>{this.props.userAgent}</p>
      </div>
    );
  }
}
