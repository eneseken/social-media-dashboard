import React from 'react'
import HeaderCard from './HeaderCard';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function HeaderCardSection() {

    const cards = [
        {
            icon: <FaFacebook size={25} color='blue'/>,
            name: 'example',
            followers: '1999',
            analyse: 'xxx Takip'
        },
        {
            icon: <FaTwitter size={25} color='cyan'/>,
            name: 'example',
            followers: '1999',
            analyse: 'xxx Takip'
        },
        {
            icon: <FaInstagram size={25} color='orange'/>,
            name: 'example',
            followers: '1999',
            analyse: 'xxx Takip'
        },
        {
            icon: <FaYoutube size={25} color='red'/>,
            name: 'example',
            followers: '1999',
            analyse: 'xxx Takip'
        }
    ]

  return (
   <section className='d-flex justify-content-between flex-wrap mt-4'>
        {cards.map((card) => (
        <HeaderCard
           // Eğer her kartın benzersiz bir kimliği yoksa, bir "key" propu eklemelisiniz.
          icon={card.icon}
          name={card.name}
          followers={card.followers}
          analyse={card.analyse}
        />
      ))}
   </section>
  )
}
