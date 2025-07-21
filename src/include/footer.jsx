import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <>
 <footer className="custom-footer">
      <div className="footer-container">
        {/* Left Column */}
        <div className="footer-col footer-about">
          <div className="footer-logo">
            <img src="https://img.icons8.com/color/48/medical-doctor.png" alt="Novena Logo" />
            <span>HOSPITAL</span>
          </div>
          <p>
            Tempora dolorem voluptatum nam vero assumenda voluptate, facilis ad eos obcaecati tenetur veritatis eveniet distinctio possimus.
          </p>
          <div className="footer-social">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        
        <div className="footer-col">
          <h3>Department</h3>
          <div className="underline"></div>
          <ul>
            <li>Surgery</li>
            <li>Women's Health</li>
            <li>Radiology</li>
            <li>Cardioc</li>
            <li>Medicine</li>
          </ul>
        </div>

        
        <div className="footer-col">
          <h3>Support</h3>
          <div className="underline"></div>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Company Support</li>
            <li>FAQuestions</li>
            <li>Company Licence</li>
          </ul>
        </div>


        <div className="footer-col footer-contact">
          <h3>Get In Touch</h3>
          <div className="underline"></div>
          <ul>
            <li>FAQuestions</li>
            <li>Support Available for 24/7</li>
            <li><strong>jaiswalyashika79@gmail.com</strong></li>
            <li><i className="fas fa-clock"></i> Mon to Fri : 08:30 - 18:00</li>
            <li><strong>+91 8448260587</strong></li>
          </ul>
        </div>
      </div>
    </footer>
<div className="footer">
<div className="contt">
  <p>© Copyright Reserved to Hospital by <h4>Yashika</h4>
</p>
</div>
</div>

    
    </>
  )
}

export default Footer