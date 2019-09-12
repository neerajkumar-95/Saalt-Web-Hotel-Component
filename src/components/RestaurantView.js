import React from "react";
import ImageView from "./restaurantImageView";
import { Container, Row, Col } from "reactstrap";

class RestaurantView extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm="3">
            <ImageView />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RestaurantView;
