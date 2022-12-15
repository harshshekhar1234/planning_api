import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { doc_url } from '../configuration';

function Sidenav_Verifier() {

    const name = useSelector((state) => state.user.name);
    const divisionid = useSelector((state) => state.divisions.divisionId);

  return (
    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
    <div className="sb-sidenav-menu">
        <div className="nav">
            <div className="sb-sidenav-menu-heading"><span className='white'>Core</span></div>
            <Link className="nav-link" to='/dashboardverifier/main'>
                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                <span className='white'>Dashboard</span>
            </Link>
            <Link className="nav-link" to={`/dashboardverifier/updatepassword`}>
                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                <span className='white'>Update Password</span>
            </Link>
            <a className="nav-link" target="_blank" href={`${doc_url}usermanual.pdf`}><div className="sb-nav-link-icon"><i className="fas fa-download"></i></div>
            <span className='white'>User Manual</span>
            </a>
            
            <div className="sb-sidenav-menu-heading"><span className='white'>Approvals and Report</span></div>
            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseSubmit" aria-expanded="false" aria-controls="collapseSubmit">
                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                <span className='white'>Approvals</span>
                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
            </a>
            <div className="collapse" id="collapseSubmit" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                <nav className="sb-sidenav-menu-nested nav">
                <Link className="nav-link" to='/dashboardverifier/verifierpage'>
                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                <span className='white'>Quater Wise Approvals</span>
            </Link>
            <Link className="nav-link" to='/dashboardverifier/aorverifierpage'>
                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                <span className='white'>On Demand Approvals</span>
            </Link>
                </nav>
            </div>
            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseReport" aria-expanded="false" aria-controls="collapseReport">
                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                <span className='white'>Reports</span>
                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
            </a>
            <div className="collapse" id="collapseReport" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                <nav className="sb-sidenav-menu-nested nav">
                <Link className="nav-link" to={`/dashboardverifier/divisionreport/${divisionid}`}>
                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                <span className='white'>Division Report Download</span>
                </Link>
                <Link className="nav-link" to={`/dashboardverifier/quaterreportverifier`}>
                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                <span className='white'>Quater Wise Report</span>
                </Link>
                <Link className="nav-link" to={`/dashboardverifier/asonreportverifier`}>
                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                <span className='white'>On Demand Report</span>
                </Link>
                </nav>
            </div>
            <div className="sb-sidenav-menu-heading"><span className='white'>Outcome Budget 2023-24</span></div>
            <Link className="nav-link" to={`/dashboardverifier/migrationdivisionreport/${divisionid}`}>
            <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
            <span className='white'>Directorate Report Download</span>
            </Link>
            
            
            
        </div>
    </div>
    <div className="sb-sidenav-footer">
        <div className="small">Logged in as:</div>
        {`${name}`}
    </div>
</nav>)}

export default Sidenav_Verifier;
