import React, { useState, useEffect } from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom'
import MobileMenu from './MobileMenu.js'



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        boxShadow: 'none',
        // '& > * + *': {
        //     marginLeft: theme.spacing(2),
        //     }
    },
    toolBar: {
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        padding: 0,
    },
    title: {
        flexGrow: 1,
    },
    logo: {
        width: '130px',
        margin: '10px 0px 10px 142px',
        [theme.breakpoints.up('lg')]: {
            width: '130px',
            margin: '10px 0px 10px 142px'
        },
        [theme.breakpoints.up('md')]: {
            width: '130px',
            margin: '10px 0px 10px 119px'
        }
    }

}));

export default function NavBar(props) {
    const [loggedIn, setLoggedIn] = useState(false);
    useEffect(() => {
        let token = localStorage.getItem('token');
        if(token!==null) setLoggedIn(true);
    }, []);
    const classes = useStyles();

    const preventDefault = (event) => event.preventDefault();
    const logout = ()=>{
        localStorage.removeItem('token')
        setLoggedIn(false)
    }
    return (
        <div>
            <AppBar className={classes.appBar} position="fixed" elevation={0}>
                <Toolbar className={classes.toolBar}>
                    <a href="/" className="logo-poolpo">
                        <img src="/assets/header/logo-poolpo.svg" alt="logo-poolpo" />
                    </a>
                    <div className="nav-desktop">
                        <Link to="/Nosotros" className="menu-link">Nosotros</Link>
                        <Link to="/PreguntasFrecuentes" className="menu-link">Preguntas frecuentes</Link>
                        <Link to="/Prensa" className="menu-link">Prensa</Link>
                        <Link to="/Contacto" className="menu-link">Contacto</Link>
                        <Link to="/Login" className="menu-link" onClick={ loggedIn? ()=>logout(): null }>
                            { loggedIn? "Logout": "Login" }
                        </Link>
                    </div>
                    <div className="nav-tablet">
                        <MobileMenu />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
