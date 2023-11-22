import React from 'react'
import Layout from '../Layout/Layout'

import tests from '../database/testimonials.json'
import SingleTestimonial from '../components/testimonial/SingleTestimonial'

const Testimonials = () => {
  return (
    <Layout>
        <div className='container mx-auto'>
            <h1 className='text-xl font-bold py-5 text-orange-500'>TESTIMONIALS LIST</h1>
            <p className='text-2xl w-[60%] pb-5'>Better Agency/SEO Solution At Your Fingertips</p>
        </div>
        <div className='grid grid-cols-12 container mx-auto gap-5'>
          {
            tests.map((test, i) => <SingleTestimonial key={i} test={test} />)
          }
        </div>
    </Layout>
  )
}

export default Testimonials
