// import Slider from 'react-slick';

// const div = styled.div`
//   width: 100%;
// `;
// export default class SlideView extends React.Component {
//   render() {
//     const settings = {
//       dots: false,
//       infinite: false,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     return (
//       <div>
//         <h2> Single Item</h2>
//         <Slider {...settings}>
//           <div>
//             <img src={require('./images/chair.jpg')}/>
//           </div>
//           <div>
//           <img src={require('./images/hat.jpg')}/>
//           </div>
//           <div>
//           <img src={require('./images/headphones.jpg')}/>
//           </div>
//           <div>
//           <img src={require('./images/necklace.jpg')}/>
//           </div>
//           <div>
//           <img src={require('./images/pot.jpg')}/>
//           </div>
//           <div>
//           <img src={require('./images/toy.jpg')}/>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }

import React from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardLink,
    CardTitle,
    CardSubtitle,
    Button
} from "reactstrap";
import "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

export default class ProductCard extends React.Component {
    constructor(props) {
        super(props);
    }
    addToCart = e => {
        console.log('addProps', this.props)
        this.props.addItemToCart({
            name: this.props.name,
            price: this.props.price,
            description: this.props.description,
            image: this.props.item_img,
            quantity: 1
        })


    };

    render() {
        return (
            // <Col xs="6" sm="4" p="1" style={{ paddingTop: '1rem', paddingBottom: '1rem' }} key={index}>
            <div>
                {/* {this.props.name}
        {this.props.price}
        <img src={this.props.item_img} /> */}
                <Card
                    style={{
                        padding: "1rem",
                        margin: "1rem",
                        maxHeight: "600px",
                        minWidth: "200px",


                    }}
                >
                    <CardImg
                        top
                        width="100%"
                        src={this.props.item_img}
                        alt="Card image"
                    />
                    <CardBody min-width="500px">
                        <CardTitle>
                            <h4>{this.props.name}</h4>
                        </CardTitle>
                        <CardSubtitle>
                            <h5> {this.props.price}/CZK</h5>
                        </CardSubtitle>
                        <CardText>{this.props.description}</CardText>
                        <Button onClick={this.addToCart}>Buy</Button>
                        <div>
                            <CardLink to="#">More Info</CardLink>
                        </div>
                    </CardBody>
                </Card>
            </div>
        );
    }
}
