import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import {Header, Footer} from "./components/index"
import { Outlet } from 'react-router-dom'

function App() {
  
  const [ loading, setLoading ] = useState(true)
  const dispatch  = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login(userData))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))
  }, [])

  return !loading? (
    <div className='min-h-screen flex flex-col bg-gray-50 dark:bg-slate-950 transition-colors duration-300'>
        <div className='w-full block'>
              <Header />
              <main className='py-8'>
               <Outlet />
              </main>
              <Footer />
        </div>
    </div>
  ) : null;
}

export default App
