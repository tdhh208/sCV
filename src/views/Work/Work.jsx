import { React, useEffect } from 'react'
import "./work.css"
import work1 from '../../assets/img/work1.jpg'
import work2 from '../../assets/img/work2.jpg'
import work3 from '../../assets/img/work3.jpg'
import work4 from '../../assets/img/work4.jpg'
import work5 from '../../assets/img/work5.jpg'
import work6 from '../../assets/img/work6.jpg'
import { sr } from '../../ultis/ScrollReveal';

const Work = () => {

    useEffect(() => {
        sr.reveal('.work__img',{interval: 200}); 
    }, [])

    return (
        <>
            <section className="work section" id="work">
                <h2 className="section-title">Kinh Nghiệm Làm Việc</h2>

                <div className="work__container bd-grid">
                    <div className="work__img">
                        <img src={work1} alt="" />
                    </div>
                    <div className="work__img">
                        <img src={work2} alt="" />
                    </div>
                    <div className="work__img">
                        <img src={work3} alt="" />
                    </div>
                    <div className="work__img">
                        <img src={work4} alt="" />
                    </div>
                    <div className="work__img">
                        <img src={work5} alt="" />
                    </div>
                    <div className="work__img">
                        <img src={work6} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Work
