import React from 'react'

import classes from './CheckOutItem.module.css'

const CheckOutItem = (props) => {
    const { item } = props

    return (
        <div className={classes.item}>
            <div className={classes['item__img']}>
                <img src={item.image} alt="img" />
            </div>
            <div className={classes['item__content']}>
                <div className={classes['item__content1']}>
                    <h6>{item.name}</h6>
                    <p className={`sp subtitle`}>
                        Variation: {item.size} | {item.color}
                    </p>
                    <p className={`subtitle sp`}>
                        <span className="subtitle sp">₱</span>{' '}
                        {item.price.toLocaleString(undefined, {
                            minimumFractionDigits: 0,
                        })}
                        <span> x {item.quantity}</span>
                    </p>
                </div>
                <div className={classes['item__content2']}>
                    <h6 className={classes.price}>
                        <span className={`currency`}>₱ </span>
                        {item.totalPrice.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                        })}
                    </h6>
                </div>
            </div>
        </div>
    )
}

export default CheckOutItem
