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
import PlacedOrder from './sections/page_status/PlacedOrder'
import TotalAmount from './sections/TotalAmount'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

const Checkout = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)

    const [isLoading, setIsLoading] = useState(false)

    const [orderStatus, setOrderStatus] = useState({
        status: '',
    })

    const hasCart = cart.items.length > 0

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
        setOrderStatus((state) => {
            let newState = { ...state, status: 'pending' }
            return newState
        })

        if (formValid) {
            setIsLoading(true)
            console.log({
                items: cart.items,
                totalAmount: total,
                shippingMethod: shippingMethod.name,
                paymentMethod: paymentMethod,
                buyer: buyer,
            })

            dispatch(sendCartData({ items: [], totalAmount: 0 })).then(() => {
                setOrderStatus((state) => {
                    let newState = { ...state, status: 'completed' }
                    return newState
                })
                console.log('DONE')
            })
        }
    }

    return (
        <Fragment>
            {orderStatus.status === 'completed' && <PlacedOrder />}
            {!hasCart && <PageExpired />}
            {hasCart && orderStatus.status !== 'completed' && (
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
                        <Box sx={{ m: 1, position: 'relative' }}>
                            <PrimaryButton
                                width="100%"
                                onClick={placeOrderHandler}
                                disabled={isLoading}
                            >
                                {!isLoading && <Fragment>Place Order</Fragment>}
                                {isLoading && (
                                    <Fragment>
                                        <CircularProgress
                                            size={16}
                                            sx={{
                                                color: '#fff',
                                                marginRight: '1em',
                                            }}
                                        />
                                        Placing Order...
                                    </Fragment>
                                )}
                            </PrimaryButton>
                        </Box>
                    </div>
                </div>
            )}
        </Fragment>
    )
}

export default Checkout
