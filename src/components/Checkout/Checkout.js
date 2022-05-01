import React, { useState, Fragment, useCallback } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { sendCartData } from '../store/actions/cart-action'

import classes from './Checkout.module.css'

import CheckOutItems from './sections/CheckOutItems'

import DeliveryAddress from './sections/DeliveryAddress'
import PaymentMethod from './sections/PaymentMethod'
import ShippingMethod from './sections/ShippingMethod'
import PrimaryButton from '../UI/PrimaryButton'
import PageExpired from './sections/page_status/PageExpired'
import TotalAmount from './sections/TotalAmount'

import PlacedOrder from './sections/page_status/PlacedOrder'

const Checkout = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)

    const hasCart = cart.items.length > 0

    const [confirmed, setConfirmed] = useState(false)

    const [buyer, setBuyer] = useState({
        name: '',
        contact: '',
        address: {
            street: '',
            barangay: '',
            city: '',
            province: '',
            zip_code: '',
        },
    })
    const [paymentMethod, setPaymentMethod] = useState('')
    const [shippingMethod, setShippingMethod] = useState({
        id: '',
        name: '',
    })

    const [pmIsSubmitted, setPmIsSubmitted] = useState(false)
    const [smIsSubmitted, setSmIsSubmitted] = useState(false)

    const setPaymentMethodHandler = (payment) => {
        setPaymentMethod(payment)
    }

    const setShippingMethodHandler = (id) => {
        setShippingMethod(id)
    }

    const setBuyerHandler = useCallback(
        (buyer) => {
            setBuyer(buyer)
        },
        [setBuyer]
    )

    let pmValid = paymentMethod !== ''
    let smValid = shippingMethod.id !== ''

    let formValid = pmValid && smValid
    const shipping_fee = 0
    const shipping_fee_label =
        shipping_fee === 0 ? (
            'FREE'
        ) : (
            <p>
                <span className={classes.currency}>₱</span> {shipping_fee}
            </p>
        )

    const total = shipping_fee + cart.totalAmount

    const handleScrollToElement = (element) => {
        if (element) {
            window.scrollTo(0, element.offsetTop)
        }
    }

    if (!pmValid && pmIsSubmitted) {
        handleScrollToElement()
    }

    const placeOrderHandler = async () => {
        setSmIsSubmitted(true)
        setPmIsSubmitted(true)

        if (formValid) {
            console.log({
                items: cart.items,
                totalAmount: total,
                shippingMethod: shippingMethod.name,
                paymentMethod: paymentMethod,
                buyer: buyer,
            })

            dispatch(sendCartData({ items: [], totalAmount: 0 })).then(() => {
                setConfirmed(true)
                console.log('DONE')
            })
        }
    }

    return (
        <Fragment>
            {!hasCart && <PageExpired />}
            {confirmed && <PlacedOrder />}
            {hasCart && !confirmed && (
                <div className={classes.wrapper}>
                    <div className={classes.col1}>
                        <div>
                            <h4>Summary Order</h4>
                            <p className={`subtitle`}>
                                Check your item and select your shipping and
                                payment options
                            </p>
                        </div>

                        <CheckOutItems />
                    </div>

                    <div className={classes.col2}>
                        <DeliveryAddress onSetBuyer={setBuyerHandler} />
                        <PaymentMethod
                            onSelect={setPaymentMethodHandler}
                            paymentMethod={paymentMethod}
                            isValid={pmValid}
                            isSubmitted={pmIsSubmitted}
                            onScrollError={handleScrollToElement}
                        />

                        <ShippingMethod
                            onSelect={setShippingMethodHandler}
                            shippingMethod={shippingMethod}
                            isValid={smValid}
                            isSubmitted={smIsSubmitted}
                            onScrollError={handleScrollToElement}
                        />
                        <TotalAmount
                            itemAmount={cart.totalAmount}
                            shippingfee={shipping_fee_label}
                            total={total}
                        />

                        <br />
                        <PrimaryButton width="100%" onClick={placeOrderHandler}>
                            Place Order
                        </PrimaryButton>
                    </div>
                </div>
            )}
        </Fragment>
    )
}

export default Checkout
