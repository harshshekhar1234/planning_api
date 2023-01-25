import React from 'react';
import { img_url } from '../../configuration';
import { Link } from 'react-router-dom';

function Footer() {
  return <footer className="pv4 ph3 ph5-m ph6-l white fbcolor">
  <small className="f6 db tc"><b className="ttu">Developed and Maintained by <a href="https://japit.jharkhand.gov.in/" target="_blank" className='dib ph1 dim'><img src={`${img_url}japit.jpg`} className="kdib" alt="Site Name"/></a></b><span>© 2022</span><br />All Rights Reserved</small>
  <div className="tc mt3">
    <Link to="/home/policyanddisclaimer" title="Policy And Disclaimer" className="f6 dib ph2 link white-80 dim">Policy And Disclaimer</Link>
    <Link to="/home/termsofuse"    title="Terms" className="f6 dib ph2 link white-80 dim">Terms of Use</Link>
    <Link to="/home/privacy"  title="Privacy" className="f6 dib ph2 link white-80 dim">Privacy</Link>
  </div>
</footer>;
}

export default Footer;
