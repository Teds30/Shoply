import { color } from '@mui/system';
import React from 'react'

import classes from './ItemColor.module.css'

const ItemColor = (props) => {

    const selectColorHandler = e => {
        props.onSelectColor(e.target.value)
        // console.log(e.target.value)
        // console.log('selected color: ', props.selectedColor)
        // console.log('current color: ', e.target.value)
        // console.log(e.target.value.toString() === props.selectedColor.toString())
    };


    const colorList = props.colors.map((color) => {

        // console.log(props.selectedColor === color.color_id)
        return (
            <div key={color.color_id}>
                <div className={classes['radio-container']} style={props.selectedColor === color.color_id.toString() ? {
                    backgroundColor: '#fff',
                    border: `2px solid ${color.color === 'white' || color.color === '#fff' ? '#41414170' : color.color}`
                } : {

                } 
            }>
                    <button
                        value={color.color_id}
                        className={
                            props.selectedColor === color.color_id.toString() ?
                                classes['radio-selected'] : classes['radio']}
                        onClick={selectColorHandler}
                        style={props.selectedColor === color.color_id.toString() ? {
                            border: `1px solid #ccc`,
                            backgroundColor: `${color.color}`
                        }
                            : { border: `1px solid #ccc`, backgroundColor: `${color.color}` }}>
                        <input type="hidden" value={color.color_id} />
                    </button>
                </div>

            </div>

        )
    })



    return (

        <div className={classes['radio-color']}>
            {colorList}
        </div>
    )
}

export default ItemColor