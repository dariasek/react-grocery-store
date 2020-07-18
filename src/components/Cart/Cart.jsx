import React, { Component } from "react";
import styles from "./Cart.module.css";
import CartElement from "./CartElement/CartElement";

class Cart extends Component {
  render() {
    let total;

    if (this.props.cart.length !== 0) {
      total = this.props.cart.reduce((prev, current) => {
        current = parseFloat(current.quantity) * current.price;
        let toReturn = Number(prev + current);
        return toReturn;
      }, 0);
      total = total.toFixed(2);
    }

    let cart = this.props.cart.map((el,index) => {
      if (el.quantity == 0) {
        return undefined;
      }
      let border;

      if (index == this.props.cart.length-1){
        border = false;
      }

      return (
        <CartElement
          border={border}
          product={el}
          onDecrement={this.props.onDecrement}
          onIncrement={this.props.onIncrement}
          onDelete={this.props.onDelete}
          addTotal={this.addTotal}
        />
      );
    });

    let cartIsEmpty = this.props.cart.length ? (
      <div>
        <div className={styles.fullCart}>{cart}</div>
        <div className={styles.total}>Total:  {total}$</div>
      </div>
    ) : (
      <div className={styles.emptyCart}>{"Your cart is empty"}</div>
    );

    return <div className={styles.cart}>{cartIsEmpty}</div>;
  }
}

export default Cart;
