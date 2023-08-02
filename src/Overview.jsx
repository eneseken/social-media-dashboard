import React from 'react'
import './OverviewSection.jsx'
import './App.css'

export default function Overview(props) {

    const {title, icon, number, analyseNum} = props;

return (
    <div style={{width: "300px", height: "140px"}} className='overviewCard text-dark mt-3 d-flex flex-wrap flex-column justify-content-evenly align-items-center rounded '>
        
            <div className='d-flex justify-content-center align-items-center w-100' style={{gap: '150px'}}>
            {title}
            {icon}
        </div>

        <div className='d-flex justify-content-center  align-items-center w-100' style={{gap: '200px'}}>
            <h1 className='fw-bolder'>{number}</h1>
            {analyseNum}
        </div>
       

    </div>
)
}
