import React, { Component } from 'react';
import styles from './CategoryPage.module.css';
import SingleProduct from './SingleProduct/SingleProduct';

class CategoryPage extends Component {
    state = {  }
    render() { 

        let products = this.props.products.map(el => {
            return (<SingleProduct 
                product={el} 
                onDecrement={this.props.onDecrement}
                onIncrement={this.props.onIncrement} />)
        })
        return ( 
            <div className={styles.categoryPage}>
                {products}
            </div>
         );
    }
}
 
export default CategoryPage;