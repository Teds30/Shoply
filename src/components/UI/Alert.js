import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

import classes from './Alert.module.css'

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>
}

const ModalOverlay = (props) => {
    return <div className={classes.modal} onClick={props.onClose}>
        <div className={classes.content}>
            <div className={classes['icon-success']}>
                <div className={classes.icon}>
                {props.icon}
                </div>
            </div>
            <p>{props.label}</p>
        </div>
    </div>
}

const portalElement = document.getElementById('overlay')


const Alert = (props) => {
  return (
    <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay onClose={props.onClose} label={props.label} icon={props.icon}>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  )
}

export default Alert