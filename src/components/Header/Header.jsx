import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { OutlinedInput, InputAdornment, Box, IconButton, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import HotelIcon from '@material-ui/icons/Hotel';
import LocalSeeIcon from '@material-ui/icons/LocalSee';
import MuseumIcon from '@material-ui/icons/Museum';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

import useStyles from './styles.js';


const Header = () => {
    const classes = useStyles();

    const onLoad = (autocomplete) => {
        console.log('autocomplete: ', autocomplete);
    };

    const onPlaceChanged = () => {
        console.log('onPlaceChanged');
    };

    return (
        <div className={classes.toolbar}>
            {/*<Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>*/}
            <div className={classes.search}>
                <OutlinedInput
                    placeholder="Search EatNgo"
                    classes={{ root: classes.inputRoot }}
                    style={{ width: '200px', borderRadius: '20px' }}
                    startAdornment={
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    }
                />
            </div>
            {/*</Autocomplete>*/}
            <Box display="flex" alignItems="center" marginLeft="10px">
                <Box display="flex" flexDirection="row" >
                    <IconButton style={{ borderRadius: '20px' }}>
                        <RestaurantIcon />
                        <Typography variant="body2">Restaurants</Typography>
                    </IconButton>
                    <IconButton style={{ borderRadius: '20px' }}>
                        <HotelIcon />
                        <Typography variant="body2">Hotels</Typography>
                    </IconButton>
                    <IconButton style={{ borderRadius: '20px' }}>
                        <LocalSeeIcon />
                        <Typography variant="body2">Things to do</Typography>
                    </IconButton>
                    <IconButton style={{ borderRadius: '20px' }}>
                        <MuseumIcon />
                        <Typography variant="body2">Museum</Typography>
                    </IconButton>
                    <IconButton style={{ borderRadius: '20px' }}>
                        <DirectionsBusIcon />
                        <Typography variant="body2">Transit</Typography>
                    </IconButton>
                    <IconButton style={{ borderRadius: '20px' }}>
                        <LocalAtmIcon />
                        <Typography variant="body2">ATMs</Typography>
                    </IconButton>
                </Box>
            </Box>
        </div>
    );
};
export default Header;