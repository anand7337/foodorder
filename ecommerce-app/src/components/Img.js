import React, { Component } from "react";
import "./Dinner.css";
import Slider from "react-slick";
import "./Home.css";
import $ from "jquery";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Dinner1 from "./Dinner1";
import Cart from "./Cart";
import { CartProvider } from "react-use-cart";
import Anand2 from './Anand2';
import Anand3 from './Anand3';

function Img() {
  return (
    <div>
       
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


       <section id="Img-1">
        <CartProvider>
        <Anand3/>
        <Cart />
      </CartProvider>
      </section>
    </div>
  )
}

export default Img