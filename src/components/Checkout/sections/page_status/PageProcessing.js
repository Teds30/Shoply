import React from 'react'
import LoadingSpinner from '../../../UI/LoadingSpinner'
import Backdrop from '@mui/material/Backdrop'

import classes from './PageProcessing.module.css'
const PageProcessing = ({ isLoading, onHideLoading }) => {
    const hideLoadingHandler = () => {
        onHideLoading()
    }
    return (
        <div className={classes.processing}>
            <Backdrop
                className={classes.backdrop}
                sx={{
                    color: '#fff',
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={isLoading}
                onClick={hideLoadingHandler}
            >
                <div>
                    <div className={classes.loading}>
                        <LoadingSpinner />
                    </div>
                    <h3>Placing Order...</h3>
                    <p>Please wait.</p>
                </div>
            </Backdrop>
        </div>
    )
}

export default PageProcessing
