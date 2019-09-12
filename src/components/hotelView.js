import React from "react";
import HotelViewHeader from "./header/hotelViewHeader";
import SideDrawer from "./sidedrawer/SideDrawer";
import Backdrop from "./backdrop/Backdrop";
import HotelImageView from "./HotelImageView";

class hotelView extends React.Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <HotelViewHeader drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{ margin: "70px" }}>
          <HotelImageView />
        </main>
      </div>
    );
  }
}

export default hotelView;
