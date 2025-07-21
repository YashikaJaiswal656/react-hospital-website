import React from 'react'
import Header from './include/header'
import './app.css'
import Footer from './include/footer'
const App = () => {
  return (
    <>
      <Header />
      <div className="bg_cont">
        <div className="cont">
          <p>Total Health care solution</p>
          <h1>Your most trusted <br /> health partner</h1>
          <span>A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium quisquam <br /> aperiam maiores sunt fugit, deserunt rem suscipit placeat.

          </span>
          <button>Make appointment </button>
        </div>

      </div>
      <div className="box">
        <div className="contt">
          <div className="sm">
            <div className="sm_box">
              <i className='fas fa-user-doctor'></i>
              <span>24 Hours Service
              </span>
              <h4>Online Appoinment
              </h4>
              <p>Get ALl time support for emergency.We have introduced the principle of family medicine.

              </p>
              <button>Make An Appointment</button>
            </div>
            <div className="sm_box">
              <i className='fas fa-clock'></i>
              <span>Timing schedule

              </span>
              <h4>Working Hours

              </h4>
              <p>Get ALl time support for emergency.We have introduced the principle of family medicine.

              </p>
              <button>Make An Appointment</button>
            </div>
            <div className="sm_box">
              <i className='fas fa-user-doctor'></i>
              <span>Emegency Cases

              </span>
              <h4>1-800-700-6200

              </h4>
              <p>Get ALl time support for emergency.We have introduced the principle of family medicine.

              </p>
              <button>Make An Appointment</button>
            </div>
          </div>
        </div>
      </div>
      <div className="care">
        <div className="contt">
          <div className="cr_ct">
            <div className="img">
              <img src="https://technext.github.io/novena/images/about/img-1.jpg" alt="" />
              <img src="https://technext.github.io/novena/images/about/img-2.jpg" alt="" />
            </div>
            <img src="https://technext.github.io/novena/images/about/img-3.jpg" alt="" />
            <div className="para">
              <h2>Personal care
                & healthy living</h2>
              <p>We provide best leading medicle service Nulla perferendis veniam deleniti ipsum officia dolores repellat laudantium obcaecati neque.

              </p>
              <button>Services</button>
            </div>
          </div>
        </div>
      </div>

      <div className="client">
        <div className="container">
          <div className="blur">
            <div className="context">
              <span>58</span>
              <p>Happy People</p>
            </div>
            <div className="context">
              <span>700</span>
              <p>Surgery Comepleted

              </p>
            </div>
            <div className="context">
              <span>46</span>
              <p>Expert Doctors

              </p>
            </div>
            <div className="context">
              <span>20</span>
              <p>Worldwide Branch

              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="award">
        <div className="conttt">
          <h1>Award winning patient care
          </h1>
          <div className="testimonal">
            <div className="test_box">
              <div className="icon">
                <i className='fas fa-vial'></i>
                <h4>Laboratory services</h4>

              </div>
              <p>Saepe nulla praesentium eaque omnis perferendis a doloremque.

              </p>
            </div>
            <div className="test_box">
              <div className="icon">
                <i className='fas fa-heart'></i>
                <h4>Heart Disease
</h4>

              </div>
              <p>Saepe nulla praesentium eaque omnis perferendis a doloremque.

              </p>
            </div>
            <div className="test_box">
              <div className="icon">
                <i className='fas fa-teeth'></i>
                <h4>Dental Care
</h4>

              </div>
              <p>Saepe nulla praesentium eaque omnis perferendis a doloremque.

              </p>
            </div>
            <div className="test_box">
              <div className="icon">
                <i className='fas fa-person'></i>
                <h4>Body Surgery
</h4>

              </div>
              <p>Saepe nulla praesentium eaque omnis perferendis a doloremque.

              </p>
            </div>
            <div className="test_box">
              <div className="icon">
                <i className='fas fa-brain'></i>
                <h4>Neurology Sargery
</h4>

              </div>
              <p>Saepe nulla praesentium eaque omnis perferendis a doloremque.

              </p>
            </div>
<div className="test_box">
              <div className="icon">
                <i className='fas fa-virus'></i>
                <h4>Gynecology
</h4>

              </div>
              <p>Saepe nulla praesentium eaque omnis perferendis a doloremque.

              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="appointment">
        <div className="contt">
          <div className="ap_cont">
            <img src="https://technext.github.io/novena/images/about/img-3.jpg" alt="" />
          <div className="text">
            <h1>Book appoinment
</h1>
<p>Mollitia dicta commodi est recusandae iste, natus eum asperiores corrupti qui velit . Iste dolorum atque similique praesentium soluta.

</p>
<form action="" >
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
  <input type="date" name="" id="" placeholder='dd/mm/yyyy'/>
  
  <input type="text" placeholder='Full Name'/>
  <input type="email" name="" id="" placeholder='Email'/>
  <input type="number" name="" id="" placeholder='Phone Number' />
  <textarea name="" id="" placeholder='Your Message'></textarea>
  <button>Make Appointment</button>
</form>

          </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default App