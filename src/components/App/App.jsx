import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const [airlineInput, setAirlineInput] = useState('');

  const airlines = useSelector((store) => store.activeAirlines);

  const dispatch = useDispatch();

  const addAirline = (event) => {
    event.preventDefault();

    // Send a dispatch to redux-land. It will need to include
    //  the value of airlineInput as the payload.
    dispatch({
      type: 'ADD_AIRLINE',
      payload: airlineInput
    })
    setAirlineInput('')
  }

  return (
    <div>
      <h1>Redux Airport</h1>
      <form onSubmit={addAirline}>
        <input 
          placeholder='Airline Name'
          value={airlineInput}
          onChange={(event) => setAirlineInput(event.target.value)}
        />
        <button>Add Airline</button>
      </form>
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
