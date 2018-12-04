import React from "react";
import { withRouter } from "next/router";
import { timeout } from "../common/utils";
import Layout from "../components/layout";

class Photo extends React.Component {
  static async getInitialProps({ query }) {
    await timeout(500);
    return {
      id: query.id
    };
  }

  render() {
    return (
      <Layout>
        <div>{this.props.id}</div>
      </Layout>
    );
  }
}

export default withRouter(Photo);
