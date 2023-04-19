import { React, useEffect } from 'react'
import './contact.css'
import { sr } from '../../ultis/ScrollReveal';
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";

const Contact = () => {

    useEffect(() => {
        sr.reveal('.contact__profolio', { interval: 200 });
        sr.reveal('.contact__social', { interval: 200 });
        sr.reveal('.contact__input', { interval: 200 });
        sr.reveal('.contact__button', { interval: 200 });
    }, [])

    return (
        <>
            <section className="contact section" id="contact">
                <h2 className="section-title">Liên Hệ</h2>

                <div className="contact__container bd-grid">
                    <div className="contact__profolio">
                        <div className="address">
                            <h2>Address:</h2>
                            <p>Hoang Mai District, Hanoi</p>
                        </div>
                        <div className="links">
                            <h2>Contact me:</h2>
                            <div>
                                <a href="tel:+84342991302"><FiPhoneCall />+84 342 991 302</a><br />

                                <a href="mailto:tdhh2008@gmail.com"><HiOutlineMailOpen />tdhh2008@gmail.com</a>
                            </div>
                            <div className="contact__social">
                                <a href="https://www.instagram.com/hhoang_208/" className="contact__social-icon"><BsInstagram /></a>
                                <a href="https://www.facebook.com/tdhh2008" className="contact__social-icon"><BsFacebook /></a>
                                <a href="/" className="contact__social-icon"><AiFillGithub /></a>
                            </div>
                        </div>
                    </div>
                    <div className="cotact__form">
                        <form >
                            <input type="text" placeholder="Name" className="contact__input" />
                            <input type="mail" placeholder="Email" className="contact__input" />
                            <textarea name="" id="" cols="0" rows="10" className="contact__input"></textarea>
                            <button className='contact__button'>Send Message</button>
                        </form>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Contact
