import React, {useState, useEffect} from 'react'

function NotMigratedSubScheme({report}) {

  const subschemename = report.name;
  const subschemecode = report.subscheme_code;


  const [rowofspan, setRowofspan] = useState(1)
     
  return (
    <>
      <tbody className="lh-copy">
        <tr className="stripe-dark ba" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', textAlign:"left"}}>
          <td className="pa3 tl" colSpan='3' rowSpan='2' style={{fontWeight: 'bold'}}>Name of the sub-scheme</td>
          <td className="pa3 tl" colSpan='10' rowSpan='2' >{`${subschemecode}-${subschemename}`}</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
        </tr>
            <tr>
            <td className="pv3 pr3 reportextcolor b--black-80" rowSpan='2' style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{report.center_share + report.state_share}</td>
            <td className="pv3 pr3 reportextcolor b--black-80" colSpan={12} rowSpan='2' style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>Sub-Scheme not included in outcome budget</td>
          </tr>
          <tr>
          <td></td>
          <td></td>
        </tr>
      </tbody>
</>
  )
}

export default NotMigratedSubScheme