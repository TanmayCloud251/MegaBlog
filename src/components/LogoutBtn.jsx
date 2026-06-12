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
    <button onClick={logoutHandler} className='inline-block px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg duration-200'>Logout</button>
  )
}

export default LogoutBtn
