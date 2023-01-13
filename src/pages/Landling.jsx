import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import Footer from '../component/Footer';
import Images from '../helpers/Images';
const Landling = () => {
   const navigate=useNavigate()
   const gallerydata=[
      Images.fourgl, Images.eightgl,Images.threegl,Images.sevengl,Images.onegl,Images.twogl,Images.fivegl,Images.sixgl
   ]
   return (
      <div className="main-layout">


         <header>

            <div className="header">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                        <div className="full">
                           <div className="center-desk">
                              <div className="logo"> <a href="index.html">
                                 {/* <img src="images/logo.png" alt="#"> */}
                                    </a> </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                        <div className="menu-area">
                           <div className="limit-box">
                              <nav className="main-menu">
                                 <ul className="menu-area-main">
                                    <li className="active">
                                        <a href="#">Home</a> </li>
                                    <li> <a href="#about">About</a> </li>
                                    <li><a href="#plant">Plant</a></li>
                                    <li><a href="#gallery">Gallery</a></li>
                                    <li><a href="#contact">Contact Us</a></li>
                                    <li className="last"><a href="#"><img src={Images.search_icon} alt="icon" /></a></li>
                                 </ul>
                              </nav>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </header>

         <section >
            <div id="main_slider" className="carousel slide banner-main" data-ride="carousel">
               <ol className="carousel-indicators">
                  <li data-target="#main_slider" data-slide-to="0" className="active"></li>
                  <li data-target="#main_slider" data-slide-to="1"></li>
                  <li data-target="#main_slider" data-slide-to="2"></li>
               </ol>
               <div className="carousel-inner">
                  <div className="carousel-item active">
                     <div className="container">
                        <div className="row marginii">
                           <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                              <div className="carousel-caption ">
                                 <h1>Welcome To The <strong className="color">{"Flower Decoration"}</strong></h1>
                                 <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>
                                 <a className="btn btn-lg btn-primary" href="#" role="button">
                                    About
                                    </a>
                                 <a className="btn btn-lg btn-primary" href="#" role="button">Contact US</a>
                              </div>
                           </div>
                           <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                              <div className="img-box">
                                 <figure>
                                    <img src={Images.gyufyufyu} alt="img" />
                                 </figure>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="container">
                        <div className="row marginii">
                           <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                              <div className="carousel-caption ">
                                 <h1>Welcome To The <strong className="color">Nutrients Plants</strong></h1>
                                 <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>
                                 <a className="btn btn-lg btn-primary" href="#" role="button">About</a>
                                 <a className="btn btn-lg btn-primary" href="#" role="button">Contact US</a>
                              </div>
                           </div>
                           <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                              <div className="img-box ">
                                 <figure><img src="images/gyufyufyu.png" alt="img" /></figure>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="container">
                        <div className="row marginii">
                           <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                              <div className="carousel-caption ">
                                 <h1>Welcome To The <strong className="color">Nutrients Plants</strong></h1>
                                 <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>
                                 <a className="btn btn-lg btn-primary" href="#" role="button">About</a>
                                 <a className="btn btn-lg btn-primary" href="#" role="button">Contact US</a>
                              </div>
                           </div>
                           <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                              <div className="img-box">
                                 <figure><img src={Images.gyufyufyu} alt="img" /></figure>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
                  <i className='fa fa-angle-left'></i></a>
               <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
                  <i className='fa fa-angle-right'></i>
               </a>
            </div>
         </section>

         <div id="plant" className="plants">
            <div className="container">
               <div className="row">
                  <div className="col-md-12 ">
                     <div className="titlepage">
                        <h2>Our Decoration</h2>
                        <span>looking at its layout. The point of using Lorem Ipsumletters, as opposed to usingl</span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="container">
               <div className="row">
                  {gallerydata.slice(0,6).map((item)=>(
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                     <div className="plants-box">
                        <figure><img src={item} alt="img" style={{height:300,width:400}} /></figure>
                        <h3> Floral Vibrant</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page   when looking at its layout. The point of using Lorem Ipsumletters, as opposed to using</p>
                     </div>
                  </div>
                 ))}
               </div>
            </div>
         </div>

         <div id="about" className="about">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                     <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="about-box">
                           <h2>50</h2>
                           <div className="white-bg">
                              <span>Satisfaction</span>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="about-box">
                           <h2>50</h2>
                           <div className="white-bg">
                              <span>Free Delivery</span>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="about-box">
                           <h2>50</h2>
                           <div className="white-bg">
                              <span>Store Locators</span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                     <div className="about-box">
                        <div className="titlepage">
                           <h2>About US</h2>
                           <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web pageweb page</span>
                           <div className="read-more">
                              <a href="#">Read More</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div id="gallery" className="Gallery">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <div className="titlepage">
                        <h2>Our Gallery </h2>
                     </div>
                  </div>
               </div>
            </div>
            <div className="container-fluid margin-r-l">
               <div className="row">
                  {gallerydata.map((item)=>(

                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 thumb">
                      <div className="Gallery-box">
                         <figure>
                          <a href={item} className="fancybox" rel="ligthbox">
                      <img  src={item} className="zoom img-fluid " style={{height:300,width:500}}  alt=""/> 
                            </a>
                            <span className="hoverle">
                               <a href={item} className="fancybox" rel="ligthbox">View</a>
                            </span>
                         </figure>
                      </div>
                   </div>
                  ))}
                
               </div>
            </div>

            <div id="contact" className="contact">
               <div className="container">
                  <div className="row">
                     <div className="col-md-12">
                        <div className="titlepage">
                           <h2>Contact Us</h2>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 paddimg-right">
                        <div className="row">
                           <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                              <form>
                                 <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                       <input className="form-control" placeholder="Name" type="text" name="Name" />
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                       <input className="form-control" placeholder="Email" type="text" name="Email" />
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                       <input className="form-control" placeholder="Phone" type="text" name="Phone" />
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                       <textarea className="textarea>" placeholder="Message" type="text" name="Message"></textarea>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                       <a href="#">Read More</a>
                                    </div>
                                 </div>
                              </form>
                           </div>
                           <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                              <div className="map_section">
                                 <figure>
                                  <img src="images/map.jpg"/> 

                                 </figure>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 paddimg-left">
                        <div className="Nursery-img">
                           <figure>
                              <img src={Images.banner_bg} alt="img" />
                              <div className="text-box">
                                 <h3>Best Green Nursery</h3>
                              </div>
                           </figure>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

      <Footer/>

         </div>
         </div>
         )
}
export default  Landling