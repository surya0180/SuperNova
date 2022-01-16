import React from 'react'
import LandingPage from './LandingPage/LandingPage'
import classes from './MainPage.module.css'

const MainPage = () => {
    return (
        <>
            <div className={"container-fluid " + classes.desktop}>
                <div>
                    <h1>SuperNova</h1>
                    <h2>This is Desktop view of the website</h2>
                </div>
            </div>
            <LandingPage />
        </>
    )
}

export default MainPage
