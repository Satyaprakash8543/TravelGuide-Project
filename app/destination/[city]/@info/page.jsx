'use client'
import { useParams} from 'next/navigation'
import React from 'react'

const page = () => {
  const {city}=useParams()
  return (
    <div className='text-white mt-[100px]  '>
      <div className='uppercase text-base text-teal-600 font-semibold tracking-wide'>{city} is the best city.</div>
    </div>
  )
}

export default page
