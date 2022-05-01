import React from 'react'
import Skeleton from '@mui/material/Skeleton'

import classes from './ItemsLoading.module.css'

const ItemsLoading = () => {
    return (
        <div className={classes.container}>
            <ul>
                <li>
                    <div className={classes.box1}>
                        <Skeleton
                            variant="rectangular"
                            width={250}
                            height={250}
                        />
                    </div>
                    <div className={classes.box2}>
                        <Skeleton width="100%" />
                        <Skeleton width="100%" />
                        <Skeleton width="60%" />
                    </div>
                </li>
                <li>
                    <div className={classes.box1}>
                        <Skeleton
                            variant="rectangular"
                            width={250}
                            height={250}
                        />
                    </div>
                    <div className={classes.box2}>
                        <Skeleton width="100%" />
                        <Skeleton width="100%" />
                        <Skeleton width="60%" />
                    </div>
                </li>
                <li>
                    <div className={classes.box1}>
                        <Skeleton
                            variant="rectangular"
                            width={250}
                            height={250}
                        />
                    </div>
                    <div className={classes.box2}>
                        <Skeleton width="100%" />
                        <Skeleton width="100%" />
                        <Skeleton width="60%" />
                    </div>
                </li>
                <li>
                    <div className={classes.box1}>
                        <Skeleton
                            variant="rectangular"
                            width={250}
                            height={250}
                        />
                    </div>
                    <div className={classes.box2}>
                        <Skeleton width="100%" />
                        <Skeleton width="100%" />
                        <Skeleton width="60%" />
                    </div>
                </li>
                <li>
                    <div className={classes.box1}>
                        <Skeleton
                            variant="rectangular"
                            width={250}
                            height={250}
                        />
                    </div>
                    <div className={classes.box2}>
                        <Skeleton width="100%" />
                        <Skeleton width="100%" />
                        <Skeleton width="60%" />
                    </div>
                </li>
                <li>
                    <div className={classes.box1}>
                        <Skeleton
                            variant="rectangular"
                            width={250}
                            height={250}
                        />
                    </div>
                    <div className={classes.box2}>
                        <Skeleton width="100%" />
                        <Skeleton width="100%" />
                        <Skeleton width="60%" />
                    </div>
                </li>
                <li>
                    <div className={classes.box1}>
                        <Skeleton
                            variant="rectangular"
                            width={250}
                            height={250}
                        />
                    </div>
                    <div className={classes.box2}>
                        <Skeleton width="100%" />
                        <Skeleton width="100%" />
                        <Skeleton width="60%" />
                    </div>
                </li>
                <li>
                    <div className={classes.box1}>
                        <Skeleton
                            variant="rectangular"
                            width={250}
                            height={250}
                        />
                    </div>
                    <div className={classes.box2}>
                        <Skeleton width="100%" />
                        <Skeleton width="100%" />
                        <Skeleton width="60%" />
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default ItemsLoading
