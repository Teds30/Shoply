import React from 'react'

import { BsCheckCircleFill } from 'react-icons/bs'

import classes from './Shipping.module.css'

const Shipping = (props) => {
    const selectShippingHandler = () => {
        props.onSelect({ id: props.id, name: props.title })
    }

    const cardClasses = props.isShippingMethod
        ? classes['sm-card__selected']
        : classes['sm-card']

    const check = props.isShippingMethod ? (
        <BsCheckCircleFill />
    ) : (
        <div className={classes['sm-check__unselected']}></div>
    )

    return (
        <div className={cardClasses} onClick={selectShippingHandler}>
            <div>
                <div className={classes['sm-img']}>
                    <img src={props.logo} alt="" />
                </div>
                <div className={classes['sm-content']}>
                    <h6>{props.title}</h6>
                    <p className={`subtitle sp`}>{props.subtitle}</p>
                </div>
                <div className={classes['sm-check__container']}>{check}</div>
            </div>
        </div>
    )
}

export default Shipping
