import {useParams} from 'react-router-dom';

function ProductPage(){

const {id} = useParams();
console.log(params)

    return (


<div>
    <div id = "image-box">
        <img src={"/"+product.imageUrl} /> 
    </div>
    <div id = "profile-box">
        <img src="/icons/avatar.png" />
        <span>{product.seller}</span>
    </div>

</div>
    )
};

export default ProductPage;

