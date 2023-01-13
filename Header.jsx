import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
    typographyStyles: {
        flex: 1
    }
}));
const Header = () => {
    const classes = useStyles();
    return(
        <AppBar position='static'>
            <Toolbar>
                <Typography className={classes.typographyStyles}>
                Interactive Traffic Analysis Dashboard
                </Typography>
                <Button color="inherit" size="large" startIcon={<HomeIcon />} href="/">
                    {/* New and Hot */}
                </Button>
                {/* <ExitToAppIcon href="/history"/> */}
            </Toolbar>
        </AppBar>
    );
};

export default Header;