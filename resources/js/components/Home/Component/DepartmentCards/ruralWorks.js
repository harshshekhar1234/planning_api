import React from 'react';
import { Link } from "react-router-dom";
import { img_url } from '../../../configuration';

const RuralWorksCard = () => {
  return (
  <article className="br4 ba dark-gray b--black-10 mv4 w-100 w-50-m w-40-l mw5 center grow shadow-2">
  <Link to="/home/ruralworks" style={{ textDecoration: 'none' }}>
  <img src={`${img_url}ruralworks.jpg`} className="db w-100 br2 br--top" alt="Rural Development" />
  <div className="pa2 ph3-ns pb3-ns">
    <div className="dt w-100 mt1">
      <div className="dtc">
        <h2 className="f4 f3-ns fu ds mv0">Rural Works</h2>
      </div>
      </div>
    <p className="f6 lh-copy measure mt2 black bg--orange">
     The Departments main objective is to construct and maintain Rural Roads mainly in Rural Areas.The Government of Jharkhand has initiated structural changes in the entire budgetary process to make it more people centric,accountable and measureable.
    </p>
    <p className = "f6 no-underline br-pill ph3 pv2 mb2 dib white btncolor">View Department</p> 
  </div>
  </Link>
</article>
  );
}

export default RuralWorksCard;