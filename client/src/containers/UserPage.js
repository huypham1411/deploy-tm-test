import React, {useState, useEffect }  from 'react';
import "../styles/components/SignUp/SignUp.css";
import axios from 'axios';
import Swal from 'sweetalert2';
class UserPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.location.state.id,
            user: {},
            name : '',
            email : '',
            password: '',
            password2 : '',
            phonenum : '',
            norUser:{},
            history:[]
        }
    }

    componentDidMount(){
        axios.get('/user/' + this.state.id)
       .then(data=>{
           console.log(data)
            this.setState({
                name: data.data.name,
                address: data.data.address,
                phonenum: data.data.phonenum,
                email: data.data.email
            })
        })
        .catch(err=>console.log(err));
        const token=localStorage.getItem("auth-token");
        axios.get('/login',{headers:{"auth-token":token}}).then((data)=>{ 
        console.log('nor',data.data,'data',data)    
        this.setState({norUser: data.data})})
            
    }

    update() {
        const url = '/user/' + this.state.id
        axios.put(url, {
            name : this.state.name,
            email : this.state.email,
            phonenum: this.state.phonenum,
            address: this.state.address
        })
        .then(res2 => {
            if (res2.data.status == 'success') {
                this.setState({
                    name: res2.data.name,
                    address: res2.data.address,
                    phonenum: res2.data.phonenum,
                    email: res2.data.email
                })
            } else {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: res2.data.message
                  })
            }
        })
    }

    render(){
        return(Object.keys(this.state.user).length!==0?
            (<div>
                <div><img src={this.state.user.avatar}></img></div>
                <div><h1>ID : {this.state.id}</h1></div>
                <div><h1>Name : {this.state.user.name}</h1></div>
                <div><h1>Email : {this.state.user.email}</h1></div>
                <div><h1>Role : {this.state.user.role}</h1></div>
                <div><h1>Address : {this.state.user.address}</h1></div>
            </div>):
            (<div>
                <div><h1>ID : {this.state.norUser.id}</h1></div>
                <div><h1>Name : {this.state.norUser.name}</h1></div>
                <div><h1>Email : {this.state.norUser.email}</h1></div>
                <div><h1>Phone number : {this.state.norUser.phonenum}</h1></div>
                <div><h1>Address : {this.state.norUser.address}</h1></div>
                <h1>Order history: 
    {
        this.state.norUser.history?this.state.norUser.history.map((x,key)=>{
                        let cdate = (new Date(x.dateOfPurchase)).toString();
                       return (
                       <ul key={key} style={{marginLeft:100,fontSize:25}}>
                        <li>Product name: {x.name}</li>
                        <li>Price: {x.price}</li>
                        <li>Quantity: {x.quantity}</li>
                        <li>Purchase time: {cdate}</li>
                    </ul>)}):null}</h1>
                
            </div>)
        )
    }
}

export default UserPage;