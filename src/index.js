
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
//import reducers from './reducers';
import './test.scss'
 
const App = () => {
  //const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  return (
    <div>
      Hello Word!!
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
