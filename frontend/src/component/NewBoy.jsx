import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import style from "./nav.module.css";

const NewBoy = () => {
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
            src="https://www.yoox.com/images/items/46/46892840WA_14_f.jpg?impolicy=crop&width=306&height=390"
            alt="1"
          />
          <h3 style={{ textAlign: "center" }}>NAME IT®</h3>
          <p style={{ textAlign: "center" }}>N°21</p>
          <h4 style={{ textAlign: "center" }}>$ 37.00</h4>
        </div>
        <div className={style.sliderDivInner}>
          <img
            src="https://www.yoox.com/images/items/46/46889672OF_14_f.jpg?impolicy=crop&width=306&height=390"
            alt="2"
          />
          <h3 style={{ textAlign: "center" }}>NAME IT®</h3>
          <p style={{ textAlign: "center" }}>Hats</p>
          <h4 style={{ textAlign: "center" }}>$ 24.00</h4>
        </div>
        <div className={style.sliderDivInner}>
          <img
            src="https://www.yoox.com/images/items/46/46892767CM_14_f.jpg?impolicy=crop&width=306&height=390"
            alt="3"
          />
          <h3 style={{ textAlign: "center" }}>HEROS</h3>
          <p style={{ textAlign: "center" }}>Hats</p>
          <h4 style={{ textAlign: "center" }}>$ 98.00</h4>
        </div>
        <div className={style.sliderDivInner}>
          <img
            src="https://www.yoox.com/images/items/13/13963344RL_14_f.jpg?impolicy=crop&width=306&height=390"
            alt="4"
          />
          <h3 style={{ textAlign: "center" }}>STELLA McCARTNEY KIDS</h3>
          <p style={{ textAlign: "center" }}>
            STELLA McCARTNEY KIDS Casual pants
          </p>
          <h4 style={{ textAlign: "center" }}>$ 62.00</h4>
        </div>
        <div className={style.sliderDivInner}>
          <img
            src="https://www.yoox.com/images/items/10/10032376PH_14_f.jpg?impolicy=crop&width=306&height=390"
            alt="5"
          />
          <h3 style={{ textAlign: "center" }}>VISION OF SUPER</h3>
          <p style={{ textAlign: "center" }}>Sweatshirts</p>
          <h4 style={{ textAlign: "center" }}>$ 88.00</h4>
        </div>
        <div className={style.sliderDivInner}>
          <img
            src="https://www.yoox.com/images/items/17/17457689GT_14_f.jpg?impolicy=crop&width=306&height=390"
            alt="6"
          />
          <h3 style={{ textAlign: "center" }}>VANS</h3>
          <p style={{ textAlign: "center" }}>Sneakers</p>
          <h4 style={{ textAlign: "center" }}>$ 48.00</h4>
        </div>
        <div className={style.sliderDivInner}>
          <img
            src="https://www.yoox.com/images/items/10/10031877JS_14_f.jpg?impolicy=crop&width=306&height=390"
            alt="7"
          />
          <h3 style={{ textAlign: "center" }}>VISION OF SUPER</h3>
          <p style={{ textAlign: "center" }}>Sweatshirts</p>
          <h4 style={{ textAlign: "center" }}>$ 88.00</h4>
        </div>
        <div className={style.sliderDivInner}>
          <img
            src="https://www.yoox.com/images/items/46/46886506HE_14_f.jpg?impolicy=crop&width=306&height=390"
            alt="8"
          />
          <h3 style={{ textAlign: "center" }}>HEROS</h3>
          <p style={{ textAlign: "center" }}>HAT</p>
          <h4 style={{ textAlign: "center" }}>$ 100.00</h4>
        </div>
        <div className={style.sliderDivInner}>
          <img
            src="https://www.yoox.com/images/items/10/10030341AK_14_f.jpg?impolicy=crop&width=306&height=390"
            alt="9"
          />
          <h3 style={{ textAlign: "center" }}>FENDI</h3>
          <p style={{ textAlign: "center" }}>T-shirts</p>
          <h4 style={{ textAlign: "center" }}>$ 247.00</h4>
        </div>
      </Slider>
    </div>
  );
};

export default NewBoy;
