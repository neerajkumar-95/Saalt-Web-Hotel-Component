import React from "react";
import img from "../images/hotel.png";
import { Media } from "reactstrap";

class restaurantImageView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantImage: "",
      restaurantName: "",
      restaurantDescription: ""
    };
  }
  render() {
    return (
      <div>
        <div>
          <Media>
            <Media left href="#">
              <Media
                style={{ maxWidth: "128px" }}
                object
                src={img}
                alt="Generic placeholder image"
              />
            </Media>
            <Media body style={{ marginTop: "15px" }}>
              <Media heading>Media heading</Media>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
              in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </Media>
          </Media>
        </div>
      </div>
    );
  }
}

export default restaurantImageView;
