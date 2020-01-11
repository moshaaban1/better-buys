import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCategoriesItems } from "../../redux/categories/categories.reselect";

import Category from "../category-item/category.component";
import "./categories.styles.scss";

const Categories = ({ categories }) => (
   <div className="categories">
      {categories.map(category => (
         <Category {...category} key={category.id} />
      ))}
   </div>
);

const mapStateToProps = createStructuredSelector({
   categories: selectCategoriesItems
});

export default connect(mapStateToProps)(Categories);
