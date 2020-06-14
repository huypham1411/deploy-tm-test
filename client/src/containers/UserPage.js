import React, {useState, useEffect }  from 'react';
import {useSelector} from 'react-redux';
import axios from 'axios';
class UserPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.location.state.id,
            user: {}
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3030/user/' + this.state.id)
       .then(data=>{
            this.setState({user: data.data})
            console.log(data)
        })
        .catch(err=>console.log(err));
    }
    render(){
        return(
            <div>
                <div><img src={this.state.user.avatar}></img></div>
                <div><h1>ID : {this.state.id}</h1></div>
                <div><h1>Name : {this.state.user.name}</h1></div>
                <div><h1>Email : {this.state.user.email}</h1></div>
                <div><h1>Role : {this.state.user.role}</h1></div>
                <div><h1>Address : {this.state.user.address}</h1></div>
            </div>
        )
    }
}

export default UserPage;