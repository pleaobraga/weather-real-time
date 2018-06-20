
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
//import reducers from './reducers';
import './test.scss'
import WeatherBox from './components/weather-box/WeatherBox'
 
const App = () => {
  //const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  return (
    <WeatherBox />
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
