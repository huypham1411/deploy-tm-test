import React from 'react';
import '../../../styles/components/Home/HotList.css';
import { Link } from 'react-router-dom'
import Card from '../cardList/Card';
import { addToCart } from '../../../action/cart-action'
import { connect } from 'react-redux'
// import { data } from '../../../data/data';
import Axios from 'axios'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


class HotList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    do {
      await Axios.get(`http://localhost:3030/products`)
        .then(data => data.data)
        .then(data => this.setState({ productsData: data })).catch(err => console.log(err))
    }
    while (this.state.productsData.length === 0);
  }
  handleClick = (id) => {
    this.props.addToCart(id)
  }
  listRender(){
    return (this.state.productsData? this.state.productsData.slice(0, 6).map(item => {
      return <div className="card-container" key={item.id}>
        <Link to={`/Products/${item._id}`}>
          <Card
            key={item.id}
            img={item.img}
            price={item.price}
            productName={item.name}
            id={item.id}
            handleClick={this.handleClick}
          />
        </Link>
      </div>
      
}):null)
  }
  
  render() {
    //console.log(this.state.productsData)
    return (
      <div className="hotList">
        <Carousel 
        autoPlay={2000}
        animationSpeed={1500}
        slidesPerPage={3}
        infinite
        >
          {this.listRender()}
        </Carousel>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.cartReducer.items
  }
}
const mapDispatchToProps = (dispatch) => {

  return {
    addToCart: (id) => { dispatch(addToCart(id)) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HotList);
