import React from 'react'
import './BtnKeys.css'

const BtnKeys = ({btnkey, onClick}) => {
  return (
    <>
         <button className='numbers' onClick={onClick}>{btnkey}</button>
   
       

    </>
  )
}

export default BtnKeys