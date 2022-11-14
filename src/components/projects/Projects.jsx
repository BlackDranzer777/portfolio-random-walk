import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';

export default function Projects({theme}) {
    return (
        <motion.div class="container" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:4}}>        
            <section className={theme ? '' : 'dark' }><h1>Under Construction</h1></section>
            <section className={theme ? '' : 'dark' }><h1>Under Construction</h1></section>
            <section className={theme ? '' : 'dark' }><h1>Under Construction</h1></section>
            <section className={theme ? '' : 'dark' }><h1>Under Construction</h1></section>
        </motion.div>
    )
}
