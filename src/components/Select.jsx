import React, {useId} from 'react'

function Select({
    options,
    label,
    className='',
    ...props
},ref) {
   const id = useId() 
  return (
    <div className='w-full'>
      {label && <label htmlFor={id} className='inline-block mb-1.5 pl-1 text-sm font-medium text-gray-700 dark:text-slate-300'>{label}</label>}
      <select
      {...props}
      id={id}
      ref={ref}
      className={`px-3 py-2 rounded-lg bg-white dark:bg-slate-800 text-black dark:text-white outline-none border border-gray-300 dark:border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors duration-200 w-full ${className}`}
      > 
        {options?.map((option) => (
          <option key={option} value={option} className="bg-white dark:bg-slate-800">
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default React.forwardRef(Select)
