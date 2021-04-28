import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createMuiTheme } from '@material-ui/core/styles';

import styles from './Navbar.module.css';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: 'rgba(93, 193, 185, .7)'
            ,
        },
        secondary: {
            main: '#f44336',
        },
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));





const Navbar = () => {

    const classes = useStyles();

    return (
        <div className={`${classes.root} ${styles.navbar}`}>
            <ThemeProvider theme={theme}>
                <AppBar position="fixed" color="primary">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            News
              </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </div>
    );
}

export default Navbar;