import React, { useState } from "react";
import Login from "./Login";
export default function Shop(props) {
    const ShopItems = props.items;
    const [cart, setCart] = useState([]);

    function addItems(item) {
        setCart((prevCart) => [...prevCart, item]);
    }

    const renderItems = () => {
        return ShopItems.map((item) => {
            return (
                <li key={item.id}>
                    {item.name}
                    <p>Price per piece: ${item.price}</p>
                    <button onClick={() => addItems(item)}>Add to cart</button>
                </li>
            );
        });
    };

    const renderCart = () => {
        return cart.map((product) => {
            return (
                <li key={product.id}>
                    {product.name}
                    <p>Price: ${product.price}</p>
                </li>
            );
        });
    };

    // Main return
    if(props.isLoggedIn ===false){
        return <Login />
    }
    else{
        return (
            <>
                <h1>This is the Shop!</h1>
                <ul>{renderItems()}</ul>
    
                <h4>These are the cart Items:</h4>
                <ul>{renderCart()}</ul>
            </>
        );
    }
}
