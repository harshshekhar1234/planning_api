import React from 'react';
import { Link } from 'react-router-dom';
import { doc_url } from '../configuration';

function Sidenav({clickHandler}) {
  return (
    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
    <div className="sb-sidenav-menu">
        <div className="nav">
            <div className="sb-sidenav-menu-heading"><span className='white'>Core</span></div>
            <Link className="nav-link" to='/dashboard/main'>
                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                <span className='white'>Dashboard</span>
            </Link>
            <Link className="nav-link" to='/dashboard/register'>
                <div className="sb-nav-link-icon" ><i className="fas fa-tachometer-alt"></i></div>
                <span className='white'>Register</span>
            </Link>
            <Link className="nav-link" to='/dashboard/users'>
                <div className="sb-nav-link-icon" ><i className="fas fa-tachometer-alt"></i></div>
                <span className='white'>Users</span>
            </Link>
            {/* <div className="sb-sidenav-menu-heading"><span className='white'>SDG</span></div>
            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                Layouts
                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
            </a>
            <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                <nav className="sb-sidenav-menu-nested nav">
                    <a className="nav-link" href="layout-static.html">Static Navigation</a>
                    <a className="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                </nav>
            </div>
            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
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
            
            
            <div className="sb-sidenav-menu-heading"><span className='white'>Outcome Budget</span></div>
            {/* <Link className="nav-link" to='/dashboard/createscheme'>
                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                <span className='white'>Create Scheme</span>
            </Link>
            <Link className="nav-link" to='/dashboard/createsubscheme'>
                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                <span className='white'>Create Sub Scheme</span>
            </Link> */}
            {/* <Link className="nav-link" to='/dashboard/createoutput'>
                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                <span className='white'>Create Output</span>
            </Link>
            <Link className="nav-link" to='/dashboard/createoutcome'>
                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                <span className='white'>Create Outcome</span>
            </Link>
            <Link className="nav-link" to='/dashboard/createoutputindicator'>
                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                <span className='white'>Create Output Indicator</span>
            </Link>
            <Link className="nav-link" to='/dashboard/createoutcomeindicator'>
                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                <span className='white'>Create Outcome Indicator</span>
            </Link>
            <Link className="nav-link" to='/dashboard/createoutputtarget'>
                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                <span className='white'>Create Output Indicator Target</span>
            </Link>
            <Link className="nav-link" to='/dashboard/createoutcometarget'>
                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                <span className='white'>Create Outcome Indicator Target</span>
            </Link> */}
            <Link className="nav-link" to='/dashboard/departmentsentry'>
                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                <span className='white'>Create Indicators and Targets</span>
            </Link>
            
            
            
            <a className="nav-link" target="_blank" href={`${doc_url}usermanual.pdf`}><div className="sb-nav-link-icon"><i className="fas fa-download"></i></div>
            <span className='white'>User Manual</span>
            </a>
            <div className="sb-sidenav-menu-heading"><span className='white'>Reports</span></div>
            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseReport" aria-expanded="false" aria-controls="collapseReport">
                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                <span className='white'>Reports</span>
                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
            </a>
            <div className="collapse" id="collapseReport" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                <nav className="sb-sidenav-menu-nested nav">
                <Link className="nav-link" to='/dashboard/reportsocialcategory'>
                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                <span className='white'>Financial Reports</span>
                </Link>
                <Link className="nav-link" to='/dashboard/departments'>
                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                <span className='white'>Schemes Report</span>
                </Link>
                <Link className="nav-link" to='/dashboard/divisionreportdownload'>
                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                <span className='white'>Directorate Report Download</span>
                </Link>
                <Link className="nav-link" to='/dashboard/quaterwisereport'>
                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                <span className='white'>Quater Wise Report</span>
            </Link>
            <Link className="nav-link" to='/dashboard/aorreportdivisionlist'>
                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                <span className='white'>On Demand Report</span>
            </Link>
                </nav>
            </div>
            <div className="sb-sidenav-menu-heading"><span className='white'>Outcome Budget 2023-24</span></div>
            <Link className="nav-link" to='/dashboard/divisionmigrationsummary'>
            <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
            <span className='white'>Summary</span>
            </Link>
            <Link className="nav-link" to='/dashboard/migrationdepartments'>
            <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
            <span className='white'>Schemes Report</span>
            </Link>
            <Link className="nav-link" to='/dashboard/migrationdivisionreportdownload'>
            <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
            <span className='white'>Directorate Report Download</span>
            </Link>
            <Link className="nav-link" to='/dashboard/divisionmigrationinternal'>
            <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
            <span className='white'>Directorate Internal Scheme</span>
            </Link>
            <Link className="nav-link" to='/dashboard/divisionpendingschemedept'>
            <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
            <span className='white'>Directorate Pending Scheme</span>
            </Link>
            <Link className="nav-link" to='/dashboard/divisionpendingsubschemedept'>
            <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
            <span className='white'>Directorate Pending Sub-Scheme</span>
            </Link>
            
            {/* <Link className="nav-link" to='/dashboard/departmentdata'>
                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                <span className='white'>Department Data</span>
            </Link> */}
        </div>
    </div>
    <div className="sb-sidenav-footer">
        <div className="small">Logged in as:</div>
        Admin
    </div>
</nav>)}

export default Sidenav;
