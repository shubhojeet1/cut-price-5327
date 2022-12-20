import React from "react";
import "./design.css";
const DesignArt = () => {
  return (
    <div>
      <div className="container">
        <div className="box_1">
          <img
            src="https://www.yoox.com/images/yoox80/banners/6769_2_Xmas_TOP1.jpg?634485886869569819#width=890&height=648"
            alt="box_1"
            className="box_1_imag1"
          />
        </div>
        <div className="box_2">
          <div className="box_2_top">
            <img
              src="https://www.yoox.com/images/yoox80/banners/6769_1_OrangeFiber_TOP2.jpg?634485886869569819#width=430&height=450"
              alt=""
              className="box_2_imag2"
            />
          </div>
          <div className="box_2_bottom">
            <h1 className="head-1">8 BY ORANGE FIBER</h1>
            <p className="para-1">
              Innovative and responsible discover the homeware collection
            </p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <img
          src="https://www.yoox.com/images/yoox80/banners/6769_27_Living_Middle.jpg?634485886869569819#width=897&height=615"
          alt=""
        />
      </div>
      <div className="bott_2">
        <h1 className="">SOCIAL LOOK</h1>
        <p>The new photoshoot by Living Corriere</p>
      </div>
      <div className="bott_3"></div>
    </div>
  );
};

export default DesignArt;
