import React from 'react';
import { connect } from 'react-redux';
import { setInitialState } from '../actions'

let counter = 0
console.log("counter", counter++);

const  InitialState = ({ setInitialState }) => {
  

  console.log("initialState initialState.jsinitialStateinitialState");
  let result = {};

  fetch('https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF')  
    .then(  
      function(response) {  
        if (response.status !== 200) {  
          console.log('Looks like there was a problem. Status Code: ' +  
            response.status);  
          return;  
        }

        response.json().then(function(data) {  
          console.log("data ", data);  
          result = { ...data};
          setInitialState(result);
        });  
      }  
    )
    .catch(function(err) {  
      console.log('Fetch Error :-S', err);  
    });


  return (
        <div>
            Again
        </div>
    )
};

export default connect(
  state => ({
    store: state
  }),
  dispatch => ({
    setInitialState: (initialState) => {
      dispatch(setInitialState(initialState));
    }
  })
)(InitialState);