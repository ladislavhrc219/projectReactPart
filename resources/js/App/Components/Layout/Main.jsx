import React from "react";
// import { Jumbotron } from 'reactstrap';
import { Card, Container, Row, Col } from "reactstrap";
import ProductCard from "./ProductCard";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "reactstrap";
import Carousel from "./Carousel";

// import ProductInfoCard from './ProductInfoCard';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: null,
            all_item: [
                // {
                //   name: 'Chair',
                //   price: '200',
                //   description: 'Plastic, yellow, black',
                //   image: '/images/chair.jpg'
                // },
                // {
                //   name: 'Hat',
                //   price: '200',
                //   description: 'Cotton blue',
                //   image: '/images/hat.jpg'
                // },
                // {
                //   name: 'Pot',
                //   price: '200',
                //   description: 'metal silver',
                //   image: '/images/pot.jpg'
                // },
                // {
                //   name: 'toy',
                //   price: '200',
                //   description: 'Plush yellow',
                //   image: '/images/toy.jpg'
                // },
                // {
                //   name: 'headphones',
                //   price: '500',
                //   description: 'Plastic black',
                //   image: '/images/headphones.jpg'
                // },
                // {
                //   name: 'necklace',
                //   price: '2000',
                //   description: 'Silver white',
                //   image: '/images/necklace.jpg'
                // },
                // {
                //   name: 'chair',
                //   price: '200',
                //   description: 'Plastic, black',
                //   image: '/images/chair.jpg'
                // },
                // {
                //   name: 'hat',
                //   price: '200',
                //   description: 'Cotton blue',
                //   image: '/images/hat.jpg'
                // },
                // {
                //   name: 'pot',
                //   price: '200',
                //   description: 'metal silver',
                //   image: '/images/pot.jpg'
                // },
                // {
                //   name: 'toy',
                //   price: '200',
                //   description: 'Plush yellow',
                //   image: '/images/toy.jpg'
                // },
                // {
                //   name: 'headphones',
                //   price: '500',
                //   description: 'Plastic black',
                //   image: '/images/headphones.jpg'
                // },
                // {
                //   name: 'necklace',
                //   price: '2000',
                //   description: 'Silver white',
                //   image: '/images/necklace.jpg'
                // }
            ]
        };
    }

    // <Col xs='2'></Col>
    render() {
        console.log("props", this.props);

        const productCards = this.props.items.map((x, index) => {
            // console.log("item", x.item_img);
            return (
                <Col key={`product-${x.item_name}-${index}`}>
                    <ProductCard
                        name={x.item_name}
                        item_img={x.item_img}
                        price={x.price_per_item}
                        description={x.description}
                        addItemToCart={this.props.addItemToCart}
                    />
                </Col>
            );
        });

        return (
            <>
                <div>
                    {/* <Jumbotron fluid className="bg-transparent"> */}
                    <Container
                        fluid
                        className="body-max-width bg-light w-100"
                        style={{ padding: "2em", textAlign: "center" }}
                    >
                        <Row>
                            <Col className="text-align-center">
                                <h1>Look What Local Charities Have to Offer</h1>
                            </Col>
                        </Row>
                        <Row style={{ padding: "1em" }}>
                            <Col md="4">
                                <h3>
                                    <strong>Unique everything</strong>
                                </h3>
                                <p>
                                    We have millions of one-of-a-kind items, so
                                    you can find whatever you need.
                                </p>
                            </Col>
                            <Col md="4">
                                <h3>
                                    <strong>Independent sellers</strong>
                                </h3>
                                <p>
                                    We make it possible for you to connect
                                    directly with your favorite shops and
                                    charities.
                                </p>
                            </Col>
                            <Col md="4">
                                <h3>
                                    <strong>Secure shopping</strong>
                                </h3>
                                <p>
                                    We take you privacy seriously - whenever you
                                    need assistance, we're here for you.
                                </p>
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        <Row>{productCards}</Row>
                        <Button className="bg-success">
                            {/* <a href='#'>More</a> */}
                        </Button>
                    </Container>

                    {/* component CAROUSEL */}
                    <Carousel />

                    <Container
                        className="w-10
                        fluid
                        mt-3
                        mb-3"
                        style={{
                            padding: "2em",
                            backgroundColor: "#29f4cd",
                            textAlign: "center"
                        }}
                    >
                        <Row>
                            <Col>
                                <h2>
                                    <strong>About E-Market</strong>
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3>A one-of-a-kind community</h3>
                                <p>
                                    E-Market is an online marketplace, where
                                    people come together to make, sell, buy and
                                    collect unique items.
                                </p>
                            </Col>
                            <Col>
                                <h3>Support independent creators</h3>
                                <p>
                                    There’s no Etsy warehouse – just millions of
                                    people selling the things they love. We make
                                    the whole process easy, helping you connect
                                    directly with makers to find something
                                    extraordinary.
                                </p>
                            </Col>
                            <Col>
                                <h3>Peace of mind</h3>
                                <p>
                                    Your privacy is the highest priority of our
                                    dedicated team. And if you ever need
                                    assistance, we are always ready to step in
                                    for support.
                                </p>
                            </Col>
                        </Row>
                    </Container>

                    <Container
                        fluid
                        className="w-100 bg-light"
                        style={{ padding: "2em", textAlign: "center" }}
                    >
                        <Row>
                            <Col>
                                <h3>One-of-a-kind-community</h3>
                                <p>
                                    E-Market is an online marketplace located in
                                    the heart of Czech Republic, where people
                                    come together to make, sell, buy, and
                                    collect unique items.
                                </p>
                            </Col>
                            <Col>
                                <h3>Support independent sellers</h3>
                                <p>
                                    E-Market is about hundreds of people selling
                                    the things they love. We make the whole
                                    process easy, helping you connect directly
                                    with makers to find something extraordinary.
                                </p>
                            </Col>
                            <Col>
                                <h3>Peace of mind</h3>
                                <p>
                                    Your privacy is the highest priority of our
                                    dedicated team. And if you ever need
                                    assistance, we are always ready to step in
                                    for support.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                    <br />
                    <br />
                    <Container
                        className=" w-100"
                        fluid
                        style={{
                            padding: "2em",
                            backgroundColor: "#7E5A4",
                            textAlign: "center"
                        }}
                    >
                        <Row>
                            <Col>
                                <h3>List of Charities</h3>
                                <p>
                                    This site was created to make it easier for
                                    charities in the Czech Republic to access
                                    their goods online. At the same time,
                                    charities can also be financially supported.
                                    By buying products from this site, you will
                                    not only make yourself or your loved ones
                                    happy, but also promote a good cause.
                                </p>
                            </Col>
                            <Row>
                                <Col>
                                    <Card></Card>
                                </Col>
                                <Col>
                                    <Card></Card>
                                </Col>
                                <Col>
                                    <Card></Card>
                                </Col>
                            </Row>
                        </Row>
                    </Container>

                    {/* </Jumbotron> */}
                </div>
            </>
        );
    }
}
