import React from 'react';
import { Link } from "react-router-dom";
import { img_url } from '../../../configuration';

const FoodCard = () => {
  return (
  <article className="br4 ba dark-gray b--black-10 mv4 w-100 w-50-m w-40-l mw5 center grow shadow-2">
  <Link to="/home/food" style={{ textDecoration: 'none' }}>
  <img src={`${img_url}food.jpg`} className="db w-100 br2 br--top" alt="Food" />
  <div className="pa2 ph3-ns pb3-ns">
    <div className="dt w-100 mt1">
      <div className="dtc">
        <h2 className="f4 f3-ns fu ds mv0">Food, Public Distribution and Consumer Affairs</h2>
      </div>
      </div>
    <p className="f6 lh-copy measure mt2 black bg--orange">
    The primary Policy objective of the Department of Food , Public Distribution and Consumer Affairs is to ensure food security for the state through timely and efficient procurement and distribution of foodgrains.
    </p>
    <p className = "f6 no-underline br-pill ph3 pv2 mb2 dib white btncolor">View Department</p> 
  </div>
  </Link>
</article>
  );
}

export default FoodCard;