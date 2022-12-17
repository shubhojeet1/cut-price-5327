import "./women.css"
import WomenMap from "./WomenMap";
// import ProductImagesSlider from "./SingleWomen"
import NewArrival from "./NewArrival";
const data = [
  {
    image:
      "https://www.yoox.com/images/items/13/13910201BS_14_f.jpg?impolicy=crop&width=306&height=390",
    name: "PHILOSHOPY di LORENZ0 SERAFINI",
    description: "Midi Skirt",
    strike: "US$ 702,00",
    off: "34% OFF",
    price: "US$ 458,00"
  },
  {
    image:
      "https://www.yoox.com/images/items/15/15257841AU_14_f.jpg?impolicy=crop&width=306&height=390",
    name: "SOLACE LONDON",
    description: "Short Dress",
    strike: "US$ 449,00 ",
    off: "37% OFF",
    price: "US$ 281,00"
  },
  {
    image:
      "https://www.yoox.com/images/items/45/45717732NW_14_f.jpg?impolicy=crop&width=306&height=390",
    name: "SAINT LAURENT",
    description: "Boots",
    strike: "US$ 449,00",
    off: "20% OFF",
    price: "US$ 1.361,00"
  }
];



export default function Women() {
  return (
    <>
    <div className="top" >
<div><img src="https://www.yoox.com/images/yoox80/banners/6895_1_Genz_WM_Main.png?634485886601286852#width=1380&height=637" alt="" /></div>
    </div>

    <div className="buyMore_mainDiv" >
      <div><img src="https://www.yoox.com/images/yoox80/banners/6971_1_HL_DM_ROWHK.png?634485886601286852#width=430&height=600" alt="" />
      <br />
      <div className="buyMore_offer">20% & 30% OFF</div>
      <div className="buyMore_until" >Only until 12/18</div>
      <div className="buyMore_shop" >SHOP NOW</div>
      </div>
      
    <div className="designers" >
      <br />
      <p><span className="desi1" >DESIGNERS</span></p>
      <br />
      <p className="designer_hover" ><a href="">ROBERTO CAVALI</a></p>
      <p className="designer_hover"><a href="">DSQUARED2</a></p>
      <p className="designer_hover"><a href="">DOLCE & GABBANA</a></p>
      <p className="designer_hover"><a href="">MAISON MARGIELA</a></p>
      <p className="designer_hover"><a href="">MARNI</a></p>
      <p className="designer_hover"><a href="">STELLA MCCARTNEY</a></p>
      <p className="designer_hover"><a href="">CHLOÉ</a></p>
      <p className="designer_hover"><a href="">BALENCIAGA</a></p>
      <p className="designer_hover"><a href="">GUCCI</a></p>
      <p className="designer_hover"><a href="">VERSACE</a></p>
      <br />
      <p className="designer_hover"><a href=""><span className="desi" >VIEW ALL</span></a></p>
      </div>

      

      <div><img src="https://www.yoox.com/images/yoox80/banners/6824_1_TrendSpace_HL_W.jpg?634485886601286852#width=430&height=600" alt="" />
      <br />
      <div className="buyMore_offer">THE SPACE AGE</div>
      <div className="buyMore_until" >Futuristic fashion: the beginning of a new era!</div>
      <div className="buyMore_shop" >DISCOVER MORE  <div className="buyMore_shop1" >ESHOP NOW</div> </div>
      </div>

    </div>
    {/* 1st ending div*/}

    {/* <div className="newArrivalMain">
      <div className="newArrival">NEW ARRIVALS</div>
      <br />
      
      <div className="newArrivalProduct"><a href={ProductImagesSlider}><img src="https://www.yoox.com/images/items/14/14295830IB_14_f.jpg?impolicy=crop&width=306&height=390" alt="" /></a>
      <span className="stellaM">STELLA McCARTNEY</span><br />
      <span>Sweater</span><br />
      <strike className="usOff" >US$ 1.027,00 <div className="thirtyFour" >34% OFF</div></strike>
      <span className="sixSevenOne">US$ 671,00</span>
      </div>

      <div className="newArrivalProduct"><img src="https://www.yoox.com/images/items/50/50294257EM_14_f.jpg?impolicy=crop&width=306&height=390" alt="" />
      <span className="stellaM">APM Monaco</span><br />
      <span>Earrings</span><br />
      
      <span className="sixSevenOne">US$ 671,00</span>
      </div>

      <div className="newArrivalProduct"><img src="https://www.yoox.com/images/items/45/45717732NW_14_f.jpg?impolicy=crop&width=306&height=390" alt="" />
      <span className="stellaM">MARNI</span><br />
      <span>Cross-body bags</span><br />
      
      <span className="sixSevenOne">US$ 671,00</span>
      </div>

    </div> */}

    <NewArrival/>
      {/* 2nd div end */}

      <div className="watchMainBanner">
        <div className="watchBanner" ><img src="https://www.yoox.com/images/yoox80/banners/6825_5_BaumeMercier_Tris_W.png?634485886601286852#width=473&height=660" alt="" />
        <br />
        <div className="watchNaming">BAUME & MERCIER</div>
        <span>The New Riviera Collection</span>
        </div>

        <div className="girlBag"><img src="https://www.yoox.com/images/yoox80/banners/6825_1_Boss_W_Tris.jpg?634485886601286852#width=473&height=660" alt="" />
        <br />
        <div className="watchNaming">BOSS</div>
        <span>Be your own Boss</span>
        </div>

        <div className="watchBanner"><img src="https://www.yoox.com/images/yoox80/banners/6825_6_Montblanc_W_Tris.jpg?634485886601286852#width=473&height=660" alt="" />
        <br />
        <div className="watchNaming">MONTBLANG</div>
        <span>The New Gift Generation</span>
        </div>
      </div>
      {/* 3rd div ending */}

    
<WomenMap/>
<NewArrival/>

<div className="partyBanner" >
        <img src="https://www.yoox.com/images/yoox80/banners/6833_3_8byYoox_Special_WM.png?634485886601286852#width=930&height=660" alt="" />
      </div>

      <div className="hugBanner">
        <img src="https://www.yoox.com/images/yoox80/banners/6824_1_XmasGift_WM_Bottom.jpg?634485886601286852#width=1380&height=637" alt="" />
        
      </div>

    </>
  )
}














































































