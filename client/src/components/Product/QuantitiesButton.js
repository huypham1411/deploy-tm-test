import React from 'react';
import '../../styles/components/Product/QuantitiesButton.css';

class QuantitiesButton extends React.PureComponent {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     quantity: this.props.quantity,
  //     show: true,
  //     min: 0
  //   };
  // }

  IncrementItem = () => {
    // this.setState(prevState => {
    //   if(prevState.quantity < 9) {
    //     return {
    //       quantity: prevState.quantity + 1
    //     }
    //   } else {
    //     return null;
    //   }
    // });
    if (this.props.quantity < 9) {
      this.props.changeQuantity(this.props.quantity + 1)
    }
  }
  DecreaseItem = () => {
    // this.setState(prevState => {
    //   if(prevState.quantity > 0) {
    //     return {
    //       quantity: prevState.quantity - 1
    //     }
    //   } else {
    //     return null;
    //   }
    // });
    if (this.props.quantity > 1) {

      this.props.changeQuantity(this.props.quantity - 1)
    }
  }
  // ToggleClick = () => {
  //   this.setState({
  //     show: !this.state.show
  //   });
  // }
  // handleChange = (event) => {
  //   this.setState({ quantity: event.target.value });
  // }

  render() {
    return (
      <div className='quantitiesBtn'>
        <button className="decrease-item" onClick={this.DecreaseItem}> - </button>
        <input className="inputne" value={this.props.quantity} />
        <button className="increase-item" onClick={this.IncrementItem}> + </button>
      </div>
    );
  }
}

export default QuantitiesButton;