import React from 'react'

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import classes from './CartItem.module.css'

const CartItem = (props) => {
    
    return (
        <li className={classes['cart-item']}>
            <div className={classes['item-info__container']}>
                <div className={classes.fill}>
                    <img src={props.image} alt="" />
                </div>
                <div className={classes['item-info__info']}>
                    <div className={classes.col1}>
                        <p className={`${classes.title} fw-semibold`}>
                            {props.name}
                        </p>
                        <p className={`${classes.color} sp subtitle`}>
                            color: {props.color}
                        </p>
                        <p className={`${classes.size} sp subtitle`}>
                            size: {props.size}
                        </p>
                    </div>

                    <div className={classes.col2}>
                        <p className={`fw-light`}>
                            PHP{' '}
                            {props.price.toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                            })}{' '}
                            |{' '}
                            <span className={`fc-success fw-medium`}>
                                In Stock
                            </span>
                        </p>
                    </div>

                    <div className={classes.col3}>
                        <div className={classes.quantityContainer}>
                            <button
                                className={classes['quantitybutton__left']}
                                onClick={props.onRemove}
                            >
                                <AiOutlineMinus
                                    className={classes.btnQuantity}
                                />
                            </button>

                            <span className={classes.quantitylabel}>
                                {props.quantity}
                            </span>

                            <button
                                className={classes['quantitybutton__right']}
                                onClick={props.onAdd}
                            >
                                <AiOutlinePlus
                                    className={classes.btnQuantity}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default CartItem
