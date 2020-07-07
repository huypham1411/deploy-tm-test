import React from "react";
import "../../../styles/components/Home/Cardlist.css";
import Card from "../cardList/Card";
// import { data } from '../../../data/data';
import { addToCart } from "../../../action/cart-action";
import { connect } from "react-redux";
import Axios from "axios";
import Pagination from "../../Product/Pagination/Pagination";
//use this in product page :v
class Cardlist extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    productsData: [],
    maxPage: 0,
    currentPage: 1,
  };
  async componentDidMount() {
    let link = "";
    if (this.props.route) {
      link = `/products${
        this.props.route === "/"
          ? `?page=${this.props.number}`
          : `${this.props.route}&page=${this.props.number}`
      }`;
    }
    if (this.props.filter) {
      link = `/products${
        this.props.filter === "/"
          ? `?page=${this.props.number}`
          : `?${this.props.filter}&page=${this.props.number}`
      }`;
    }
    if (
      this.props.route &&
      this.props.filter &&
      this.props.route !== "/" &&
      this.props.filter !== "/"
    ) {
      link = `/products${
        this.props.route === "/" || this.props.filter === "/"
          ? `?page=${this.props.number}`
          : `${this.props.route}&page=${this.props.number}&${this.props.filter}`
      }`;
    }
    if (this.props.route === "/" && this.props.filter === "/") {
      link = `/products?page=${this.props.number}`;
    }
    do {
      // console.log('num',this.props.number)
      console.log(link);
      await Axios.get(link)
        .then((data) => data.data)
        .then((data) =>
          this.setState({ productsData: data.result, maxPage: data.maxPage })
        )
        .catch((err) => console.log(err));
    } while (this.state.productsData.length === 0);
  }

  async componentDidUpdate(prevProps, prevState) {
    // console.log(`/products${this.props.route==='/'?`?page=${this.props.number}`:`${this.props.route}&page=${this.props.number}`}`)
    if (
      prevProps.filter !== this.props.filter ||
      prevProps.route !== this.props.route ||
      this.props.number !== prevProps.number
    ) {
      let link = "";
      if (this.props.route && this.props.filter === "/") {
        link = `/products${
          this.props.route === "/"
            ? `?page=${this.props.number}`
            : `${this.props.route}&page=${this.props.number}`
        }`;
      }
      if (this.props.filter && this.props.route === "/") {
        link = `/products?${
          this.props.filter === "/"
            ? `?page=${this.props.number}`
            : `${this.props.filter}&page=${this.props.number}`
        }`;
      }
      if (
        this.props.route &&
        this.props.filter &&
        this.props.route !== "/" &&
        this.props.filter !== "/"
      ) {
        link = `/products${this.props.route}&page=${this.props.number}&${this.props.filter}`;
      }
      if (this.props.route === "/" && this.props.filter === "/") {
        link = `/products?page=${this.props.number}`;
      }

      do {
        console.log(link);
        await Axios.get(link)
          .then((data) => {
            console.log(data);
            return data.data;
          })
          .then((data) =>
            this.setState({ productsData: data.result, maxPage: data.maxPage })
          )
          .catch((err) => console.log(err));
      } while (this.state.productsData.length === 0);
    }
  }

  handleClick(id) {
    this.props.addToCart(id);
  }
  render() {
    const listCard = this.state.productsData.map((item) => (
      <div className="card-container col-lg-4 col-md-6 col-sm-6" key={item.id}>
          <Card
            key={item._id}
            img={item.img}
            price={Math.round(item.price * 100) / 100}
            productName={item.name}
            oldPrice={item.oldPrice}
            id={item._id}
            handleClick={this.handleClick}
          />
      </div>
    ));
    return (
      <div className="cardlist-wrapper">
        <div className="cardlist-container row ">{listCard}</div>
        <Pagination
          maxPage={this.state.maxPage}
          currentPage={this.currentPage}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.cartReducer.items,
    route: state.sortReducer.route,
    number: state.paginationReducer.number,
    filter: state.sortReducer.filter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cardlist);
