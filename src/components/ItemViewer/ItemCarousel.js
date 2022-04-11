import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import classes from './ItemCarousel.module.css'

const ItemCarousel = (props) => {

    const { item } = props

    const carouselItems = item.previews.map((preview) => {

        return (
            <Carousel.Item key={preview.preview_id} className={classes['carousel-item']} >
                <div className={classes['fill']}>
                    <img
                        className="d-block w-100"
                        src={preview.preview_image}
                        alt='previews'
                    />
                </div>
            </Carousel.Item>
        )
    })

    return (
        <Carousel variant="dark" touch='true' className={classes.carousel}>
            <Carousel.Item className={classes['carousel-item']} >
                {/* <div className={classes.leftOpacity}></div>
                <div className={classes.rightOpacity}></div> */}
                <div className={classes['fill']}>
                    <img
                        src={item.image}
                        alt=''
                    />
                </div>
            </Carousel.Item>

            {carouselItems}
        </Carousel>
    )
}

export default ItemCarousel