import React,{useState} from "react";
import '../../styles/components/SignUp/SignUp.css';
import bg_signup from '../../assets/ovegets.jpeg';
import axios from 'axios';

const SignUp = props => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [password2,setPassword2]=useState('');
  //code bo sung
  const [address,setAddress]=useState('');
  const [phonenum,setPhonenum]=useState('');
  //
  const [check,setCheck]=useState(false);
  const signUpFunction=()=>{
    if(!check){alert('Please accept the term of Use & Privacy Policy'); return;}
    if(!checkPass()){alert('Password and confirm password not match!'); return;}
    axios.post('http://localhost:3030/SignUp',{name,email,password,address,phonenum})
    .then((user)=>{alert(`Sign up success`)
  setName('')
  setEmail('')
  setPassword('')
  setPassword2('')
  setAddress('')
  setPhonenum('')
  })
    .catch(err=>{
      const e=err.response.data;
      let s='';
      for(let i of e){s+=i.message;}
       alert(s);
    })
  }
  const checkPass=()=>{
    if(password.trim().length===0||password2.trim().length===0) return false;
    if(password!==password2)return false;
    return true;
  }
  return (
    <div className="signup_box_container">
      <div className="bg-signup">
        <img className="bg-image" src={bg_signup} alt="hero-img"></img>
        <div className="bg-text">
          <h3>READY TO DIVE INTO THE WORLD OF</h3>
          <h1>VEGATABLE?</h1>
        </div>
      </div>
      <div className="signup_box">
        <div className="container-form">
          <div className="form-header">
            <h1>SIGN UP </h1>
            <h4>Please fill in this form to create an account </h4>
          </div>
          <div className="input-field">
            <div className="user-name">
              <h3>Your name</h3>
              <input id="username" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
            </div>
            {/* them code bo sung */}
            <div className="address">
              <h3>Your address</h3>
              <input id="address" value={address} onChange={(e)=>setAddress(e.target.value)}></input>
            </div>
            <div className="phonenum">
              <h3>Your Phonenumber</h3>
              <input id="phonenum" value={phonenum} onChange={(e)=>setPhonenum(e.target.value)}></input>
            </div>
            <div className="pass">
              <h3>Password</h3>
              <input type="password" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>  
            </div>
            <div className="confirm-pass">
              <h3>Confirm password</h3>
              <input type="password" id="confirm-password" value={password2} onChange={(e)=>{setPassword2(e.target.value)}}></input>
            </div>
            <div className="email">
              <h3>Email</h3>
              <input type="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
            </div>
            <div className="check">
              <input type="checkbox" checked={check} onChange={()=>setCheck(!check)}/>
              <p> Accept the term of Use & Privacy Policy </p>
            </div>
          </div>
          
        
        <div className="signup_btn">
          <button className="btn-ok" onClick={signUpFunction}>Sign Up</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
