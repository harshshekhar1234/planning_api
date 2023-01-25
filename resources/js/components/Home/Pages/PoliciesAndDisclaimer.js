import React,{useEffect} from 'react'
import { img_url } from '../../configuration';

function PoliciesAndDisclaimer() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <>
    <div className='container'>
    <p className='f3'><strong>POLICIES & DISCLAIMER:</strong></p>
    <p><span className="f4"><strong>Hyperlinking Policy</strong></span></p>

<p><strong>Links to External Websites/Portals</strong><br />
At many places in this portal, you shall find links to other websites/portals created and maintained by other Government, non-Government / private organizations. These links have been placed for your convenience. When you select a link you are navigated to that website. Once on that website, you are subject to the privacy and security policies of the owners / sponsors of the website. Government of Jharkhand is not responsible for the contents and reliability of the linked websites and does not necessarily endorse the views expressed in them. Mere presence of the link or its listing on this portal should not be assumed as endorsement of any kind.</p>

<p><strong>Links to the Website by Other Websites/Portals</strong><br />
We do not object you for linking directly to the information that is hosted on our site and no prior permission is required for the same. We do not permit our pages to be loaded into frames on your site. Our Department&#39;s pages must load into a newly opened browser window of the user.</p>

<p><span className="f4"><strong>Privacy Policy</strong></span></p>

<p>As a general rule, this portal does not automatically capture any specific personal information from you, (like name, phone number or e-mail address), that allows us to identify you individually. This portal records your visit and logs the following information for statistical purposes, such as Internet Protocol (IP) addresses, domain name, browser type, operating system, the date and time of the visit and the pages visited. We make no attempt to link these addresses with the identity of individuals visiting our site unless an attempt to damage the site has been detected. We will not identify users or their browsing activities, except when a law enforcement agency may exercise a warrant to inspect the service provider&#39;s logs. If the portal requests you to provide personal information, you will be informed how it will be used if you choose to give it and adequate security measures will be taken to protect your personal information.</p>

<p><strong>Disclaimer</strong></p>

<p>Although information and contents of various departmental websites of this portal have been put with care and diligence, Government of Jharkhand does not take responsibility on how this information is used or the consequences of its use. In case of any inconsistency/confusion, the user should contact the concerned Department/Officer of Jharkhand Government for further clarifications.</p>

</div>
</>
  )
}

export default PoliciesAndDisclaimer