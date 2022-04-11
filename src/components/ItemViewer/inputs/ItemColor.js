import React from 'react'

import classes from './ItemColor.module.css'

const ItemColor = (props) => {

    const selectColorHandler = (color) => {
        props.onSelectColor(color)
    };


    const colorList = props.colors.map((color) => {

        // console.log(props.selectedColor === color.color)
        return (
            <div key={color.color_id}>
                <div className={classes['radio-container']} style={props.selectedColor === color.color_id.toString() ? {
                    backgroundColor: '#fff',
                    border: `2px solid ${color.color === 'white' || color.color === '#fff' ? '#00000095' : '#00000095'}`
                } : {

                } 
            }>
                    <button
                        value={color.color_id}
                        className={
                            props.selectedColor === color.color_id.toString() ?
                                classes['radio-selected'] : classes['radio']}
                        onClick={selectColorHandler.bind(null, color)}
                        style={props.selectedColor === color.color_id.toString() ? {
                            border: `1px solid #ccc`,
                            backgroundColor: `${color.color}`
                        }
                            : { border: `1px solid #ccc`, backgroundColor: `${color.color}` }}>
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