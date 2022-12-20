import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
 import style from './NewArrival.module.css'

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
      <>
      <div style={{display:"flex"}}>
      <div style={{
        height:"34rem",
        width:"30rem",
        // border:"1px solid red",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginTop:"4rem",
        fontSize:"42px",
        letterSpacing:"1px"
      }} >NEW ARRIVALS
      </div>
      
      <div className={style.sliderDiv}>
        <Slider {...settings}>
        <div className={style.sliderDivInner}>
            <img
              src="https://www.yoox.com/images/items/14/14295830IB_14_f.jpg?impolicy=crop&width=306&height=390"
              alt="4"
            />
            <div style={{backgroundColor:"white",color:"black",lineHeight:"2",padding:"20px"}} >
            <h3 style={{ textAlign: "center", fontWeight:"bold" }}>STELLA McCARTNEY</h3>
            <p style={{ textAlign: "center" }}>Sweater</p>

            <div style={{display:"flex",justifyContent:"center",gap:"15px"}}>
            <span style={{textDecoration:"line-through",textAlign:"center"}}>US$ 1.027,00 </span> <span> 34%OFF </span>
            </div>
            <h4 style={{ textAlign: "center", fontWeight:"bold" }}>US$ 671,00</h4>
            </div>
          </div>
          <div className={style.sliderDivInner}>
            <img
              src="https://www.yoox.com/images/items/50/50294257EM_14_f.jpg?impolicy=crop&width=306&height=390"
              alt="4"
            />
            <div style={{backgroundColor:"white",color:"black",lineHeight:"2",padding:"20px"}} >
              
            <h3 style={{ textAlign: "center", fontWeight:"bold" }}>APM Monaco</h3>
            <p style={{ textAlign: "center" }}>Earings</p>
            <div style={{display:"flex",justifyContent:"center",gap:"15px"}}>
            <span style={{textDecoration:"line-through",textAlign:"center"}}>US$ 188,00 </span> <span> 18%OFF </span>
            </div>
            <h4 style={{ textAlign: "center",fontWeight:"bold" }}>US$ 139,00</h4>
            </div>
          </div>
          <div className={style.sliderDivInner}>
            <img
              src="https://www.yoox.com/images/items/16/16199356WX_14_f.jpg?impolicy=crop&width=306&height=390"
              alt="3"
            />
            <div style={{backgroundColor:"white",color:"black",lineHeight:"2",padding:"20px"}} >
            <h3 style={{ textAlign: "center", fontWeight:"bold" }}>MINIMUM</h3>
            <p style={{ textAlign: "center" }}>Coat</p>
            <div style={{display:"flex",justifyContent:"center",gap:"15px"}}>
            <span style={{textDecoration:"line-through",textAlign:"center"}}>US$ 514,00 </span> <span> 32%OFF </span>
            </div>
            <h4 style={{ textAlign: "center", fontWeight:"bold" }}>US$326,00</h4>
            </div>
          </div>
          <div className={style.sliderDivInner}>
            <img
              src="https://www.yoox.com/images/items/14/14293562JI_14_f.jpg?impolicy=crop&width=306&height=390"
              alt="4"
            />
            <div style={{backgroundColor:"white",color:"black",lineHeight:"2",padding:"20px"}} >
            <h3 style={{ textAlign: "center", fontWeight:"bold" }}>GANNI</h3>
            <p style={{ textAlign: "center" }}>Cardigan</p>
            <div style={{display:"flex",justifyContent:"center",gap:"15px"}}>
            <span style={{textDecoration:"line-through",textAlign:"center"}}>US$ 529,00 </span> <span> 25%OFF </span>
            </div>
            <h4 style={{ textAlign: "center", fontWeight:"bold" }}>US$ 230,00</h4>
            </div>
          </div>
          <div className={style.sliderDivInner}>
            <img
              src="https://www.yoox.com/images/items/45/45721715SC_14_f.jpg?impolicy=crop&width=306&height=390"
              alt="5"
            />
            <div style={{backgroundColor:"white",color:"black",lineHeight:"2",padding:"20px"}} >
            <h3 style={{ textAlign: "center", fontWeight:"bold" }}>ARKET</h3>
            <p style={{ textAlign: "center" }}>Handbag</p>
            <div style={{display:"flex",justifyContent:"center",gap:"15px"}}>
            <span style={{textDecoration:"line-through",textAlign:"center"}}>US$ 157,00 </span> <span> 15%OFF </span>
            </div>
            <h4 style={{ textAlign: "center", fontWeight:"bold" }}>US$ 112,00</h4>
            </div>
          </div>
          <div className={style.sliderDivInner}>
            <img
              src="https://www.yoox.com/images/items/16/16200872MJ_14_f.jpg?impolicy=crop&width=306&height=390"
              alt="6"
            />
            <div style={{backgroundColor:"white",color:"black",lineHeight:"2",padding:"20px"}} >
            <h3 style={{ textAlign: "center", fontWeight:"bold" }}>TOPSHOP</h3>
            <p style={{ textAlign: "center" }}>Coat</p>
            <div style={{display:"flex",justifyContent:"center",gap:"15px"}}>
            <span style={{textDecoration:"line-through",textAlign:"center"}}>US$ 227,00 </span> <span> 25%OFF </span>
            </div>
            <h4 style={{ textAlign: "center", fontWeight:"bold" }}>US$ 147,00</h4>
          </div>
          </div>
          <div className={style.sliderDivInner}>
            <img
              src="https://www.yoox.com/images/items/17/17451966FK_14_f.jpg?impolicy=crop&width=306&height=390"
              alt="7"
            />
            <div style={{backgroundColor:"white",color:"black",lineHeight:"2",padding:"20px"}} >
            <h3 style={{ textAlign: "center", fontWeight:"bold" }}>GANNI</h3>
            <p style={{ textAlign: "center" }}>Boots</p>
            <div style={{display:"flex",justifyContent:"center",gap:"15px"}}>
            <span style={{textDecoration:"line-through",textAlign:"center"}}>US$ 427,00 </span> <span> 30%OFF </span>
            </div>
            <h4 style={{ textAlign: "center", fontWeight:"bold" }}>US$ 354,00</h4>
            </div>
          </div>
          <div className={style.sliderDivInner}>
            <img
              src="https://www.yoox.com/images/items/10/10001722NP_14_f.jpg?impolicy=crop&width=306&height=390"
              alt="8"
            />
            <div style={{backgroundColor:"white",color:"black",lineHeight:"2",padding:"20px"}} >
            <h3 style={{ textAlign: "center", fontWeight:"bold" }}>ISABEL MARANT</h3>
            <p style={{ textAlign: "center" }}>Floral Shirt & blouses</p>
            <div style={{display:"flex",justifyContent:"center",gap:"15px"}}>
            <span style={{textDecoration:"line-through",textAlign:"center"}}>US$ 827,00 </span> <span> 21%OFF </span>
            </div>
            <h4 style={{ textAlign: "center", fontWeight:"bold" }}>US$ 668,00</h4>
            </div>
          </div>
          <div className={style.sliderDivInner}>
            <img
              src="https://www.yoox.com/images/items/17/17426095IE_14_f.jpg?impolicy=crop&width=306&height=390"
              alt="9"
            />
            <div style={{backgroundColor:"white",color:"black",lineHeight:"2",padding:"20px"}} >
            <h3 style={{ textAlign: "center", fontWeight:"bold" }}>LOEWE</h3>
            <p style={{ textAlign: "center" }}>Ankle boot</p>
            <div style={{display:"flex",justifyContent:"center",gap:"15px"}}>
            <span style={{textDecoration:"line-through",textAlign:"center"}}>US$ 807,00 </span> <span> 24%OFF </span>
            </div>
            <h4 style={{ textAlign: "center", fontWeight:"bold" }}>US$ 651,00</h4>
          </div>
          </div>
        </Slider>
      </div>
      </div>
      </>
    );
  }
export default NewArrival