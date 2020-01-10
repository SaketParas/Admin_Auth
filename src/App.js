import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';


import Login from './component/Login';
import Test from './component/Test';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
       
           <Route  exact path="/" render={props => <Login {...props}/>}/>
           <Route  path="/test" render={props => <Test {...props}/>}/>         
        </BrowserRouter>
    </div>
  );
}

export default App;
