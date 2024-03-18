import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Bootstap
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { FormattedMessage } from 'react-intl'

function Login ({ onLogin }) {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [border, serBorder] = useState('none')

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
          throw new Error('Error de autenticación. Revise sus credenciales')
        }
        return response.json()
      })
      .then(data => {
        setError('')
        onLogin(true)
        console.log('hola desde app')
        console.log(data)
      })
      .catch(error => {
        setError(error.message)
      })
  }

  return (
    <div>
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Card
          style={{
            width: '40%',
            justifyContent: 'center',
            alignItems: 'center',
            border: 'none',
            display: 'flex'
          }}
        >
          <Card.Body style={{ alignItems: 'left' }}>
            <div
              style={{
                margin: '1rem',
                width: '556px',
                height: '42px',

                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '32px',
                lineHeight: '39px',
                textAlign: 'center'
              }}
            >
              <h1>
                {' '}
                <FormattedMessage id='login' />
              </h1>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group className='mb-3'>
                <Form.Label
                  style={{
                    height: '24px',
                    width: '186px',
                    left: '17px',
                    top: '74px',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '20px',
                    lineHeight: '24px',
                    color: '#000000'
                  }}
                >
                  <FormattedMessage id='username' />
                </Form.Label>
                <Form.Control
                  value={login}
                  onChange={e => setLogin(e.target.value)}
                  style={{
                    backgroundColor: '#D9D9D9',
                    width: '556px',
                    height: '58px',
                    borderRadius: '0',
                    borderColor: error ? 'red' : ''
                  }}
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label
                  style={{
                    height: '24px',
                    width: '186px',
                    left: '17px',
                    top: '74px',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '20px',
                    lineHeight: '24px',
                    color: '#000000'
                  }}
                >
                  <FormattedMessage id='password' />
                </Form.Label>
                <Form.Control
                  type='password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  style={{
                    backgroundColor: '#D9D9D9',
                    width: '556px',
                    height: '58px',
                    borderRadius: '0',
                    borderColor: error ? 'red' : ''
                  }}
                />
              </Form.Group>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '556px',
                  height: '58px'
                }}
              >
                <Link to={'/cars'}>
                  <Button
                    variant='primary'
                    type='submit'
                    onClick={handleSubmit}
                    style={{
                      backgroundColor: '#003B93',
                      color: 'white',
                      borderRadius: '0',
                      border: 'none',
                      width: '253px',
                      height: '53px',
                      fontFamily: 'Inter',
                      fontStyle: 'normal',
                      fontWeight: '700',
                      fontSize: '20px',
                      lineHeight: '24px',
                      color: '#FFFFFF'
                    }}
                  >
                    <FormattedMessage id='enter' />
                  </Button>
                </Link>
                <Button
                  variant='primary'
                  type='reset'
                  style={{
                    backgroundColor: '#E75D5D',
                    color: 'black',
                    borderRadius: '0',
                    border: 'none',
                    width: '253px',
                    height: '53px',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '20px',
                    lineHeight: '24px',
                    color: '#000000'
                  }}
                >
                  <FormattedMessage id='cancel' />
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Login
