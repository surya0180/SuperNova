import React from 'react'
import classes from './BannerCard.module.css'
import banner from '../../assets/images/Banner.png'

const BannerCard = () => {
    return (
        <div className={classes.banner}>
            <img src={banner} alt="" className={classes.bannerimg} />
            <div className={classes.content}>
                <h1>Supernova</h1>
                <p>Live Online Contests + Workshops For Kids.</p>
            </div>
        </div>
    )
}

export default BannerCard
