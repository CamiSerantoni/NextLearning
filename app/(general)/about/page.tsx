import { Metadata } from 'next';
import React from 'react'



export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO description',
 keywords: ['About page', 'Camila', 'información'],
};

const AboutPage = () => {
  return (
 
     <span className='text-7xl'>About Page</span> 
    
  )
}

export default AboutPage
