import React from 'react'
import { Link } from 'react-router-dom';

function DepartmentCardEntry({department}) {
  return (
    <article className="center mw5 w-100 w-25-ns ba mv4 shadow-2 br3">
    <Link to={`/dashboard/departmentdataentry/${department.id}`} className='no-underline' style={{ textDecoration: 'none' }}>
  <h1 className="f4 bg-blue white mv0 pv2 ph3 customBorder">{department.name}</h1>
  <div className="pa3 bt">
  <p className="f6 b lh-copy measure mv0 black">
      Budget Estimate: <span className='f5'>{`${department.outlay.toFixed(2)}(Cr)`}</span>
    </p>
    <p className="f6 b lh-copy measure mv0 black">
      Schemes: <span className='f5'>{`${department.scheme}`}</span>
    </p>
    <p className="f6 b lh-copy measure mv0 black"> 
      Sub Schemes: <span className='f5'>{`${department.subscheme}`}</span>
    </p>
    <p className="f6 b lh-copy measure mv0 black">
      Outputs: <span className='f5'>{`${department.output}`}</span>
    </p>
    <p className="f6 b lh-copy measure mv0 black">
      Outcomes: <span className='f5'>{`${department.outcome}`}</span>
    </p>
    <p className="f6 b lh-copy measure mv0 black">
      Output Indicators: <span className='f5'>{`${department.output_indicator}`}</span>
    </p>
    <p className="f6 b lh-copy measure mv0 black">
      Outcome Indicators: <span className='f5'>{`${department.outcome_indicator}`}</span> 
    </p>
  </div>
  <p className="f5 b grow no-underline ph3 pv2 mb2 dib black ml2 dim">View Details &rarr;</p>
  </Link>
</article>
  )
}

export default DepartmentCardEntry