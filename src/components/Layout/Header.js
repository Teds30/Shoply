import React, { Fragment } from "react";
import { Link } from "react-router-dom";

// import CartContext from "../../context/cart-context";

/* Styles */
import classes from "./Header.module.css";


const Header = () => {
    
// const cartCtx = useContext(CartContext)

    return (
        <Fragment>
            <header className={classes.header}>
                <div>
                    <Link to="/Shoply/shop" className={classes.link}>Home</Link>
                </div>
                <h2>SHOPLY</h2>

                <div className={classes['cart-link']}>
                    <Link to="/Shoply/cart" className={classes.link}>Cart</Link>
                    {/* {cartCtx.items.length > 0 && <div className={classes.badge}>
                       {cartCtx.items.length}
                    </div>} */}
                </div>
            </header>
            <div></div>
        </Fragment>
    );
};

export default Header;
