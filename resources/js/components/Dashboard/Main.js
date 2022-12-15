import React, {useState, useEffect} from 'react';
import { BarChart } from './Utilities/DepartmentIndicatorChart';
import {
    getDepartmentIndicatorCountData,
    getDivisionIndicatorStatusData,
    getCountStatusData
} from '../store/dashboard-actions';
import { useSelector, useDispatch } from 'react-redux';

function Main() {

    const dispatch = useDispatch();

    const departments = useSelector((state) => state.dashboard.departmentIndicatorCount);
    const status = useSelector((state) => state.dashboard.statusUpdate);
    const countIndicator = useSelector((state) => state.dashboard.countIndicators);

    useEffect(() => {
        dispatch(getCountStatusData())
        dispatch(getDepartmentIndicatorCountData())
        dispatch(getDivisionIndicatorStatusData())
        
      }, []);

    const getQuater = (quater) => {
        if(quater === '0'){
            return '1'
            
          }
          if(quater.name === 'quater1'){
            return '2'
            
          }
          if(quater.name === 'quater2'){
            return '3'
            
          }
          if(quater.name === 'quater3'){
            return '4'
            
          }
          if(quater.name === 'quater4'){
            return '1 (FY:- 2023-2024)'
          }
    }

  return <main>
  <div className="container-fluid px-4">
      <h1 className="mt-4 b f1">Outcome Budget Dashboard for 13 Departments (FY:- 2022-23)</h1>
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
      <div className="card mb2">
          <div className="card-header">
              <i className="fas fa-table me-1"></i>
              Status Summary for current quater
          </div>
          <div className="card-body overflow-auto">
          <table>
        <thead>
            <tr>
                <td className='b'>Department</td>
                <td className='b'>Directorate(Demand No.)</td>
                <td className='b'>Quater</td>
                <td className='b'>No. of Output Indicators</td>
                <td className='b'>Output Achievement Updated</td>
                <td className='b'>Output Achievement Update Pending</td>
                <td className='b'>No. of Outcome Indicators</td>
                <td className='b'>Outcome Achievement Updated</td>
                <td className='b'>Outcome Achievement Update Pending</td>
            </tr>
        </thead>
        <tbody>
            {status.length && status.map((status,i) => {
                return(
                <tr key={i}>
                    <td className='tl b'>{status.dept_name}</td>
                    <td className='tl b'>{`${status.name} (${status.demand_no})`}</td>
                    <td className='tc b'>{getQuater(status.quater)}</td>
                    <td>{status.output_indicator}</td>
                    <td>{status.output_updated}</td>
                    <td>{status.output_indicator - status.output_updated}</td>
                    <td>{status.outcome_indicator}</td>
                    <td>{status.outcome_updated}</td>
                    <td>{status.outcome_indicator - status.outcome_updated}</td>
                </tr>)
            })
            }
        </tbody>
    </table>
          </div>
      </div>
      
  </div>
</main>;
}

export default Main;
