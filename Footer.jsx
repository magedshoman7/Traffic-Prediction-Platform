import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    typographyStyles: {
        flex: 1
    }
}));
const Footer = () => {
    const classes = useStyles();
    return(
        <AppBar position='static' style={{backgroundColor: "grey" }}>
            <Toolbar margin='auto'>
                {/* <img src={require("/home/admin/Desktop/dashboard/Maged2/my-app/src/images/mizzou.jpeg")}/> */}
                <Typography className={classes.typographyStyles}>
                Developed by Maged Shoman, CEE Department, University of Missouri (Columbia) &reg; {new Date().getFullYear()}
                </Typography>
                {/* <ExitToAppIcon /> */}
            </Toolbar>
        </AppBar>
    );
};

export default Footer;