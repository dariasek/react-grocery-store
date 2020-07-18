import React, { Component } from "react";
import styles from "./Search.module.css";
import SingleProduct from "../CategoryPage/SingleProduct/SingleProduct";

class Search extends Component {
  state = {};
  render() {
    let searchResult = this.props.searchOutput.map((el) => (
      <SingleProduct
        product={el}
        onDecrement={this.props.onDecrement}
        onIncrement={this.props.onIncrement}
      />
    ));
    return <div className={styles.search}>{searchResult}</div>;
  }
}

export default Search;
