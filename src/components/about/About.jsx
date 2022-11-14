import React, {useEffect} from 'react';
import hoverEffect from 'hover-effect';
import './About.css';
import Data from './data';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About({theme}) {

    const {ref, inView} = useInView();
    const animation = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start({
                x:0,
                transition:{
                    type:'spring', duration:2, bounce:0.1
                }
            });
        }
        if(!inView){
            animation.start({
                x:'-90vw',
            });
        }
    },[inView]);

    useEffect(()=> {
        var image_animate = new hoverEffect({
          parent: document.querySelector(".about-img"),
          intensity: 2,
          image1: 'assets/images/about.jpg',
          image2: 'assets/images/about-2.jpg',
          displacementImage: 'assets/images/overlay.png',
          imagesRatio : 600/350
        })
    },[]);
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:4}}>
        <div className={theme ? 'about' : 'about-dark'}>
            <div className="about-text-wrapper">
                <div className={theme ? "heading" : "heading-dark"}>
                    <h1 >Hello there!</h1>
                </div>
                <div className="desc">
                    <p>I am Priyanshi a Fashion and Textile designer. I am deeply interested in various fashion fields, textile developments and handcrafting. I can describe myself as a motivated and reliable person, energetic and able to take over responsibility. I believe our mind is capable much more than we are aware of and I want to exceed the boundaries of what has already been done, seen and used.</p>
                </div>
            </div>
            <div className="about-img-wrapper">
                <div className="about-img"></div>
            </div>
            <motion.div ref={ref} animate={animation} className="about-experience-wrapper">
                <div  className="about-experience-heading">
                    <h1>Experience</h1>
                </div>
                <ul className="about-experience-list">
                    {Data.map((d) => (
                        <>
                            <li  className="about-experience-list-item">
                                <div className="list-left">
                                    <div className="enterprise">
                                        <h3>{d.enterprise}</h3>
                                    </div>
                                    <div className="role">
                                        <h5>{d.role}</h5>
                                    </div>
                                </div>
                                <div className="list-right">
                                    <h3>{d.experience}</h3>
                                </div>
                            </li>
                            <hr ></hr>
                        </>)
                    )}
                    
                </ul>
            </motion.div>
            <div className="about-hobbies-wrapper"></div>
        </div>
        </motion.div>
    )
}
