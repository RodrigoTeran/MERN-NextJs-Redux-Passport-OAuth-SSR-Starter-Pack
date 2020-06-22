import React, { Component } from "react";
import Menubar from "./Menus/Menubar";
import BottomMenubar from "./Menus/BottomMenubar";
import { connect } from "react-redux";

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Menubar auth={this.props.auth} imgId={this.props.imgId}></Menubar>
        <div className="container topSpace">
          {this.props.children}
        </div>
        <BottomMenubar auth={this.props.auth} imgId={this.props.imgId}></BottomMenubar>
      </React.Fragment>
    );
  };
};
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    imgId: state.imgId,
  };
};
export default connect(mapStateToProps)(Layout);