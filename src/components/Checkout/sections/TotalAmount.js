import React from 'react'

import classes from './TotalAmount.module.css'

const TotalAmount = (props) => {
    return (
        <div className={classes['total-prices__container']}>
            <div>
                <p className={'fw-light'}>Subtotal</p>
                <p>
                    {' '}
                    <span className={``}>₱</span> {props.itemAmount}
                </p>
            </div>
            <div>
                <p className={'fw-light'}>Shipping Fee</p>
                <p>{props.shippingfee}</p>
            </div>
            <div>
                <h5>Order Amount</h5>
                <h5>
                    <span className={`currency `}>₱ </span>
                    {props.total}
                </h5>
            </div>
        </div>
    )
}

export default TotalAmount
