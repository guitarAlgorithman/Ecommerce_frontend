import React from 'react'
import { Container } from 'react-bootstrap'
import { useAuth } from '../Context/Auth/Auth'


function Perfil(props) {

  const auth=useAuth()
  let user=auth.user
  return (
    <div>
      <Container>
        <h2 className='text-center m-2'>Perfil de {user}</h2>
      </Container>
    

      <Container>
        <h3 className='text-center m-2'>Datos de contacto</h3>
      </Container>

    </div>
  )
}

export default Perfil