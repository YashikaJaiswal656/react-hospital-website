import React from 'react'
import Header from './include/header'
import Footer from './include/footer'

const Appointment = () => {
    return (
        <>
            <Header />
            <div className="about">
                <div className="blur">
                    <p>Book your Seat
                    </p>
                    <h1>Appoinment
                    </h1>
                </div>
            </div>
            <div className="contact_container appointment">
                <div className="contt">
                    <h1>Contact Us</h1>
                    <p>Laboriosam exercitationem molestias beatae eos pariatur, similique, excepturi mollitia sit perferendis maiores ratione aliquam?

                    </p>
                    <form action="" className='ap_form'>
                        <select name="" id="">
                            <option value="">Choose Department</option>
                            <option value="">Heart</option>
                            <option value="">Eyes</option>
                            <option value="">Bones</option>
                            <option value="">Skin</option>
                            <option value="">Hair</option>

                        </select>
                        <select name="" id="">
                            <option value="">Select Doctor</option>
                            <option value="">Cardiologist</option>
                            <option value="">Ophthalmologist </option>
                            <option value="">Orthopedic </option>
                            <option value=""> Dermatologist</option>
                            <option value="">Trichologist</option>
                        </select>
                        <input type="date" name="" id="" />
                        <input type="time" placeholder='Time' name="" id="" />

                        <input type="text" placeholder='Your Full Name' />

                        <input type="number" placeholder='Your Phone Number' name="" id="" />
                        <textarea name="" placeholder='Your Message' id=""></textarea>
                        <button>Make Appointment{'>'}</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Appointment