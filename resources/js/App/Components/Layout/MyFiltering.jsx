import React from 'react';
import ReactDOM from 'react-dom';
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle, Button } from 'reactstrap';

import { Link } from 'react-router-dom';

// const Greeting = props => <h1>Hello {props.name}</h1>;

// // Default Props
// Greeting.defaultProps = {
//   name: "User"
// };

// ReactDOM.render(
//     <Greeting/>,
//     document.getElementById('greeting')
// );
{/* <p> Hello</p> */}
// import React from 'react';


// import React, { Component } from 'react';
import MyFilteringComponent from './MyFilteringComponent.jsx';


export default class Cart2 extends React.Component {

  render() {


    const countries =
    [
        "Afghanistan",
        "Åland Islands",
        "Albania",
        "Algeria"
    ];

    return (
        <MyFilteringComponent content={countries} />
    );
  }
}


