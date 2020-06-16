import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../../styles/components/General/Cart.css'
import Paypal from './Paypal';
import Axios from 'axios';
class Total extends Component{
    constructor(props){
        super(props);
    }
    state={
        appear:false,
    }
    checkLogin(){
        const lg=localStorage.getItem('auth-token')
        console.log(lg);
        if(!lg){alert("Bạn chưa đăng nhập. Vui lòng đăng nhập để tiếp tục");return;}
        else
        {
            this.setState({appear:!this.state.appear})
            // console.log("Add items at func: " + 'checklogin',this.props.addedItems)
        }
    }
    transactionSuccess(data){
        console.log('a');
        console.log("Add items at func: " + 'transaction success',this.props.addedItems)//
        let variables={
            cartDetails:this.props.addedItems,
            paymentData:data
        }
        console.log(variables);
        Axios.post('/payment',variables).then(data=>console.log(data))
    }
    transactionError(){
        console.log("Paypal error");
    }
    transactionCancel(){
        console.log("Transaction cancel");
    }
    render(){   
        return(
            <div className="cart_container">
                <div className="cart_collection">                 
                        <li className="collection-item"><b>Total: {this.props.total} $</b></li>
                    </div>
                    <div className="cart_checkout" >
                        <button className="waves-effect waves-light btn" onClick={()=>{this.checkLogin()}}>Checkout with</button>
                   {this.state.appear &&
                   <Paypal 
                   toPay={this.props.total}
                   onSuccess={this.transactionSuccess}
                   transactionError={this.transactionError}
                   transactionCancel={this.transactionCancel}
                   />}
                    </div>
                 </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.cartReducer.addedItems,
        total: state.cartReducer.total
    }
}
//shipping neu muon xai
const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Total)