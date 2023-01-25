import React,{useEffect} from 'react'
import { img_url } from '../../configuration';

function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <>
    <div className='container mb7'>
    <p className='f3'><strong>PRIVACY POLICY:</strong></p>
    <p><strong>Privacy Policy</strong></p>

<p>As a general rule, this website does not collect Personal Information about you when you visit the site. You can generally visit the site without revealing Personal Information, unless you choose to provide such information. This website records your visit and logs the following information for statistical purposes your server&#39;s address; the name of the top-level domain from which you access the Internet (for example, .gov, .com, .in, etc.); the type of browser you use; the date and time you access the site; the pages you have accessed and the documents downloaded and the previous Internet address from which you linked directly to the site.</p>

<p><strong>Cookies</strong></p>

<p>A cookie is a piece of software code that an internet web site sends to your browser when you access information at that site.</p>

</div>
</>
  )
}

export default Privacy