import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'

function Login () {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    let url = 'http://localhost:3001/login'
    let data = {
      login: login,
      password: password
    }

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.status === 401) {
          throw new Error('Usuario no válido')
        }
        return response.json()
      })
      .then(data => {
        console.log(data)
        setError('')

      })
      .catch(error => {
        console.error('Error:', error)
        setError(error.message)
      })
  }

  return (
    <div style={{ margin: '4rem' }}>
      <Card
        style={{ width: '40%', justifyContent: 'center', alignItems: 'center' }}
      >
        <Card.Body style={{ alignItems: 'left' }}>
          <h1>Inicio de sesión</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3'>
              <Form.Label>Nombre de usuario</Form.Label>
              <Form.Control
                value={login}
                onChange={e => setLogin(e.target.value)}
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </Form.Group>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
            <Link to={'/cars'   }>
              <Button variant='primary' type='submit'>
                Ingresar
                
              </Button>
              </Link>
              <Button variant='primary' type='reset'>
                Cancelar
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Login
