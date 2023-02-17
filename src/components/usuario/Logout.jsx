import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/Auth/Auth'

function Logout() {
    const navigate = useNavigate()
    const auth=useAuth()

    useEffect(() => {
        auth.logout()
        sessionStorage.removeItem("shoppingCart");
        sessionStorage.removeItem("token");
        setTimeout(() => {
          navigate('/Ecommerce_frontend')
        }, 2000)
      }, [])
    
  return (
    <div>Saliendo del sistema....</div>
  )
}

export default Logout