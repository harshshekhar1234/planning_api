import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { doc_url } from '../configuration';

function Sidenav_Dept_User() {

    const name = useSelector((state) => state.user.name);
    const divisionid = useSelector((state) => state.divisions.divisionId);

  return (
    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
    <div className="sb-sidenav-menu">
        <div className="nav">
            <div className="sb-sidenav-menu-heading"><span className='white'>Core</span></div>
            <Link className="nav-link" to='/dashboarddeptuser/main'>
                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                <span className='white'>Dashboard</span>
            </Link>
            <Link className="nav-link" to='/dashboarddeptuser/outcomebudget'>
                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                <span className='white'>Outcome Budget Achievment Entry</span>
            </Link>
            
            <Link className="nav-link" to={`/dashboarddeptuser/updatepassword`}>
                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                <span className='white'>Update Password</span>
            </Link>
            <a className="nav-link" target="_blank" href={`${doc_url}usermanual.pdf`}><div className="sb-nav-link-icon"><i className="fas fa-download"></i></div>
            <span className='white'>User Manual</span>
            </a>

            <div className="sb-sidenav-menu-heading"><span className='white'>Submission and Report</span></div>
            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseSubmit" aria-expanded="false" aria-controls="collapseSubmit">
                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                <span className='white'>Submit for verification</span>
                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
            </a>
            <div className="collapse" id="collapseSubmit" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                <nav className="sb-sidenav-menu-nested nav">
                <Link className="nav-link" to={`/dashboarddeptuser/submitverification`}>
                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                <span className='white'>Quater Wise</span>
                </Link>
                <Link className="nav-link" to={`/dashboarddeptuser/aorsubmitverification`}>
                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                <span className='white'>On Demand Report</span>
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
                <Link className="nav-link" to={`/dashboarddeptuser/divisionreport/${divisionid}`}>
                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                <span className='white'>Division Report Download</span>
                </Link>
                <Link className="nav-link" to={`/dashboarddeptuser/quaterreport`}>
                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                <span className='white'>Quater Wise Report</span>
                </Link>
                <Link className="nav-link" to={`/dashboarddeptuser/asonreportdeptuser`}>
                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                <span className='white'>On Demand Report</span>
                </Link>
                </nav>
            </div>
            {/* <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                Pages
                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
            </a>
            <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                        SDG
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                    </a>
                    <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                        <nav className="sb-sidenav-menu-nested nav">
                            <Link to='/dashboard/sdgfront' className='nav-link'>
                                SDG Front Page
                            </Link>
                        </nav>
                        
                    </div>
                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                        Error
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                    </a>
                    <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                        <nav className="sb-sidenav-menu-nested nav">
                            <a className="nav-link" href="401.html">401 Page</a>
                            <a className="nav-link" href="404.html">404 Page</a>
                            <a className="nav-link" href="500.html">500 Page</a>
                        </nav>
                    </div>
                </nav>
            </div> */}
            <div className="sb-sidenav-menu-heading"><span className='white'>Outcome Budget 2023-24</span></div>
            <Link className="nav-link" to='/dashboarddeptuser/entryformdeptuserscheme'>
            <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
            <span className='white'>Outcome Budget Entry Form</span>
            </Link>
            <Link className="nav-link" to={`/dashboarddeptuser/migrationdivisionreport/${divisionid}`}>
            <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
            <span className='white'>Directorate Report Download</span>
            </Link>
            {/* <Link className="nav-link" to='/dashboard/departmentdata'>
                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                <span className='white'>Department Data</span>
            </Link> */}
        </div>
    </div>
    <div className="sb-sidenav-footer">
        <div className="small">Logged in as:</div>
        {`${name} User`}
    </div>
</nav>)}

export default Sidenav_Dept_User;
