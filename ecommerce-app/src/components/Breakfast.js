
import React, { Component, useRef, useState } from "react";
import Slider from "react-slick";
import "./Home.css";
import $ from "jquery";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";


import Breakfast1 from "./Breakfast1";
import Cart from "./Cart";
import { CartProvider } from "react-use-cart";
import Img from "./Img";
import Anand2 from './Anand2';


const Breakfast = () => {
  return (
    <body>
       
       <nav class="navbar navbar-expand-md px-5 py-3 nav1">
        <a class="navbar-brand" href="#">
          <img
            src="https://food-le.com/data/image/options/logo.png"
            width="150rem"
          ></img>
        </a>
        <a
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon">
            <img
              src="https://cdn2.iconfinder.com/data/icons/flat-and-simple-part-2/128/menu-512.png"
              width="50rem"
            ></img>
          </span>
        </a>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav mx-auto">
           
            
            <li class="nav-item">
              <a class="nav-link" href="/Breakfast">
                Break Fast
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Launch">
                Lunch
              </a>
              </li>
            <li class="nav-item">
              <a class="nav-link" href="/Dinner">
                Dinner
              </a>
            </li>
            

            <li class="nav-item dropdown">
              <a
                class="nav-link toggle"
                href="#"
                id="navbardrop"
                data-toggle="dropdown"
              >
                Order 
              </a>
              <div class="dropdown-menu">
              <a class="dropdown-item" href="/">
               Home
                </a>
                <a class="dropdown-item" href="/Breakfast">
                 Break Fast
                </a>
                <a class="dropdown-item" href="/Launch">
                  Lunch
                </a>
                <a class="dropdown-item" href="/Dinner">
                  Dinner
                </a>
              </div>
            </li>
            
            <li class="nav-item yani">
              <a class="nav-link" href="/Img">
              <img src="http://cdn.onlinewebfonts.com/svg/img_574113.png" width="30"></img>
      
              </a>
            </li>
          </ul>
        </div>
      </nav>





    <section id="Lunch1">
   <div class="container-fluid">
     <div class="row">
     
      <div class="col-md-5  pt-5  ml-5 luncc">
      <img src="https://cdn.pixabay.com/photo/2022/08/02/04/46/icon-7359529_1280.png" width="100"/>
        <h1 class="lunch2 text-white">Get Fresh<span class="lunchfood"> FOOD </span>  <br/> in a Easy Way </h1>
        <p class="lunch3 mt-3 mb-5 text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/>
                      sed do eiusmod tempor incididunt ut labore et<br/> dolore magna
                      aliqua. 
              </p>
              <a href="#" class="button-1">Order Now <span class="lunchorder"><img src="https://static.thenounproject.com/png/3592871-200.png" width="30px"/></span></a>
              
      </div>
      <div class="col-md-5 mt-5">
      <img
                src="https://www.nicepng.com/png/full/245-2459205_butter-chicken-indian-veg-food-png.png"
                height="450px"
                class="rotate circle"
              ></img>
      </div>
     </div>
</div>


    </section>

<section id="Breakfast">

<div class="container-fluid">
  <h1 class="text-center mt-5 mb-5 partner">Your  <span class="text-warning"> Favourite Food Delivery </span> Partner  <img src="https://images-na.ssl-images-amazon.com/images/I/715vwvP5ZEL.png" width="80"></img></h1>
  <div class="row mb-5">
    <div class="col-md-3 mr-5">
      <img src="https://cdni.iconscout.com/illustration/premium/thumb/pizza-delivery-man-showing-pizza-in-box-2656091-2214898.png" width="400"/>
      <h2 class="ml-5 pl-5 mt-3 orderss">Easy To <span class="text-warning">Order</span></h2>
    </div>
    <div class="col-md-4 pl-5">
      
      <img src="https://www.elluminatiinc.com/wp-content/uploads/2020/05/fddelapdev/fddelapdev2.png" width="400"/>
    <h2 class="ml-5 pl-5 mt-3  orderss">Fastest <span class="text-warning">Delivery</span></h2>
    </div>
    <div class="col-md-3 ml-5">
    
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Cartoon_Delivery_Guy_In_A_Motorbike.svg/990px-Cartoon_Delivery_Guy_In_A_Motorbike.svg.png" width="300"/>
   <h2 class="ml-5 pl-5  orderss">Best<span class="text-warning"> Quality </span></h2>
      </div>
  </div>
  
  </div>
  
  </section>

  <div>
      <CartProvider>
        <Breakfast1 />
        <Anand2/>
      </CartProvider>
    </div>

      
    <section class="page-footer bg-dark">
<div class="bg-success">
  <div class="container">
    <div class="row py-2 d-flex align-items-center">
<div class="col-md-12 text-end font-001">
  <img src="https://seeklogo.com/images/C/chiken-strong-logo-0CD23797DA-seeklogo.com.png" width="90" class="endimage"/>
  <a href="#" class="font-002"><i class="fa-brands fa-facebook-f text-white mr-4 font-00001"></i></a>
  <a href="#" class="font-002"><i class="fa-brands fa-twitter text-white mr-4 font-00001"></i></a>
  <a href="#" class="font-002"><i class="fa-brands fa-google-plus-g text-white mr-4 font-00001"></i></a>
  <a href="#" class="font-002"><i class="fa-brands fa-linkedin-in text-white mr-4 font-00001"></i></a>
  <a href="#" class="font-002"><i class="fa-brands fa-instagram text-white mr-4 font-00001"></i></a>
</div>
    </div>
  </div>
</div>
<div class="container text-md-left mt-5">
  <div class="row">
    <div class="col-md-3 mx-auto mb-4">
      <h6 class="text-uppercase font-weight-bold text-white"><img src="https://food-le.com/data/image/options/logo.png" width="150"/></h6>
      
      <p class="text-white"> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>


    <div class="col-md-2 mx-auto mb-4">
      <h6 class="text-uppercase font-weight-bold text-success mb-4 foo">Usefull Links</h6>
      
      <ul class="list-unstyled">
        <li class="my-2"><a href="#">Launch</a></li>
        <li class="my-2"><a href="#">Break Fast</a></li>
        <li class="my-2"><a href="#">Dinner</a></li>
        <li class="my-2"><a href="#">Contact</a></li>
      </ul>
</div>

<div class="col-md-3 mx-auto mb-4">
      <h6 class="text-uppercase font-weight-bold text-success mb-4 foo">Contact</h6>
     
      <ul class="list-unstyled">
        <li class="my-2 text-white"><i class="fas fa-home mr-3"></i>*******,Tamilnadu</li>
        <li class="my-2 text-white"><i class="fas fa-envelope mr-3"></i>Demo@gmail.com</li>
        <li class="my-2 text-white"><i class="fas fa-phone mr-3"></i>73*******37</li>
        <li class="my-2 text-white"><i class="fas fa-print mr-3"></i>+000233***8</li>
      </ul>
</div>


  </div>
</div>
<div class="footer-copyright text-center py-1  bg-black">
  <p class="end mt-3"> &copy; Copyright <a href="#"><span class="text-success">Foodle.com </span></a><br/>
 Designed By The Mr.Developer </p>
</div>
       </section>


       </body>
  )
}

export default Breakfast;