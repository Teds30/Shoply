import React from 'react'

import classes from './Alert.module.css'


const Alert = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                <div className={classes['icon-success']}>
                    <div className={classes.icon}>
                        {props.icon}
                    </div>
                </div>
                <p>{props.label}</p>
                {/* <p>{props.children}</p> */}
            </div>
        </div>
    )
}

export default Alert