import React from 'react'
import Header from './include/header'
import Footer from './include/footer'
import './contact.css'
const Contact = () => {
    return (
        <>
            <Header />
            <div className="about">
                <div className="blur">
                    <p>Contact Us </p>
                    <h1>Get In Touch</h1>
                </div>
            </div>
            <div className="contact">
                <div className="contt">
                    <div className="cont_contact">
                        <i className='fas fa-headset'></i>
                        <h5>Call Us</h5>
                        <p>+91 8448260587</p>
                    </div>
                    <div className="cont_contact">
                        <i className='fas fa-comment'></i>
                        <h5>Email Us
                        </h5>
                        <p>jaiswalyashika79@gmail.com</p>
                    </div>
                    <div className="cont_contact">
                        <i className='fas fa-location-dot'></i>
                        <h5>Location
                        </h5>
                        <p>Delhi</p>
                    </div>
                </div>
            </div>
            <div className="contact_container">
                <div className="contt">
                    <h1>Contact Us</h1>
                    <p>Laboriosam exercitationem molestias beatae eos pariatur, similique, excepturi mollitia sit perferendis maiores ratione aliquam?

                    </p>
                    <form action="">
                        <input type="text" placeholder='Your Full Name' />
                        <input type="email" name="" placeholder='Your Email Address' id="" />
                        <input type="text" placeholder='Your Query Topic' name="" id="" />
                        <input type="number" placeholder='Your Phone Number' name="" id="" />
                        <textarea name="" placeholder='Your Message' id=""></textarea>
                        <button>Send Message</button>
                    </form>
                </div>
            </div>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.9510578851!2d76.76355803886992!3d28.644287347036204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1751524244624!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
            ></iframe>

            <Footer />

        </>
    )
}

export default Contact