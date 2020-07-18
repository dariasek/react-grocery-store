import React, { Component } from "react";
import styles from "./Category.module.css";

class Category extends Component {
  state = {};
  render() {
    return (
      <div className={styles.category}>
        <div className={styles.categoryName}>{this.props.categoryName}</div>
        <div className={styles.imgDiv}>
          <img className={styles.img} src={this.props.categoryImg} />
        </div>
      </div>
    );
  }
}

export default Category;
