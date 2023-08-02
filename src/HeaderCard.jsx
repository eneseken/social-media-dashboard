import React from 'react'
import './HeaderCardSection';
import './App.css';


export default function HeaderCard(props) {

  const {icon, name, followers, analyse} = props;

  return (
    <div style={{width: "290px", height: "250px"}} className='headerCard text-dark d-flex flex-column justify-content-evenly align-items-center rounded border-3 border-top border-dark'>
    
    <div className='d-flex justify-content-center align-items-center gap-1'>
      {icon} @{name}
    </div>


    <div className='d-flex justify-content-center align-items-center flex-column'>

    <h1 className='fw-bolder followers-count m-0' style={{fontSize: "55px" }}>
      {followers}
    </h1>

    <p className='fw-light m-0' style={{fontSize: "14px"}}>F O L L O W E R S</p>

    </div>
    

    

    

    <div className='text-success'>
      {analyse}
    </div>

    </div>
  )
}
