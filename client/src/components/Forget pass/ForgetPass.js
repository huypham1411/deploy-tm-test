import React,{useState} from 'react';
import "../../styles/components/ForgetPass/textForgetpass.css";
import Axios from 'axios';
import Swal from 'sweetalert2';
const Forget_pass = () => {
    const [email,setEmail]=useState('');
    const [send,setSend]=useState(false);
    //const [alert,setAlert]=useState()
    const getPass = async()=>{
        setSend(true);
        await Axios.post('/forgetpassword',{email:email})
        .then(data=>{
            setSend(false)
            setEmail('')
            if(data.data.msg==='success'){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Send success',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            else
            {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Send fail',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        send?<p>Now sending...</p>:
        <div >
            <div className="forget-pass-text">
                <h1>FORGOT PASSWORD?</h1>
                <p>Enter your email address below and we will send an email allowing you to reset it</p>
            </div>

            <div className="input-mail">
                <input type="email" placeholder="Email..." value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>

            <div className="reset-btn">
                <button className="btn-reset" onClick={()=>{getPass()}}>Reset my password</button>
            </div>

      </div>
    );
  };

export default Forget_pass;