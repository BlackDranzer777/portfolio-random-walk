import React, {useRef, useState, useEffect} from 'react';
import './Contact.css';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

export default function Contact({theme}) {

    const formRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const subjectRef = useRef();
    const messageRef = useRef();

    const [done, setDone] = useState(false); 

    const submitHandler = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_qn4tkyu', 'template_pr8f5qh', formRef.current, 'user_o2EulYYrRyShOqcyphEoV')
        .then((result) => {
            setDone(true);
            console.log(result.text);
            nameRef.current.value = '';
            emailRef.current.value = '';
            subjectRef.current.value = '';
            messageRef.current.value = '';
        }, (error) => {
            console.log(error.text);
        });
    }

    useEffect(() => {
        const messageTimer = setTimeout(() => {
          if(done){
            setDone(false);
          }
        }, 7000);
        return () => window.clearTimeout(messageTimer);
      }, [done]);

    return (
        <motion.div className={theme ? 'contact' :'contact-black'} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:4}}>
            <div className="contact-left">
                <div className={theme ? "contact-heading" : "contact-heading-black"}>
                    <h1>Let's connect!</h1>
                </div>
                <div className="social-media">
                    <a href='https://instagram.com/priyanshisharma_9?utm_medium=copy_link'><h2 className="instagram">instagram</h2></a>
                    <a href='https://www.linkedin.com/in/priyanshi-sharma-913b1319b'><h2 className="linkedin">linkedin</h2></a>
                </div>
            </div>
            <div className="contact-right">
                <form className="form" ref={formRef} onSubmit={submitHandler} >
                    <input type="text" ref={nameRef} name='user_name' className={theme ? 'input' : 'input-black'} placeholder='name'/>
                    <input type="text" ref={subjectRef} name='user_subject' className={theme ? 'input' : 'input-black'} placeholder='subject' />
                    <input type="text" ref={emailRef} name='user_email' className={theme ? 'input' : 'input-black'} placeholder='email' />
                    <textarea name="message" ref={messageRef} className={theme ? 'textarea' : 'textarea-black'} placeholder='message'></textarea>
                    <button className={theme ? 'button' : 'button-black'} type='submit'>Submit</button>
                    {done && <h5>Thanks! for connecting. I'll reply ASAP.</h5>}
                </form>
            </div>
        </motion.div>
    )
}
