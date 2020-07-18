import React, { Component } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {
    categoriesBtnState: false,
    cartBtnState: false,
  };

  categoriesBtnHover = () => {
    this.setState({ categoriesBtnState: !this.state.categoriesBtnState });
  };

  render() {
    let categoriesBtnStyle;
    if (this.state.categoriesBtnState) {
      categoriesBtnStyle = { backgroundColor: "#ADE355" };
    }

    return (
      <div className={styles.header}>
        <div>
          <Link to="/categories">
            <button
              style={categoriesBtnStyle}
              onMouseEnter={this.categoriesBtnHover}
              onMouseLeave={this.categoriesBtnHover}
              className={styles.allCategoriesBtn}
            >
              All categories
            </button>
          </Link>
        </div>
        <div>
          <Link to="/search">
            <input
              className={styles.input}
              type="text"
              placeholder="Type product name"
              onChange={(e) => this.props.onChange(e)}
            ></input>
          </Link>
        </div>
        <div>
          <Link to="/cart">
            <button className={styles.cartBtn}>
              <span className="material-icons">shopping_cart</span>
            </button>
            {/* <div className={styles.cartNum}>{this.props.cart.length}</div> */}
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
