import React, { useContext } from 'react'
import { Link } from "react-router-dom";

import CartContext from '../../../context/cart-context'
import { IconContext } from 'react-icons'

import { MdAddShoppingCart } from "react-icons/md";

import ItemStar from './ItemStar'

import classes from './ContentItem.module.css'

const ContentItem = (props) => {


    const cartCtx = useContext(CartContext)

    const addToCartHandler = () => {
        cartCtx.addItem({
            id: props.item.id,
            name: props.item.name,
            price: props.item.price,
            quantity: 1,
            image: props.item.image
        })
    }



    const toLink = `/Shoply/items/${props.item.id}`

    return (
        <li className={classes.item}>
            <div className={classes['picture_container']}>

                <Link to={toLink}
                    className={classes.linkStyle}>
                    <div className={classes.fill}>
                        <img src={props.item.image} alt="" />
                    </div>
                </Link>
                <button onClick={addToCartHandler} className={classes.circularBtn}>
                    <span className={classes.plus}><MdAddShoppingCart/></span><span className={classes['hidden-text']}>Add to Cart</span>
                </button>
            </div>
            <p className={classes.name}>{props.item.name}</p>
            {<div
                className={classes.reviewContainer}>
                <span className={classes.star}>{
                    <IconContext.Provider value={{ color: "#403E57" }}>
                        <div>
                            <ItemStar star={props.item.star} />
                        </div>
                    </IconContext.Provider>}</span>
                <span className={classes.reviews}>{props.item.reviews.length} reviews</span>
            </div>

            }
            <p className={classes.price}>PHP {props.item.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
        </li>
    )
}

export default ContentItem