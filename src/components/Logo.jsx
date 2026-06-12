import React from 'react'

function Logo({width = 'auto'}) {
  return (
    <div className='flex items-center cursor-pointer group' style={{ width }}>
      {/* Refined Minimalist Text Logo with Contrasting Dot */}
      <span className='text-2xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-300'>
        MegaBlog<span className='text-indigo-600 dark:text-indigo-500'>.</span>
      </span>
    </div>
  )
}

export default Logo
