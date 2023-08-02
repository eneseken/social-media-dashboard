import React from 'react'
import Overview from './Overview.jsx';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';


export default function OverviewSection() {

    const detailCards = [
       {
        title: 'Page Views',
        icon: <FaFacebook/>,
        number: '9',
        analyseNum: '200'
       },
       {
        title: 'Page Views',
        icon: <FaFacebook/>,
        number: '9',
        analyseNum: '200'
       },
       {
        title: 'Page Views',
        icon: <FaFacebook/>,
        number: '9',
        analyseNum: '200'
       },
       {
        title: 'Page Views',
        icon: <FaFacebook/>,
        number: '9',
        analyseNum: '200'
       },
       {
        title: 'Page Views',
        icon: <FaFacebook/>,
        number: '9',
        analyseNum: '200'
       },
       {
        title: 'Page Views',
        icon: <FaFacebook/>,
        number: '9',
        analyseNum: '200'
       },
       {
        title: 'Page Views',
        icon: <FaFacebook/>,
        number: '9',
        analyseNum: '200'
       },
       {
        title: 'Page Views',
        icon: <FaFacebook/>,
        number: '9',
        analyseNum: '200'
       }
    ]

  return (
   <section className='d-flex justify-content-between flex-wrap mt-4 '>
        {detailCards.map((detailCard) => (
        <Overview
          title={detailCard.title}
          icon={detailCard.icon}
          number={detailCard.number}
          analyseNum={detailCard.analyseNum}
        />
      ))}
   </section>
  )
}

