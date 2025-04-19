import React from 'react'

const BannerBox = (props) => {
  return (
    <div className='box BannerBox'>
        <img src={props.img} alt={props.title} className='w-full' />
    </div>
  )
}

export default BannerBox