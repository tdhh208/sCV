import React from 'react'
import './footer.css'
import hr from '../../assets/img/hr.svg'

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <ul className="footer__nav">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skill</a></li>
                    <li><a href="#work">Work Experience</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <img src={hr} className="footer__img" alt="hr" />
                <p className="footer__social">Copyright © 2023 HuyHoang. All Right Reserved</p>

            </footer>
        </div>
    )
}

export default Footer
