import React,{useEffect} from 'react'
import { img_url } from '../../configuration';

function HigherEducation() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <>
    <article>
  <header className="bg-center cover " style={{ 
      backgroundImage: `url(${img_url}education.jpg)` 
    }}>
    <div className="mw9 center pa4 pt5-ns ph7-l">
      <h3 className="f2 f1-ns measure-narrow lh-title mv4">
        <span className="bg-black-90 lh-copy white pa1 tracked-tight">
        Higher and Technical Education
        </span>
      </h3>
    </div>
  </header>
  <div className="pa4 ph7-l georgia mw9-l center">
      <p className="f5 f3-ns lh-copy  georgia">
       राज्य सरकार ने उच्च शिक्षा के विकास पर विशेष बल दिया है। विगत चार वर्षों में कई नई योजनाए एवं कार्यक्रमों को आरम्भ किया गया है। विगत चार वर्षों में प्राप्त की गई उपलब्धियाँ निःसंदेह बहुत उत्साहवर्द्धक है। वर्तमान में झारखण्ड राज्य का सकल नामांकन अनुपात 8.0 है। वर्ष 2022 तक उच्च शिक्षा के क्षेत्र में हम पहुँच, समानता एवं गुणवत्ता के दृष्टिकोण से राष्ट्रीय मानक स्तर को प्राप्त कर सकेंगे।
      </p>
    <p className="f5 f4-ns lh-copy  mb4">
    राज्य सरकार ने सरकार के स्तर पर एवं निजी जन भागीदारी के माध्यम से नये विश्वविद्यालयों/महाविद्यालयों की स्थापना करने की सार्थक पहल की है। राज्य में उच्च शिक्षा के क्षेत्र में कई समस्याए एवं चुनौतियाँ है जैसे, कम सकल नामांकन अनुपात, राष्ट्रीय स्तर के मुकाबले उच्च शिक्षण संस्थानों की बहुत कम संख्या, विशिष्ट शिक्षा प्रदान करने वाले शिक्षण संस्थानों की कमी, शहरी एवं ग्रामीण असमानताए, उपलब्ध उच्च शिक्षण संस्थानों में आधारभूत संरचनाओं का विकास, उपलब्ध संस्थानों का क्षमता विकास, पुराने पाठ्यक्रमों में संशोधन, रोजगारपरक शिक्षा का अभाव, लिंगानुपात में सुधार, शोध एवं विकास के क्षेत्र में नगण्य कार्य, शिक्षकों एवं शिक्षकेत्तर कर्मचारियों की कमी, गुणवत्तापूर्ण शिक्षा आदि। उक्त समस्याओं का समाधान एवं चुनौतियों का सामना करते हुए उच्च शिक्षा के क्षेत्र में हम राष्ट्रीय मानक स्तर को प्राप्त करने के लिए प्रयासरत है।
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

export default HigherEducation