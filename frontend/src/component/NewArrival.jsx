import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
 import style from './nav.module.css'

const NewArrival = () => {

  
   
    const settings = {
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
        
    };
    return (
      <div className={style.sliderDiv}>
        <Slider {...settings}>
          <div className={style.sliderDivInner}>
            <img
              src="https://www.yoox.com/images/items/10/10030637IF_14_f.jpg?impolicy=crop&width=306&height=390"
              alt="1"
            />
            <h3 style={{ textAlign: "center" }}>VERSACE YOUNG</h3>
            <p style={{ textAlign: "center" }}>Sweatshirts</p>
            <h4 style={{ textAlign: "center" }}>$ 213.00</h4>
            
          </div>
          <div className={style.sliderDivInner}>
            <img
              src="https://www.yoox.com/images/items/17/17467566CM_14_f.jpg?impolicy=crop&width=306&height=390"
              alt="2"
            />
            <h3 style={{ textAlign: "center" }}>VEJA</h3>
            <p style={{ textAlign: "center" }}>Sneakers</p>
            <h4 style={{ textAlign: "center" }}>$ 121.00</h4>
          </div>
          <div className={style.sliderDivInner}>
            <img
              src="https://www.yoox.com/images/items/13/13920618AI_14_f.jpg?impolicy=crop&width=387&height=490"
              alt="3"
            />
            <h3 style={{ textAlign: "center" }}>CHIARA FERRAGNI</h3>
            <p style={{ textAlign: "center" }}>Casual pants</p>
            <h4 style={{ textAlign: "center" }}>$ 91.00</h4>
          </div>
          <div className={style.sliderDivInner}>
            <img
              src="https://www.yoox.com/images/items/46/46890940TK_14_f.jpg?impolicy=crop&width=387&height=490"
              alt="4"
            />
            <h3 style={{ textAlign: "center" }}>EMILIO PUCCI</h3>
            <p style={{ textAlign: "center" }}>Hair accessories</p>
            <h4 style={{ textAlign: "center" }}>$ 41.00</h4>
          </div>
          <div className={style.sliderDivInner}>
            <img
              src="https://www.yoox.com/images/items/54/54191471QV_14_f.jpg?impolicy=crop&width=387&height=490"
              alt="5"
            />
            <h3 style={{ textAlign: "center" }}>ADIDAS ORIGINALS</h3>
            <p style={{ textAlign: "center" }}>Athletic outfits</p>
            <h4 style={{ textAlign: "center" }}>$ 70.00</h4>
          </div>
          <div className={style.sliderDivInner}>
            <img
              src="https://www.yoox.com/images/items/17/17463663NT_14_f.jpg?impolicy=crop&width=387&height=490"
              alt="6"
            />
            <h3 style={{ textAlign: "center" }}>FALCOTTO</h3>
            <p style={{ textAlign: "center" }}>Sneakers</p>
            <h4 style={{ textAlign: "center" }}>$ 82.00</h4>
          </div>
          <div className={style.sliderDivInner}>
            <img
              src="https://www.yoox.com/images/items/10/10030078TU_14_f.jpg?impolicy=crop&width=387&height=490"
              alt="7"
            />
            <h3 style={{ textAlign: "center" }}>VERSACE YOUNG</h3>
            <p style={{ textAlign: "center" }}>T-shirts</p>
            <h4 style={{ textAlign: "center" }}>$ 143.00</h4>
          </div>
          <div className={style.sliderDivInner}>
            <img
              src="https://www.yoox.com/images/items/17/17470342SW_14_f.jpg?impolicy=crop&width=387&height=490"
              alt="8"
            />
            <h3 style={{ textAlign: "center" }}>HOGAN</h3>
            <p style={{ textAlign: "center" }}>Sneakers</p>
            <h4 style={{ textAlign: "center" }}>$ 127.00</h4>
          </div>
          <div className={style.sliderDivInner}>
            <img
              src="https://www.yoox.com/images/items/10/10030436BN_14_f.jpg?impolicy=crop&width=387&height=490"
              alt="9"
            />
            <h3 style={{ textAlign: "center" }}>FENDI</h3>
            <p style={{ textAlign: "center" }}>T-shirts</p>
            <h4 style={{ textAlign: "center" }}>$ 247.00</h4>
          </div>
        </Slider>
      </div>
    );
  }



export default NewArrival