import React from 'react'
import "./Footer.css";

function Footer() {
    return (
        <div>
            <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-12 col-md-12">
            <div className="footer-info">
              <h3>Volkswagen</h3>
              <p>
                Siddhant Deshpande<br/>
                Software Engineer Intern @ VWITS<br/><br/>
                <strong>Phone:</strong> 8605870400<br/>
                <strong>Email:</strong> siddhant.volkswagen.co.in<br/>
              </p>
              <div className="social-links mt-3">
                <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>

    <div className="container">
      <div className="copyright">
       <strong><span>VOLKSWAGEN</span></strong>
      </div>
      <div className="credits">
        
        Designed and edited by Siddhant Deshpande using Bootstrap5
      </div>
    </div>
  </footer>
        </div>
    )
}

export default Footer
