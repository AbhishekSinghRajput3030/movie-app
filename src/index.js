import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

import './index.css';
import App from './components/App';
import movies from './reducers';

const store= createStore(movies); //pass reducer as argument
// console.log('store',store)

// store.dispatch({
//   type:'ADD_MOVIES', //takes object that is our action
//   movies:[{name:'Superman'}]
// });

// console.log('After State', store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);
