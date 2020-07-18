import React, { Component } from 'react';
import styles from './Categories.module.css';
import Category from './Category/Category';
import { Link } from 'react-router-dom';

class Categories extends Component {
    state = {  }
    render() { 

        let categoriesItems = this.props.categories.map( el => {
            let path = `/${el.name}`;
            return (
            <Link to={path} >
                <Category categoryName={el.name} categoryImg={el.img} />
            </Link>
            )
        });

        return ( 
            <div className={styles.categories}>
                {categoriesItems}
            </div>
         );
    }
}
 
export default Categories;