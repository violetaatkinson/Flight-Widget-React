import { useState, useEffect } from 'react'
import TableRow from './TableRow'

const TableBody = () => {
  const [flights, setFlights] = useState(null)

  const getFlights = () => {
    fetch('http://localhost:8000/flights') // buscamos en esta url que es la api que creamos y ahi aparece toda la info
        .then(response => response.json()) // nos da una respuesta
        .then(flights => setFlights(Object.values(flights.data)))// seteamos los flights de null a la respuesta q nos da el json
        .catch(err => console.log(err))
}

  useEffect(()=> getFlights, []) // agarramos la info con la func anterior

  console.log(flights)

    return (
      <tbody>
        {flights?.map((flight, _index) => ( // si flights existe quiero iterar
            <TableRow key={_index} flight={flight} /> // x cada item lo paso x una row
        ))}
      </tbody>
    );
  }
  
  export default TableBody;