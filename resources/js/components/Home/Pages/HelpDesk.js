import React,{useEffect} from 'react'
import { img_url } from '../../configuration';

function HelpDesk() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <>
    <h2 className='tc b'>Help Desk</h2>
    <div className='center tc'>
    <a href="mailto:outcomebudgetjharkhand@gmail.com" className="f6 link black hover-dark-gray">Email: outcomebudgetjharkhand@gmail.com</a>
    </div>
    <ul className="list pl0 mt2 measure center">
    {/* <li
    className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
      <img src={`${img_url}avatar.png`} className="w2 h2 w3-ns h3-ns br-100" alt="Avatar" />
      <div className="pl3 flex-auto">
        <span className="f6 db black-70 b">Shri Sanjiv Kumar Besra(IAS)</span>
        <span className="f6 db black-70">Joint Secretary(Nodal Officer)</span>
        <span className="f6 db black-70">Department of Planning and Development</span>
      </div>
      <div>
        <a href="tel:" className="f6 link blue hover-dark-gray">0651-2490800</a>
      </div>
  </li> */}
  <li
    className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
      <img src={`${img_url}avatar.png`} className="w2 h2 w3-ns h3-ns br-100" alt="Avatar" />
      <div className="pl3 flex-auto">
        <span className="f6 db black-70 b">Shri Samir Kumar Sinha</span>
        <span className="f6 db black-70">Program Support</span>
      </div>
      <div>
        <a href="tel:" className="f6 link blue hover-dark-gray">+91 9334734632</a>
      </div>
  </li>
  {/* <li
    className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
      <img src={`${img_url}avatar.png`} className="w2 h2 w3-ns h3-ns br-100" alt="Avatar" />
      <div className="pl3 flex-auto">
        <span className="f6 db black-70 b">Shri Robert Anthony</span>
        <span className="f6 db black-70">Program Support</span>
      </div>
      <div>
        <a href="tel:" className="f6 link blue hover-dark-gray">+91 9931249718</a>
      </div>
  </li> */}
  <li
    className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
      <img src={`${img_url}avatar.png`} className="w2 h2 w3-ns h3-ns br-100" alt="Avatar" />
      <div className="pl3 flex-auto">
        <span className="f6 db black-70 b">Shri Arun Kumar</span>
        <span className="f6 db black-70">Program Support</span>
      </div>
      <div>
        <a href="tel:" className="f6 link blue hover-dark-gray">+91 9937937688</a>
      </div>
  </li>
  <li
    className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
      <img src={`${img_url}avatar.png`} className="w2 h2 w3-ns h3-ns br-100" alt="Avatar" />
      <div className="pl3 flex-auto">
        <span className="f6 db black-70 b">Harsh Shekhar</span>
        <span className="f6 db black-70">Technical Support</span>
      </div>
      <div>
        <a href="tel:" className="f6 link blue hover-dark-gray">+91 7710902274</a>
      </div>
  </li>
  <li
    className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
      <img src={`${img_url}avatar.png`} className="w2 h2 w3-ns h3-ns br-100" alt="Avatar" />
      <div className="pl3 flex-auto">
        <span className="f6 db black-70 b">Sandip Kumar</span>
        <span className="f6 db black-70">Technical Support</span>
      </div>
      <div>
        <a href="tel:" className="f6 link blue hover-dark-gray">+91 7980320269</a>
      </div>
  </li>
</ul>
</>
  )
}

export default HelpDesk