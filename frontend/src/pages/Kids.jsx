import React from 'react'
import MainNavbar from "../component/MainNavbar"
import NewArrival from "../component/NewArrival"
import NewBoy from '../component/NewBoy'
import NewArrivalBoy from '../component/NewBoy'
import style from './kids.module.css'

const Kids = () => {
  return (
    <div>
      <MainNavbar />
      <div className={style.upperMenDiv}>
        <div className={style.banner1Div}>
          <img
            style={{
              width:"100%"
            }}
            className="js1"
            src="https://www.yoox.com/images/yoox80/banners/6821_2_Christmas_Main_K.jpg?634485886869569819#width=1380&height=638"
            alt="1"
          />
        </div>

        <div className={style.shopNowDiv}>
          <h1 className="banner_title">THE GRAND & MARVELOUS HOLIDAY FAIR </h1>
          <p>Funds finds for the little ones</p>
          <div>
            <h3>SHOP GIRL</h3>
            <h3>SHOP BOY</h3>
          </div>
        </div>
        <div className={style.designerDiv}>
          <div></div>
        </div>

        <div className={style.NewArrivalDiv}>
          <div className={style.NewArrival1st}>
            <h1>NEW ARRIVALS GIRLS</h1>
            <p>VIEW ALL</p>
          </div>
          <div className={style.NewArrivalSlider}>
            <NewArrival />
          </div>
        </div>

        <div className={style.NewArrivalDiv}>
          <div className={style.NewArrival1st}>
            <h1>NEW ARRIVALS BOYS</h1>
            <p>VIEW ALL</p>
          </div>
          <div className={style.NewArrivalSlider}>
            <NewBoy />
          </div>
        </div>
      </div>

      <div className={style.watchHeartDiv}>
        <div>
          <img
            src="https://www.yoox.com/images/yoox80/banners/6821_1_TOYS_Tris_K.jpg?634485886869569819#width=473&height=660"
            alt="1"
          />
          <h2
            style={{
              textAlign: "center",
              lineHeight: "32px",
              display: "block",
            }}
          >
            LIVING IN DREAMLAND
          </h2>
          <p style={{ textAlign: "center" }}>Homewear & Toys</p>
        </div>
        <div className={style.watchHeartMidDiv}>
          <img
            src="https://www.yoox.com/images/yoox80/banners/6821_1_Newborn_Tris_K.png?634485886869569819#width=387&height=540"
            alt="2"
          />
          <h2
            style={{
              textAlign: "center",
              lineHeight: "32px",
              display: "block",
            }}
          >
            SOFT & FOZZY
          </h2>
          <p style={{ textAlign: "center" }}>Comfort is key</p>
        </div>
        <div>
          <img
            src="https://www.yoox.com/images/yoox80/banners/6821_1_Adidas_Tris_K.jpg?634485886869569819#width=387&height=540"
            alt="3"
          />
          <h2 style={{ textAlign: "center" }}>ADIDAS</h2>
          <p style={{ textAlign: "center" }}>The perfect present awaits</p>
        </div>
      </div>
    </div>
  );
}

export default Kids