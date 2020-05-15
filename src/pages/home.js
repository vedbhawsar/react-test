import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Services from '../components/services'
import Providers from '../components/providers'

import {useSelector} from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:"5px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Home() {
  const classes = useStyles();
  const state = useSelector(state => state);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>          
        <Grid item xs={12} sm={6} >
          <Paper className={classes.paper}>
            <Services></Services>
          </Paper>
        </Grid>
        <Grid item  xs={12} sm={6}>
          <Paper className={classes.paper}>
              <Providers ></Providers>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}