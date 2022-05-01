import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { cartActions } from '../store/slices/cart'
import { fetchCartData, sendCartData } from '../store/actions/cart-action'

import CartItem from './CartItem'
import EmptyCart from './EmptyCart'
import PrimaryButton from '../UI/PrimaryButton'
import Notification from '../UI/Notification'
import CartLoading from '../UI/CartLoading'

import classes from './Cart.module.css'

let isInitial = true

const Cart = () => {
    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart)
    const notification = useSelector((state) => state.ui.notification)

    const [isLoading, setIsLoading] = useState(true)

    const setLoadingFinish = () => {
        setIsLoading(false)
    }

    useEffect(() => {
        dispatch(fetchCartData({ isLoading: setLoadingFinish }))
    }, [dispatch])

    useEffect(() => {
        if (isInitial) {
            isInitial = false
            return
        }

        if (cart.changed) {
            dispatch(sendCartData(cart))
        }
    }, [cart, dispatch])

    const items = useSelector((state) => state.cart.items)
    const totalAmount = useSelector((state) =>
        state.cart.totalAmount.toLocaleString(undefined, {
            minimumFractionDigits: 2,
        })
    )

    const hasItems = items.length > 0

    const cartItemRemoveHandler = (id) => {
        dispatch(cartActions.remove(id))
    }
    const cartItemAddHandler = (itemToAdd) => {
        dispatch(cartActions.add({ ...itemToAdd, quantity: 1 }))
    }

    const cartItems = (
        <ul className={classes['cart-items']}>
            {!hasItems && <EmptyCart />}
            {hasItems &&
                items.map((item) => (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        price={item.price}
                        image={item.image}
                        color={item.color}
                        size={item.size}
                        totalPrice={item.totalPrice}
                        onRemove={cartItemRemoveHandler.bind(null, item.id)}
                        onAdd={cartItemAddHandler.bind(null, item)}
                    />
                ))}
        </ul>
    )

    return (
        <Fragment>
            {notification && notification.status === 'error' && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}

            {isLoading ? (
                <CartLoading />
            ) : (
                <section className={classes.cart}>
                    {cartItems}
                    {hasItems && (
                        <div className={classes.col1}>
                            <div className={classes.total}>
                                <span>Total Amount</span>
                                <span>
                                    <div className={classes.orderInfo}>
                                        PHP {totalAmount}
                                        <Link
                                            to="/checkout"
                                            className={classes.link}
                                        >
                                            <PrimaryButton>
                                                CHECKOUT
                                            </PrimaryButton>
                                        </Link>
                                    </div>
                                </span>
                            </div>
                        </div>
                    )}
                </section>
            )}
        </Fragment>
    )
}

export default Cart
