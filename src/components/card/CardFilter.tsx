import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

export default function Filter() {

    return (
        <Grid container spacing={2}>
        <Grid xs={8}>
            <Paper>xs=8</Paper>
        </Grid>
        <Grid xs={4}>
            <Paper>xs=4</Paper>
        </Grid>
    </Grid>
    )
}