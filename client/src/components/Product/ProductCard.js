import React from 'react';
import '../../styles/components/Product/ProductCard.css';
// import ProductImg from './ProductImg';
import { addToCart } from '../../action/cart-action'
import QuantitiesButton from './QuantitiesButton';
import { connect } from 'react-redux'
import Swal from 'sweetalert2';
class ProductCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: 1
        }
    }
    handleClickAdd = (id) => {
        this.props.addToCart(id, this.state.quantity)
    }
    changeQuantity=(quantity)=>{
        this.setState({quantity})
    }
    render() {
        return (
            <div className="cardProduct">
                <div className="detail">
                    <div>
                        <img className="productInfoImg" src={this.props.img} alt={this.props.productName} />
                    </div>
                    <div className="productDetail">
                        <div>
                            <h1>{this.props.name}</h1>
                            <p>Status: {this.props.status}</p>
                        </div>
                        <div>
                            <h3>Price: {this.props.price} $</h3>
                        </div>
                        <div className="numberOfProducts">
                            <div>
                                <QuantitiesButton quantity={this.state.quantity} changeQuantity={this.changeQuantity}/>
                            </div>
                            <button title="add" className="addBtn" onClick={() => {
                                this.handleClickAdd(this.props.id)
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: `You have added ${this.props.name} to cart`,
                                    showConfirmButton: false,
                                    timer: 1500
                                  })
                            }}>ADD</button>
                        </div>
                    </div>
                </div>
                <div className="description">
                    <h3>Description</h3>
                    <p>{this.props.description}</p>
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