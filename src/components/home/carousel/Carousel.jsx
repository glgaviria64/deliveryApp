import carousel1 from "../../../assets/carousel1.png";
import carousel2 from "../../../assets/carousel2.png";
import carousel3 from "../../../assets/carousel3.png";
import React, { useState,  useEffect } from "react";
import {useNavigate } from "react-router-dom";
import './style.scss'



const Carousel = () => {

  const navigate=useNavigate()


const initial = 0
const [index, setIndex] = useState(initial)
const nextImg =()=>{
  setIndex(index+1)
  console.log(index);
}
const [render, setRender] = useState(carousel1)

useEffect(() => {
  if (index===0) {
    setRender(carousel1)
  }
  else if (index===1) {
    setRender(carousel2)
    
  }
  else if (index===2) {
    setRender(carousel3)
    
  }
  else if (index===3) {
   navigate('/signIn')
    
  }
 
}, [index])
useEffect(() => {
  if (index < 2) {
    setTimeout(()=>{setIndex(index+1)},2500)
   
    
  }
  if (index===2) {
    setTimeout(()=>{setIndex(0)},7000)
    
  }
  
 
}, [index])


  return (
    <div className="carousel">
     <img src={render} />
    

      <button onClick={nextImg}> Next</button>
    </div>
  )
}

export default Carousel

