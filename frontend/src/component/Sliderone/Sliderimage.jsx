import React from 'react'
import Mycard from "../Sliderone/Mycard"
import "./Sliderimage.css"
const Sliderimage = () => {
  const boxRef = React.useRef()

  // let box = document.querySelector(".product-container");


const btnpressprev = () => {
  let width = boxRef.current.clientWidth;
  boxRef.current.scrollLeft = boxRef.current.scrollLeft-width ;
  console.log(width)

}

const btnpressnext = () => {
  let width = boxRef.current.clientWidth;
  boxRef.current.scrollLeft = boxRef.current.scrollLeft+width ;
  console.log(width)
}

const Productdata = [
  {
    name: "ETOR",
    title: "Full-Length-Jacket",
    price:"$1,222.00",
    image:"https://www.yoox.com/images/items/12/12997969JW_14_f.jpg?impolicy=crop&width=306&height=390"
  },
  {
    name: "ETOR",
    title: "Full-Length-Jacket",
    price:"$1,222.00",
    image:"https://www.yoox.com/images/items/16/16175112HA_14_f.jpg?impolicy=crop&width=306&height=390"
  },
  {
    name: "ETOR",
    title: "Full-Length-Jacket",
    price:"$1,222.00",
    image:"https://www.yoox.com/images/items/12/12997969JW_14_f.jpg?impolicy=crop&width=306&height=390"
  },
  {
    name: "ETOR",
    title: "Full-Length-Jacket",
    price:"$1,222.00",
    image:"https://www.yoox.com/images/items/12/12997969JW_14_f.jpg?impolicy=crop&width=306&height=390"
  },
  {
    name: "ETOR",
    title: "Full-Length-Jacket",
    price:"$1,222.00",
    image:"https://www.yoox.com/images/items/12/12997969JW_14_f.jpg?impolicy=crop&width=306&height=390"
  },
  {
    name: "ETOR",
    title: "Full-Length-Jacket",
    price:"$1,222.00",
    image:"https://www.yoox.com/images/items/12/12997969JW_14_f.jpg?impolicy=crop&width=306&height=390"
  },
  {
    name: "ETOR",
    title: "Full-Length-Jacket",
    price:"$1,222.00",
    image:"https://www.yoox.com/images/items/12/12997969JW_14_f.jpg?impolicy=crop&width=306&height=390"
  },
  {
    name: "ETOR",
    title: "Full-Length-Jacket",
    price:"$1,222.00",
    image:"https://www.yoox.com/images/items/12/12997969JW_14_f.jpg?impolicy=crop&width=306&height=390"
  }
  
  
  
]








  return (
    <div className='product-carousel'>
     <button className='pre-btn' onClick={btnpressprev}><p>&lt;</p></button>
     <button className='next-btn' onClick={btnpressnext}><p>&gt;</p></button>


     <div className='product-container' ref={boxRef}>
      {/* <Mycard cardno="1"/>
      <Mycard cardno="2"/>
      <Mycard cardno="3"/>
      <Mycard cardno="4"/>
      <Mycard cardno="5"/>
      <Mycard cardno="6"/>
      <Mycard cardno="7"/>
      <Mycard cardno="8"/>
      <Mycard cardno="9"/>
      <Mycard cardno="10"/> */}

      {
        Productdata.map((el)=>{
          return <div  className='mycard'>
            <img src={el.image} id="image"></img>
            <h4 className='text'>{el.name}</h4>
            <p className='text'>{el.title}</p>
            <p className='text'>{el.price}</p>


          </div>
        })
      }
      
     </div>

    </div>
  )
}

export default Sliderimage
