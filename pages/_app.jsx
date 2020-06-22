import "../styles/index.css";
import "../styles/bootstrap.min.css";
import App from "next/app";
import React from "react";
import { Provider } from "react-redux";
import store from "../store/store";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps}></Component>
      </Provider>
    );
  };
};
export default MyApp;
