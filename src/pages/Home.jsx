import React, {useEffect, useState} from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'


function Home() {
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    appwriteService.getPosts().then((posts) => {
        if(posts) {
            setPosts(posts.documents)
        }
    })
  },[])

  if(posts.length === 0) {
    return (
        <div className='w-full py-20 text-center'>
            <Container>
                <div className='max-w-2xl mx-auto px-4'>
                    <h1 className='text-4xl font-extrabold text-gray-900 dark:text-white mb-6 transition-colors'>
                        Welcome to MegaBlog
                    </h1>
                    <p className='text-xl text-gray-600 dark:text-slate-400 mb-10 transition-colors'>
                        The place to share your thoughts and explore new perspectives. 
                        Login to start reading and creating amazing content.
                    </p>
                </div>
            </Container>
        </div>
    )
  }

  return(
    <div className='w-full py-8'>
        <Container>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                { posts.map((post)=> (
                    <div key={post.$id}>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default Home
