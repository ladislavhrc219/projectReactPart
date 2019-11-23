import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Container, Col } from 'reactstrap';
import { Carousel } from 'react-responsive-carousel';
import "./carousel.css";
// import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';

export default class CarouselContainer extends React.Component {

  render() {
    return (
      // <Container>
      //   <Col>


          <Carousel className="h-3">
            <div className="product-image">
              <img src='/images/hat.jpg' alt="hat"/>
              <p className="legend">Hat</p>
            </div>
            <div className="product-image">
              <img src='/images/toy.jpg' alt="toy"/>
              <p className="legend">Toy</p>
            </div>
            <div className="product-image" >
              <img src='/images/pot.jpg' alt="pot"/>
              <p className="legend">Pot</p>
            </div>
            {/* { images.map(({id, src, title, description}) => <img key={id} src={src} title={title} alt={description} />)} */}
          </Carousel>
    //     </Col>
    //   </Container>
    );
  }
}

// Don't forget to include the css in your page
// Using webpack
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
