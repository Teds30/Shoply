import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'


/* Styles */
import classes from './Header.module.css'

const Header = () => {

    return (
        <Fragment>
            <header className={classes.header}>
                <div>
                    <Link to="/" className={classes.link}>
                        Home
                    </Link>
                </div>
                <h2>SHOPLY</h2>

                <div className={classes['cart-link']}>
                    <Link to="/cart" className={classes.link}>
                        Cart
                    </Link>
                </div>
            </header>
            <div></div>
        </Fragment>
    )
}

export default Header
