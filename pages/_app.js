import App, { Container } from "next/app";
import Head from "next/head";
import React from "react";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";

import "../styles.scss";

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <>
        <Head>
          <title>Hanna Choi's Portfolio</title>
        </Head>
        <Container>
          <Provider store={reduxStore}>
            <Component {...pageProps} />
          </Provider>
        </Container>
      </>
    );
  }
}

export default withReduxStore(MyApp);
