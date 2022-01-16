import React from 'react'
import { Paper } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Home, Notifications } from '@mui/icons-material';

const BottomNavigationBar = () => {
    const [value, setValue] = React.useState(0);
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: '3' }} elevation={3}>
            <BottomNavigation
                sx={{ backgroundColor: '#1C1B1B' }}
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction icon={<Home sx={{ color: '#ffffff' }} />} />
                <BottomNavigationAction icon={<FavoriteIcon sx={{ color: '#96A7AF' }} />} />
                <BottomNavigationAction icon={<Notifications sx={{ color: '#96A7AF' }} />} />
            </BottomNavigation>
        </Paper>
    )
}

export default BottomNavigationBar
