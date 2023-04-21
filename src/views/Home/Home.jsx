import { React, useEffect } from 'react'
import './home.css'
import {IMG_2527} from '../../assets/img/IMG_2527.jpg'
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
                        Hi,I'm <br/><span className="home__title-color">Tran Dinh Huy Hoang </span>
                    </h1>
                    <a href="https://drive.google.com/file/d/1q0h-tz9pBmEoez5oiWrRMIkoGmONN33C/view?usp=sharing" className="button">MyCV</a>
                </div>
                <div className="home__img">    
                    <img src={IMG_2527} alt="Avatar"/>
                </div>
            </section>
        </>
    )
}

export default Home
