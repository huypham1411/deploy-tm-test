import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, addQuantity, subtractQuantity,addToCart } from '../../action/cart-action'
import '../../styles/components/General/Cart.css';
import Total from '../General/Total';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons'
class Cart extends PureComponent {
    //to remove the item completely
    handleRemove = (id) => {
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }
    
    render() {

        // const cookies = new Cookies();
        // console.log('state')
        // console.log(this.props.items)
        // console.log(this.props.addedItems)
        // console.log(this.props.total)
        // console.log('--------')
        // if (this.props.items.length) {
        //     cookies.set('items', this.props.items, { path: '/' })
        //     cookies.set('addedItems', this.props.addedItems, { path: '/' })
        //     cookies.set('total', this.props.total, { path: '/' })
        // }
        console.log(this.props.items)
        console.log(this.props.addedItems)

        let addedItems = this.props.addedItems.length ?
            (
                this.props.addedItems.map(item => {
                    return (
                        <tr key={item.id}>
                            <td className='product_remove'>
                                <li><FontAwesomeIcon icon={faTrash} onClick={() => { this.handleRemove(item.id) }}/></li>
                            </td>
                            <td className="product_thumb">
                                <img src={item.img} alt={item.name} className="" />
                            </td>
                            <td className="product_name">
                                <h4>{item.name}</h4>
                            </td>
                            <td className="product-price">
                                <p>{Math.round(item.price * 100) / 100}$</p>
                            </td>
                            <td className='product_quantity'>
                            <div className="add-remove">
                                <Link to="/cart">
                                    <button className="quantity-btn" onClick={() => { this.handleSubtractQuantity(item.id) }}>
                                        <span>-</span>
                                    </button>
                                </Link>
                                <p className="quantity">
                                    <b>Quantity: {item.quantity}</b>
                                </p>
                                <Link to="/cart">
                                    <button className="quantity-btn" onClick={() => { this.handleAddQuantity(item.id) }}>
                                        <span>+</span>
                                    </button>
                                </Link>
                            </div>
                            </td>
                        </tr>

                    )
                })

            ) :

            (
                <p style={{ textAlign: "center" }}>Nothing.</p>

            )

        return (
        <div className='container_cart'>
            <div class="breadcrumbs_area">
                <div class="container">   
                    <div class="row">
                        <div class="col-12">
                            <div class="breadcrumb_content">
                                <h3>Cart</h3>
                            </div>
                        </div>
                    </div>
                </div>         
            </div>
            <div className="container">
                <div className='row'>
                    <div className='col-12'>
                        <div className='table_desc'>
                            <div className="cart_page table-responsive">
                                {/* <div>
                                    <h1>You have ordered:</h1>
                                </div>
                                <hr></hr>
                                <ul className="cart_collection">
                                    {addedItems}
                                </ul> */}
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='product_remove'>Delete</th>
                                            <th className='product_thumb'>Image</th>
                                            <th className='product_name'>Product</th>
                                            <th className='product_price'>Price</th>
                                            <th className='product_quantity'>Quantity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {addedItems}
                                    </tbody>
                                </table>
                            </div>
                        </div>    
                    </div>
                </div>    
                <hr></hr>
                <Total></Total>
            </div>
        </div>
        )

    }

}


const mapStateToProps = (state) => {
    return {
        items: state.cartReducer.items,
        addedItems: state.cartReducer.addedItems,
        total: state.cartReducer.total,

        //addedItems: state.addedItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        subtractQuantity: (id) => { dispatch(subtractQuantity(id)) },
        addToCart: (id) => {  dispatch(addToCart(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)