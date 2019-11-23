import React from "react";

import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

import {
    Card,
    Container,
    CardImg,
    CardText,
    CardBody,
    CardLink,
    CardTitle,
    CardSubtitle,
    Button,
    Col, 
    Row,
    CardDeck
} from "reactstrap";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';

// export default class Main extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         products: [

//         ]
//       }
//     }

//     render() {

//       return (
//         <>
//         <div>
//             {/* <Jumbotron fluid className="bg-transparent"> */}
//             <p> hello  </p>

//         </div>

//     </>
//     )}
// }
// pure Ricardo÷
{
    /* <div>
<p>{props.name}</p>
<img src={props.image} />


<p>{props.price}</p>
<p>{props.description}</p>
</div> */
}

const CartItem = props => {
    console.log("cartItem", props);
    const removeItem =() => {
        props.removeItemFromCart(props.name)
    }

    // const decreaseItem=()=>{
    //     props.decreaseItemInCart(props.name)
    // }

    // console.log("cartItem", props);
    return (
        <>
            <div>
            {/* <Container
                        className="w-10
                        fluid
                        mt-2
                        mb-2"
                        style={{
                            padding: "1em",
                            backgroundColor: "Blue",
                            textAlign: "center"
                        }}
                    > */}
               
               <CardDeck>
                 {/* <Row> */}
                 <Col sm="6">
                <Card
                    style={{
                        padding: "1rem", margin: "5rem",maxHeight: "800px", minWidth: "400px"}}>
                    <CardImg top width="100%" src={props.image} alt="Card image"/>
                    <CardBody min-width="400px">
                        <CardTitle> Selected item: </CardTitle>
                        <CardText> {props.name} </CardText>
                        <CardSubtitle> {props.price}CZK</CardSubtitle>
                        <CardSubtitle> {props.quantity}</CardSubtitle>
                        <CardSubtitle> {props.description} </CardSubtitle>
                        <Button>Clear Cart</Button>
                        <Button className="counter-button" onClick={removeItem}>Remove Item</Button>
                        {/* <button type="submit" onChange={clearCart}> Clear Cart </button> */}
                        {/* <Button class="counter-button" onclick={ handle  } */}
                        <Link to="/checkout">Proceed to Checkout</Link>
                    </CardBody>
                </Card>
                </Col>
                {/* </Row> */}
                </CardDeck>
            {/* </Container> */}
            </div>
        </>
    );
};

const Cart = props => {
    console.log("cart props", props);
    const [value, setValue] = React.useState(localStorage.getItem("cart"));
    // console.log(localStorage.getItem('cart'))
    // console.log('VALUE', value)
    //   const [clear, clearCart] = React.useState(
    //     localStorage.clear(''));
    const onChange = event => setValue(event.target.value);
    const localstorage_shoppingCart = JSON.parse(value);
    console.log(localstorage_shoppingCart);
    //   clearCart = () => {
    //         localStorage.removeItem('cart');
    //         this.setState({cart:[]});}

    let productCard = props.items.map((item, index) => {
        console.log("item", item);
        return (
            <CartItem
                key={`cartItem-${index}`}
                name={item.name}
                image={item.image}
                price={item.price}
                description={item.description}
                quantity={item.quantity}
                removeItemFromCart ={props.removeItemFromCart}
            />
        );
    });
    console.log("productCard", productCard);

    return <div>{productCard}</div>;



    {/* timms Image styling */}
                    {/* <div style={{
                                height: "100px",
                                width: "100%",
                                backgroundColor: "yellow",
                                backgroundImage: `url(\"${props.image}\")`,
                                backgroundPosition: "center"
                            }}
                        ></div> */}


    //   return (
    //       localstorage_shoppingCart.map(cart=>(
    //         <>
    //          <div>
    //          <Link to="/checkout/">Proceed to Checkout</Link>
    //                   <Button>Remove Item</Button>

    //         </div>
    //         <div>

    //           <Card>
    //               <CardBody>
    //               <CardTitle >You selected item: </CardTitle>
    //               <CardText> <p>{cart.name}</p> </CardText>
    //               <CardImg top width="100%" src={basket.item_img} alt="Card image"/>
    //               <CardImg top width="45%" src={basket.image} alt="Card image cap" />
    //               <CardSubtitle> <p>{basket.price}CZK</p></CardSubtitle>
    //               <input value={basket.quantity} type="text" onChange={onChange} />
    //               {/* <Button>Clear Cart</Button> */}
    //               {/* <button type="submit" onChange={clearCart}> Clear Cart </button> */}

    //               </CardBody>
    //             </Card>
    //           {/* <CardLink href="#">Proceed to Checkout</CardLink>
    //           <Button>Clear Cart</Button> */}
    //              </div>
    //         </>
    //       ))
    //   );
};
export default Cart;

