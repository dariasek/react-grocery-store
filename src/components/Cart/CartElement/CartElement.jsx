import React, { Component } from "react";
import styles from "./CartElement.module.css";

class CartElement extends Component {
  state = {
    deleteBtn: false,
  };

  deleteBtnHover = () => {
    this.setState({ deleteBtn: !this.state.deleteBtn });
  }

  render() {
    const { name, quantity, price, img } = this.props.product;
    let totalPrice = (quantity * price).toFixed(2);

    let borderStyle;
    if (this.props.border == false) {
      borderStyle = styles.noBorder;
    }

    let deleteBtnStyle;
    if (this.state.deleteBtn) {
      deleteBtnStyle = {color: 'red'}
    }

    return (
      <div
        className={
          borderStyle == undefined
            ? styles.cartElement
            : `${styles.cartElement} ${borderStyle}`
        }
      >
        <div className={styles.productImg}>
          <img className={styles.img} src={img} alt="" />
        </div>
        <div>
          <div className={styles.name}>{name}</div>
          <div>{price}$</div>
        </div>
        <div className={styles.quantityBtns}>
          <div onClick={() => this.props.onIncrement(this.props.product)}>
            <button className={styles.plusBtn}>+</button>
          </div>
          <div className={styles.quantity}>{quantity}</div>
          <div onClick={() => this.props.onDecrement(this.props.product)}>
            <button className={styles.minusBtn}>-</button>
          </div>
        </div>
        <div
          className={styles.deleteDiv}
          onClick={() => this.props.onDelete(this.props.product)}
        >
          <button
            style={deleteBtnStyle}
            onMouseEnter={this.deleteBtnHover}
            onMouseLeave={this.deleteBtnHover}
            className={styles.deleteBtn}
          >
            <span className="material-icons">delete_forever</span>
          </button>
        </div>
        <div> {totalPrice}$</div>
      </div>
    );
  }
}

export default CartElement;
