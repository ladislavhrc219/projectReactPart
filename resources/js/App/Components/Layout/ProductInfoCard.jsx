import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle, Button, Col, Row } from 'reactstrap';
import 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class ProductInfoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: [
        {
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime beatae magnam unde"
        },
        {
          text: "Lorem neque. Magnam deserunt quo, repellat sed error aperiam inventore ea"
        },
        {
          text: "ut excepturi praesentium debitis eligendi necessitatibus repellat sed error aperiam inventore ea"
        }
      ]
    }
  }
  render () {
    return (
      <div>
        <Card>
          <CardBody>
            <CardText><p>{this.props.productInfo.text}</p></CardText>
          </CardBody>
        </Card>
      </div>
    );
  };
}

