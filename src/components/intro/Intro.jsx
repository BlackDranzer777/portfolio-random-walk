import React, {useRef, useEffect} from 'react';
import RandomWalk from '../sketches/RandomWalk';
import RandomWalkBlack from '../sketches/RandomWalkBlack';
import RandomWalkMobile from '../sketches/RandomWalkMobile'
import RandomWalkBlackMobile from '../sketches/RandomWalkBlackMobile'
import './Intro.css';
import { motion } from 'framer-motion';

export default function Intro({theme}) {

    const width = window.innerWidth;
    
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:4}}>
        <div className={theme ? 'intro' : 'intro-black'}>
            <div className="sketch-container">
                <div className="sketch">
                    {   width > 998 ?
                        theme ? <RandomWalk/> : <RandomWalkBlack/>
                        : theme ? <RandomWalkMobile/> : <RandomWalkBlackMobile/>
                    }
                </div>
            </div>
            <div className="info-container">
                <div className="info">
                    <h1 className="info-name">Priyanshi Sharma</h1>
                    <h2 className="info-role">Designer</h2>
                    {/* <p className="info-desc">
                    I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. 
                    </p> */}
                </div>
            </div>
        </div>
        </motion.div>
    )
}
