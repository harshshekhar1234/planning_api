import React from 'react'
import { Link } from 'react-router-dom';

function SchemeCard({scheme}) {
  return (
//     <article className="center mw5 mw5-ns ba mv4 shadow-2">
//     <Link to={`/dashboard/scheme/${scheme.id}`} className='no-underline' style={{ textDecoration: 'none' }}>
//   <h1 className="f4 bg-near-black white mv0 pv2 ph3">{scheme.name}</h1>
//   <div className="pa3 bt">
//     <p className="f6 f5-ns lh-copy measure mv0 black">
//       Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
//       tempor invidunt ut labore et dolore magna aliquyam erat
//     </p>
//   </div>
//   <p className="f6 grow no-underline ph3 pv2 mb2 dib dark-blue dim">View Details</p>
//   </Link>
// </article>
<article className="center mw5 mw6-ns br3 ba b--black-10 mv4 shadow-2">
<Link to={`/dashboard/scheme/${scheme.id}`} className='no-underline' style={{ textDecoration: 'none' }}>
  <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">State Name: {scheme.state_name}</h1>
  <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Center Name: {scheme.center_name}</h1>
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

export default SchemeCard