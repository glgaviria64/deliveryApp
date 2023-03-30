import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.scss'

import screen from "../../../assets/screen.png"

const Intro = () => {
    const navigate=useNavigate()
    const goCarousel=()=>{
        navigate('/intro')

    }
   useEffect(() => {
    setTimeout(goCarousel,2000)
    
   }, [])
   
   
  return (
    <div className='div' ><img className='' src={screen} /></div>
  )
}

export default Intro