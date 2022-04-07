import React, { useContext } from "react";

import CartContext from "../../context/cart-context";

import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

const Cart = () => {
    const cartCtx = useContext(CartContext);

    const totalAmount = cartCtx.totalAmount.toLocaleString(undefined, {minimumFractionDigits: 2});
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };
    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, quantity: 1 });
    };

    const cartItems = (
        <ul className={classes["cart-items"]}>
            {!hasItems && <EmptyCart />}
            {hasItems &&
                cartCtx.items.map((item) => (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        price={item.price}
                        image={item.image}
                        onRemove={cartItemRemoveHandler.bind(null, item.id)}
                        onAdd={cartItemAddHandler.bind(null, item)}
                    />
                ))}
        </ul>
    );

    const checkOutHandler = () => {
        const checkOutItems = cartCtx.items
        console.log('CHECKED OUT: ', checkOutItems)
        console.log('Total Amount: PHP', cartCtx.totalAmount)
    }

    return (
        <section className={classes.cart}>
            {cartItems}
            {hasItems && (
                <div>
                    <div className={classes.total}>
                        <span>Total Amount</span>
                        <span>
                            <div className={classes.orderInfo}>
                                PHP {totalAmount}
                                <button onClick={checkOutHandler}>CHECKOUT</button>
                            </div>
                        </span>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Cart;
