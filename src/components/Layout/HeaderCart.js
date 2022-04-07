import React from 'react'

// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import classes from './HeaderCart.module.css'

const HeaderCart = () => {
    return (
        <div className={classes.button}>
            <span className={classes.icon}>
                {/* <ShoppingCartIcon/> */}
            </span>
            <span>Cart</span>
        </div>
    )
}

export default HeaderCart