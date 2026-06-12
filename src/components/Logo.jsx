import React from 'react'
import megablogLogo from '../assets/megablog.png'

function Logo({width = '100px'}) {
  return (
    <div className='flex items-center'>
      <img src={megablogLogo} alt="MegaBlog Logo" style={{width}} className='rounded-lg hover:opacity-80 transition-opacity' />
    </div>
  )
}

export default Logo
