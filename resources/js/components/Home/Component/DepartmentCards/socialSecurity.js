import React from 'react';
import { Link } from "react-router-dom";
import { img_url } from '../../../configuration';

const SocialCard = () => {
  return (
  <article className="br4 ba dark-gray b--black-10 mv4 w-100 w-50-m w-40-l mw5 center grow shadow-2">
  <Link to="/home/socialsecurity" style={{ textDecoration: 'none' }}>
  <img src={`${img_url}image6.jpg`} className="db w-100 br2 br--top" alt="Agriculture" />
  <div className="pa2 ph3-ns pb3-ns">
    <div className="dt w-100 mt1">
      <div className="dtc">
        <h2 className="f4 f3-ns fu ds mv0">Women, Child Development and Social Security</h2>
      </div>
      </div>
    <p className="f6 lh-copy measure mt2 black bg--orange">
    Department of Women and Child Development and Social Welfare, Governmentof Jharkhand acts as nodal department for care, protection, and development of Women and Children.
    </p>
    <p className = "f6 no-underline br-pill ph3 pv2 mb2 dib white btncolor">View Department</p> 
  </div>
  </Link>
</article>
  );
}

export default SocialCard;