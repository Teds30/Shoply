import React from "react";
import Skeleton from "@mui/material/Skeleton";

import classes from "./CartLoading.module.css";

const CartLoading = () => {
    return (
        <div className={classes.container}>
            <div>
                <div className={classes.box1}>
                    <Skeleton variant="rectangular" width={100} height={100} />
                </div>
                <div className={classes.box2}>
                    <Skeleton />
                    <Skeleton width="60%" />
                    <Skeleton width="60%" />
                    <Skeleton width="40%" />
                </div>
            </div>

            <div>
                <div className={classes.box1}>
                    <Skeleton variant="rectangular" width={100} height={100} />
                </div>
                <div className={classes.box2}>
                    <Skeleton />
                    <Skeleton width="60%" />
                    <Skeleton width="60%" />
                    <Skeleton width="40%" />
                </div>
            </div>
            <div>
                <div className={classes.box1}>
                    <Skeleton variant="rectangular" width={100} height={100} />
                </div>
                <div className={classes.box2}>
                    <Skeleton />
                    <Skeleton width="60%" />
                    <Skeleton width="60%" />
                    <Skeleton width="40%" />
                </div>
            </div>
        </div>
    );
};

export default CartLoading;
