/* import logo from './logo.svg'; */
import './App.css';
import './main/index.js'
import MainPageComponent from './main/index.js';
import ProductPage from './product';
import UploadPage from './upload';
import {Switch, Route} from 'react-router-dom';

function App(){

return (
  <Switch>
    <Route exact={true} path="/">
     <MainPageComponent />
     </Route>
     
     <Route exact={true} path="/products/:id">
      <ProductPage />
     </Route>

     <Route exact={true} path="/upload:id">
       <UploadPage />
     </Route>
     </Switch>
        )
  }

export default App 