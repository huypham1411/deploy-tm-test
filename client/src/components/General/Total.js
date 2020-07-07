import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../../styles/components/General/Cart.css'
import { removeItem} from '../../action/cart-action';
import Paypal from './Paypal';
import Axios from 'axios';
import Swal from 'sweetalert2';
class Total extends Component{
    state={
        appear:false,
    }
    checkLogin(){
        const lg=localStorage.getItem('auth-token')
        if(!lg){ 
            Swal.fire("Oops! You haven't sign in yet", "Please log in to continue","warning");return;}
        else
        {
            this.setState({appear:!this.state.appear})
           // console.log("Add items at func: " + 'checklogin',this.props.addedItems)
        }
    }
    transactionSuccess(data){
        //console.log("Add items at func: " + 'transaction success',this.props.addedItems)//
        let variables={
            cartDetails:this.props.addedItems,
            paymentData:data
        }
        const token = localStorage.getItem('auth-token');
        Axios.post('/payment',variables,{headers:{"auth-token":token}}).then(data=>
       { if(data.data.success){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Buy success!!!',
            showConfirmButton: false,
            timer: 1500
          })
            this.props.addedItems.forEach(element => {
                this.props.removeItem(element.id)
            });
            return;
        }
        else 
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Buy fail...',
            showConfirmButton: false,
            timer: 1500
          })
        }
        )
    }
    transactionError(){
        console.log("Paypal error");
    }
    transactionCancel(){
        console.log("Transaction cancel");
    }
    render(){   
        return(
            <div className="total_container">
                <div className="cart_collection">                 
                        <li className="collection-item"><b>Total: {this.props.total} $</b></li>
                    </div>
                    <div className="cart_checkout" >
                        <button className="waves-effect waves-light btn" onClick={()=>{this.checkLogin()}}>Checkout with</button>
                   {this.state.appear &&
                   <Paypal 
                   toPay={this.props.total}
                   onSuccess={this.transactionSuccess.bind(this)}
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
        removeItem: (id)=>{dispatch(removeItem(id))},
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Total)