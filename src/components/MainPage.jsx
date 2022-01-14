import React from 'react'
import classes from './MainPage.module.css'

const MainPage = () => {
    return (
        <>
            <div className={"container-fluid " + classes.desktop}>
                <div className={classes.content}>
                    <h1>SuperNova</h1>
                    <h2>This is Desktop view of the website</h2>
                </div>
            </div>
            <div className={"container-fluid " + classes.mobile}>
                <div className={classes.content}>
                    <h1>SuperNova</h1>
                    <h2>This is Mobile view of the website</h2>
                </div>
            </div>
        </>
    )
}

export default MainPage
