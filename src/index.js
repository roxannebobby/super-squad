import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/index';
import { addCharacterById } from './actions';

const store = createStore(rootReducer);
console.log('store.getState()', store.getState());

// subscribe is the event listener for changes in state
store.subscribe(() => console.log('store', store.getState()));

// dispatch tells us which action function to fire off
store.dispatch(addCharacterById(2));

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
