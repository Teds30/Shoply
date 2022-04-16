import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/slices/cart";

import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import PrimaryButton from "../UI/PrimaryButton";

import classes from "./Cart.module.css";

const Cart = () => {
    const dispatch = useDispatch()

    const items = useSelector(state => state.cart.items)
    const totalAmount = useSelector(state => state.cart.totalAmount.toLocaleString(undefined, {minimumFractionDigits: 2}))

    const hasItems = items.length > 0;

    const cartItemRemoveHandler = (id) => {
        dispatch(cartActions.remove(id))
    };
    const cartItemAddHandler = (itemToAdd) => {
        dispatch(cartActions.add({item: {...itemToAdd, quantity: 1}}))
    };

    const cartItems = (
        <ul className={classes["cart-items"]}>
            {!hasItems && <EmptyCart />}
            {hasItems &&
                items.map((item) => (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        price={item.price}
                        image={item.image}
                        color={item.color}
                        size={item.size}
                        onRemove={cartItemRemoveHandler.bind(null, item.id)}
                        onAdd={cartItemAddHandler.bind(null, item)}
                    />
                ))
            }
        </ul>
    );

    const checkOutHandler = () => {
        const checkOutItems = items
        console.log('CHECKED OUT: ', checkOutItems)
        console.log('Total Amount: PHP', totalAmount)
    }

    return (
        <section className={classes.cart}>
            {cartItems}
            {hasItems && (
                <div className={classes.col1}>
                    <div className={classes.total}>
                        <span>Total Amount</span>
                        <span>
                            <div className={classes.orderInfo}>
                                PHP {totalAmount}
                                <PrimaryButton onClick={checkOutHandler}>CHECKOUT</PrimaryButton>
                            </div>
                        </span>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Cart;
