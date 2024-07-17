import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: 'Pricing Page',
  description: 'Pagina de precios',
  keywords: ['pricing page', 'Camila', 'info'],
 };

const pricingPage = () => {
  return (

      <span className='text-7xl'>pricing page</span>
   
  )
}

export default pricingPage