{/* <div className="newArrivalMain">
      <div className="newArrival">ONE OF A KIND</div>
      <br />
      
      <div className="newArrivalProduct"><img src="https://www.yoox.com/images/items/13/13910201BS_14_f.jpg?impolicy=crop&width=306&height=390" alt="" />
      <span className="stellaM">PHILOSOPHY di LORENZO SERAFINI</span><br />
      <span>Midi Skirt</span><br />
      <div className="usOff" >US$ 702,00 <div className="thirtyFour" >34% OFF</div></div>
      <span className="sixSevenOne">US$ 458,00</span>
      </div>

      <div className="newArrivalProduct"><img src="https://www.yoox.com/images/items/15/15257841AU_14_f.jpg?impolicy=crop&width=306&height=390" alt="" />
      <span className="stellaM">SOLACE LONDON</span><br />
      <span>Short Dress</span><br />
      <div className="usOff" >US$ 449,00 <div className="thirtyFour" >37% OFF</div></div>
      <span className="sixSevenOne">US$ 281,00</span>
      </div>

      <div className="newArrivalProduct"><img src="https://www.yoox.com/images/items/45/45717732NW_14_f.jpg?impolicy=crop&width=306&height=390" alt="" />
      <span className="stellaM">SAINT LAURENT</span><br />
      <span>Boots</span><br />
     
  <div style={{display:"flex", alignItems:"center", justifyContent:"center", columnGap:"15px"}}>
    <p style={{textDecoration:"line-through"}} >US$ 449,00 </p>
    <p>20% OFF</p>
  </div>

      <span className="sixSevenOne">US$ 1.361,00</span>
      </div>

    </div> */}

