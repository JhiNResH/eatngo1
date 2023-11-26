import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import Wallet from './components/Wallet';
import { SolanaUser } from './components/SolanaUser';
import Header from './components/Header/Header';
import Map from './components/Map/Map';


const App = () => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12}>
                    <Wallet />
                </Grid>
                <Grid item xs={12}>
                    <Map />
                </Grid>
            </Grid>
        </>
    );
};

export default App;
