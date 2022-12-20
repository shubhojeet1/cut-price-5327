import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export const Cart = () => {
  const [data, setData] = useState([]);
  const router = useNavigate();

  //add checkout page data

  // get item from local storage
  var cart_data = JSON.parse(localStorage.getItem("cart")) || [];
  useEffect(() => {
    if (cart_data.length > 0) {
      setData(cart_data);
    }
  }, []);
  //   const removeTocart = (data) => {
  //     console.log(data, "data");
  //     for (let i = 0; i < cart_data.length; i++) {
  //       const items = cart_data[i].title;
  //       if (items === data) {
  //         cart_data.splice(i, 1);
  //         break;
  //       }
  //     }
  //   };.
  var res_arr = JSON.parse(localStorage.getItem("checkout_Array")) || [];
  const goToCheckout = (data) => {
    res_arr.push(data);
    // store data into local storage
    let cart_loaclal = false;
    var local = localStorage.setItem("checkout_Array", JSON.stringify(res_arr));

    cart_loaclal = true;
    //console.log(cart_loaclal);

    if (cart_loaclal) {
      //alert(`${data.title}-successfully added into cart`);
      router("/bill");
    } else {
      alert("no data found");
    }
  };

  return (
    <div>
      <h1 className="head">View Your Cart Item Here</h1>

      {data.map((el) => (
        <div key={el} className="container1">
          <div className="image_box">
            <img id="img1" src={el.image} alt="" />
          </div>
          <h1 className="head-1">{el.title}</h1>
          <p className="head-1">{`$${el.price}`}</p>

          <button className="btn_1" onClick={(data) => goToCheckout(el)}>
            Goto Checkout
          </button>
        </div>
      ))}
    </div>
  );
};
