import React from 'react'
import Header from './Header'
import classes from './LandingPage.module.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from '../../assets/images/Bannerimage.png'
import design from '../../assets/images/designs.png'
import BannerCard from './BannerCard'
import { Box } from '@mui/material';
import BottomNavigationBar from './BottomNavigationBar';


const LandingPage = () => {
    let settings = {
        infinite: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 100,
        dots: false,
        initialSlide: 0,
    };
    return (
        <div className={"container-fluid " + classes.landingpage}>
            <Header />
            <Box sx={{ height: '6em' }} />
            <div className={"container-fluid " + classes.banner2} style={{ padding: 0 }}>
                <Slider {...settings} className={classes.slick}>
                    <BannerCard />
                    <BannerCard />
                    <BannerCard />
                    <BannerCard />
                    <BannerCard />
                </Slider>
            </div>
            <img src={banner} alt="banner" className={classes.dots} />
            <img src={design} alt="desihm" className={classes.polygons} />
            <BottomNavigationBar />
        </div>
    )
}

export default LandingPage
