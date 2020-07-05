import React from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../components/Home/cardList/Card';
import {connect} from 'react-redux';
import { addToCart } from '../action/cart-action';
import '../styles/containers/SearchPage.css';
import '../styles/components/Home/Cardlist.css';
const SearchPage =(props)=>{
    const searchInput=useSelector(state=>{
        return state.searchReducer.name});
        const handleClick=(id)=>{
            props.addToCart(id)
        }
    const searchResult=useSelector(state=>state.searchReducer.data);
        return (<div className="SearchPage">
            <div className="searchText">
                <p>Search Result:{searchInput}</p>
                <hr></hr>
            </div>
            <div className="searchResult">
            {
            searchResult.map(item=>{
            return <div className="card-container col-lg-4 col-md-6 col-sm-6" key={item.id}>
            <Link to={`/Products/${item._id}`}>
              <Card
                key={item._id}
                img={item.img}
                price={Math.round(item.price*100)/100}
                productName={item.name}
                id={item.id}
                handleClick={handleClick}
              />
            </Link>
            </div>
            })
            }
          </div>
        </div>
        );
    }

    const mapStateToProps = (state) => {
        return {
          items: state.cartReducer.items,
        }
      }
      const mapDispatchToProps = (dispatch) => {
      
        return {
          addToCart: (id) => { dispatch(addToCart(id)) }
        }
      }
      export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
      
