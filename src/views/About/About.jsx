import { React, useEffect } from 'react'
import './about.css'
import about from '../../assets/img/about.jpg'
import { sr } from '../../ultis/ScrollReveal';

const About = () => {

    useEffect(() => {
        sr.reveal('.about__img', {});
        sr.reveal('.about__subtitle', { delay: 400 });
        sr.reveal('.about__text', { delay: 400 });
    }, [])

    return (
        <>
            <section className="about section " id="about">
                <h2 className="section-title">About</h2>

                <div className="about__container bd-grid">
                    <div className="about__img">
                        <img src={about} alt="About" />
                    </div>

                    <div>
                        <h2 className="about__subtitle">I'm Tran Dinh Huy Hoang</h2>
                        <p className="about__text">
                             20/08/2001
                        </p>
                        <p className="about__text">
                            Learn and improve your programming expertise. Desire to become a part of the business to learn and improve myself.
                        </p>
                        <h3 className="about__subtitle">Education</h3>
                        <p className="about__education">
                            HaNoi University Business And Technology
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
