import React from 'react';
import { Link } from "react-router-dom";
import { img_url } from '../../../configuration';

const WaterCard = () => {
  return (
  <article className="br4 ba dark-gray b--black-10 mv4 w-100 w-50-m w-40-l mw5 center grow shadow-2">
  <Link to="/home/water" style={{ textDecoration: 'none' }}>
  <img src={`${img_url}water.jpg`} className="db w-100 br2 br--top" alt="Drinking Water" />
  <div className="pa2 ph3-ns pb3-ns">
    <div className="dt w-100 mt1">
      <div className="dtc">
        <h2 className="f4 f3-ns fu ds mv0">Drinking Water and Sanitation</h2>
      </div>
      </div>
    <p className="f6 lh-copy measure mt2 black bg--orange">
    In Jharkhand entire population does not have access to safe drinking water and sanitation. Rural sanitation coverage is very low. About 30% of habitations have partial facility with drinking water
    </p>
    <p className = "f6 no-underline br-pill ph3 pv2 mb2 dib white btncolor">View Department</p> 
  </div>
  </Link>
</article>
  );
}

export default WaterCard;