import React from 'react';
import LogoText from './LogoText';
import { Toolbar } from '@material-ui/core'
import ButtonForAuth from '../Login/ButtonForAuth'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  header: {
    position: 'relative',
    zIndex: 200,
    width: '100%',
    boxShadow: '0 0 30px -10px rgba(0,0,0,.2)',
    right: 0,
    backgroundColor: 'rgba(255,255,255,0.95)',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    maxwidth: '1350px',
    alignItems: 'center',
  },
  wrapper: {
    width: '100%',
  },
}));
function Header() {
  const classes = useStyles();
  return (
    <div>
        <Toolbar className={classes.navbar}>
          <LogoText />
          <ButtonForAuth />
      </Toolbar>
    </div>
  );
}

export default Header;
