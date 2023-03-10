import React, {useState, useEffect} from 'react'
import {getUserData} from '../store/user-action';
import {getDivisionIndicatorCountData} from '../store/dashboard-actions';
import {getDepartmentData} from '../store/department-action';
import {getDivisionData} from '../store/divisions-action';
import {dashboardActions} from '../store/dashboardSlice';
import {divisionsActions} from '../store/divisionsSlice';
import {departmentActions} from '../store/departmentSlice';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { Donought } from './Utilities/Donought';
import { PieChart } from './Utilities/DeptBudgetEstimateChart';
import { BarChart } from './Utilities/DeptIndicatorCountChart';
import { FinancialBarChart } from './Utilities/DeptFinancialSummaryChart';

function Main_Dept_User() {

    const dispatch = useDispatch();

    const countIndicator = useSelector((state) => state.dashboard.countIndicatorsDivision);
    const divisionID = useSelector((state) => state.divisions.divisionId);
    const departmentId = useSelector((state) => state.department.departmentId);
    const division = useSelector((state) => state.divisions.division);
    const department = useSelector((state) => state.department.name);
    const finYear = useSelector((state) => state.finYear.finYear);

    useEffect(() => {
        dispatch(getUserData());
        return () => {
            dispatch(dashboardActions.setCountIndicatorsDivision({countIndicatorsDivision:{}}))
            dispatch(divisionsActions.setDivision({division:''}))
            dispatch(departmentActions.setName({name:''}))
            dispatch(departmentActions.setId({id:0}))
        }
      }, []);

    useEffect(() => {
        if(divisionID){
            dispatch(getDivisionData(divisionID));
            dispatch(getDivisionIndicatorCountData(divisionID,finYear));
        }
      }, [divisionID]);

      useEffect(() => {
        if(departmentId){
            dispatch(getDepartmentData(departmentId));
        }
      }, [departmentId]);

      if(division.length === 0 || department.length === 0){
        return <div>
        <Box sx={{ width: '100%' }}>
         <LinearProgress />
        </Box>
        <h2 className='tc mt2 b'>Loading...</h2>
        </div>
      }

      const getFinYear = () => {
        if(finYear === '2324'){
          return '2023-24'
        }
        if(finYear === '2223'){
          return '2022-23'
        }
      }

  return <main>
  <div className="container-fluid px-4">
      <h1 className="mt-4 b">{`Department of ${department} (${division} Division) (FY:- ${getFinYear()})`}</h1>
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
      <div className="row">
          <div className="col-xl-6">
              <div className="card mb-4">
                  <div className="card-header b">
                      <i className="fas fa-chart-area me-1"></i>
                      Budget Estimate Distribution
                  </div>
                  <div className="card-body center" style={{width:"55%"}}><PieChart center={countIndicator ? countIndicator.centre_share_outlay : 0} state={countIndicator ? countIndicator.state_share_outlay : 0}/></div>
              </div>
          </div>
          <div className="col-xl-6">
              <div className="card mb-4">
                  <div className="card-header b">
                      <i className="fas fa-chart-bar me-1"></i>
                      Financial Summary
                  </div>
                  <div className="card-body mt3" ><FinancialBarChart estimate={countIndicator ? countIndicator.financial_outlay : 0} sanction={countIndicator ? countIndicator.sanction : 0}
          allotment={countIndicator ? countIndicator.allotment : 0}
          expenditure={countIndicator ? countIndicator.expenditure : 0}
          />
                  </div>
              </div>
          </div>
      </div>
      <div className="card mb7">
          <div className="card-header b">
              <i className="fas fa-table me-1"></i>
              Department Indicator Count for current quater
          </div>
          <div className="card-body center" style={{width:'60%'}}>
          <BarChart 
                  output={countIndicator ? countIndicator.output_indicators : 0} 
                  outcome={countIndicator ? countIndicator.outcome_indicators : 0}
                  ach_output = {countIndicator ? countIndicator.achievement_output : 0}
                  ach_outcome = {countIndicator ? countIndicator.achievement_outcome : 0}
                  />
          </div>
      </div>
  </div>
</main>;
}

export default Main_Dept_User;
