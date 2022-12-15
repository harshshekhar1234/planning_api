import React,{useEffect} from 'react'
import { img_url } from '../../configuration';

function UrbanDevelopmentDept() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <>
    <article>
  <header className="bg-center cover " style={{ 
      backgroundImage: `url(${img_url}urban.jpg)` 
    }}>
    <div className="mw9 center pa4 pt5-ns ph7-l">
      <h3 className="f2 f1-ns measure-narrow lh-title mv4">
        <span className="bg-black-90 lh-copy white pa1 tracked-tight">
        Urban Development and Housing
        </span>
      </h3>
    </div>
  </header>
  <div className="pa4 ph7-l georgia mw9-l center">
      <p className="f5 f3-ns lh-copy georgia">
        Urban Development Department provides basic services to urban areas in entire state as per the provision of Municipal Corporation/ Municipality Act. Responsibilities of ULBs have increased manifolds in recent past after enactment of 74th Constitutional Amendment Act. 
      </p>
    <p className="f5 f4-ns lh-copy mb4">
    The twelfth Schedule brings into the municipal domain among others such areas like as urban and town planning, regulation of land use, planning for economic and social development, safeguarding the interests of weaker sections of society including the handicapped and mentally retarded, Slum improvement and upgradation, urban poverty alleviation, promotion of cultural, educational and aesthetic aspects.

  </p>

    {/* <p className="f5 f4-ns lh-copy measure">
    This is most likely, the wrong conversation for us as a community, to be having. The presence of bad tools - shouldn't discourage us from wanting more tools or frameworks. There are more books published in a single day than I will ever be able to read in my lifetime. But this does not make me sad. Or overwhelm me. Mostly I think about how excited I am to read the best books that are being published. And this is where we should push the conversation. How do we build better tools? What does that look like?
  </p> */}
  </div>
</article>
    {/* <div className = 'flex flex-wrap mh1 mh4-m mh5-ns br3'>
    <article className="center mw5 mw6-ns ba mv4 shadow-2">
  <h1 className="f4 bg-near-black white mv0 pv2 ph3">Reclamation and Development of Tank and Reservoir Fisheries</h1>
  <div className="pa3 bt">
    <p className="f6 f5-ns lh-copy measure mv0">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
      vero eos et accusam et justo duo dolores et ea rebum.
    </p>
  </div>
  <a className="f6 grow no-underline ph3 pv2 mb2 dib dark-blue dim" href="#0">View Details</a>
</article>
<article className="center mw5 mw6-ns ba mv4 shadow-2">
  <h1 className="f4 bg-near-black white mv0 pv2 ph3">Grants-in-aid to JHASCOFISH</h1>
  <div className="pa3 bt">
    <p className="f6 f5-ns lh-copy measure mv0">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
      vero eos et accusam et justo duo dolores et ea rebum.
    </p>
  </div>
  <a className="f6 grow no-underline ph3 pv2 mb2 dib dark-blue dim" href="#0">View Details</a>
</article>
<article className="center mw5 mw6-ns ba mv4 shadow-2">
  <h1 className="f4 bg-near-black white mv0 pv2 ph3">Extension, Research and Training Scheme</h1>
  <div className="pa3 bt">
    <p className="f6 f5-ns lh-copy measure mv0">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
      vero eos et accusam et justo duo dolores et ea rebum.
    </p>
  </div>
  <a className="f6 grow no-underline ph3 pv2 mb2 dib dark-blue dim" href="#0">View Details</a>
</article>
<article className="center mw5 mw6-ns ba mv4 shadow-2">
  <h1 className="f4 bg-near-black white mv0 pv2 ph3">Fish Marketing Scheme</h1>
  <div className="pa3 bt">
    <p className="f6 f5-ns lh-copy measure mv0">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
      vero eos et accusam et justo duo dolores et ea rebum.
    </p>
  </div>
  <a className="f6 grow no-underline ph3 pv2 mb2 dib dark-blue dim" href="#0">View Details</a>
</article>
</div> */}
</>
  )
}

export default UrbanDevelopmentDept