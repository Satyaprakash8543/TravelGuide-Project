import React from 'react'

const citylayout = ({children,info}) => {
  return (
    <div className='flex flex-row'>
      {children}
      {info}
    </div>
  )
}

export default citylayout
