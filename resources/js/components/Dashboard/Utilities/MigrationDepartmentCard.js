import React from 'react'
import { Link } from 'react-router-dom';

function DepartmentCard({department}) {
  return (
    <article className="center mw5 w-100 w-25-ns ba mv4 shadow-2 br3">
    <Link to={`/dashboard/migrationdepartmentdata/${department.id}`} className='no-underline' style={{ textDecoration: 'none' }}>
  <h1 className="f4 bg-blue white mv0 pv2 ph3 customBorder">{department.name}</h1>
  <p className="f5 b grow no-underline ph3 pv2 mb2 dib black ml2 dim">View Details &rarr;</p>
  </Link>
</article>
  )
}

export default DepartmentCard