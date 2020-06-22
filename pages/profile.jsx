import React, { Component } from "react";
import Head from "next/head";
import { connect } from "react-redux";
import Layout from "../components/Layout";

class Profile extends Component {
  static async getInitialProps(ctx) {
    return {
      data: ctx.query
    };
  };
  componentDidMount() {
    this.props.updateUser(this.props.data);
  };
  render() {
    return (
      <React.Fragment>
        <Head>
          <title>Perfil</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="Página de perfil" />
        </Head>
        <Layout>
          <div className="d-flex justify-content-center">
            <h1>
              Perfil
            </h1>
          </div>
          <div className="d-flex justify-content-center">
            Bienvenido, {this.props.username}
          </div>
        </Layout>
      </React.Fragment>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    username: state.username
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
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
