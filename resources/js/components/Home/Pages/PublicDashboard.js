import React, {useState, useEffect} from 'react';
import { BarChart } from '../../Dashboard/Utilities/DepartmentIndicatorChart';
import {
    getPublicIndicatorCountData,
    getPublicCountStatusData
  } from '../../store/dashboard-actions';

import { useSelector, useDispatch } from 'react-redux';

function PublicDashboard() {

    const dispatch = useDispatch();    

    const departments = useSelector((state) => state.dashboard.departmentIndicatorCount);
    const countIndicator = useSelector((state) => state.dashboard.countIndicators);
    const pubFinYear = useSelector((state) => state.finYear.pubFinYear);

    useEffect(() => {
        if(!countIndicator.financial_outlay){
        dispatch(getPublicCountStatusData(pubFinYear))
        dispatch(getPublicIndicatorCountData(pubFinYear))
    }
      }, []);

     const getFinYear = () => {
        if(pubFinYear === '2324'){
          return '2023-24'
        }
        if(pubFinYear === '2223'){
          return '2022-23'
        }
      }

    

  return <main>
  <div className="container-fluid px-4 w-90">
      <h1 className="mt-4 b f2 f1-ns">{`Outcome Budget Dashboard for 13 Departments (FY:- ${getFinYear()})`}</h1>
      {/* <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item active">Dashboard</li>
      </ol> */}
      
      <div className="row">
          <div className="col-xl-3 col-md-6">
              <div className="card budgetColor text-white mb-4">
                  <div className="card-body f3 h4">Budget Estimate- 
                  <p className='f2'>{countIndicator.financial_outlay ? countIndicator.financial_outlay.toFixed(2) : 0}</p>
                  <p className='f6'>(Rs. in Cr)</p>
                  </div>
                  {/* <div className="card-footer d-flex align-items-center justify-content-between">
                      <a className="small text-white stretched-link" href="#">View Details</a>
                      <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                  </div> */}
              </div>
          </div>
          <div className="col-xl-3 col-md-6">
              <div className="card schemeColor text-white mb-4">
                  <div className="card-body f3 h4">
                  {/* <p>Total Departments 
                  <p className='f2'>{countIndicator ? countIndicator.departments : 0}</p></p> */}
                  <p>Total Schemes 
                  <p className='f2'>{countIndicator ? countIndicator.schemes : 0}</p></p>
                  {/* <p>Total Sub Schemes 
                  <p className='f2'>{countIndicator ? countIndicator.subschemes : 0}</p></p> */}
                  </div>
                  {/* <div className="card-footer d-flex align-items-center justify-content-between">
                      <a className="small text-white stretched-link" href="#">View Details</a>
                      <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                  </div> */}
              </div>
          </div>
          <div className="col-xl-3 col-md-6">
              <div className="card outputColor text-white mb-4">
                  <div className="card-body f3 h4">Total Outputs
                  <p className='f2'>{countIndicator ? countIndicator.outputs : 0}</p>
                  </div>
                  {/* <div className="card-footer d-flex align-items-center justify-content-between">
                      <a className="small text-white stretched-link" href="#">View Details</a>
                      <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                  </div> */}
              </div>
          </div>
          <div className="col-xl-3 col-md-6">
              <div className="card outcomeColor text-white mb-4">
                  <div className="card-body f3 h4">Total Outcomes
                  <p className='f2'>{countIndicator ? countIndicator.outcomes : 0}</p>
                  </div>
                  {/* <div className="card-footer d-flex align-items-center justify-content-between">
                      <a className="small text-white stretched-link" href="#">View Details</a>
                      <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                  </div> */}
              </div>
          </div>
      </div>
      <h2 className='b tc'>Department Indicators Count</h2>
      <BarChart label="Department Indicators Count" departments={departments}/>
      {/* <div className="row">
          <div className="col-xl-6">
              <div className="card mb-4">
                  <div className="card-header">
                      <i className="fas fa-chart-area me-1"></i>
                      Area Chart Example
                  </div>
                  
              </div>
          </div>
          <div className="col-xl-6">
              <div className="card mb-4">
                  <div className="card-header">
                      <i className="fas fa-chart-bar me-1"></i>
                      Bar Chart Example
                  </div>
                  <div className="card-body"><canvas id="myBarChart" width="100%" height="40"></canvas></div>
              </div>
          </div>
      </div> */}
      
  </div>
</main>;
}

export default PublicDashboard;
