import React,{useState} from 'react';
import Button from '../General/Button';
import Form from '../General/Form';
import Image from '../../assets/Logo.svg';
import '../../styles/components/General/Header.css';
import {  Link } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {usrLogout} from '../../action/user-login';
const Header = ()=>{
    const [appear,setAppear]=useState(false)
    const onLog = useSelector(state => state.loginReducer.username);
    const id = useSelector(state => state.loginReducer.id);
    const dispatch=useDispatch();
    const auth=localStorage.getItem('auth-token');//google, facebook auto bat form
    return (
        console.log(onLog,auth),
        <div className="header">
            <div className="iconImg">
                <img src={Image} alt="Logo" />
            </div>
            {(!onLog||!auth)?<div className="btnLocation">
                <div id="btn1">
                    <Button name='Login' className="header-btn" onClick={()=>{setAppear(!appear)}}/>
                </div>
                <div id="btn2">
                    <Link to="SignUp">
                    <Button name='Sign up' className="header-btn" color='#FD5E53'/>
                    </Link>
                </div>
            </div>:<div className="btnLocation">
                <p className="usr-name">Hi, <Link to={{ pathname: '/User', state: { id: id} }}>{onLog}</Link></p>
                <Button name='Log out' onClick={()=>{
                    localStorage.removeItem('auth-token')
                    dispatch(usrLogout())}
                    }/>
            </div>}
            {!onLog&&appear&&<Form/>}
        </div>
    );
}
export default Header;

