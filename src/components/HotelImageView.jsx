import React from "react";
import img from "../images/hotel.png";
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col
} from "reactstrap";

const HotelImageView = props => {
  return (
    <Container>
      <Row>
        <Col xs="3" sm="3">
          <Card>
            <CardImg top src={img} alt="Card image cap" />
            <CardBody>
              <CardTitle>WELCOME TO</CardTitle>
              <CardSubtitle>Hotel Transylvania</CardSubtitle>
              <CardText>are you afraid of ghost..?</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
        <Col xs="3" sm="3">
          <Card>
            <CardImg top src={img} alt="Card image cap" />
            <CardBody>
              <CardTitle>WELCOME TO</CardTitle>
              <CardSubtitle>Hotel Transylvania</CardSubtitle>
              <CardText>are you afraid of ghost..?</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
        <Col xs="3" sm="3">
          <Card>
            <CardImg top src={img} alt="Card image cap" />
            <CardBody>
              <CardTitle>WELCOME TO</CardTitle>
              <CardSubtitle>Hotel Transylvania</CardSubtitle>
              <CardText>are you afraid of ghost..?</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
        <Col xs="3" sm="3">
          <Card>
            <CardImg top src={img} alt="Card image cap" />
            <CardBody>
              <CardTitle>WELCOME TO</CardTitle>
              <CardSubtitle>Hotel Transylvania</CardSubtitle>
              <CardText>are you afraid of ghost..?</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
        <Col xs="3" sm="3">
          <Card>
            <CardImg top src={img} alt="Card image cap" />
            <CardBody>
              <CardTitle>WELCOME TO</CardTitle>
              <CardSubtitle>Hotel Transylvania</CardSubtitle>
              <CardText>are you afraid of ghost..?</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HotelImageView;
