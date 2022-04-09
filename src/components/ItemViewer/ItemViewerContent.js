import React, { useState, useEffect } from 'react'

import { useNavigate, Link } from "react-router-dom";

import { BsArrowLeft } from 'react-icons/bs'

import ItemCollapse from './ItemCollapse';

import ItemColor from './inputs/ItemColor';
import ItemSize from './inputs/itemSize';

import Stack from '@mui/material/Stack';



import classes from './ItemViewerContent.module.css'

const ItemViewerContent = (props) => {

    const { item } = props

    const [selectedSize, setSelectedSize] = useState('')
    const [selectedColor, setSelectedColor] = useState(item.colors[0].color_id)

    
    const navigate = useNavigate()

    const selectSizeHandler = (size) => {
        setSelectedSize(size)
    }

    const selectColorHandler = (color) => {
        setSelectedColor(color)
    }


    const sizeList = item.sizes.map((size) => {
        return (
            <ItemSize selected={selectedSize} key={size.size_id} size={size} selectSize={selectSizeHandler} />
        )
    })



    return (
        <div className={classes['main-content']}>
            
            <div className={classes.col1}>
                <div>

                    <Link to='/Shoply/' className={classes.link}>
                        <div className={classes['link-content']}>
                            <BsArrowLeft className={classes.icon} onClick={() => navigate(-1)} />
                            <p className={classes['link-text']}> Back </p>
                        </div>
                    </Link>
                    <h1>{item.name}</h1>
                    <div className={classes.price}>
                        PHP {item.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </div>
                </div>

                <div className={classes['collapse-container']}>
                    <ItemCollapse item={item} />
                </div>

            </div>

            <div className={classes.col2}>
                <div>

                </div>
            </div>

            <div className={classes.col3}>
                <h3>Choose Size</h3>
                <Stack direction="row" spacing={1}>
                    {sizeList}
                </Stack>
                <h3>Choose Color</h3>
                {<ItemColor colors={item.colors} selectedColor={selectedColor} onSelectColor={selectColorHandler} />}

            </div>
        </div>
    )
}

export default ItemViewerContent