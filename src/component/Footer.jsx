const Footer=()=>{
    return(
        <footer>
        <div id="contact" className="footer">
           <div className="container">
              <div className="row pdn-top-30">
                 <div className="col-md-12 ">
                    <div className="footer-box">
                       <div className="headinga">
                          <h3>Address</h3>
                          <span>Demo Store .New York  United States</span>
                          <p>(+71 98765348)</p>
                       </div>
                       <ul className="location_icon">
                           <li> <a href="#"><img src="icon/facebook.png"/></a></li>
                    <li> <a href="#"><img src="icon/Twitter.png"/></a></li>
                    <li> <a href="#"><img src="icon/linkedin.png"/></a></li>
                    <li> <a href="#"><img src="icon/instagram.png"/></a></li>
                       </ul>
                       <div className="menu-bottom">
                          <ul className="link">
                             <li> <a href="#">Home</a></li>
                             <li> <a href="#">About</a></li>
                             <li> <a href="#"> Plant</a></li>
                             <li> <a href="#">Gallery</a></li>
                             <li> <a href="#"> Contact us</a></li>
                          </ul>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
           <div className="copyright">
              <div className="container">
                 <p>Copyright 2019 All Rights Reserved Design By  <a href="https://html.design/">Free Html Templates</a></p>
              </div>
           </div>
        </div>
     </footer>
    )
}

export default Footer