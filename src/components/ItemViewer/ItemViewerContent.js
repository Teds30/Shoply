import React, { useState, useEffect, Fragment } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../store/slices/cart'
import { sendCartData } from '../store/actions/cart-action'

import { useNavigate, Link } from 'react-router-dom'

import { BsArrowLeft } from 'react-icons/bs'

import ItemCollapse from './ItemCollapse'

import ItemColor from './inputs/ItemColor'
import ItemSize from './inputs/itemSize'
import ItemCarousel from './ItemCarousel'

import PrimaryButton from '../UI/PrimaryButton'

import Stack from '@mui/material/Stack'

import classes from './ItemViewerContent.module.css'

let isInitial = true

const ItemViewerContent = (props) => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)

    const { item } = props

    const [selectedSize, setSelectedSize] = useState({})
    const [selectedColor, setSelectedColor] = useState({})

    const [hasChosenSize, setHasChosenSize] = useState('')
    const [hasChosenColor, setHasChosenColor] = useState('')

    const navigate = useNavigate()

    const selectSizeHandler = (size) => {
        setSelectedSize(size)
    }

    const selectColorHandler = (color) => {
        setSelectedColor(color)
    }

    useEffect(() => {
        if (isInitial) {
            isInitial = false
            return
        }

        if (cart.changed) {
            dispatch(sendCartData(cart))
        }
    }, [cart, dispatch])

    const addToCartHandler = () => {
        const cartItemID =
            item.id.toString() + selectedSize.id + selectedColor.id
        // console.log('New ID is ', cartItemID)

        const colorLen = Object.keys(item.colors).length
        if (colorLen > 0) {
            if (!selectedSize.size) {
                setHasChosenSize('none')
            } else {
                setHasChosenSize('has')
            }
            if (!selectedColor.color) {
                setHasChosenColor('none')
            } else {
                setHasChosenColor('has')
            }
            if (selectedSize.size && selectedColor.color) {
                dispatch(
                    cartActions.add({
                        id: cartItemID,
                        itemid: props.item.id,
                        name: props.item.name,
                        price: props.item.price,
                        quantity: 1,
                        // image: props.item.image,
                        image: selectedColor.color_itemimage,
                        color: selectedColor.color,
                        size: selectedSize.size,
                    })
                )

                props.onShowAlert()
            }
        }

        if (colorLen === 0) {
            if (!selectedSize) {
                setHasChosenSize('none')
            } else {
                setHasChosenSize('has')
            }
            if (selectedSize.size) {
                dispatch(
                    cartActions.add({
                        id: cartItemID,
                        itemid: props.item.id,
                        name: props.item.name,
                        price: props.item.price,
                        quantity: 1,
                        image: props.item.image,
                        // image: selectedColor.color_itemimage,
                        color: 'Basic',
                        size: selectedSize.size,
                    })
                )

                props.onShowAlert()
            }
        }
    }

    const transformedSizes = []
    for (const key in item.sizes) {
        const itemObj = {
            id: key,
            ...item.sizes[key],
        }
        transformedSizes.push(itemObj)
    }

    const sizeList = transformedSizes.map((size) => {
        return (
            <ItemSize
                selected={selectedSize}
                key={size.id}
                size={size}
                selectSize={selectSizeHandler}
            />
        )
    })

    const transformedColors = []
    for (const key in item.colors) {
        const itemObj = {
            id: key,
            ...item.colors[key],
        }
        transformedColors.push(itemObj)
    }

    return (
        <div className={classes['main-content']}>
            <Link to="/" className={classes.link}>
                <div className={classes['link-content']}>
                    <BsArrowLeft
                        className={classes.icon}
                        onClick={() => navigate(-1)}
                    />
                    <p className={classes['link-text']}> Back </p>
                </div>
            </Link>
            <div className={classes.col1}>
                <div>
                    <h1>{item.name}</h1>
                    <div className={classes.price}>
                        <h5 className={`fw-light`}>
                            PHP{' '}
                            {item.price.toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                            })}
                        </h5>
                    </div>
                </div>

                <div className={classes['collapse-container']}>
                    <ItemCollapse item={item} />
                </div>
            </div>

            <div className={classes.col2}>
                <ItemCarousel item={item} />
            </div>
            <div className={classes.col3}>
                <div className={classes.chooseContainer}>
                    <h3>Choose Size</h3>

                    <Stack direction="row" spacing={1}>
                        {sizeList}
                    </Stack>
                    {hasChosenSize === 'none' && (
                        <p className={classes.error}>Please choose your size</p>
                    )}

                    {Object.keys(props.item.colors).length > 0 && (
                        <Fragment>
                            <h3>Choose Color</h3>
                            <ItemColor
                                className={classes.itemColor}
                                colors={transformedColors}
                                selectedColor={selectedColor}
                                onSelectColor={selectColorHandler}
                            />

                            {hasChosenColor === 'none' && (
                                <p className={classes.error}>
                                    Please choose color
                                </p>
                            )}
                        </Fragment>
                    )}
                </div>

                <div className={classes.btnContainer}>
                    <PrimaryButton
                        className={classes.btnAddToCart}
                        width="100%"
                        onClick={addToCartHandler}
                    >
                        {' '}
                        Add to Cart
                    </PrimaryButton>
                </div>
            </div>
        </div>
    )
}

export default ItemViewerContent
