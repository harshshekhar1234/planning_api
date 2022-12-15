import React,{useEffect} from 'react'
import { img_url } from '../../configuration';

function AgricultureDept() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <>
    <article>
  <header className="bg-center cover " style={{ 
      backgroundImage: `url(${img_url}agriculture.jpg)` 
    }}>
    <div className="mw9 center pa4 pt5-ns ph7-l">
      <h3 className="f2 f1-ns measure-narrow lh-title mv0">
        <span className="bg-black-90 lh-copy white pa1 tracked-tight">
        Agriculture, Animal Husbandry, Co-Operative, Fishery and Diary.
       
        </span>
      </h3>
    </div>
  </header>
  <div className="pa4 ph7-l georgia mw9-l center">
      <p className="f5 f3-ns lh-copy georgia">
      The State of Jharkhand was created in November’ 2000 after carving 79 lakh hectares geographical area from the State of Bihar for better planning and execution of development activities of a ecologically different zone ( Hills & Plateau region compared to Bihar plains). Agriculture is the main stay for the 80% of rural population of the state
      </p>
    <p className="f5 f4-ns lh-copy mb4">
   Agriculture is their employment and primary income generating activity. The agricultural economy of the Jharkhand state is characterized by dependence on nature, low investment ,low productivity, mono-croping with paddy as the dominant crop , in inadequate irrigation facilities and small ands marginal holdings. The dependence of agriculture on the Vagaries of the rain-god can be gauged from the fact that as much as 92% of the total cultivated area is unirrigated. The cultivable land resources of the state has good potential for higher production of horticulture and forest products. The soil is young and has high capacity of fixation of humus. The forest provides sufficient biomass to feed its soiling. However, Soil erosion and failure to recycle the biomass is depleting the soil fertility. Hence , a judicious oil ,water and land management is required only that can improve agriculture productivity. Despite the fact that the state has a good rainfall , the surface water availability to agriculture is not sufficient due to inadequate storage facilities etc.
  </p>

    <p className="f5 f4-ns lh-copy">
    As far as the status of ground water is concerned , it is also in the poor state due to little recharging of ground water by natural process in absence of artificial recharging facilities, as a result , the water label in the plateau is going down. Presently, The availability of water resource is only 287810 lakhs m3, out of which 237890 lakh .m3 is from surface water and rest 49920 lakh m3 is from ground water. The total utilization of surface and ground water in the state for irrigation purposes so far is only 47360 lakh m3 out of which 39640 lakh m3 is surface water and 7720 lakh m3 is ground water. For all round agricultural development, technology must be supplemented by institutional mechanisms to ensure the provision of the essential facilities and services that the farmers need to improve agronomic practices and obtain higher yield. Only the development of a healthy agricultural marketing system can guarantee remunerative prices to the farmers and motivate the adoption of scientific cultivation for raising agricultural productivity. 
  </p>
  </div>
</article>
    {/* <div className = 'flex flex-wrap mh1 mh4-m mh5-ns br3'>
    <article className="center mw5 mw6-ns ba mv4 shadow-2">
  <h1 className="f4 bg-near-black white mv0 pv2 ph3">Animal Husbandry</h1>
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

export default AgricultureDept