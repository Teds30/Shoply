import React, { useRef } from 'react'

import classes from './PaymentMethod.module.css'
import Cod from '../../../assets/icons/Cod'

import Payment from './payment_methods/Payment'

const PaymentMethod = (props) => {
    const selectCOD = () => {
        props.onSelect('COD')
    }
    const selectGCash = () => {
        props.onSelect('GCash')
    }

    const error = useRef(null)

    if (!props.isValid && props.isSubmitted) {
        props.onScrollError(error)
    }

    return (
        <div className={classes['pm-container']} ref={error}>
            <h5 className="mb-3">Payment Method </h5>
            {!props.isValid && props.isSubmitted && (
                <div className={classes.error}>
                    <p>Please select payment method</p>
                </div>
            )}

            <div
                className={`${classes['pm-card-container']} ${
                    !props.isValid && props.isSubmitted && classes['ferror']
                } `}
            >
                <Payment
                    isPaymentSelected={props.paymentMethod === 'COD'}
                    icon={<Cod />}
                    title="Cash On Delivery"
                    subtitle="Payment upon receive"
                    onClick={selectCOD}
                />

                <Payment
                    isPaymentSelected={props.paymentMethod === 'GCash'}
                    icon={
                        <img
                            src={require('../../../assets/gcash-logo-square.png')}
                            alt="gcash"
                        />
                    }
                    title="GCash"
                    subtitle="Pay through GCash"
                    onClick={selectGCash}
                />
            </div>
        </div>
    )
}

export default PaymentMethod
