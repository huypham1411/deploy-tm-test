import React,{useState} from 'react';
import '../../styles/components/General/Nav.css';
import { NavLink } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import cart from '../../assets/cardIcon/cart.png';
import { Link,useHistory } from 'react-router-dom';
import {sortChoose,filterChoose} from '../../action/sort-action';
import {pageReset} from '../../action/paginate';
import {searching} from '../../action/search-field';
import Axios from 'axios';
import Cart from '../General/Cart';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
    const [appear,setAppear]=useState(false)
    const history = useHistory();
    const dispatch = useDispatch();
    const [searchInput,setSearchInput]=useState('')
    const styles = {
        borderRadius: 10,
        backgroundColor: '#00DD75'
    }
    //https://stackoverflow.com/questions/47879663/root-navlink-always-get-active-class-react-router-dom
    const checkActive = (match, location) => {
        //some additional logic to verify you are in the home URI
        if (!location) return false;
        const { pathname } = location;
        // console.log(pathname);
        return pathname === "/";
    }
    const getList=(e)=>{
        if (e.key === 'Enter') {
        const name=searchInput.toLowerCase();
       Axios.get(`http://localhost:3030/products?name=${name}`)
       .then(data=>{
           const rSearchInput = name;
           dispatch(searching(rSearchInput,data.data))
           history.push('/Search');
           //console.log('search',data.data);
           setSearchInput('')
        })
        .catch(err=>console.log(err));
        }
    }
    return (
    <nav className="nav-bar navbar navbar-expand-lg">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon">
          <FontAwesomeIcon icon={faBars} />
        </span>
      </button>

    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav">
          <NavLink to="/" isActive={checkActive} activeStyle={styles}>
            <li className="nav-item">Home</li>
          </NavLink>
          <NavLink to="/Products" activeStyle={styles}>
            <li className="nav-item">Our product</li>
          </NavLink>
          <NavLink to="/Policy" activeStyle={styles}>
            <li className="nav-item">Policy</li>
          </NavLink>
          <NavLink to="/About" activeStyle={styles}>
            <li className="nav-item">About us</li>
          </NavLink>
        </ul>
    </div>

      <div id="searchBar">
        <input type="search" id="searchInput"></input>
      </div>
      {/* <div className="img-container"><img src={cart} onClick={()=>{setAppear(!appear)}} alt="cart"></img></div>
            {appear&&<Cart/>}
        */}
        <Link to="/cart">
        <div className="img-container">
          <img src={cart} alt="cart"></img>
        </div>
      </Link>
    </nav>
    );
}
export default Nav;