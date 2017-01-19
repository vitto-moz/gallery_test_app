import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'whatwg-fetch'
import { setInitialStateSm, setInitialStateLg } from './actions'



const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	<Provider store={store}>
  		<App />
  	</Provider>,
  document.getElementById('root')
);


const getData = (pageNumber) => {

	if(pageNumber){
		pageNumber = "&page=" + pageNumber;
	}

	fetch('https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF' + pageNumber)  
	.then(  
		function(response) {  
			if (response.status !== 200) {  
				console.log('Looks like there was a problem. Status Code: ' +  
					response.status);  
				return;  
			}

			response.json().then(function(data) {  
				let result = { ...data};
				store.dispatch(setInitialStateSm(result.photos))
			});  
		}  
		)
	.catch(function(err) {  
		console.log('Fetch Error :-S', err);  
	});


	fetch('https://api.500px.com/v1/photos?feature=popular&image_size=600&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF' + pageNumber)  
	.then(  
		function(response) {  
			if (response.status !== 200) {  
				console.log('Looks like there was a problem. Status Code: ' +  
					response.status);  
				return;  
			}

			response.json().then(function(data) {  
				let result = { ...data};
				store.dispatch(setInitialStateLg(result.photos))
			});  
		}  
		)
	.catch(function(err) {  
		console.log('Fetch Error :-S', err);  
	});

};

getData("");


export { getData }