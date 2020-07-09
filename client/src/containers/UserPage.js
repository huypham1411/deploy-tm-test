import React  from 'react';
import '../styles/containers/User.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
import Button from "../components/General/Button";
class UserPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showHis:false,
            id: this.props.location.state.id,
            role:'',
            user: {},
            name : '',
            email : '',
            password: '',
            password2 : '',
            phonenum : '',
            address: '',
            norUser:{},
            history:[],
            avatar:''
        }

        this.update = this.update.bind(this)
    }

    clickShowHis(){
        if(this.state.showHis === true){
            this.setState({
                showHis:false
            })
        }
        else{
            this.setState({
                showHis:true
            })
        }
    }

    componentDidMount(){
        
        axios.get('/user/' + this.state.id)
       .then(data=>{
           console.log('d2',data.data)
            this.setState({
                id : data.data._id,
                name: data.data.name,
                address: data.data.address,
                phonenum: data.data.phonenum,
                email: data.data.email,
                history:data.data.history,
                avatar:data.data.avatar,
                role:data.data.role
            })
        })
        .catch(err=>console.log(err));
            
    }
    onChangeHandler=e=>{
        if(e.target.files && e.target.files[0]){
            let reader = new FileReader();
            reader.onload = function(ev){
              this.setState({avatar:ev.target.result});
            }.bind(this);
            reader.readAsDataURL(e.target.files[0]);
          }
    }
    update() {
        axios.put('/user/' + this.state.id, {
            name : this.state.name,
            email : this.state.email,
            phonenum: this.state.phonenum,
            address: this.state.address,
            avatar:this.state.avatar
        })
        .then(res2 => {
            console.log(res2)
            if (res2.data.status === 'success') {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Update success'
                  })
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
        }).catch(err=>{if(err.message==="Request failed with status code 413"){
            Swal.fire({
                position: 'center',
                icon: 'error',
                title:"Image size too large, please choose another image"
              })
        }})
        
    }

    render(){
        return(
            (<div className="profile-container">
                <div className="user-img">
                    <img alt='user avatar' src={this.state.avatar?this.state.avatar:"https://i.pinimg.com/564x/fd/0c/55/fd0c559856ca991e9e28937dc802f0b0.jpg"}/>
                    {!this.state.role&&<input type="file" id='inp-avatar' title="foo" accept="image/png, image/jpeg" onChange={this.onChangeHandler}/>}
                </div>
                <div className="user-profile">
                <div className="u-id">
                    <p>ID : {this.state.id}</p>
                </div>
                <div className="uname">
                    <p>Name :</p>
                    <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={(e) => {
                    this.setState({name : e.target.value});
                    }}
                    ></input>
                </div>
                <div className="user-contact">
                    {!this.state.role&&<div className="u-mail">
                        <p>Password :</p>
                        <Link to={{ pathname: "/ChangePass", state: { id: this.state.id }}}>
                <Button
                    name="Change Password"
                />
                </Link>
                    </div>}
                    <div className="u-phone">
                        <p>Phone :</p>
                        <input
                        id="phone"
                        type="text"
                        placeholder="Phone"
                        value={this.state.phonenum}
                        onChange={(e) => {
                        this.setState({phonenum : e.target.value});
                        }}
                        ></input>
                    </div>
                </div>   
                <div className="u-address">
                        <p>Address :</p>
                        <input
                        id="address"
                        type="text"
                        placeholder="Address"
                        value={this.state.address}
                        onChange={(e) => {
                        this.setState({address : e.target.value});
                        }}
                        ></input>
                </div>
                <div className="update_btn">
                    <button className="btn-ok" onClick={this.update}>Update</button>
                </div>
                
                <div className="orderHis"><h1>Order history:</h1> 
                <button className="hisBtn" onClick={()=>this.clickShowHis()}>Click me to show</button>
    {


this.state.history?this.state.history.map((x,key)=>{
                 let cdate = (new Date(x.dateOfPurchase)).toString();
                return (
                    this.state.showHis?
                <ul key={key}>
                 <li>Product name: {x.name}</li>
                 <li>Price: {x.price}</li>
                 <li>Quantity: {x.quantity}</li>
                 <li>Purchase time: {cdate}</li>
             </ul>:null)}):null}</div>
         </div>
     </div>)
        )}
}

export default UserPage;