import React, { Component } from "react";
import { APP_NAME } from "../../config";

// ICONS
import HomeIcon from "@material-ui/icons/Home";
import LogoutIcon from "@material-ui/icons/MeetingRoom";
import NotificationsIcon from '@material-ui/icons/Notifications';

class Menubar extends Component {
  getContinueLeftBar() {
    const auth = this.props.auth === false ? (
      <React.Fragment></React.Fragment>
    ) : (
        <React.Fragment>
          <li className="nav-item mr-3">
            <a title="Información" className="cool-link nav-link" href="/about">
              Información
            </a>
          </li>
          <li className="nav-item mr-3">
            <a title="Mapa en tiempo real" className="cool-link nav-link" href="/">
              Mapa en tiempo real
            </a>
          </li>
        </React.Fragment>
      );
    return auth;
  };
  getRightBar() {
    const auth = this.props.auth === false ? (
      <React.Fragment>
        <li className="nav-item mr-3">
          <a title="Iniciar Sesión" className="cool-link nav-link" href="/auth/google">
            Iniciar Sesión
          </a>
        </li>
        <li className="nav-item mr-3">
          <a title="Inicio" className="cool-link nav-link" href="/">
            <HomeIcon></HomeIcon>
          </a>
        </li>
      </React.Fragment>
    ) : (
        <React.Fragment>
          <li className="nav-item mr-3">
            <a title="Cerrar Sesión" className="cool-link nav-link" href="/auth/logout">
              <LogoutIcon></LogoutIcon>
            </a>
          </li>
          <li className="nav-item mr-3">
            <a title="Notificaciones" className="cool-link nav-link" href="/">
              <NotificationsIcon></NotificationsIcon>
            </a>
          </li>
          <li className="nav-item mr-3">
            <a title="Perfil" className="cool-link nav-link" href="/profile">
              <img src={`${this.props.imgId}`} alt="Perfil" title="Perfil" className="rounded-circle img-fluid" style={{
                width: "25px"
              }}></img>
            </a>
          </li>
        </React.Fragment>
      );
    return auth;
  };
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top top-nav">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a title={`${APP_NAME}`} className="cool-link nav-name" href="/">{APP_NAME}</a>
              </li>
            </ul>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav  pr-5 nav-links">
                <li className="nav-item mx-3">
                  <a title="Se perdió mi perrito" className="cool-link nav-link" href="/">
                    Se perdió mi perrito
                  </a>
                </li>
                <li className="nav-item mr-3">
                  <a title="Encontré a un perrito" className="cool-link nav-link" href="/">
                    Encontré a un perrito
                  </a>
                </li>
                {this.getContinueLeftBar()}
              </ul>
              <ul className="navbar-nav ml-auto pr-5 nav-links">
                {this.getRightBar()}
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  };
};
export default Menubar;