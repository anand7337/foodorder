import React, { Component } from "react";
import Slider from "react-slick";
import "./Home.css";
import $ from "jquery";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";







function Home() {
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


           
              
          

          </ul>
        </div>
      </nav>


      <section id="Home1">
        <div class="container">
          <div class="row">
            <div class="col-md-6  text-white front mt-5">
              <p class="ananddd">
                <span class="smile">&#128523; </span> EASY WAY TO ORDER YOUR
                FOOD
              </p>
              <h1 class="heading">
                Order Tasty & <br /> Fresh Food <br />
                <span class="text-danger"> anytime!</span>
              </h1>
              <p class="heading1">
                Just confirm your order and enjoy our <br /> delicious fastest
                delivery.
              </p>
              <br />
              <a href="" class="now">
                Order Now{" "}
                <img
                  src="https://static.thenounproject.com/png/3592871-200.png"
                  width="30px"
                ></img>
              </a>
            </div>
            <div class="col-md-6 mt-5">
              <img
                src="https://www.freepnglogos.com/uploads/food-png/food-indian-take-away-the-amantola-39.png"
                height="450px"
                class="rotate"
              ></img>
            </div>
          </div>
        </div>
      </section>

      <section id="Home2">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-5 mt-5">
              <img
                src="https://apptunixlivemedia.s3.ap-south-1.amazonaws.com/wp-content/uploads/sites/5/2022/01/19072844/del_fight_covid_leftimg.svg"
                height="500"
              ></img>
            </div>
            <div class="col-md-6 mt-5 pt-5 ml-5 pl-5">
              <h2 class="heading3">
                Create Delivery App Let's Fight Against #COVID-19 & Help People
                Near You
              </h2>
              <p class="heading4">
                Let people maintain social distancing and prevent them from the
                coronavirus. Serve them contactless delivery of products with
                the help of an excellent On-Demand Food Delivery management
                System . Start Touchless Delivery to Combat With
                Coronavirus-Effect
              </p>
              <br />
              <a href="" class="button1">
                Get In Touch{" "}
                <img
                  src="https://icons.veryicon.com/png/o/commerce-shopping/online-retailers/arrow-right-33.png"
                  width="30px"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="Home3" class="mb-5">
        <div class="container-fluid">
          <h1 class="text-center fw-bold mb-3">
            {" "}
            SUPER <span class="text-danger">DELICIOUS</span> FOOD{" "}
            <img
              src="https://www.clipartmax.com/png/full/77-770225_free-cooked-turkey-clip-art-%E7%87%92-%E9%9B%9E-%E5%8D%A1%E9%80%9A.png"
              width="130"
            ></img>
          </h1>
          <br></br>
          <OwlCarousel loop margin={50}>
            <div class="item">
              <div class="card border-0">
                <img
                  src="https://deliverybikers.com/wp-content/uploads/2020/07/chicken-fried-5.png"
                  alt="image"
                  class="card-img-top"
                ></img>
              </div>
            </div>

            <div class="item">
              <div class="card border-0">
                <img
                  src="https://www.nicepng.com/png/full/987-9870542_hot-and-spicy-chicken-65-chicken-65-images.png"
                  height="220px"
                  alt="image"
                  class="card-img-top"
                ></img>
              </div>
            </div>
            <div class="item">
              <div class="card border-0">
                <img
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/7-chickenteriyakibowl-1520969059.png?crop=0.941xw:0.717xh;0.0345xw,0.241xh&resize=480:*"
                  height="220px"
                  alt="image"
                  class="card-img-top"
                ></img>
              </div>
            </div>
            <div class="item">
              <div class="card border-0">
                <img
                  src="https://www.seekpng.com/png/full/5-56064_fish-fry-images-png.png"
                  height="220px"
                  alt="image"
                  class="card-img-top"
                ></img>
              </div>
            </div>
            <div class="item">
              <div class="card border-0">
                <img
                  src="https://images.jdmagicbox.com/quickquotes/images_main/fish-fry-masala-1-kg-378236527-3h4np.png"
                  height="220px"
                  alt="image"
                  class="card-img-top"
                ></img>
              </div>
            </div>
            <div class="item">
              <div class="card border-0">
                <img
                  src="https://www.kitchentreasures.in/wp-content/uploads/2016/07/Chicken-65.png"
                  height="220px"
                  alt="image"
                  class="card-img-top"
                ></img>
              </div>
            </div>
            <div class="item">
              <div class="card border-0">
                <img
                  src="https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"
                  height="220px"
                  alt="image"
                  class="card-img-top"
                ></img>
              </div>
            </div>
            <div class="item">
              <div class="card border-0">
                <img
                  src="https://www.wilmar-international.com/images/default-source/default-album/consumer-pack/products/categories/noodle-pasta-823x527.png?sfvrsn=7ba28e05_6"
                  height="220px"
                  alt="image"
                  class="card-img-top"
                ></img>
              </div>
            </div>
            <div class="item">
              <div class="card border-0">
                <img
                  src="https://nishakitchen.com/wp-content/uploads/2021/03/mutton-Biryani.png"
                  height="220px"
                  alt="image"
                  class="card-img-top"
                ></img>
              </div>
            </div>
            <div class="item">
              <div class="card border-0">
                <img
                  src="https://www.seekpng.com/png/full/270-2702741_veg-snacks-non-veg-food-png.png"
                  height="220px"
                  alt="image"
                  class="card-img-top"
                ></img>
              </div>
            </div>
            <div class="item">
              <div class="card border-0">
                <img
                  src="https://www.seekpng.com/png/full/154-1542824_varieties-veg-non-veg-dishes-restaurant-dishes-png.png"
                  height="220px"
                  alt="image"
                  class="card-img-top"
                ></img>
              </div>
            </div>
          </OwlCarousel>
          ;
          <OwlCarousel loop margin={50}>
            <div class="item">
              <div class="card border-0">
                <img
                  src="https://homemadeindianfood.co.uk/wp-content/themes/homemade-indian-food/assets/img/indian-plate.png"
                  alt="image"
                  class="card-img-top"
                ></img>
              </div>
            </div>

            <div class="item">
              <div class="card border-0">
                <img
                  src="https://pbs.twimg.com/media/DXjOilqU0AAfbDa.png"
                  alt="image"
                  class="card-img-top"
                ></img>
              </div>
            </div>
            <div class="item">
              <div class="card border-0">
                <img
                  src="https://vegchennaisrilalitha.co.uk/wp-content/uploads/2021/07/cool-and-you.png"
                  alt="image"
                  class="card-img-top"
                ></img>
              </div>
            </div>
            <div class="item">
              <div class="card border-0">
                <img
                  src="https://i.pinimg.com/originals/c4/76/49/c476491077c745cf8c93ce95dafd43dd.png"
                  alt="image"
                  class="card-img-top"
                ></img>
              </div>
            </div>
            <div class="item">
              <div class="card border-0">
                <img
                  src="https://aryabhavan.in/wp-content/uploads/2021/11/IDLI.png"
                  alt="image"
                  class="card-img-top"
                ></img>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>

      <section class="Home4 mb-5 mt-5">
        <div id="demo" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://everestfoodcourt.com/images/new/WEB%20n1.webp"
                alt="Los Angeles"
                width="500"
                height="200"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://everestfoodcourt.com/images/v_home7.webp"
                alt="Chicago"
                width="1100"
                height="300"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://everestfoodcourt.com/images/new/WEB%20n2.webp"
                alt="New York"
                width="1100"
                height="300"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="Home5">
        <div class="container">
          <div class="swiper-container">
            <h2 class="text-center mb-5 text-white fw-bold">
              CUSTOMER <span class="text-danger">REVIEW...</span>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/customer-review-2072292-1751603.png"
                width="70"
              />
            </h2>
          
            <div class="swiper-wrapper">
            <div class="row">
            <div class="col-md-4">
              <div class="swiper-slide">
                <div class="testimonialBox">
                  <img
                    src="https://mccartyweightloss.com/wp-content/uploads/kisspng-quotation-mark-symbol-pull-quote-sign-marks-vector-5ad89cafbbdd55.png"
                    width="100"
                    class="quote"
                  />
                  <div class="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur.
                    </p>
                    <div class="details">
                      <div class="imgBx">
                        <img src="https://www.kindpng.com/picc/m/160-1600378_transparent-happy-person-png-happy-man-face-png.png" />
                      </div>
                      <h3>
                        Someone Famous <br />
                        <span>Jhon Doe</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
</div>


<div class="col-md-4">
              <div class="swiper-slide">
                <div class="testimonialBox">
                  <img
                    src="https://mccartyweightloss.com/wp-content/uploads/kisspng-quotation-mark-symbol-pull-quote-sign-marks-vector-5ad89cafbbdd55.png"
                    width="100"
                    class="quote"
                  />
                  <div class="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur.
                    </p>
                    <div class="details">
                      <div class="imgBx">
                        <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNDA3NjI4fHxlbnwwfHx8fA%3D%3D&w=1000&q=80" />
                      </div>
                      <h3>
                        Someone Famous <br />
                        <span>Los Angel</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
</div>


<div class="col-md-4">
              <div class="swiper-slide">
                <div class="testimonialBox">
                  <img
                    src="https://mccartyweightloss.com/wp-content/uploads/kisspng-quotation-mark-symbol-pull-quote-sign-marks-vector-5ad89cafbbdd55.png"
                    width="100"
                    class="quote"
                  />
                  <div class="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur.
                    </p>
                    <div class="details">
                      <div class="imgBx">
                        <img src="https://www.pngitem.com/pimgs/m/106-1068071_black-person-png-black-man-business-png-transparent.png" />
                      </div>
                      <h3>
                        Someone Famous <br />
                        <span>Jhon Doe</span>
                      </h3>
                    </div>
                  </div>
                </div>
                </div>
</div>
</div>

              </div>
            </div>
        
        </div>
      </section>

      <section id="Home6">
        <div class="counter-up">
          <div class="content">
            <div class="box">
              <div class="icon">
                <i class="fa fa-history"></i>
              </div>
              <div class="counter">724</div>
              <div class="text">Working Hours</div>
            </div>

            <div class="box">
              <div class="icon">
                <i class="fa fa-gift"></i>
              </div>
              <div class="counter">508</div>
              <div class="text">Completed Project</div>
            </div>

            <div class="box">
              <div class="icon">
                <i class="fa fa-users"></i>
              </div>
              <div class="counter">546</div>
              <div class="text">Happy Clients</div>
            </div>

            <div class="box">
              <div class="icon">
                <i class="fa fa-history"></i>
              </div>
              <div class="counter">120</div>
              <div class="text">Awards Received</div>
            </div>
          </div>
        </div>
      </section> 

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
  );
}

export default Home;
