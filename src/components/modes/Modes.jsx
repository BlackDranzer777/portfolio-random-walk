import React from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import './Modes.css';
import {Link} from "react-router-dom";



export default function Modes({theme, clickHandler, curtain, curtainClickHandler}) {

    return (
        <div className='modes'>
            <div className={theme ? `light-dark-mode light` : `light-dark-mode dark`} onClick={clickHandler}>
                {theme ? <DarkModeIcon/> : <LightModeIcon color={'white'}/>}
            </div>
            <div className={theme ? "link link-home" : "link link-home dark" } onClick={curtainClickHandler}>
                <Link className={theme ? 'light' : 'dark'} to="/"><span>Home</span></Link>
            </div>
            <div className={theme ? "link link-about" : "link link-about dark"} onClick={curtainClickHandler}>
                <Link className={theme ? 'light' : 'dark'} to="/about"><span>About</span></Link>
            </div>
            <div className={theme ? "link link-portfolio" : "link link-portfolio dark"} onClick={curtainClickHandler}>
                <Link className={theme ? 'light' : 'dark'} to="/projects"><span>Projects</span></Link>
            </div>
            <div className={theme ? "link link-contact" : "link link-contact dark"} onClick={curtainClickHandler}>
                <Link className={theme ? 'light' : 'dark'} to="/contact"><span>Contact</span></Link>
            </div>
        </div>
    );
}
