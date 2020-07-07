import React from 'react';
import '../../styles/components/Product/ProductCard.css';
// import ProductImg from './ProductImg';
import { addToCart } from '../../action/cart-action'
import QuantitiesButton from './QuantitiesButton';
import { connect } from 'react-redux'
import Swal from 'sweetalert2';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import Axios from 'axios';
class ProductCard extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            quantity: 1,
            numRate:0,
            rating:0
        }
    }
    handleClickAdd = (id) => {
        this.props.addToCart(id, this.state.quantity)
    }
    changeQuantity=(quantity)=>{
        this.setState({quantity})
    }
    rating(rate){
        
        Axios.post('/products/rate',{id:this.props._id,rating:rate}).then(res=>
        {if (res.data.status === 'success'){
            this.setState({numRate:res.data.numRate,rating:res.data.rating})
            //console.log('rater',res.data.status)
           return;
        }}
        )
    }
    render() {
        return (
            <div className='container'>
            <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <img className="productInfoImg" src={this.props.img} alt={this.props.productName} />
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="productDetail">
                        <div>
                            <h1>{this.props.name}</h1>
                           
                            <div class=" product_ratting">
                            <Rater total={5} style={{fontSize:30}} rating={!this.state.rating?this.props.rating:this.state.rating} onRate={(rate)=>this.rating(rate.rating)}></Rater>
                                
                            <p class="review">{`( ${this.state.numRate===0?this.props.numRate:this.state.numRate} times rating on this product )`}</p>
                                
                            </div>
                            <p>Status: {this.props.status}</p>
                        </div>
                        <div class="price_box">
                                <span class="current_price">Price: {this.props.price} $</span>
                                <span class="old_price">133$</span>
                        </div>
                        <div className="description">
                            <h3>Description</h3>
                            <p>{this.props.description}</p>
                        </div>
                        <div className="numberOfProducts">
                            <QuantitiesButton quantity={this.state.quantity} changeQuantity={this.changeQuantity}/>
                            <div className="addBtn-container"><button title="add" className="addBtn" onClick={() => {
                                this.handleClickAdd(this.props.id)
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: `You have added ${this.props.name} to cart`,
                                    showConfirmButton: false,
                                    timer: 1500
                                  })
                            }}>ADD</button></div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.cartReducer
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id, quantity) => { dispatch(addToCart(id, quantity)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);