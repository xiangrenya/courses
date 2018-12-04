import React from "react";
import Link from "next/link";
import Router, { withRouter } from "next/router";
import Layout from "../components/layout";

class Index extends React.Component {
  static getInitialProps() {
    console.log("getInitialProps");
    return {
      photos: new Array(8).fill(0).map((v, i) => i + 1)
    };
  }

  constructor(props) {
    super(props);
    this.dismiss = this.dismiss.bind(this);
  }
  

  showModal(e, id) {
    e.preventDefault();
    const href = `/?photoId=${id}`;
    const as = `/photo?id=${id}`;
    Router.push(href, as, { shallow: true });
  }

  dismiss(){
    this.props.router.push('/');
  }

  render() {
    const { photos } = this.props;
    const { query } = this.props.router;
    return (
      <Layout>
        <h1>Index Page</h1>
        <nav>
          <ul>
            <li>
              <Link href="/about" prefetch>
                <a>About</a>
              </Link>
            </li>
          </ul>
        </nav>
        <section>
          <h1>Link</h1>
          <div>
            {photos.map(id => (
              <Link href={{ pathname: "photo", query: { id } }} key={id}>
                <a>{id}</a>
              </Link>
            ))}
          </div>
        </section>
        <section>
          <h1>Router</h1>
          <div>
            {photos.map(id => (
              <a key={id} onClick={e => this.showModal(e, id)}>
                {id}
              </a>
            ))}
          </div>
        </section>
        {query.photoId && (
          <section ref={el => (this.mask = el)} onClick={this.dismiss}>
            <h1>Modal</h1>
            <p>{query.photoId}</p>
          </section>
        )}
        <style jsx>
          {`
            section a {
              margin-right: 20px;
              cursor: pointer;
            }
          `}
        </style>
      </Layout>
    );
  }
}

export default withRouter(Index);
