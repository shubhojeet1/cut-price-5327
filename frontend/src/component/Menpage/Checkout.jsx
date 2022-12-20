import React, { useEffect, useState } from "react";
import { TfiAngleLeft } from "react-icons/tfi";
import { BsCreditCard2Back } from "react-icons/bs";
import { GrPaypal } from "react-icons/gr";
import "./checkout.css";
import { NavLink } from "react-router-dom";

export const Checkout = () => {
  let data = JSON.parse(localStorage.getItem("checkout_Array"));
  console.log(data);
  const [total, setTotal] = useState("");

  useEffect(() => {
    var totalprice = "";
    data.map((ele) => {
      var price = ele.price;
      totalprice = totalprice + price;
      //console.log(ele.price,"number")
    });
    setTotal(totalprice);
  }, []);

  const [togglePayment, setTogglePayment] = useState("hidden");
  const [toggleSelect, setToggleSelect] = useState("show");

  const haddleChange = () => {
    setTogglePayment("show");
    setToggleSelect("hidden");
  };
  const handleChangeagin = () => {
    setTogglePayment("hidden");
    setToggleSelect("show");
  };
  return (
    <>
      <div style={{ width: "100%" }}>
        -
        <div className="ccontainer">
          <p className="heading">Checkout</p>
        </div>
        <div className="checkoutBody">
          <div className="ccontainer">
            <div>
              <div className="Cflex section_heading">
                <div style={{ marginLeft: "20px" }}>Review</div>
                <div className="edit">
                  <TfiAngleLeft size={12} />
                  Edit Cart
                </div>
              </div>

              <div className="Cflex spaceh">
                <div style={{ marginLeft: "20px" }}>ITEM</div>
                <div style={{ marginRight: "20px" }}>PRICE</div>
              </div>
              {data.map((ele) => (
                <div
                  className="Cflex"
                  style={{ fontWeight: "bold", fontSize: "1rem" }}
                >
                  <div style={{ marginLeft: "20px" }}>{ele.day}Product</div>
                  <div style={{ marginRight: "20px" }}>{ele.price}</div>
                </div>
              ))}

              <div
                className="Cflex "
                style={{ fontWeight: "bold", fontSize: "1.2rem" }}
              >
                <div style={{ marginLeft: "20px" }}>Order Total:</div>
                <div style={{ marginRight: "20px" }}>{total}</div>
              </div>
            </div>

            <div className="paymentInfo">
              <div className="section_heading">
                {" "}
                <p style={{ marginLeft: "20px", padding: "20px 0px" }}>
                  {" "}
                  Payment Information
                </p>
              </div>

              <div
                className="paymentbox"
                id={toggleSelect}
                onClick={haddleChange}
              >
                <p>Choose a way to pay</p>
                <button className="paymentButton" id="border">
                  <BsCreditCard2Back
                    size={35}
                    color="#B5B5B"
                    style={{ marginLeft: "10px" }}
                  />{" "}
                  Card
                </button>
                <button className="paymentButton" id="btn">
                  <img
                    //src="https://media.discordapp.net/attachments/702481980025077853/1041119488688529409/unknown.png"
                    width={0}
                    height={5}
                    style={{ marginLeft: "15px" }}
                  />
                  Paypal
                </button>
              </div>

              <div id={togglePayment}>
                <div className="paymentbox borderbox">
                  {/* <div>
                  <p  className="paymentButton"><BsCreditCard2Back size={35} color='#B5B5B' style={{marginLeft:"10px"}} /> Pay with card</p>
                  </div> */}

                  <div className="boxxx">
                    <p className="paymentButton">
                      <BsCreditCard2Back
                        size={35}
                        color="#B5B5B"
                        style={{ marginLeft: "10px" }}
                      />{" "}
                      Pay with card
                    </p>
                    <div
                      style={{
                        display: "flex",
                        // marginRight: "110px",
                        padding: "5px",
                        //border: "1px solid red",
                      }}
                    >
                      <img
                        src="https://thecuriouspoint.com/wp-content/uploads/2020/09/Screenshot_2020-09-16-What-is-the-difference-between-RuPay-Card-VISA-Card-and-MasterCard-.png"
                        width="80%"

                        // height={40}
                      />
                    </div>
                  </div>

                  {/* atm card selection   */}
                  <div className="cardsection">
                    <div className="flexN">
                      <p>Card Number</p>
                      <input
                        type="number"
                        className="cardNumbox"
                        placeholder="•••• •••• •••• ••••"
                        style={{ width: "95%" }}
                        required
                      />
                    </div>
                    <div className="flexH">
                      <div style={{ width: "50%" }}>
                        <p>
                          Expiration Date{" "}
                          <span className="spaceh">(MM/YY)</span>{" "}
                        </p>
                        <input
                          type="text"
                          className="pd"
                          placeholder="MM/YY"
                          style={{ width: "90%" }}
                          required
                        />
                      </div>

                      <div style={{ width: "50%" }}>
                        <p>
                          CVV <span className="spaceh"> (3 digits)</span>
                        </p>
                        <input
                          type="number"
                          className="pd"
                          placeholder="•••"
                          style={{ width: "90%" }}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* atm card selection end  */}
                </div>

                <div
                  style={{ margin: "auto", marginTop: "50px" }}
                  className="goback placeorder"
                  onClick={handleChangeagin}
                >
                  Choose another way to pay
                </div>
              </div>

              <div
                style={{
                  margin: "auto",
                  marginTop: "50px",
                  paddingBottom: "50px",
                }}
                className="placeorder"
              >
                <div className=" flexf">
                  <div className="edit">Cancel</div>
                  <NavLink to="/success">
                    <button className="btn">PLACE ORDER</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
