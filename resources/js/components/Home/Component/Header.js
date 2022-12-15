import React from 'react';
import { Link } from 'react-router-dom';
import { img_url } from '../../configuration';

function Header() {
  return <div>
    <nav className="kdb kdt-l kw-100 kborder-box kpa3 kph5-l">
    <Link className="kdb kdtc-l kv-mid kmid-gray klink kdim kw-100 w-10-l ktc ktl-l kmb2 kmb0-l" to='/' title="Home">
    <img src={`${img_url}logo3.png`} className="kdib w4 h4 kbr-100" alt="Site Name"/>
    </Link>
  <h2 className='hcolor kdb kdtc-l kv-mid kw-100 kw-25-l ktc center'><strong>Department of Planning and Development<br/>Government of Jharkhand</strong></h2>
  <div className="kdb kdtc-l kv-mid kw-100 w-10-l ktc ktr-l">
  <Link className="klink kdim kdark-gray kf6 kf5-l kdib kmr3 b" to='/home/about' title="About">About</Link>
  <Link className="klink kdim kdark-gray kf6 kf5-l kdib kmr3 b" to='/login' title="Store">Sign In</Link>
  <Link className="klink kdim kdark-gray kf6 kf5-l kdib kmr3 b ba pa2 b--light-silver w4 tc" to='/home/publicdashboard' title="Contact">MIS</Link>
  </div>
</nav>
    {/* <nav classNameName="dt w-100 border-box pa3 ph5-ns">
  <Link classNameName="dtc v-mid mid-gray link w-25" to='/' title="Home">
    <img src={`${img_url}logo3.png`} classNameName="dib w4 h4 br-100" alt="Site Name"/>
  </Link>
  <h1 classNameName='hcolor tc w-100'><strong>Department of Planning and Development<br/>Government of Jharkhand</strong></h1>
  <div classNameName="dtc v-mid w-25 tr">
    <Link classNameName="link dim dark-gray f6 f5-ns dib mr3 mr4-ns b" to='/home/about' title="About">About</Link>
    <Link classNameName="link dim dark-gray f6 f5-ns dib mr3 mr4-ns b" to='/login' title="Store">Sign In</Link>
    <Link classNameName="link dim dark-gray f6 f5-ns dib b ba pa2 b--light-silver w4 tc" to='/dashboard/main' title="Contact">MIS</Link>
  </div>
</nav> */}
      {/* <nav classNameName="navbar navbar-light">
  <div classNameName="container-fluid">
  <Link to='/'>
    <img classNameName="navbar-brand w4" src={`${img_url}logo3.png`}/>
  </Link>
    <h1 classNameName='hcolor tc'><strong>Department of Planning and Development<br/>Government of Jharkhand</strong></h1>
    <button classNameName="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span classNameName="navbar-toggler-icon"></span>
    </button>
    <div classNameName="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div classNameName="offcanvas-header">
        <h5 classNameName="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
        <button type="button" classNameName="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div classNameName="offcanvas-body">
        <ul classNameName="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li classNameName="nav-item">
          <Link to='/' classNameName='nav-link'>
            Home
          </Link>
          </li>
          <li classNameName="nav-item">
          <Link to='/dashboard/main' classNameName='nav-link'>
            Dashboard
          </Link>
          <Link to='/home/signin' classNameName='nav-link'>
            Sign In
          </Link>
          </li>
          <li classNameName="nav-item dropdown">
            <a classNameName="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul classNameName="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
              <li><a classNameName="dropdown-item" href="#">Action</a></li>
              <li><a classNameName="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr classNameName="dropdown-divider"/>
              </li>
              <li><a classNameName="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form classNameName="d-flex">
          <input classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button classNameName="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav> */}
  </div>;
}

export default Header;
