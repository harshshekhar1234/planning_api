import React, {useState, useEffect} from 'react'
import MigrationSubschemeReportDivision from './MigrationSubschemeReportDivision';
import NotMigratedSubscheme from './NotMigratedSubscheme';

function MigrationSchemeReportDivision({report}) {


  const schemeStateName = report.state_name;
  const schemeCenterName = report.center_name;
  const schemeCenterCode = report.center_code;
  const schemeStateCode = report.state_code;
  const demand_no = report.subschemes[0].sub_scheme[0].demand_no;
  const department_name = report.subschemes[0].sub_scheme[0].dept_name;
  const division_name = report.subschemes[0].sub_scheme[0].div_name;
   
     
  return (
    <>
    <div className="pa4 hidden">
                    <div className="overflow-auto">
                    <table id={`${report.id}`} className='table-bordered' style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', textAlign:"center"}}>
    <table className="f6 w-100 center mb3 ba" cellSpacing="0">
      <tr style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', textAlign:"center"}}>
        <td colSpan='13' style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', textAlign:"center", fontWeight: 'bold'}}>{`Detailed Report`}</td>
      </tr>
      <tbody className="lh-copy">
      <tr className="stripe-dark table-bordered" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid'}}>
          <td className="pa3 tl table-bordered" colSpan='2' style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', textAlign:"left", fontWeight: 'bold'}}>Financial Year</td>
          <td className="pa3 tl table-bordered" colSpan='11' style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', textAlign:"left"}}>2023-24</td>
          
        </tr>
        <tr className="stripe-dark ba" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', textAlign:"left"}}>
          <td className="pa3 tl" colSpan='2' style={{fontWeight: 'bold'}}>Name of secretariat department</td>
          <td className="pa3 tl" colSpan='11'>{`${demand_no}-${department_name}(${division_name})`}</td>
          
        </tr>
        <tr className="stripe-dark ba" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', textAlign:"left"}}>
          <td className="pa3 tl" colSpan='2' style={{fontWeight: 'bold'}}>Name of the state scheme</td>
          <td className="pa3 tl" colSpan='11'>{`${schemeStateCode ? schemeStateCode : '0000'}-${schemeStateName ? schemeStateName : '0000' }`}</td>
          
        </tr>
        <tr className="stripe-dark ba" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', textAlign:"left"}}>
          <td className="pa3 tl" colSpan='2' style={{fontWeight: 'bold'}}>Name of the center scheme</td>
          <td className="pa3 tl" colSpan='11'>{`${schemeCenterCode ? schemeCenterCode : 'NAPL'}-${schemeCenterName ? schemeCenterName : 'NAPL'}`}</td>
          
        </tr>
        <tr className="stripe-dark ba" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', textAlign:"left"}}>
          <td className="pa3 tl b" colSpan='2' style={{fontWeight: 'bold'}}>Budget Estimate (in Lakhs)</td>
          <td className="pa3 tl" colSpan='11'>{report.financial_outlay}</td>
          
        </tr>
      </tbody>
    </table>
    {/* <table className="f6 w-100 mw8 center mb3" cellspacing="0">
      <thead>
        <tr>
          <th className="fw6 bb b--black-80 tl pb3 pr3 bg-light-yellow">Financial Outlay (in Lakhs)</th>
          <th className="fw6 bb b--black-80 tl pb3 pr3 bg-light-yellow">Allotment</th>
          <th className="fw6 bb b--black-80 tl pb3 pr3 bg-light-yellow">Sanction</th>
          <th className="fw6 bb b--black-80 tl pb3 pr3 bg-light-yellow">Expenditure</th>
          <th className="fw6 bb b--black-80 tl pb3 pr3 bg-light-yellow">% Expenditure</th>
        </tr>
      </thead>
      <tbody className="lh-copy">
        <tr>
          <td className="pv3 pr3 bb b--black-80 bg-light-yellow">Hassan Johnson</td>
          <td className="pv3 pr3 bb b--black-80 bg-light-yellow">@hassan</td>
          <td className="pv3 pr3 bb b--black-80 bg-light-yellow">hassan@companywithalongdomain.co</td>
          <td className="pv3 pr3 bb b--black-80 bg-light-yellow">14419232532474</td>
          <td className="pv3 pr3 bb b--black-80 bg-light-yellow">14419232532474</td>
        </tr>
        <tr>
          <td className="pv3 pr3 bb b--black-80 bg-light-yellow">Taral Hicks</td>
          <td className="pv3 pr3 bb b--black-80 bg-light-yellow">@hicks</td>
          <td className="pv3 pr3 bb b--black-80 bg-light-yellow">taral@companywithalongdomain.co</td>
          <td className="pv3 pr3 bb b--black-80 bg-light-yellow">72326219423551</td>
          <td className="pv3 pr3 bb b--black-80 bg-light-yellow">14419232532474</td>
        </tr>
      </tbody>
    </table> */}
  <div className="overflow-auto">
    <table id="table-to-xls1" className="f6 w-100 mw8 center ba" cellSpacing="0" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "center"}}>
        <tr>
          <th className=" b--black-80 tc pb3 pr3 b reportextcolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{`Financial Outlay(Rs. in Lakhs)`}</th>
          <th className=" b--black-80 tc pb3 pr3 b reportextcolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>Social Category</th>
          <th className=" b--black-80 tc b reportextcolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>Gender Category</th>
          <th className=" b--black-80 tc b reportoutputcolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>Output</th>
          <th className=" b--black-80 tc b reportoutputcolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>Output Indicators</th>
          <th className=" b--black-80 tc b reportoutputcolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>Target</th>
          <th className=" b--black-80 tc b reportoutputcolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>Unit of measurement</th>
          <th className=" b--black-80 tc b reportoutcomecolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>Outcome</th>
          <th className=" b--black-80 tc b reportoutcomecolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>Outcome Indicators</th>
          <th className=" b--black-80 tc b reportoutcomecolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>Targets</th>
          <th className=" b--black-80 tc b reportoutputcolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>Unit of measurement</th>
          <th className=" b--black-80 tc reportextcolor b" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>Sustainable Development Goals</th>
          <th className=" b--black-80 tc pb3 pr3 reportextcolor b" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>Risk Factors/Any Other Remarks</th>
        </tr>
        {report.subschemes.map(report => {
          if(!report.isSubscheme){
            return <NotMigratedSubscheme report={report}/>
          }
          return <MigrationSubschemeReportDivision report={report}/>
        })
         }
    </table>
  </div>
  </table>
  </div>
</div>
</>
  )
}

export default MigrationSchemeReportDivision