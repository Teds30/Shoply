import React from 'react'

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import classes from './CartItem.module.css'

const CartItem = (props) => {
    return (
        <li className={classes['cart-item']}>

            {/* <div className={classes['info-container']}>
                
            <div className={classes.fill}>
                <img src={props.image} alt="" />
            </div>
            
            <div className={classes.info}>
                <h2>{props.name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>PHP {props.price.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                    <span className={classes.quantity}>x {props.quantity}</span>
                </div>
            </div>
            </div>
            

            <div className={classes.actions}>
                <button onClick={props.onRemove}>−</button>
                <button onClick={props.onAdd}>+</button>
            </div> */}
            <div className={classes['item-info__container']}>

                <div className={classes.fill}>
                    <img src={props.image} alt="" />
                </div>
                <div className={classes['item-info__info']}>
                    <div className={classes.col1}>
                            <p className={classes.title}>{props.name}</p>
                            <p className={classes.color}>color: {props.color.color}</p>
                            <p className={classes.size}>size: {props.size.size}</p>
                    </div>

                    <div className={classes.col2}>
                        <span>PHP {props.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                        <span> | In Stock</span>
                    </div>

                    <div className={classes.col3}>
                        <div className={classes.quantityContainer}>
                            <button className={classes['quantitybutton__left']} onClick={props.onRemove}>
                                <AiOutlineMinus className={classes.btnQuantity} />
                            </button>

                            <span className={classes.quantitylabel}>{props.quantity}</span>

                            <button className={classes['quantitybutton__right']} onClick={props.onAdd}>
                                <AiOutlinePlus className={classes.btnQuantity} />
                            </button>

                        </div>
                    </div>
                </div>
            </div>




        </li>
    )
}

export default CartItem