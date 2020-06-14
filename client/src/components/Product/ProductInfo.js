import React, { useState, useEffect } from 'react';
import '../../App.css';
// import Axios from 'axios';
// import { data } from '../../data/data';
import '../../styles/components/Product/ProductInfo.css';
import ProductCard from '../Product/ProductCard';
function ProductInfo({ match }) {
    useEffect(() => {
        fetchItems();
        // console.log(match.params.id);
        // console.log(data);
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            `http://localhost:3030/products/${match.params.id}`
        )
        const items = await data.json();
        setItems(items);
        //console.log(items);
    }

    return (
        <div className="productInfo">
            <ProductCard
                key={items._id}
                img={items.img}
                name={items.name}
                description={items.description}
                status={items.status}
                price={items.price}
                id={items.id}  

            />
        </div>
    )
}

export default ProductInfo;