
import React,{useEffect, Suspense, lazy} from "react";
// import Home from "./containers/Home";
import "./App.css";
// import Nav from "./components/General/Nav";
// import Footer from "./components/General/Footer";
import Nav from './components/General/Nav';
import Header from './components/General/Header';
import NotFound from './containers/404';
// import About from './containers/About';
// import signUp from './containers/signUp';
// import Policy from "./containers/Policy";
// import Forgot_pass from "./containers/ForgetPass";
// import Products from "./containers/Product";
// import ProductInfo from "./components/Product/ProductInfo";
// import Cart from "./components/General/Cart";
// import SearchPage from "./containers/SearchPage";
// import UserPage from "./containers/UserPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useDispatch} from 'react-redux';
import {usrLogin} from './action/user-login'
import axios from 'axios';

// import MessengerCustomerChat from 'react-messenger-customer-chat';

const Home = lazy (()=>import('./containers/Home'));
// const Nav = lazy (()=>import('./components/General/Nav'));
// const Header = lazy(()=>import('./components/General/Header'));
const About = lazy(()=> import('./containers/About')) ;
const signUp = lazy(()=> import('./containers/signUp'));
const Footer = lazy(()=> import('./components/General/Footer'));
const Policy = lazy(()=> import ("./containers/Policy"));
const Forgot_pass = lazy(()=> import("./containers/ForgetPass"));
const Products = lazy(()=>import("./containers/Product"));
const ProductInfo = lazy(()=>import( "./components/Product/ProductInfo"));
const Cart = lazy(()=>import("./components/General/Cart"));
const SearchPage = lazy(()=>import ("./containers/SearchPage"));
const UserPage = lazy(()=>import ("./containers/UserPage"));
const MessengerCustomerChat = lazy(()=>import('react-messenger-customer-chat'));

function App() {
  const dispatch=useDispatch();
  useEffect( ()=>{
    const token = localStorage.getItem('auth-token')
    if(token)
    {async function fetchUser()
    {
    //console.log('token',token)
    await axios.get('/login',{headers:{"auth-token":token}}).then((data)=>{
        return dispatch(usrLogin(data.data))})}
fetchUser();}
}
  ,[]);
  return (
    <div className="App">

    <Router>
    <Suspense fallback='loading...'>
        <Header/>
        {/* <Suspense fallback={<div/>}> */}
          <Nav /> 
        {/* </Suspense>    */}
        
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path ="/Policy" component={WaitingComponent(Policy)}/>
          <Route path="/About" exact component={WaitingComponent(About)} />
          <Route path="/SignUp" exact component={WaitingComponent(signUp)} /> 
          <Route path="/ForgetPass" exact component={WaitingComponent(Forgot_pass)} />
          <Route path="/Products" exact component={WaitingComponent(Products)}/>
          <Route path="/cart" exact component={WaitingComponent(Cart)}/>
          <Route path="/Products/:id" component={WaitingComponent(ProductInfo)}/>
          <Route path="/Search" component={WaitingComponent(SearchPage)}/>
          <Route path="/User" component={WaitingComponent(UserPage)}/>
          <Route path="/" component={NotFound}/>
      </Switch>
      
      <div>
      <MessengerCustomerChat
        pageId="100367225056687"
        appId="2687294444826178"
      />
      </div>
          <Footer />
      </Suspense>
    </Router>
    </div>
  );
}

function WaitingComponent(Component) {
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}

export default App;
