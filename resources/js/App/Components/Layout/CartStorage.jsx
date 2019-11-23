import React, { useState } from 'react';
import {render} from 'react-dom';
// import {useLocalState} from './hooks';

const CartStorage = () => {
    function useLocalState(items) {
        const [loc, setState] = React.useState(localStorage.getItem('cart'));
        // const [value, setValue] = React.useState(localStorage.getItem('cart'));
        function setLoc(newItem){
            localStorage.setItem(items, newItem);
            setState(newItem);
        }
        return [loc, setLoc];
    }
    const [item, setItem] = useLocalState['cart'];

    const onChange = event => setValue(event.target.value);
    const localstorage_shoppingCart = JSON.parse(value);



    const PrevState = () => {
        // const [counter, setCounter] = useState([]);
        const [counter, setCounter] = useState(0);
        const handleIncrease = () => {
          setCounter(prevState => prevState + 1);
        };
        const handleDecrease = () => {
          setCounter(prevState => prevState - 1);
        };
        // return (

        // );
    };

    return (
        localstorage_shoppingCart.map(cart=>(
            <div>
            <p>
                Sum: {item}
            </p>
            <button onclick={()=>setItem('add')}>Add More to Your Cart</button>
            <button onclick={()=>setItem('remove')}> Remove Item From Cart</button>
            <input value={basket.quantity} type="text" onChange={onChange}/>
            <div className="counter-container">
            <button className="counter-button" onClick={handleDecrease}>
              -
            </button>
            <p className="counter-digits">{counter}</p>
            <button className="counter-button" onClick={handleIncrease}>
              +
            </button>
             </div>

            {/* <Card>
                <CardBody>
                <CardTitle >You selected item: </CardTitle>
                <CardText> <p>{cart.name}</p> </CardText>
                <CardImg top width="100%" src={basket.item_img} alt="Card image"/>
                <CardImg top width="45%" src={basket.image} alt="Card image cap" />
                <CardSubtitle> <p>{basket.price}CZK</p></CardSubtitle>
                </CardBody>
            </Card> */}
            </div>
        ))
    );
};

// render (<App/>, document.getElementById('root'));
export default CartStorage;
