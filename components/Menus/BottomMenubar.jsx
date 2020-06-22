import React, { Component } from "react";
import { APP_NAME } from "../../config";
import $ from "jquery";
import { findDOMNode } from "react-dom";

// ICONS
import HomeIcon from "@material-ui/icons/Home";
import LogoutIcon from "@material-ui/icons/MeetingRoom";
import NotificationsIcon from '@material-ui/icons/Notifications';

// Component
class BottomMenubar extends Component {
  auth() {  // To check if the user is auth or not
    const authorization = this.props.auth === false ?
      (
        <React.Fragment>
          <li className="nav-item">
            <a title="Iniciar Sesión" onClick={this.closeAnimation} className="cool-link nav-link bottom-nav-link" href="/auth/google">
              Iniciar Sesión
          </a>
          </li>
          <li className="nav-item">
            <a title="Inicio" onClick={this.closeAnimation} className="cool-link bottom-nav-link nav-link" href="/">
              <HomeIcon></HomeIcon>
            </a>
          </li>
        </React.Fragment>
      ) :
      (
        <React.Fragment>
          <li className="nav-item">
            <a title="Información" className="cool-link nav-link bottom-nav-link" href="/about" onClick={this.closeAnimation}>
              Información
            </a>
          </li>
          <li className="nav-item">
            <a title="Mapa en tiempo real" className="cool-link nav-link bottom-nav-link" href="/" onClick={this.closeAnimation}>
              Mapa en tiempo real
            </a>
          </li>
          <li className="nav-item">
            <a title="Cerrar Sesión" className="cool-link nav-link bottom-nav-link" href="/auth/logout" onClick={this.closeAnimation}>
              <LogoutIcon></LogoutIcon>
            </a>
          </li>
          <li className="nav-item">
            <a title="Notificaciones" className="cool-link nav-link bottom-nav-link" href="/" onClick={this.closeAnimation}>
              <NotificationsIcon></NotificationsIcon>
            </a>
          </li>
          <li className="nav-item">
            <a title="Perfil" className="cool-link nav-link bottom-nav-link" href="/profile" onClick={this.closeAnimation}>
              <img src={`${this.props.imgId}`} alt="Perfil" title="Perfil" className="rounded-circle img-fluid" style={{
                width: "25px"
              }}></img>
            </a>
          </li>
        </React.Fragment>
      );
    return authorization;
  };
  animate = () => {	// Close and open Menu
    const links = findDOMNode(this.refs.links);
    if ($(links).hasClass("open")) {
      $(links).removeClass("open");
    } else {
      $(links).addClass("open");
    };
  };
  closeAnimation = () => {	// Close Menu when link is clicked
    const links = findDOMNode(this.refs.links);
    $(links).removeClass("open");
  };
  render() {
    return (
      <div className="footer-nav">
        <nav className="navbar navbar-expand-lg navbar-dark fixed-bottom py-3">
          <div className="container-fluid">
            <a title={`${APP_NAME}`} className="cool-link nav-name" href="/">{APP_NAME}</a>
            <div className="hamburger" title="Menu" onClick={this.animate}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </nav>
        <ul className="navbar-nav nav-links" ref="links">
          <li className="nav-item">
            <a title="Se perdió mi perrito" onClick={this.closeAnimation} className="cool-link bottom-nav-link nav-link" href="/">
              Se perdió mi perrito
              </a>
          </li>
          <li className="nav-item">
            <a title="Encontré a un perrito" onClick={this.closeAnimation} className="cool-link bottom-nav-link nav-link" href="/">
              Encontré a un perrito
              </a>
          </li>
          {this.auth()}
        </ul>
      </div>
    );
  };
};
export default BottomMenubar;