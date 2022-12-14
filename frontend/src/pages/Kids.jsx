import React from 'react'
import MainNavbar from "../component/MainNavbar"
import NewArrival from "../component/NewArrival"
import style from './kids.module.css'

const Kids = () => {
  return (
    <div>
      <MainNavbar />
      <div className={style.upperMenDiv}>
        <div className={style.banner1Div}>
          <img
            src="https://www.yoox.com/images/yoox80/banners/6821_2_Christmas_Main_K.jpg?634485886869569819#width=1380&height=638"
            alt="1"
          />
        </div>
        <div className={style.shopNowDiv}>
          <h1>THE GRAND </h1>
          <p>Pack your bags!</p>
          <div>
            <h3>SHOP NOW</h3>
            <h3>DISCOVER MORE</h3>
          </div>
        </div>
        <div className={style.designerDiv}>
          <div></div>
        </div>

        <div className={style.NewArrivalDiv}>
          <div className={style.NewArrival1st}>
            <h1>NEW ARRIVALS</h1>
            <p>VIEW ALL</p>
          </div>
          <div className={style.NewArrivalSlider}>
            <NewArrival />
          </div>
        </div>
      </div>
      <div className={style.watchHeartDiv}>
        <div>
          <img
            src="https://www.yoox.com/images/yoox80/banners/6825_3_BaumeMercier_Tris_W.png?634485886601286852#width=473&height=660"
            alt="1"
          />
          <h2>BAUME & MERCIER</h2>
          <p>Dont't miss our selection of watches</p>
        </div>
        <div className={style.watchHeartMidDiv}>
          <img
            src="https://www.yoox.com/images/yoox80/banners/6825_3_Seletti_Tris.png?634485886601286852#width=473&height=660"
            alt="2"
          />
          <h2>SELETTI</h2>
          <p>Pure creativity</p>
        </div>
        <div>
          <img
            src="https://www.yoox.com/images/yoox80/banners/6825_2_NewBalance_Tris_M.jpg?634485886601286852#width=473&height=660"
            alt="3"
          />
          <h2>NEW BALENCE</h2>
          <p>XC-72: Perfecty paring past and present</p>
        </div>
      </div>
    </div>
  );
}

export default Kids