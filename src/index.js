import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const initialGlobalState = {
  player1Name : "",
  player2Name : ""
}

const GlobalStateContext = React.createContext(initialGlobalState);
const DispatchStateContext = React.createContext(undefined);


/**
 * Global State provider & hooks
 */
const GlobalStateProvider = ({ children }) => {
  const reducer = (state, newValue) => {
     return ({ ...state, ...newValue }) 
  }

  const [state, dispatch] = React.useReducer(
   reducer,
    initialGlobalState
  );
 
  return (
    <GlobalStateContext.Provider value={state}>
      <DispatchStateContext.Provider value={dispatch}>
        {children}
      </DispatchStateContext.Provider>
    </GlobalStateContext.Provider>
  );
};

const useGlobalState = () => [
  React.useContext(GlobalStateContext),
  React.useContext(DispatchStateContext)
];

ReactDOM.render(
  <React.StrictMode>
    <GlobalStateProvider>
    <App />
    </GlobalStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

export  {useGlobalState};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
