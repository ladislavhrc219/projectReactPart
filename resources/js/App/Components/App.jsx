import React from "react";
import { Route, Switch } from "react-router-dom";
// import { Link } from 'react-router-dom';
import Navigation from "./Layout/Navigation.jsx";
import Register from "./Auth/Register.jsx";
import Login from "./Auth/Login.jsx";
import Main from "./Layout/Main.jsx";
import Sellon from "./Layout/Sellon";
import Footer from "./Layout/Footer.jsx";
import Checkout from "./Layout/Checkout";
import Cart from "./Layout/Cart.jsx";
import MyFiltering from "./Layout/MyFiltering.jsx";
import CartStorage from "./Layout/CartStorage";
import useLocalStorage from "./Layout/useLocalStorage";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        const cartString = window.localStorage.getItem("cart")
        const cart = cartString ? JSON.parse(cartString) : [{name: 'nemo'}]
        this.state = {
            token: null,
            logged_in: null,
            items: [],
            cart: cart,

        };
    }

    componentDidMount() {
        fetch("http://www.charitytest.test:8080/api/items")
            .then(res => res.json())
            .then(result => {
                console.log("result", result);
                this.setState({
                    isLoaded: true,
                    items: result
                });
            });
    }
    addItemToCart = (newItem) => {
        console.log('newitem', newItem)
        this.setState(prevState => {
            console.log('prevCart', prevState.cart)
            const hasItem = !!prevState.cart.find(item => item.name === newItem.name)
            console.log('hasItem', hasItem)
            let newCart
            if(hasItem) {
                // update quantity to plus 1
                newCart = prevState.cart.reduce((acc, curr) => {
                    if(newItem.name === curr.name) curr.quantity = curr.quantity + 1
                    return acc.concat(curr)
                }, [])
            } else {
                newCart = prevState.cart.concat(newItem)
            }
            window.localStorage.setItem("cart", JSON.stringify(newCart));
            return {
                ...prevState,
                cart: newCart
            }
        })

    }
    removeItemFromCart = (itemName) => {

        console.log('remove item', itemName )
        this.setState(prevState => {
            const newCart = prevState.cart.filter(item=>itemName!==item.name)
            return {
                ...prevState,
                cart: newCart
            }
        })
         // cart.filter(item=>itemName!==ItemName)
        // console.log(localStorage.getItem('cart',removeItem))



        // console.log(localStorage.getItem('item', name));

    }
    decreaseItemInCart=itemName=>{




    }
    render() {
        const divStyle = {
            color: "silver"
            // backgroundImage: 'url('+ '/images/background.jpg' +')',
        };
        return (
            <div style={divStyle}>
                <Navigation />
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => {
                            console.log("state", this.state);
                            return <Main
                            items={this.state.items}
                            addItemToCart={this.addItemToCart}
                            />;
                        }}
                    ></Route>
                    <Route
                        exact
                        path="/sellon"
                        render={() => <Sellon />}
                    ></Route>
                    <Route
                        exact
                        path="/register"
                        render={() => <Register />}
                    ></Route>
                    <Route exact path="/login" render={() => <Login />}></Route>
                    <Route
                        exact
                        path="/cart"
                        render={() => <Cart items={this.state.cart} removeItemFromCart={this.removeItemFromCart} />}
                    ></Route>
                    <Route exact path="/cart2" render={() => <Cart2 />}></Route>
                    <Route exact path="/cart3" render={() => <Cart3 />}></Route>
                    <Route
                        exact
                        path="/cartstorage"
                        render={() => <CartStorage />}
                    ></Route>
                    <Route
                        exact
                        path="/checkout"
                        render={() => <Checkout />}
                    ></Route>
                </Switch>
                <Footer />
            </div>
        );
    }
}
