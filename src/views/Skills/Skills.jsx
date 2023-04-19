import { React, useEffect } from 'react'
import './skills.css'
import work3 from '../../assets/img/work3.jpg'
import { sr } from '../../ultis/ScrollReveal';

const Skills = () => {

    useEffect(() => {
        sr.reveal('.skills__subtitle',{}); 
        sr.reveal('.skills__text',{}); 
        sr.reveal('.skills__data',{interval: 200}); 
        sr.reveal('.skills__img',{delay: 600});
    }, [])

    return (
        <>
            <section className="skills section" id="skills">
                <h2 className="section-title">Kỹ Năng</h2>

                <div className="skills__container bd-grid">          
                    <div>
                        <h2 className="skills__subtitle">Kỹ Năng Nổi Bật</h2>
                        <p className="skills__text">Tích Luỹ Được Trong Quá Trình Học Tập</p>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-html skills__icon'></i>
                                <span className="skills__name">HTML</span>
                            </div>
                            <div className="skills__bar skills__html">

                            </div>
                            <div>
                                <span className="skills__percentage">75%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-css skills__icon'></i>
                                <span className="skills__name">CSS</span>
                            </div>
                            <div className="skills__bar skills__css">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">65%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-javascript skills__icon' ></i>
                                <span className="skills__name">JAVASCRIPT</span>
                            </div>
                            <div className="skills__bar skills__js">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">55%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxs-reactjs skills__icon'></i>
                                <span className="skills__name">ReactJS</span>
                            </div>
                            <div className="skills__bar skills__react">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">45%</span>
                            </div>
                        </div>
                    </div>
                    
                    <div>              
                        <img src={work3} alt="" className="skills__img" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills
