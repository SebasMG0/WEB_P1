import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function CarsTable () {
  const [cars, setCars] = useState([])
  const [selectedCar, setSelectedCar] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/cars')
      .then(response => response.json())
      .then(data => setCars(data))
  }, [])

  const handleRowClick = (car) => {
    setSelectedCar(car)
  }

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Marca</th>
            <th>Línea</th>
            <th>Modelo</th>
          </tr>
        </thead>
        <tbody>
          {cars.map(car => (
            <tr key={car.id} onClick={() => handleRowClick(car)}>
              <td>{car.id}</td>
              <td>{car.marca}</td>
              <td>{car.linea}</td>
              <td>{car.modelo}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {selectedCar && (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={selectedCar.imagen} />
          <Card.Body>
            <Card.Title>{selectedCar.marca} {selectedCar.linea}</Card.Title>
            <Card.Text>
               {"-> Kilometraje: " + selectedCar.kilometraje}<br/>
              {"-> Color: "+selectedCar.color} <br/>
              {"-> Referencia: "+selectedCar.referencia}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  )
}

export default CarsTable
