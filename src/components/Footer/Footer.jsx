import React from 'react'
import './footer.css'
import hr from '../../assets/img/hr.svg'

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <ul className="footer__nav">
                    <li><a href="#home">Trang Chủ</a></li>
                    <li><a href="#about">Về Bản Thân</a></li>
                    <li><a href="#skills">Kỹ Năng</a></li>
                    <li><a href="#work">Kinh Nghiệm</a></li>
                    <li><a href="#contact">Liên Hệ</a></li>
                </ul>
                <img src={hr} className="footer__img" alt="hr" />
                <p className="footer__social">Copyright © 2023 HuyHoang. All Right Reserved</p>

            </footer>
        </div>
    )
}

export default Footer
