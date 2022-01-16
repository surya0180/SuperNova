import { Menu, Search } from '@mui/icons-material'
import { AppBar, Avatar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import avatar from '../../assets/images/Avatar.png'

const Header = () => {
    return (
        <AppBar sx={{ boxShadow: 'none' }}>
            <Toolbar sx={{ backgroundColor: '#000000', color: '#ffffff', height: '5em' }}>
                <IconButton>
                    <Avatar src={avatar} />
                </IconButton>
                <Typography> Hi Anaisha!</Typography>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton>
                    <Search sx={{ color: '#ffffff' }} />
                </IconButton>
                <IconButton>
                    <Menu sx={{ color: '#ffffff' }} />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header
