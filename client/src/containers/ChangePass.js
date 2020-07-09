import React  from 'react';
import '../styles/containers/ChangPass.css';
import axios from 'axios';
import {  withRouter } from 'react-router-dom';
import Swal from 'sweetalert2';
class ChangePass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.location.state.id,
            check : false,
            password : '',
            new_pass : '',
            new_pass2 : ''

        }
        
        this.check = this.check.bind(this)
        this.change = this.change.bind(this)
    }

    componentDidMount(){

    }

    check() {
        axios.post('/user/checkpass', {
            id : this.state.id,
            password : this.state.password
        })
        .then(res => {
            console.log(res)
            if (res.data.status == 'success') {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: "Success"
                  })
                this.setState({
                    check: true
                })
            } 
        }).catch( err=>
           { 
            this.setState({password:''})   
            Swal.fire({
            position: 'center',
            icon: 'error',
            title: "Wrong password"
          })}
        )
    }

    change() {
        const {history} = this.props;
        if ( this.state.new_pass != this.state.new_pass2) {
            return Swal.fire({
                position: 'center',
                icon: 'error',
                title: "Password not match"
              })
}
        axios.post('/user/changepass', {
            id : this.state.id,
            password : this.state.new_pass
        })
        .then(res => {
            console.log(res)
            if (res.data.status == 'success') {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: "Password changed"
                  })
                  history.push("/");
            } else {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: "Cannot change"
                  })
            }
        })
    }

    render(){
        return(
            <div className="change_pass">
            <h1>Change Password</h1>
            { !this.state.check ? 
                <div className="enter-pass">
                    <p>Enter your current password</p>
                    <input type="password" onChange={(e) => { this.setState( {password :e.target.value})}}></input>
                    <button className="btn-check" onClick={this.check}>Check</button>
                </div>
                : null
            }

            { this.state.check ? 
            (
                <div>
                    <div className="enter-pass">
                    <p>Enter your new password</p>
                    <input type="password" onChange={(e) => { this.setState( {new_pass :e.target.value})}}></input>
                    </div>

                    <div className="enter-pass">
                    <p>Enter your new password again</p>
                    <input type="password" onChange={(e) => { this.setState( {new_pass2 :e.target.value})}}></input>
                    </div>
                    <button className="btn-check" onClick={this.change}>Change</button>
                </div>
            )
            : null
            }
            </div>
        )
    }
}

export default ChangePass;