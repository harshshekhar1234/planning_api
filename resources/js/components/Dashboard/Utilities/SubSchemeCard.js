import React from 'react'
import { Link } from 'react-router-dom';

function SubSchemeCard({subscheme}) {
  return (
<article className="center mw5 mw6-ns br3 ba b--black-10 mv4 shadow-2">
<Link to={`/dashboard/subscheme/${subscheme.id}`} className='no-underline' style={{ textDecoration: 'none' }}>
  <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">{subscheme.name}</h1>
  <div className="pa3 bt b--black-10">
    <p className="f6 f5-ns lh-copy measure">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
      vero eos et accusam et justo duo dolores et ea rebum.
    </p>
    <p className="f6 grow no-underline ph3 pv2 mb2 dib dark-blue dim">View Details</p>
  </div>
  </Link>
</article>
  )
}

export default SubSchemeCard