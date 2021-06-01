/* import logo from './logo.svg'; */
import 'antd/dist/antd.css'; //
import './App.css';
import './main/index.js'
import MainPageComponent from './main/index.js';
import ProductPage from './product';
import UploadPage from './upload';
import {Switch, Route, Link, useHistory} from 'react-router-dom';
import {Button} from 'antd';
import {DownloadOutlined} from '@ant-design/icons';


function App(){
  const history = useHistory();

return (
<div>
  <div id="header">
    <div id="header-area">
      <Link to="/">
      <img src='/images/icons/logo.png' alt="logo" />
      </Link>
      </div>
      <Button size="large" 
      onClick={function(){
        history.push('/upload');

      }}
      icon = {<DownloadOutlined />} >
        상품 업로드
      </Button >
        </div>

  <div id="body">
  
  <Switch>
    <Route exact={true} path="/">
     <MainPageComponent />
     </Route>
     
     <Route exact={true} path="/products/:id">
      <ProductPage />
     </Route>

     <Route exact={true} path="/upload">
       <UploadPage />
     </Route>
     </Switch>

     </div>
</div>
        )
  }

export default App 