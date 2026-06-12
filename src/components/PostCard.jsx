import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({$id, title , featuredImage}) {
  return (
    <Link to={`/post/${$id}`} className='group'>
        <div className='w-full bg-white dark:bg-slate-900 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-slate-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1'>
            <div className='w-full aspect-video overflow-hidden rounded-xl mb-4 bg-gray-100 dark:bg-slate-800'>
                {featuredImage && (
                    <img 
                        src={appwriteService.getFilePreview(featuredImage)} 
                        alt={title} 
                        className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                    />
                )}
            </div>
            <h2 className='text-xl font-bold text-gray-800 dark:text-slate-100 line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard