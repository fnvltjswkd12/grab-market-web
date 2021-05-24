/* import logo from './logo.svg'; */
import './App.css';
import './main/index.js'
import MainPageComponent from './main/index.js';
import ProductPage from './product';
import UploadPage from './upload';
import {Switch, Route} from 'react-router-dom';

function App(){

return (
<div>
  <div id="header">
    <div id="header-area">
      <img src='images/icons/logo.png' alt="logo" />
      </div>
        </div>
  <div id="body">
  
  <Switch>
    <Route exact={true} path="/">
     <MainPageComponent />
     </Route>
     
     <Route exact={true} path="/products/:id">
      <ProductPage />
     </Route>

     <Route exact={true} path="/upload/:id">
       <UploadPage />
     </Route>
     </Switch>

     </div>
</div>
        )
  }

export default App 