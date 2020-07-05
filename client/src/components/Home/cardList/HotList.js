import React, { Suspense, lazy } from "react";
import "../../../styles/components/Home/HotList.css";
import { Link } from "react-router-dom";
import Card from "../cardList/Card";
import { addToCart } from "../../../action/cart-action";
import { connect } from "react-redux";
// import { data } from '../../../data/data';
import Axios from "axios";
// import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const Carousel = lazy(()=>import('@brainhubeu/react-carousel'));

class HotList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    do {
      await Axios.get(`/products`)
        .then((data) => data.data)
        .then((data) => this.setState({ productsData: data }))
        .catch((err) => console.log(err));
    } while (this.state.productsData.length === 0);
  }
  handleClick = (id) => {
    this.props.addToCart(id);
  };
  listRender() {
    return this.state.productsData
      ? this.state.productsData.slice(0, 6).map((item) => {
          return (
            <div className="card-container" key={item.id}>
                <Card
                  key={item.id}
                  img={item.img}
                  price={item.price}
                  productName={item.name}
                  id={item._id}
                  handleClick={this.handleClick}
                />
            </div>
          );
        })
      : null;
  }

  render() {
    //console.log(this.state.productsData)
    return (
      <div className="hotList">
        <Suspense fallback={<div/>}>
        <Carousel
          autoPlay={2000}
          animationSpeed={1500}
          slidesPerPage={4}
          
          infinite
          breakpoints={{
            640:{
              slidesPerPage:1,
            },
            900:{
              slidesPerPage:3
            }
          }}
        >
          {this.listRender()}
        </Carousel>
      </Suspense>  
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.cartReducer.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HotList);
