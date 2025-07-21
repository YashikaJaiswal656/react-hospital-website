import React from 'react'
import Header from './include/header';
import Footer from './include/footer';
import './about.css'
const About = () => {
    return (
        <>
            <Header />
            <div className="about">
                <div className="blur">
                    <p>About Us</p>
                    <h1>About Us</h1>
                </div>
            </div>
            <div className="about_cont">
                <div className="contt">
                    <h1>Personal care for your healthy living
                    </h1>
                    <div className="textt">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quod laborum alias. Vitae dolorum, officia sit! Saepe ullam facere at, consequatur incidunt, quae esse, quis ut reprehenderit dignissimos, libero delectus.

                        </p>
                        <img src="https://technext.github.io/novena/images/about/sign.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="health">
                <div className="contt">
                    <div className="hl_cont">
                        <div className="boxx">
                            <img src="https://technext.github.io/novena/images/about/about-1.jpg" alt="" />
                            <h2>Healthcare for Kids
                            </h2>
                            <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .

                            </p>
                        </div>
                        <div className="boxx">
                            <img src="https://technext.github.io/novena/images/about/about-2.jpg" alt="" />
                            <h2>Medical Counseling

                            </h2>
                            <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .

                            </p>
                        </div>
                        <div className="boxx">
                            <img src="https://technext.github.io/novena/images/about/about-3.jpg" alt="" />
                            <h2>Modern Equipments

                            </h2>
                            <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .

                            </p>
                        </div>
                        <div className="boxx">
                            <img src="https://technext.github.io/novena/images/about/about-4.jpg" alt="" />
                            <h2>Qualified Doctors

                            </h2>
                            <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .

                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About;