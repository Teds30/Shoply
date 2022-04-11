import React, { useState, useContext, Fragment } from 'react'


import useDidMountEffect from '../../custom_hook/useDidMountEffect'
import CartContext from '../../context/cart-context';

import { useNavigate, Link } from "react-router-dom";

import { BsArrowLeft } from 'react-icons/bs'

import ItemCollapse from './ItemCollapse';

import ItemColor from './inputs/ItemColor';
import ItemSize from './inputs/itemSize';
import ItemCarousel from './ItemCarousel';

import PrimaryButton from '../UI/PrimaryButton';

import Stack from '@mui/material/Stack';

import classes from './ItemViewerContent.module.css'

const ItemViewerContent = (props) => {

    const { item } = props

    const [selectedSize, setSelectedSize] = useState({
        size_id: '',
        size: ''
    })
    const [selectedColor, setSelectedColor] = useState({
        color_id: '',
        color: ''
    })

    const [hasChosenSize, setHasChosenSize] = useState('')
    const [hasChosenColor, setHasChosenColor] = useState('')


    const navigate = useNavigate()

    const selectSizeHandler = (size) => {
        setSelectedSize(size)
    }

    const selectColorHandler = (color) => {
        setSelectedColor(color)
    }


    useDidMountEffect(() => {
        setHasChosenSize('has')
    }, [selectedSize])

    useDidMountEffect(() => {
        setHasChosenColor('has')
    }, [selectedColor])


    const cartCtx = useContext(CartContext)

    const addToCartHandler = () => {

        const cartItemID = item.id.toString() + selectedSize.size_id + selectedColor.color_id
        // console.log('New ID is ', cartItemID)

        if (item.colors.length > 0) {
            if (selectedSize.size === '') {
                setHasChosenSize('none')
            } else {
                setHasChosenSize('has')
            }
            if (selectedColor.color === '') {
                setHasChosenColor('none')
            } else {
                setHasChosenColor('has')
            }
            if (hasChosenColor === 'has' && hasChosenSize === 'has') {
                cartCtx.addItem({
                    id: cartItemID,
                    itemid: props.item.id,
                    name: props.item.name,
                    price: props.item.price,
                    quantity: 1,
                    // image: props.item.image,
                    image: selectedColor.color_itemimage,
                    color: selectedColor,
                    size: selectedSize
                })

                // console.log('COLOR LEN >> 0 : ADDED TO CART!')
                props.onShowAlert()
            } else {
                // console.log('1 CANCELED!')
            }
        }

        if (item.colors.length === 0) {
            if (selectedSize.size === '') {
                setHasChosenSize('none')
            } else {
                setHasChosenSize('has')
            }
            if (hasChosenSize === 'has') {
                cartCtx.addItem({
                    id: cartItemID,
                    itemid: props.item.id,
                    name: props.item.name,
                    price: props.item.price,
                    quantity: 1,
                    image: props.item.image,
                    // image: selectedColor.color_itemimage,
                    color: { color_id: '0', color: 'Basic' },
                    size: selectedSize
                })

                // console.log('COLOR LEN = 0 : ADDED TO CART!')
                props.onShowAlert()

            } else {
                // console.log('2 CANCELED!')
            }
        }


    }

    const sizeList = item.sizes.map((size) => {
        return (
            <ItemSize selected={selectedSize} key={size.size_id} size={size} selectSize={selectSizeHandler} />
        )
    })


    return (
        <div className={classes['main-content']}>
            
            <Link to='/Shoply/' className={classes.link}>
                <div className={classes['link-content']}>
                    <BsArrowLeft className={classes.icon} onClick={() => navigate(-1)} />
                    <p className={classes['link-text']}> Back </p>
                </div>
            </Link>
            <div className={classes.col1}>
                <div>

                    <h1>{item.name}</h1>
                    <div className={classes.price}>
                        <h1>PHP {item.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</h1>
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
                    {hasChosenSize === 'none' && (<p className={classes.error}>Please choose your size</p>)}

                    {item.colors.length > 0 &&
                        (
                            <Fragment>

                                <h3>Choose Color</h3>
                                <ItemColor className={classes.itemColor} colors={item.colors} selectedColor={selectedColor.color_id.toString()} onSelectColor={selectColorHandler} />

                                {hasChosenColor === 'none' && (<p className={classes.error}>Please choose color</p>)}
                            </Fragment>
                        )
                    }

                </div>

                <div className={classes.btnContainer}>
                    <PrimaryButton className={classes.btnAddToCart} width='100%' onClick={addToCartHandler} > Add to Cart</PrimaryButton>
                </div>
            </div>
        </div>
    )
}

export default ItemViewerContent