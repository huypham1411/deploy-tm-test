import React from "react";
import "../../../styles/components/Home/Card.css";
import { Link} from "react-router-dom";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faEye } from "@fortawesome/free-solid-svg-icons";
class Card extends React.PureComponent {
  render() {
    // console.log(this.props)
    return (
      <div className="card">
        <Link to={`/Products/${this.props.id}`}>
          <div className="product_thump">
            <div className="product_thumb--detail">
              <img
                className="productImg"
                src={this.props.img}
                alt={this.props.productName}
              />

              <div className="product_thumb--overlay">
                <FontAwesomeIcon icon={faEye} />
              </div>
            </div>
          </div>
          <div className="product_content">
            <h4 className="product_name">{this.props.productName}</h4>
            <div className="price_box">
              <span className="current_price">{this.props.price}$</span>
              {this.props.oldPrice!=="0"?<span className="old_price">{this.props.oldPrice}$</span>:null}
            </div>
          </div>
        </Link>
        <div className="cartIcon">
          <FontAwesomeIcon
            icon={faCartPlus}
            size="2x"
            color="#00C991"
            onClick={() => {
              this.props.handleClick(this.props.id);
              Swal.fire({
                position: "center",
                icon: "success",
                title: `You have added ${this.props.productName} to cart`,
                showConfirmButton: false,
                timer: 1500,
              });
            }}
          />
        </div>
      </div>
    );
  }
}

export default Card;
