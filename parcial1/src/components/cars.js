import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card'
import { FormattedMessage } from 'react-intl'

function CarsTable () {
  const [cars, setCars] = useState([])
  const [selectedCar, setSelectedCar] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/cars')
      .then(response => response.json())
      .then(data => setCars(data))
  }, [])

  const handleRowClick = car => {
    setSelectedCar(car)
  }

  return (
    <div
      style={{
        width: '1247px',
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '3rem',
          alignContent: 'center'
        }}
      >
        <div>
          <Table hover style={{ width: '786px', height: '50' }}>
            <thead>
              <tr>
                <th
                  style={{
                    backgroundColor: '#333A40',
                    color: 'white'
                  }}
                >
                  <FormattedMessage id='id' />
                </th>
                <th
                  style={{
                    backgroundColor: '#333A40',
                    color: 'white'
                  }}
                >
                  <FormattedMessage id='brand' />
                </th>
                <th
                  style={{
                    backgroundColor: '#333A40',
                    color: 'white'
                  }}
                >
                  <FormattedMessage id='line' />
                </th>
                <th
                  style={{
                    backgroundColor: '#333A40',
                    color: 'white'
                  }}
                >
                  <FormattedMessage id='model' />
                </th>
              </tr>
            </thead>

            <tbody>
              {cars.map(car => (
                <tr key={car.id} onClick={() => handleRowClick(car)}>
                  <td
                    style={{
                      width: '43.89px',
                      height: '23.34px',
                      left: '37.96px',
                      top: '87.93px',
                      fontFamily: 'Inter',
                      fontStyle: 'normal',
                      fontWeight: '700',
                      fontSize: '18px',
                      linHeight: '22px',
                      color: '#000000'
                    }}
                  >
                    {car.id}
                  </td>
                  <td
                    style={{
                      width: '82.79px',
                      height: '23.34px',
                      left: '11.77px',
                      top: '189.42px',
                      fontFamily: 'Inter',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '18px',
                      lineHeight: '22px',
                      color: '#000000'
                    }}
                  >
                    {car.marca}
                  </td>
                  <td
                    style={{
                      width: '82.79px',
                      height: '23.34px',
                      left: '11.77px',
                      top: '189.42px',
                      fontFamily: 'Inter',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '18px',
                      lineHeight: '22px',
                      color: '#000000'
                    }}
                  >
                    {car.linea}
                  </td>
                  <td
                    style={{
                      width: '82.79px',
                      height: '23.34px',
                      left: '11.77px',
                      top: '189.42px',
                      fontFamily: 'Inter',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '18px',
                      lineHeight: '22px',
                      color: '#000000'
                    }}
                  >
                    {car.modelo}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div>
          {selectedCar && (
            <Card
              style={{
                width: '427px',
                height: '351px',
                background: 'rgba(217, 217, 217, 0.5)',
                border: '1px solid #000000',
                borderRadius: '0',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex'
              }}
            >
              <div>
                <h3
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
                  {selectedCar.marca + ' ' + selectedCar.linea}
                </h3>
              </div>

              <Card.Img
                variant='top'
                src={selectedCar.imagen}
                style={{
                  maxWidth: '318px',
                  maxHeight: '159px',
                  objectFit: 'none'
                }}
              />
              <Card.Body style={{ width: '80%', textAlign: 'left' }}>
                <Card.Text
                  style={{
                    width: '321px',
                    height: '75px',
                    left: '958px',
                    top: '727px',

                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '18px',
                    lineHeight: '22px',
                    color: '#000000'
                  }}
                >
                  <div>
                    <p
                      style={{
                        width: '321px',
                        height: '75px',
                        left: '958px',
                        top: '727px',

                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '18px',
                        lineHeight: '22px',
                        color: '#000000'
                      }}
                    >
                      🡢 <FormattedMessage id='kilometers' />:{' '}
                      {selectedCar.kilometraje} <br />
                      🡢 <FormattedMessage id='color' />: {selectedCar.color}{' '}
                      <br />
                      🡢 <FormattedMessage id='reference' />:{' '}
                      {selectedCar.referencia}
                    </p>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

export default CarsTable
