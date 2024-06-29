import React from 'react'
import Home from './home/Home'
import Popular from './components/Popular'
import { Navigate, Route, Routes } from 'react-router-dom'
import Popular1 from './popular/Popular1'
import Signup from './components/Signup'
import Contact from './components/Contact'
import Contact1 from './contact/Contact1'
import  { Toaster } from 'react-hot-toast'
import { useAuth } from './context/AuthProvider'
function App() {
  const [authUser,setAuthUser]=useAuth()
  console.log(authUser)
  return (
  <>
   <div className='dark:bg-slate-800 dark:text-white'>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/popular' element={authUser? <Popular1 />:<Navigate to='/signup'/>}/>
    <Route path='/signup' element={<Signup />}/>
    <Route path='/contact' element={<Contact1/>}/>
   </Routes>
   <Toaster />
   </div>
  </>
  

  )
}

export default App