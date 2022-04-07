import React, {  useContext } from 'react'

import CartContext from '../../../context/cart-context'
import { IconContext } from 'react-icons'
import ItemStar from './ItemStar'

import classes from './ContentItem.module.css'

const ContentItem = (props) => {

    const cartCtx = useContext(CartContext)

    const addToCartHandler = () => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            quantity: 1,
            image: props.image
        })
    }



    return (
        <li className={classes.item}>
            <div className={classes['picture_container']}>
                <div className={classes.fill}>
                    <img src={props.image} alt="" />
                </div>
                <button onClick={addToCartHandler} className={classes.circularBtn}>
                    <span className={classes.plus}>+</span><span className={classes['hidden-text']}>Add to Cart</span>
                </button>
            </div>
            <p className={classes.name}>{props.name}</p>
            {<div
                className={classes.reviewContainer}>
                    <span className={classes.star}>{
                        <IconContext.Provider value={{ color: "#403E57"}}>
                        <div>
                        <ItemStar star = {props.star}/>
                        </div>
                      </IconContext.Provider>}</span>
                    <span className={classes.reviews}>{props.reviews} reviews</span>
            </div>
            
            }
            <p className={classes.price}>PHP {props.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
        </li>
    )
}

export default ContentItem