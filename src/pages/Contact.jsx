import { Link } from 'react-router-dom';
import '../App.css'

function Contact() {
  return (
  <>
            <div className="header_section">
         <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <div className="logo"><a href="index.html">
                {/* <img src={logo}/> */}
                </a>
                </div>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                     <li className="nav-item">
                        <a className="nav-link">
                        <Link to="/">
                            Home
                            </Link>
                            </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link">
                        <Link to="/services">
                            services
                            </Link>
                            </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link">
                        <Link to="/about">
                            About
                            </Link>
                            </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link">
                        <Link to="/shop">
                            Shop
                            </Link>
                            </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="contact.html">
                        <Link to="/contact">
                            Contact
                            </Link>
                            </a>
                     </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0">
                     <h1 className="call_text">Call Us : +01 1234567890</h1>
                  </form>
                  <div className="search_icon">
                     <ul>
                        {/* <li><a href="#"><img src="./images/search-icon.png"/></a></li> */}
                        <li><a href="#">LOGIN</a></li>
                     </ul>
                  </div>
               </div>
            </nav>
         </div>
      </div>
   
      <div className="banner_section layout_padding">
         <div className="container">
            <div id="costum_slider" className="carousel slide" data-ride="carousel">
               <div className="carousel-inner">
                  <div className="carousel-item active">
                     <h1 className="furniture_text">FURNITURE</h1>
                     <p className="there_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some fo</p>
                     <div className="contact_bt_main">
                        <div className="contact_bt"><a href="contact.html">Contact Us</a></div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <h1 className="furniture_text">FURNITURE</h1>
                     <p className="there_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some fo</p>
                     <div className="contact_bt_main">
                        <div className="contact_bt"><a href="contact.html">Contact Us</a></div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <h1 className="furniture_text">FURNITURE</h1>
                     <p className="there_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some fo</p>
                     <div className="contact_bt_main">
                        <div className="contact_bt"><a href="contact.html">Contact Us</a></div>
                     </div>
                  </div>
               </div>
               <a className="carousel-control-prev" href="#costum_slider" role="button" data-slide="prev">
               <i className="">
                {/* <img src="./images/left-arrow.png"/> */}
                </i>
               </a>
               <a className="carousel-control-next" href="#costum_slider" role="button" data-slide="next">
               <i className="">
                {/* <img src="./images/right-arrow.png"/> */}
                </i>
               </a>
            </div>
         </div>
      </div>
    
      <div className="services_section layout_padding">
         <div className="container">
            <h1 className="services_taital">our services</h1>
            <p className="many_taital">There are many variations of passages of Lorem Ipsum </p>
            <div className="services_section2 layout_padding">
               <div className="row">
                  <div className="col-lg-3 col-sm-6">
                     <div className="icon_1">
                      {/* <img src="./images/icon-1.png"/> */}
                      </div>
                     <h2 className="furnitures_text">Furnitures</h2>
                     <p className="dummy_text">There are many variations of passages of Lorem Ipsum available, but the</p>
                     <div className="read_bt_main">
                        <div className="read_bt"><a href="#">Read More</a></div>
                     </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                     <div className="icon_1">
                      {/* <img src="./images/icon-2.png"/> */}
                      </div>
                     <h2 className="furnitures_text">office</h2>
                     <p className="dummy_text">There are many variations of passages of Lorem Ipsum available, but the</p>
                     <div className="read_bt_main">
                        <div className="read_bt"><a href="#">Read More</a></div>
                     </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                     <div className="icon_1">
                      {/* <img src="./images/icon-3.png"/> */}
                      </div>
                     <h2 className="furnitures_text">Home</h2>
                     <p className="dummy_text">There are many variations of passages of Lorem Ipsum available, but the</p>
                     <div className="read_bt_main">
                        <div className="read_bt"><a href="#">Read More</a></div>
                     </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                     <div className="icon_1">
                      {/* <img src="./images/icon-4.png"/> */}
                      </div>
                     <h2 className="furnitures_text">badroom</h2>
                     <p className="dummy_text">There are many variations of passages of Lorem Ipsum available, but the</p>
                     <div className="read_bt_main">
                        <div className="read_bt"><a href="#">Read More</a></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
 
      <div className="about_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <h1 className="about_text">About Us</h1>
                  <p className="lorem_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believableThere are many variations of passages of Lorem Ipsum available, but the majority have able</p>
                  <div className="read_bt1"><a href="#">Read More</a></div>
               </div>
               <div className="col-md-6">
                  <div className="image_1">
                    {/* <img src="./images/img-1.png"/> */}
                    </div>
               </div>
            </div>
         </div>
      </div>
     
      <div className="furnitures_section layout_padding">
         <div className="container">
            <h1 className="our_text">OUR furnitures</h1>
            <p className="ipsum_text">There are many variations of passages of Lorem Ipsum </p>
            <div className="furnitures_section2 layout_padding">
               <div className="row">
                  <div className="col-md-6">
                     <div className="container_main">
                        {/* <img src="./images/img-2.png" alt="Avatar" className="image"/> */}
                        <div className="overlay">
                           <a href="#" className="icon" title="User Profile">
                           <i className="fa fa-search"></i>
                           </a>
                        </div>
                     </div>
                     <h3 className="temper_text">Tempor incididunt ut labore et dolore</h3>
                     <p className="dololr_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
                  </div>
                  <div className="col-md-6">
                     <div className="container_main">
                        {/* <img src="./images/img-3.png" alt="Avatar" className="image"/> */}
                        <div className="overlay">
                           {/* <a href="#" className="icon" title="User Profile"> */}
                           <i className="fa fa-search"></i>
                           {/* </a> */}
                        </div>
                     </div>
                     <h3 className="temper_text">Tempor incididunt ut labore et dolore</h3>
                     <p className="dololr_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div className="who_section layout_padding">
         <div className="container">
            <h1 className="who_taital">who we are ?</h1>
            <h4 className="designer_text">DESIGNERS & INNOVATORS</h4>
            <p className="lorem_ipsum_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
         </div>
         <div className="get_bt_main">
            <div className="get_bt"><a href="#">Get A Quote</a></div>
         </div>
      </div>
   
      <div className="projects_section layout_padding">
         <div className="container">
            <h1 className="our_text">Our projects</h1>
            <p className="ipsum_text">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            <div id="main_slider" className="carousel slide" data-ride="carousel">
               <div className="carousel-inner">
                  <div className="carousel-item active">
                     <div className="projects_section2">
                        <div className="container_main2">
                           <div className="row">
                              <div className="col-sm-4">
                                 <div className="container_main1">
                                    {/* <img src="./images/img-4.png" alt="Avatar" className="image" style="width:100%"/> */}
                                    <h1 className="modern_text">Modern home designe</h1>
                                    <div className="middle">
                                       <div className="text">VIEW MORE</div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-4">
                                 <div className="container_main1">
                                    {/* <img src="./images/img-5.png" alt="Avatar" className="image" style="width:100%"/> */}
                                    <h1 className="modern_text">Modern home designe</h1>
                                    <div className="middle">
                                       <div className="text">VIEW MORE</div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-4">
                                 <div className="container_main1">
                                    {/* <img src="./images/img-6.png" alt="Avatar" className="image" style="width:100%"/> */}
                                    <h1 className="modern_text">Modern home designe</h1>
                                    <div className="middle">
                                       <div className="text">VIEW MORE</div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="projects_section2">
                        <div className="container_main1">
                           <div className="row">
                              <div className="col-sm-4">
                                 <div className="container_main1">
                                    {/* <img src="./images/img-4.png" alt="Avatar" className="image" style="width:100%"/> */}
                                    <h1 className="modern_text">Modern home designe</h1>
                                    <div className="middle">
                                       <div className="text">VIEW MORE</div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-4">
                                 <div className="container_main1">
                                    {/* <img src="./images/img-5.png" alt="Avatar" className="image" style="width:100%"/> */}
                                    <h1 className="modern_text">Modern home designe</h1>
                                    <div className="middle">
                                       <div className="text">VIEW MORE</div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-4">
                                 <div className="container_main1">
                                    {/* <img src="./images/img-6.png" alt="Avatar" className="image" style="width:100%"/> */}
                                    <h1 className="modern_text">Modern home designe</h1>
                                    <div className="middle">
                                       <div className="text">VIEW MORE</div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="projects_section2">
                        <div className="container_main1">
                           <div className="row">
                              <div className="col-sm-4">
                                 <div className="container_main1">
                                    {/* <img src="./images/img-4.png" alt="Avatar" className="image" style="width:100%"/> */}
                                    <h1 className="modern_text">Modern home designe</h1>
                                    <div className="middle">
                                       <div className="text">VIEW MORE</div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-4">
                                 <div className="container_main1">
                                    {/* <img src="./images/img-5.png" alt="Avatar" className="image" style="width:100%"/> */}
                                    <h1 className="modern_text">Modern home designe</h1>
                                    <div className="middle">
                                       <div className="text">VIEW MORE</div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-4">
                                 <div className="container_main1">
                                    {/* <img src="./images/img-6.png" alt="Avatar" className="image" style="width:100%"/> */}
                                    <h1 className="modern_text">Modern home designe</h1>
                                    <div className="middle">
                                       <div className="text">VIEW MORE</div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
               <i className="fa fa-angle-left"></i>
               </a>
               <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
               <i className="fa fa-angle-right"></i>
               </a>
            </div>
         </div>
      </div>
     
      <div className="clients_section layout_padding">
         <div className="container">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
               <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
               </ol>
               <div className="carousel-inner">
                  <div className="carousel-item active">
                     <h1 className="client_text">what is says our clients</h1>
                     <p className="ipsum_text">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                     <div className="clients_section2 layout_padding">
                        <div className="client_1">
                           <div className="row">
                              <div className="col-sm-3">
                                 <div className="image_7">
                                  {/* <img src="./images/img-7.png"/> */}
                                  </div>
                                 <div className="quote_icon">
                                  {/* <img src="./images/quote-icon.png"/> */}
                                  </div>
                              </div>
                              <div className="col-sm-9">
                                 <h1 className="loksans_text">loksans</h1>
                                 <p className="dolor_ipsum_text">ipsum dolor sit amet, consectetur adipiscing elit, sed  veniam, quis nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate velit</p>
                              </div>
                           </div>
                        </div>
                        <div className="client_2">
                           <div className="row">
                              <div className="col-sm-3">
                                 <div className="image_7">
                                  {/* <img src="./images/img-8.png"/> */}
                                  </div>
                                 <div className="quote_icon">
                                  {/* <img src="./images/quote-icon.png"/> */}
                                  </div>
                              </div>
                              <div className="col-sm-9">
                                 <h1 className="loksans_text">loksans</h1>
                                 <p className="dolor_ipsum_text">ipsum dolor sit amet, consectetur adipiscing elit, sed  veniam, quis nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate velit</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <h1 className="client_text">what is says our clients</h1>
                     <p className="ipsum_text">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                     <div className="clients_section2 layout_padding">
                        <div className="client_1">
                           <div className="row">
                              <div className="col-sm-3">
                                 {/* <div className="image_7"><img src="./images/img-7.png"/></div>
                                 <div className="quote_icon"><img src="./images/quote-icon.png"/></div> */}
                              </div>
                              <div className="col-sm-9">
                                 <h1 className="loksans_text">loksans</h1>
                                 <p className="dolor_ipsum_text">ipsum dolor sit amet, consectetur adipiscing elit, sed  veniam, quis nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate velit</p>
                              </div>
                           </div>
                        </div>
                        <div className="client_2">
                           <div className="row">
                              <div className="col-sm-3">
                                 {/* <div className="image_7"><img src="./images/img-8.png"/></div>
                                 <div className="quote_icon"><img src="./images/quote-icon.png"/></div> */}
                              </div>
                              <div className="col-sm-9">
                                 <h1 className="loksans_text">loksans</h1>
                                 <p className="dolor_ipsum_text">ipsum dolor sit amet, consectetur adipiscing elit, sed  veniam, quis nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate velit</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <h1 className="client_text">what is says our clients</h1>
                     <p className="ipsum_text">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                     <div className="clients_section2 layout_padding">
                        <div className="client_1">
                           <div className="row">
                              {/* <div className="col-sm-3">
                                 <div className="image_7"><img src="./images/img-7.png"/></div>
                                 <div className="quote_icon"><img src="./images/quote-icon.png"/></div>
                              </div> */}
                              <div className="col-sm-9">
                                 <h1 className="loksans_text">loksans</h1>
                                 <p className="dolor_ipsum_text">ipsum dolor sit amet, consectetur adipiscing elit, sed  veniam, quis nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate velit</p>
                              </div>
                           </div>
                        </div>
                        <div className="client_2">
                           <div className="row">
                              {/* <div className="col-sm-3">
                                 <div className="image_7"><img src="./images/img-8.png"/></div>
                                 <div className="quote_icon"><img src="./images/quote-icon.png"/></div>
                              </div> */}
                              <div className="col-sm-9">
                                 <h1 className="loksans_text">loksans</h1>
                                 <p className="dolor_ipsum_text">ipsum dolor sit amet, consectetur adipiscing elit, sed  veniam, quis nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate velit</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <h1 className="client_text">what is says our clients</h1>
                     <p className="ipsum_text">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                     <div className="clients_section2 layout_padding">
                        <div className="client_1">
                           <div className="row">
                              {/* <div className="col-sm-3">
                                 <div className="image_7"><img src="./images/img-7.png"/></div>
                                 <div className="quote_icon"><img src="./images/quote-icon.png"/></div>
                              </div> */}
                              <div className="col-sm-9">
                                 <h1 className="loksans_text">loksans</h1>
                                 <p className="dolor_ipsum_text">ipsum dolor sit amet, consectetur adipiscing elit, sed  veniam, quis nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate velit</p>
                              </div>
                           </div>
                        </div>
                        <div className="client_2">
                           <div className="row">
                              {/* <div className="col-sm-3">
                                 <div className="image_7"><img src="./images/img-8.png"/></div>
                                 <div className="quote_icon"><img src="./images/quote-icon.png"/></div>
                              </div> */}
                              <div className="col-sm-9">
                                 <h1 className="loksans_text">loksans</h1>
                                 <p className="dolor_ipsum_text">ipsum dolor sit amet, consectetur adipiscing elit, sed  veniam, quis nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate velit</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   
      <div className="contact_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <h1 className="contact_text">CONTACT US</h1>
                  <div className="mail_sectin">
                     <input type="text" className="email-bt" placeholder="Name" name="Name"/>
                     <input type="text" className="email-bt" placeholder="Email" name="Name"/>
                     <input type="text" className="email-bt" placeholder="Phone Number" name="Name"/>
                     <textarea className="massage-bt" placeholder="Massage" rows="5" id="comment" name="Massage"></textarea>
                     <div className="send_bt">
                      {/* <a href="#">SEND</a> */}
                      </div>
                  </div>
               </div>
               <div className="col-md-6">
                  <div className="image_9">
                    {/* <img src="./images/img-9.png"/> */}
                    </div>
               </div>
            </div>
         </div>
      </div>
   
      <div className="footer_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-lg-3 col-sm-6">
                  <div className="fooer_logo">
                    {/* <img src="./images/footer-logo.png"/> */}
                    </div>
                  <p className="footer_lorem_text">There are many variat
                     ions of passages of L
                     orem Ipsum available
                     , but the majority h
                     ave suffered altera
                     tion in some form, by 
                  </p>
               </div>
               <div className="col-lg-3 col-sm-6">
                  <h1 className="customer_text">LET US HELP YOU</h1>
                  <p className="footer_lorem_text">There are many variat
                     ions of passages of L
                     orem Ipsum available
                     , but the majority h
                     ave suffered altera
                     tion in some form, by 
                  </p>
               </div>
            </div>
            </div>
            </div>
    
  </>


)
}

export default Contact;
