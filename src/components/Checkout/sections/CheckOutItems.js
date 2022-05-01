import React from "react";
import { useSelector } from "react-redux";

import CheckOutItem from "./checkout_items/CheckOutItem";

import classes from "./CheckOutItems.module.css";

const CheckOutItems = () => {
    const cartItems = useSelector((state) => state.cart.items);

    const checkItems = cartItems.map((item) => {
        return <CheckOutItem key={item.id} item={item} />;
    });

    return <div className={classes["items-container"]}>{checkItems}</div>;
};

export default CheckOutItems;
