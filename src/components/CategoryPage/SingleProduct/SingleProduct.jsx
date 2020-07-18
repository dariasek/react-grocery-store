import React, { Component } from "react";
import styles from "./SingleProduct.module.css";

class SingleProduct extends Component {
  render() {
    const { name, price, img, id, quantity } = this.props.product;

    return (
      <div className={styles.singleProduct}>
        <div className={styles.productImg}>
          <img src={img} alt="" />
        </div>
        <div className={styles.nameNprice}>
          <div className={styles.name}>{name}</div>
          <div className={styles.price}> {price}$</div>
        </div>
        <div className={styles.quantityDiv}>
          <div onClick={() => this.props.onIncrement(this.props.product)}>
            <button className={styles.plusBtn}>+</button>
          </div>
          <div className={styles.quantity}>{quantity}</div>
          <div onClick={() => this.props.onDecrement(this.props.product)}>
            <button className={styles.minusBtn}>-</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleProduct;