import React from 'react'

import classes from './EmptyCart.module.css'
import EmptyCartSvg from '../../assets/emptycart.svg'

const EmptyCart = () => {

    return (
        <div className={classes.container}>
            
        <div className={classes.picture}>
                <img
                src={EmptyCartSvg}
                style={{ height: 350, width: 350 }}
                alt='empty cart'

            />
        </div>
        <h2>Your cart is empty</h2>
        </div>
        

    )
}

export default EmptyCart