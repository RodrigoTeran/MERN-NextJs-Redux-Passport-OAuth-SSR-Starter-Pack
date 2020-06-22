import React, { Component } from "react";
import Head from "next/head";
import { connect } from "react-redux";
import Layout from "../components/Layout";

class Index extends Component {
  static async getInitialProps(ctx) {
    return {
      data: ctx.query
    };
  };
  componentDidMount() {
    this.props.updateUser(this.props.data);
  };
  auth() {
    const userName = this.props.auth === false ? (
      <React.Fragment>
        <li>
          No se encontró usuario... Inicia Sesión
        </li>
      </React.Fragment>
    ) :
      (
        <React.Fragment>
          <li>
            Usuario: {this.props.username}
          </li>
        </React.Fragment>
      );
    return userName;
  };
  render() {
    return (
      <React.Fragment>
        <Head>
          <title>Pagina Principal</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="Página principal de la Aplicación" />
        </Head>
        <Layout>
          <div className="d-flex justify-content-center">
            <h1>
              Bienvenido, esta es la página principal!
            </h1>
          </div>
          <div className="d-flex justify-content-center">
            <ul>
              {this.auth()}
            </ul>
          </div>
        </Layout>
      </React.Fragment>
    );
  };
};
const mapStateToProps = (state) => {
  return {
    username: state.username,
    auth: state.auth
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (data) => {
      dispatch({
        type: "UPDATE_USER",
        auth: data.auth,
        username: data.username,
        imgId: data.imgId
      });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Index);