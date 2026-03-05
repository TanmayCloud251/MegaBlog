import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({$id, title , featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='bg-gray-100 w-full rounded-xl'>
            <div className='w-full justify-cente mb-4'>
                {featuredImage && <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl'/>}
            </div>
            <h2 className='text-xl font-bold text-center'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard