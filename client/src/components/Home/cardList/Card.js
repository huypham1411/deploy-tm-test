import React from 'react';
import '../../../styles/components/Home/Card.css';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
class Card extends React.PureComponent{
    render() {
        // console.log(this.props)
        return (
            <div className="card" >
                <Link to={`/Products/${this.props.id}`}>
                <div className="product_thump">
                    <img className="productImg" src={this.props.img} alt={this.props.productName} />
                </div>
                <div className='product_content'>
                    <h4 className="product_name">{this.props.productName}</h4>
                    <div className="price_box">
                        <span className="current_price">{this.props.price}$</span>
                        <span className="old_price">133$</span>
                    </div>
                </div>
                </Link>
                <div className="cartIcon">
                <FontAwesomeIcon icon={faCartPlus} size="2x" color="#00C991" onClick={()=>{
                        this.props.handleClick(this.props.id)
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: `You have added ${this.props.productName} to cart`,
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }}/>
                </div>
                
            </div>
        )
    }
    }

    
    export default Card
