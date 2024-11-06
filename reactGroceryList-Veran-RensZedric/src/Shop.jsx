import React, { useState, useEffect } from "react";

export default function Shop(props) {
    const ShopItems = props.items;
    const [cart, setCart] = useState([]);  // Cart holds items added to the cart
    const [counts, setCounts] = useState({}); // Object to keep track of counts for each item
    const [checkout, setCheckout] = useState(false); // State to track whether checkout is done
    const [money, setMoney] = useState(""); // State to track the user's entered money
    const [isSufficientFunds, setIsSufficientFunds] = useState(null); // State to check if funds are sufficient
    const [change, setChange] = useState(0); // State to track the change given to the user

    // Effect to update cart whenever counts change
    useEffect(() => {
        const updatedCart = ShopItems.map((item) => {
            const itemCount = counts[item.id] || 0;
            if (itemCount > 0) {
                return { ...item, quantity: itemCount };
            }
            return null;
        }).filter(item => item !== null); // Remove any null values

        setCart(updatedCart);
    }, [counts, ShopItems]); // Only re-run effect if counts or ShopItems change

    // Increment count for a specific item
    const incrementCount = (itemId) => {
        setCounts((prevCounts) => ({
            ...prevCounts,
            [itemId]: (prevCounts[itemId] || 0) + 1,
        }));
    };

    // Decrement count for a specific item
    const decrementCount = (itemId) => {
        setCounts((prevCounts) => {
            const currentCount = prevCounts[itemId] || 0;
            const newCount = currentCount > 0 ? currentCount - 1 : 0;
            return {
                ...prevCounts,
                [itemId]: newCount,
            };
        });
    };

    // Calculate total price of items in the cart
    const calculateTotalPrice = () => {
        return cart.reduce((total, product) => {
            return total + product.price * product.quantity;
        }, 0);
    };

    // Function to handle the checkout action
    const handleCheckout = () => {
        const totalPrice = calculateTotalPrice();
        const enteredMoney = parseFloat(money);

        if (enteredMoney >= totalPrice) {
            setIsSufficientFunds(true); // Sufficient funds
            setChange(enteredMoney - totalPrice); // Calculate the change
        } else {
            setIsSufficientFunds(false); // Not enough funds
            setChange(0); // No change if insufficient funds
        }

        setCheckout(true); // Mark as checked out, display the receipt
    };

    const renderItems = () => {
        return ShopItems.map((item) => {
            return (
                <li key={item.id}>
                    {item.name}
                    <p>Price per piece: ${item.price}</p>
                    <button onClick={() => decrementCount(item.id)}>-</button>
                    <span> {counts[item.id] || 0} </span>
                    <button onClick={() => incrementCount(item.id)}>+</button>
                </li>
            );
        });
    };

    const renderCart = () => {
        return cart.map((product, index) => {
            const totalPrice = product.price * product.quantity; // Calculate total price for the product
            return (
                <li key={index}>
                    {product.name} (x{product.quantity}) - ${totalPrice}
                </li>
            );
        });
    };

    const renderReceipt = () => {
        const totalPrice = calculateTotalPrice();
        return (
            <div>
                <h2>Receipt</h2>
                <ul>
                    {renderCart()}
                </ul>
                <h4>Total Price: ${totalPrice}</h4>
                {/* Show message based on whether the user has sufficient funds */}
                {isSufficientFunds === null ? null : isSufficientFunds ? (
                    <div>
                        <p>Your change is: ${change.toFixed(2)}</p>
                        <p>Thank you for shopping!</p>
                    </div>
                ) : (
                    <p>You don't have enough money. You need ${totalPrice - parseFloat(money)} more.</p>
                )}
            </div>
        );
    };

    const handleMoneyChange = (e) => {
        setMoney(e.target.value);
    };

    // Main return
    return (
        <>
            <h1>This is the Shop!</h1>
            <h4>Here are the items on the menu: </h4>
            <ul>{renderItems()}</ul>
            <h4>These are the cart Items:</h4>
            <ul className="cart">{renderCart()}</ul>
            <h4>Total Price: ${calculateTotalPrice()}</h4>
            <div>
                <label>
                    Enter your money: $ 
                    <input
                        type="number"
                        value={money}
                        onChange={handleMoneyChange}
                        min="0"
                    />
                </label>
            </div>
            <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
            {checkout && <div className="receipt">{renderReceipt()}</div>}
        </>
    );
    
}
