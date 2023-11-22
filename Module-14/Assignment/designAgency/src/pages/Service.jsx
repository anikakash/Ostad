import React from 'react'
import Layout from '../Layout/Layout'

import services from '../database/services.json'
import SingleService from '../components/service/SingleService'

const Service = () => {
  return (
    <Layout>
        <div className='container mx-auto'>
            <h1 className='text-xl font-bold py-5 text-orange-500'>ALL PROJECT</h1>
            <p className='text-2xl w-[60%] pb-5'>We Provide BestWeb design services</p>
        </div>
        <div className='container mx-auto grid grid-cols-12 py-20 gap-5'>
          {
            services.map((service, i) => <SingleService key={i} service={service} />)
          }
        </div>
    </Layout>
  )
}

export default Service
