import React from 'react'

import { BsCheckCircleFill } from 'react-icons/bs'

import classes from './Payment.module.css'

const Payment = (props) => {
    const check = props.isPaymentSelected ? (
        <div className={classes['pm-check']}>
            <BsCheckCircleFill style={{ color: '#000000' }} />
        </div>
    ) : (
        <div className={classes['pm-uncheck']}></div>
    )

    const cardClasses = props.isPaymentSelected
        ? classes['pm-card__selected']
        : classes['pm-card']

    return (
        <div className={cardClasses} onClick={props.onClick}>
            <div>
                <div>
                    <div className={classes['pm-img']}>{props.icon}</div>
                    <p className={`fw-medium`}>{props.title}</p>
                </div>
                {check}
            </div>
            <div>
                <p className={`subtitle sp`}>{props.subtitle}</p>
            </div>
        </div>
    )
}

export default Payment
