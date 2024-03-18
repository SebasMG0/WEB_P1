import './App.css'

import React, { useState } from 'react'

// Imágenes
import loginCar from './media/loginCar.png'
import loginTitle from './media/loginTitle.png'
import line from './media/line.png'
import Login from './components/login'
import { BrowserRouter } from 'react-router-dom'
import CarsTable from './components/cars'
import { FormattedMessage } from 'react-intl'

function App () {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  return (
    <BrowserRouter>
      <div>
        <div
          style={{
            marginLeft: '5rem',
            marginRight: '5rem',
            marginTop: '1rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <div style={{ width: '1244px' }}>
            <img
              src={loginTitle}
              alt='loginTitle'
              style={{ width: '253px', height: '61px' }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img
              src={line}
              alt='loginTitle'
              style={{ width: '1244px', height: '5px' }}
            />
            <img
              src={loginCar}
              alt='loginCar'
              style={{ width: '1244px', height: '323px' }}
            />
            <img
              src={line}
              alt='loginTitle'
              style={{ width: '1244px', height: '3px' }}
            />
            <div style={{margin:'2rem'}}>
              {isLoggedIn ? <CarsTable /> : <Login onLogin={setIsLoggedIn} />}
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            marginTop: '5%'
          }}
        >
          <h3
            style={{
              height: '24px',

              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: '18px',
              lineHeight: '22px',
              color: '#000000'
            }}
          >
            <FormattedMessage id='contactUs' />: +57 3102105253 - info@tusegundazo.com - @tusegundazo
          </h3>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
