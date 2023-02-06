import React from 'react'
import { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import ShoppingCartContext from '../Context/Cart/ShoppingCartContext'


function CleanCart() {

  let {removeProduct}=useContext(ShoppingCartContext)
  const navigate = useNavigate();

  const removeAll=()=>{    
    removeProduct()
    navigate("/")
    alert("Carro de compras limpio")
  }

  return (
    <div>
        <Button onClick={()=>{removeAll()}}>
            Limpiar Carro de compras
        </Button>
    </div>
        
  )
}

export default CleanCart