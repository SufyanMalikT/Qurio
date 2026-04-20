import { useState } from 'react'
import './App.css'
import { Header } from './components/header'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import  QurioLandingPage  from './pages/home'
import  UserHome  from './pages/UserHome'
import LoginPage from './pages/login'
import isAuthenticated from './services/auth'
import MainLayout from './Layouts/MainLayout'
import AuthLayout from './Layouts/AuthLayout'
import ProtectedRoutes from './Auth/ProtectedRoutes'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path='/login' element={<LoginPage />}/>
        </Route>
        <Route element={<ProtectedRoutes/>}>
          <Route element={<MainLayout />} >
            <Route path='/' element={<QurioLandingPage />} />
            <Route path='/home' element={<UserHome />} />
          </Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </> 
  )
}

export default App
