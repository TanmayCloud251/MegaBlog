import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { logout } from '../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
  const logoutHandler = ()=>{
    authService.logout().then(()=>{
      dispatch(logout())
    });
  }

  return (
    <button onClick={logoutHandler} className='inline-block rounded-b-2xl px-6 py-2 duration-200 hover:bg-blue-100 bg-[#0F6B68]'>Logout</button>
  )
}

export default LogoutBtn
