import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import styles from './Navbar.module.css';
import mainTheme from '../themes/navbar-theme';
import { Slide } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {flexGrow: 1},
    menuButton: {marginRight: theme.spacing(2)},
    title: { flexGrow: 1}
}));

const HideOnScroll = (props) => {
    const trigger = useScrollTrigger();
    return (
        <Slide in={!trigger}>
            {props.children}
        </Slide>
    );
}

const Navbar = () => {

    const classes = useStyles();

    return (
        <div className={`${classes.root} ${styles.navbar}`}>
            <ThemeProvider theme={mainTheme}>
                <HideOnScroll>
                    <AppBar position="fixed" color="primary">
                        <Toolbar>
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                My Artfolio
                        </Typography>
                            <Button color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar>
                </HideOnScroll>
            </ThemeProvider>
        </div>
    );
}

export default Navbar;