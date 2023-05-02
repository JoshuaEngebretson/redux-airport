import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

/** TODO: import REDUX **/
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


/** TODO: Add REDUCERS */
const activeAirlines = (state=[], action) => {
    if (action.type === 'ADD_AIRLINE') {
        // Create a variable based on what is being sent over
        const newAirlineName = action.payload;
        // Create a "unique" id for the newAirline
        //  (This will fall apart if removing pieces of
        //   state as the length would be reduced and we
        //   could start getting duplicates...)
        //  A database would do this WAY better.
        const newId = state.length + 1;
        // Create an object that includes both variables
        //  This is now the newAirline
        const newAirline = {
            id: newId,
            name: newAirlineName
        };
        // Cant MUTATE state, so here is a copy
        const copyOfState = [...state];
        // Add newAirline to the copy
        copyOfState.push(newAirline);
        // return the copy (thus making state now the copy.)
        return copyOfState;
    }
    // If the action.type does not match anything above, 
    //  return state as it currently is.
    return state;
}


/** TODO: Create store */

const airlineStore = createStore(
    combineReducers({
        activeAirlines
    }),
    applyMiddleware(
        logger
    )
);



// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={airlineStore}>
            <App />
        </Provider>
    </React.StrictMode>
);