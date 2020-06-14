import React,{useState} from 'react';
import Image from '../../assets/Logo.svg';
import '../../styles/components/General/Form.css';
import Button from '../General/Button';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {usrLogin} from '../../action/user-login'
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

const Form =()=>{
    const [email,setEmail]=useState('');
    const [address,setAddress]=useState('ahihu');
    const [password,setPassword]=useState('');
    const dispatch = useDispatch();
    const loginFunciton=()=>{
        //e.preventDefault();
        
        axios.post('http://localhost:3030/login',{email,password})
            .then((data)=>{
                //console.log(data.headers['auth-token'])
            localStorage.setItem('auth-token',data.headers['auth-token'])
            console.log(data)
            alert('Login success')
            return dispatch(usrLogin(data.data))})
            .catch(err=>{
                console.log(err)
                const e=err.response.data;
                let s='';
                for(let i of e){s+=i.message;}
                 alert(s);
            });
    }

    const responseFacebook = (response) => {
        const url = 'https://graph.facebook.com/' + response.userID + '?fields=location&access_token=' + response.accessToken
        axios.get(url)
        .then(res => {
            const data = {
                email: response.email,
                name: response.name,
                avatar: "https://graph.facebook.com/" + response.userID + "/picture?type=large",
                id: response.id,
                address: res.data.location.name,
                role: 'facebook',
            }

            axios.post('http://localhost:3030/social', data)
            .then(res2 => {
                if (res2.data.status == 'success') {
                    alert('success')
                } else {
                    alert('err')
                }
            })

            return dispatch(usrLogin(data))
        })
    }

    const responseGoogle = (response) => {
       // console.log(response.googleId)
       localStorage.setItem('auth-token',response.googleId)
        const data = {
            email: response.Tt.Du,
            name: response.Tt.Bd,
            avatar:response.Tt.hL,
            id: response.Ea,
            address: 'Trống',
            role: 'gmail'
        }

        axios.post('http://localhost:3030/social', data)
        .then(res => {
            console.log(res)
            if (res.data.status == 'success') {
                alert('success')
            } else {
                alert('err')
            }
        })
        return dispatch(usrLogin(data))
    }

    return (
        <div className="login-wrap">
            <div className="modal-content animate">
                <div className="headerForm">
                    <h2> USER LOGIN </h2>
                    <img className="logo" src={Image} alt="Logo" />
                </div>

                <div className="form-container">
                    <input type="text" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
                </div>

                <div className="form-container">
                    <input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
                </div>
                
                <div className="form-container">
                    <Button name='Sign In' className="header-btn" onClick={loginFunciton}/>
                </div>
                
                <div className="social">
                    <div className="FB_login">
                        <FacebookLogin
                        appId="583267365905856" //APP ID NOT CREATED YET
                        fields="name,email,picture"
                        scope="public_profile,user_photos,user_location,user_birthday,user_location,user_hometown,email"
                        callback={responseFacebook}
                        />
                    </div>

                    <div className="GG_login">
                        <GoogleLogin
                            clientId="698713407327-vu2qvhl4dr63gil25t316e37oa2ivosk.apps.googleusercontent.com"
                            buttonText="GOOGLE"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            isSignedIn={localStorage.getItem('auth-token')?true:false}
                        />
                    </div>
                </div>
                
                <div className="forget">
                    <Link to="/ForgetPass"> Forget your password? </Link>
                </div>
            
                </div>
        </div>
    );
}
export default Form;