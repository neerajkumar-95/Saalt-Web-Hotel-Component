import React from "react";
import "./hotelViewHeader.css";
import DrawerToggleButton from "../sidedrawer/DrawerToggleButton";

const hotelViewHeader = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar_logo">
        <a href="/">LOGO</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">some link</a>
          </li>
          <li>
            <a href="/">some link</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default hotelViewHeader;
