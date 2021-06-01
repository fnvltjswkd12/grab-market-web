import React, { useEffect } from 'react';
import './index.css';
import axios from "axios";
import {BrowserRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';

function MainPageComponent(){
    const [products, setProducts] = React.useState([]) /* 2 */
    /*5*/
    useEffect(function(){
         /* 1*/
    axios.get('https://60f43ef8-f705-44e7-a37a-57a464f3ad0b.mock.pstmn.io/products').then(function(result){
        console.log(result);
        /*이거 때문에 에러가 떴었다. */
        const products = result.data.products
        /* 4 네트워크 통신이 끝나고 나서 순회하도록(업데이트되도록)*/
        setProducts(products);
    }).catch(function(error){console.log('에러 발생: ', error)});

    }, []);
   

    return (
        <div>
      

        <div id="banner">
            <img src="images/banners/banner1.png" alt="banner1"/>
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
        { /* 3*/
            products.map(function(product, index){
                return (
                    <div className="product-card">
                        <Link className="product-link" to={`/products/${product.id}`}>
                    <div>
                        <img className="product-img" src={product.imageUrl} ></img>
                    </div>
                    <div className="product-contents">
                        <span className="product-name">{product.name}</span>
                        <span className="product-price">{product.price}</span>
                        <div className="product-seller">
                            <img className="product-avatar" src="images/icons/avatar.png">
                            </img>
                            <span>{product.seller}</span>
                        
                        </div>
        
                        </div>
                        </Link>
                    </div>
                    )
                }
            )
    

        }

    

        </div>

        {/*이 아래 자리가 원래 div id= body태그의 닫히는 태그였음*/}
    

    </div>


    )
};

export default MainPageComponent;