import { React, useEffect } from 'react'
import './home.css'
import ava from '../../assets/img/ava.jpg'
import { sr } from '../../ultis/ScrollReveal';

const Home = () => {
    
    useEffect(() => {
        sr.reveal('.home__title',{}); 
        sr.reveal('.button',{delay: 200}); 
        sr.reveal('.home__img',{delay: 400}); 
    }, [])

    return (
        <>
            <section className="home bd-grid" id="home">
                <div className="home__data">
                    <h1 className="home__title">
                        Xin Chào,Tôi là <br/><span className="home__title-color">Trần Đình Huy Hoàng </span>
                    </h1>
                    <a href="https://drive.google.com/file/d/1q0h-tz9pBmEoez5oiWrRMIkoGmONN33C/view?usp=sharing" className="button">Xem CV</a>
                </div>
                <div className="home__img">    
                    <img src={ava} alt="Avatar"/>
                </div>
            </section>
        </>
    )
}

export default Home
