import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import { BrowserRouter, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import Search from "./components/Search/Search";
import Home from "./components/Home/Home";

class App extends Component {
  state = {
    productCategories: {
      FruitsVegetables: this.props.data.products.FruitsVegetables,
      BreadBakery: this.props.data.products.BreadBakery,
      DairyEggs: this.props.data.products.DairyEggs,
      FrozenFoods: this.props.data.products.FrozenFoods,
      CookiesSnacksCandy: this.props.data.products.CookiesSnacksCandy,
      Beverages: this.props.data.products.Beverages,
    },
    cart: [],
    searchInput: "",
    searchOutput: [],
  };

  filterSearch = () => {
    let searchOutput = [];
    for (let key in this.state.productCategories) {
      let productCategory = this.state.productCategories[key];
      let output = productCategory.filter((el) => {
        return el.name.includes(this.state.searchInput);
      });
      searchOutput = searchOutput.concat(output);
    }
    this.setState({ searchOutput });
  };

  productQuantityDecrement = (product) => {
    const cart = [...this.state.cart];

    if (product.quantity !== 0) {
      const productCategories = { ...this.state.productCategories };
      const index = productCategories[product.productCategory].indexOf(product);
      productCategories[product.productCategory][index].quantity--;
      this.setState({ productCategories });
    }

    if (product.quantity == 0 && cart.indexOf(product) !== -1) {
      cart.splice(cart.indexOf(product), 1);
      this.setState({ cart });
    }
  };

  productQuantityIncrement = (product) => {
    const productCategories = { ...this.state.productCategories };
    const productCategory = productCategories[product.productCategory];
    const index = productCategory.indexOf(product);
    productCategory[index].quantity++;
    const cart = [...this.state.cart];
    if (productCategory[index].quantity > 0 && cart.indexOf(product) == -1) {
      cart.push(product);
      this.setState({ cart });
    }
    this.setState({ productCategories });
  };

  deleteProduct = (product) => {
    const productCategories = { ...this.state.productCategories };
    const index = productCategories[product.productCategory].indexOf(
      product
    );
    productCategories[product.productCategory][index].quantity = 0;
    this.setState({ productCategories });

    const cart = [...this.state.cart];
    cart.splice(cart.indexOf(product), 1);
    this.setState({ cart });
  };

  handleChange = async (event) => {
    await this.setState({ searchInput: event.target.value });
    this.filterSearch();
  };

  render() {
    let categoryRoutes = this.props.data.categories.map((category) => {
      return (
        <Route
          path={`/${category.name}`}
          render={() => (
            <CategoryPage
              products={this.state.productCategories[category.alias]}
              onDecrement={this.productQuantityDecrement}
              onIncrement={this.productQuantityIncrement}
            />
          )}
        />
      );
    });

    return (
      <BrowserRouter>
        <Header
          products={this.state.productCategories}
          onChange={this.handleChange}
          searchInput={this.state.searchInput}
          cart={this.state.cart}
        />
        <Route path="/react-grocery-store" render={()=><Home /> } />
        <Route
          path="/search"
          render={() => (
            <Search
              searchOutput={this.state.searchOutput}
              onDecrement={this.productQuantityDecrement}
              onIncrement={this.productQuantityIncrement}
            />
          )}
        />
        <Route
          path="/categories"
          render={() => <Categories categories={this.props.data.categories} />}
        />
        <Route
          path="/cart"
          render={() => (
            <Cart
              cart={this.state.cart}
              onDecrement={this.productQuantityDecrement}
              onIncrement={this.productQuantityIncrement}
              onDelete={this.deleteProduct}
            />
          )}
        />
        {categoryRoutes}
      </BrowserRouter>
    );
  }
}

export default App;
