import React from 'react';
import '../styles/containers/Product.css';
import ProductImg from '../components/Product/ProductImg';
import ProductList from '../components/Product/ProductList';
import CardList from '../components/Home/cardList/Cardlist';
import Sort from '../components/Product/Sort';
//import cartReducer from '../reducer/cartReducer';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

// const store = createStore(cartReducer);

class Product extends React.Component {
    render() {
        return (
            <div className="product">
                <ProductImg />
                <div className="product-shop ">
                <div className="row">
                    <div className="filter-zone col-lg-3 col-md-12">
                        <ProductList />
                    </div>
                    <div className="product-main col-lg-9 col-md-12">
                        <div className="sortProduct">
                            <Sort />
                        </div>
                        <div className="product-list">
                            <CardList/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );

    }
}

export default Product;