// const list = [
//   {
//     id: 'a',
//     firstname: 'Robin',
//     lastname: 'Wieruch',
//     year: 1988,
//   },
//   {
//     id: 'b',
//     firstname: 'Dave',
//     lastname: 'Davidds',
//     year: 1990,
//   },
// ];
// const Cart = () => (
//   <ul>
//     {list.map(item => (
//       <li key={item.id}>
//         <div>{item.id}</div>
//         <div>{item.firstname}</div>
//         <div>{item.lastname}</div>
//         <div>{item.year}</div>
//       </li>
//     ))}
//   </ul>
// );
// export default Cart;

// import React from 'react';
// import { Link } from 'react-router-dom';
// export default class Cart extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { products: [], total: 0 }
//   }

//   componentDidMount() {
//     let cart = localStorage.getItem('cart');
//     if (!cart) return;
//     getCartProducts(cart).then((products) => {
//       let total = 0;
//       for (var i = 0; i < products.length; i++) {
//         total += products[i].price * products[i].qty;
//       }
//       this.setState({ products, total });
//       });
//   }

// //   removeFromCart = (product) => {
// //     let products = this.state.products.filter((item) => item.id !== product.id);
// //     let cart = JSON.parse(localStorage.getItem('cart'));
// //     delete cart[product.id.toString()];
// //     localStorage.setItem('cart', JSON.stringify(cart));
// //     let total = this.state.total - (product.qty * product.price)
// //     this.setState({products, total});
// //   }

//   clearCart = () => {
//     localStorage.removeItem('cart');
//     this.setState({products: []});
//   }

//   render() {
//     const { products, total } =  this.state;
//     return (
//       <div className=" container">
//           <Link to="/checkout">  <button className="btn btn-success float-right">Checkout</button></Link>
//             <button className="btn btn-danger float-right" onClick={this.clearCart}
//             style={{ marginRight: "10px" }}>Clear Cart</button><br/><br/><br/>

//       </div>
//     );
//   }
// }

// import React from 'react';
// import { Card, Container, Row, Col } from 'reactstrap';
// // import ProductCard from './ProductCard';
// import 'bootstrap/dist/css/bootstrap.css';
// import { Button } from 'reactstrap';
// // import Navigation from './Navigation';
// import { Fragment } from 'react';

// import { Link } from 'react-router-dom';
// import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

// export default class Checkout extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             products: [

//             ]
//         }
//     }

//     // componentDidMount = () => {
//     //     fetch(``)
//     //     .then(response => response.json())
//     //     .then(json_data => {
//     //         this.setState({
//     //             // movie_data: json_data,

//     //         })
//     //     })
//     // }

//     // handleSubmit = (event) => {
//     //     event.preventDefault();
//     //     // send POST data to an endpoint
//     //     fetch('http://www.laravel.test/api/review', {
//     //         method: 'POST',
//     //         headers: {
//     //             'Content-type': 'application/json'
//     //         },
//     //         body: JSON.stringify({
//     //             "movie_id": 489,
//     //             "user_id": 1,
//     //             "text": this.state.text,
//     //             "rating": 6
//     //         })
//     //     })
//     // }

//     // handleTextChange = (event) => {
//     //     this.setState({
//     //         text: event.target.value
//     //     })
//     // }

//     render() {

//         return (

//             <>
//                     <div>
//                         <h1> HELLO WORLD </h1>

//                         {/* <Container w-10 fluid mt-3 mb-3 style={{ padding: '2em', backgroundColor: '#7EA49C', textAlign:'center'}}>
//                             <Row>
//                                 <Col><h2><strong>About E-Market</strong></h2></Col>
//                             </Row>
//                             <Row>
//                                 <Col>
//                                 <h3>A one-of-a-kind community</h3>

//                                 </Col>
//                                 </Row>
//                         </Container>

//                         <Container>
//                             <Row>
//                             {productCards}
//                             </Row>
//                         <Button className="bg-success">
//                             <a href='#'>PRoceed to buy</a>
//                         </Button> */}

//                         {/* </Container> */}
//                         <Link to="/main">main</Link>
//                         <Button type="submit" value="Submit" color="danger">Submit</Button>

//                         {/* <form action="" method="post" onSubmit={ this.handleSubmit }>

//                             <input type="text" name="text" value={ this.state.text } onChange={ this.handleTextChange } />

//                             <input type="submit" value="Submit" />
//                         </form> */}

//                     </div>
//             </>

//         )
//     }
// }
