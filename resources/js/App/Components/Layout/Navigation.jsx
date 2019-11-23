import React from "react";
import { Fragment } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    MDBIcon,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";

// import {MdCancel, MdChat, MdCheck} from 'react-icons/md';
// import FaBeer from 'react-icons/lib/fa/beer';
// import 'bootstrap/dist/css/bootstrap.css';
// import './navigation.css';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

//CHECK THE CLASS NAME ON THE MASTER BRANCH!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Fragment>
                    <Navbar
                        expand="md"
                        style={{ padding: "1em", backgroundColor: "#04f0a1" }}
                    >
                        <NavbarBrand className="font-weight-bold">
                            E-Shop
                        </NavbarBrand>

                        <InputGroup>
                            <Input />
                            <InputGroupAddon
                                expand="md"
                                addonType="append"
                                className="light"
                            >
                                <InputGroupText>Search</InputGroupText>
                            </InputGroupAddon>
                        </InputGroup>

                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Shop
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>Categories</DropdownItem>
                                        <DropdownItem>Clothing</DropdownItem>
                                        <DropdownItem>Souvenirs</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Reset</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem>
                                    <NavLink>
                                        <Link to="/#/">Home</Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <Link to="/sellon/">SellOn</Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <Link to="/register/">Register</Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <Link to="/login/">LogIn</Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <Link to="/cart/"> CART </Link>
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink>
                                        <Link to="/myfiltering/"> filtering</Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <Link to="/cartstorage/">
                                            {" "}
                                            CartStorage{" "}
                                        </Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <Link to="/checkout/">Checkout</Link>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        {/* <Cart/> */}
                    </Navbar>
                </Fragment>
            </div>
        );
    }
}
