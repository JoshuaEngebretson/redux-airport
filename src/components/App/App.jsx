import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const airlines = useSelector((store) => store.activeAirlines)
  console.log('airlines', airlines);

  // const airlineKeys = airlines.map(Object.keys());
  // console.log('airlineKeys', airlineKeys);

  return (
    <div>
      <h1>Redux Airport</h1>
      <input placeholder='Airline Name' />
      <button>Add Airline</button>
      <table>
        <thead>
          <tr>
            {/* This would go through and create a new table header
                for each key within the airlines array.
                  While this works, I will hard code the th element */}
            {/* {Object.keys(airlines[0]).map((k) => {
              return <th>{k}</th>
            })} */}
            <th>Airline Name</th>
          </tr>
        </thead>
        {/* Airlines should be listed here */}
        <tbody>
          {airlines.map((airline) => {
            console.log(Object.keys(airline));
            return (
              <tr key={airline.id}>
                <td>{airline.name}</td>
              </tr>
            )
          })}
        </tbody>
      
      </table>
    </div>
  );
}

export default App;
