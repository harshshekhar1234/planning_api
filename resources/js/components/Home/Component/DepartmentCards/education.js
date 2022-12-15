import React from 'react';
import { Link } from "react-router-dom";
import { img_url } from '../../../configuration';

const EducationCard = () => {
  return (
  <article className="br4 ba dark-gray b--black-10 mv4 w-100 w-50-m w-40-l mw5 center grow shadow-2">
  <Link to="/home/education" style={{ textDecoration: 'none' }}>
  <img src={`${img_url}education.jpg`} className="db w-100 br2 br--top" alt="Education" />
  <div className="pa2 ph3-ns pb3-ns">
    <div className="dt w-100 mt1">
      <div className="dtc">
        <h2 className="f4 f3-ns fu ds mv0">Higher and Technical Education</h2>
      </div>
      </div>
    <p className="f6 lh-copy measure mt2 black bg--orange">
राज्य सरकार ने उच्च शिक्षा के विकास पर विशेष बल दिया है। विगत चार वर्षों में कई नई योजनाए एवं कार्यक्रमों को आरम्भ किया गया है। विगत चार वर्षों में प्राप्त की गई उपलब्धियाँ निःसंदेह बहुत उत्साहवर्द्धक है।
    </p>
    <p className = "f6 no-underline br-pill ph3 pv2 mb2 dib white btncolor">View Department</p> 
  </div>
  </Link>
</article>
  );
}

export default EducationCard;