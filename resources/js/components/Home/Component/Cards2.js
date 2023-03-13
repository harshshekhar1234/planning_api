import React from 'react';
import { img_url } from '../../configuration';
import { Link } from 'react-router-dom';

function Cards2({finance}) {
//   return <div className="row row-cols-1 row-cols-md-3 g-4 shift dhoom">
//       <div className="col">
//     <div className="card bg-transparent shadow-2 grow pointer">
//     <img src={`${img_url}image15.jpg`} className="card-img-top" alt="pic"/>
//       <div className="card-body">
//         <h4 className='blue'>SDG</h4>
//         <h5 className="card-title b ju">Composite Score</h5>
//         <p className="card-text f4 b bb dark-green">97.4% <span> &#9650;</span><br /><span className='f6 fw4 black'>2020</span></p>
//         <p className = "f6 no-underline br-pill ph3 pv2 mb2 dib white btncolor">Explore All</p> 
//       </div>
//     </div>
//   </div>
//   <div className="col">
//     <div className="card bg-transparent shadow-2 grow pointer">
//     <img src={`${img_url}image9.jpg`} className="card-img-top" alt="pic"/>
//       <div className="card-body">
//         <h5 className='b black'>Top District</h5>
//         <h5 className="card-title b ju">Ranchi</h5>
//         <p className="card-text f4 b bb dark-green">97.4% <span> &#9650;</span><br /><span className='f6 fw4 black'>2020</span></p>
//       </div>
//     </div>
//   </div>
//   <div className="col">
//     <div className="card bg-transparent shadow-2 grow pointer">
//     <img src={`${img_url}image5.jpg`} className="card-img-top" alt="pic"/>
//       <div className="card-body">
//         <h5 className='b black'>Aspirational District</h5>
//         <h5 className="card-title b ju">Khunti</h5>
//         <p className="card-text f4 b bb dark-red">17.4%<span> &#9660;</span><br /><span className='f6 fw4 black'>2020</span></p>
//       </div>
//     </div>
//   </div>
//   <div className="col">
//   <Link to='/home/outcomebudget' className='no-underline'>
//     <div className="card bg-transparent shadow-2 grow pointer">
//     <img src={`${img_url}image17.jpg`} className="card-img-top" alt="pic"/>
//       <div className="card-body">
//         <h4 className='blue'>Outcome Budget</h4>
//         <h5 className="card-title b ju">Total Outcome Budget</h5>
//         <p className="card-text f4 b bb green">&#8377;4000 (cr)<br /><span className='f6 fw4 black'>2020</span></p>
//         <p className = "f6 no-underline br-pill ph3 pv2 mb2 dib white btncolor">View All Departments</p> 
//       </div>
//     </div>
//     </Link>
//   </div>
//   <div className="col">
//     <div className="card bg-transparent shadow-2 grow pointer">
//     <img src={`${img_url}image7.jpg`} className="card-img-top" alt="pic"/>
//       <div className="card-body">
//         <h5 className="card-title b ju">Agriculture</h5>
//         <p className="card-text f4 b bb dark-green">97.4% <span> &#9650;</span><br /><span className='f6 fw4 black'>2020</span></p>
//       </div>
//     </div>
//   </div>
//   <div className="col">
//     <div className="card bg-transparent shadow-2 grow pointer">
//     <img src={`${img_url}image8.jpg`} className="card-img-top" alt="pic"/>
//       <div className="card-body">
//         <h5 className="card-title b ju">Health</h5>
//         <p className="card-text f4 b bb dark-red">77.4%<span> &#9660;</span><br /><span className='f6 fw4 black'>2020</span></p>
//       </div>
//     </div>
//   </div>
// </div>;
// return <div className='flex flex-wrap mw6 flex-column'>
  
    
//     <Link to='/home/outcomebudget' className=''>
//       <div style={{ 
//       backgroundImage: `url(${img_url}image21.jpg)` 
//     }}
//            className="bg-center cover dim pointer">
//                <div className="bg-black-40 pb5">
//       <nav className="dt mw8 center"> 
//         <div className="dtc v-mid pa3">
    
//         </div>
    
//       </nav> 
//       <div className="tc-l">
//         <h1 className="f2 f1-l fw2 white mb5 lh-title">Outcome Budget</h1>
//       </div>
//     </div>
    
//            </div>
//            </Link>
    
  
  
//     <div className="dim pointer">
//       <div style={{ 
//       backgroundImage: `url(${img_url}image15.jpg)` 
//     }}
//         className="bg-center cover aspect-ratio--object">
//             <div className="bg-black-40 pb5">
//       <nav className="dt w-100 mw8 center"> 
//         <div className="dtc w2 v-mid pa3">
    
//         </div>
    
//       </nav> 
//       <div className="tc-l">
//         <h1 className="f2 f1-l fw2 white mb5 lh-title">SDG Goals</h1>
//       </div>
//     </div>
//         </div>
//     </div>
  
// </div>
return <div className = 'container'>
  <div className="row">
  <div className="col">
           <article className="br4 b--black-10 mv4 w-100 w-50-m w-40-l center grow shadow-2 mw5">
           
           <Link to='/home/outcomebudget' className='no-underline'>
     <div className="card bg-transparent pointer">
     <img src={`${img_url}outcome.jpg`} className="card-img-top" alt="pic"/>
       <div className="card-body">
         <h4 className='blue'>Outcome Budget</h4>
         <h5 className="card-title b ju">Outcome Budget Estimate</h5>
        <p className="card-text f4 b green">&#8377;{`${finance} (cr)`}<br /><span className='f6 fw4 black'>FY:- 2023-24</span></p>
         <p className = "f6 no-underline br-pill ph3 pv2 mb2 dib white btncolor">View All Departments</p> 
       </div>
    </div>
     </Link>
</article>
</div>
<div className="col">
<article className="br4 dark-gray b--black-10 mv4 w-100 w-50-m w-40-l center shadow-2 grow mw5">
<div className="card bg-transparent pointer">
<Link to='/home/sdgfront' className='no-underline'>
    <img src={`${img_url}image15.jpg`} className="card-img-top" alt="pic"/>
      <div className="card-body">
        <h4 className='blue'>SDG</h4>
        <h5 className="card-title b ju">Composite Score</h5>
        <p className="card-text f4 b dark-green">56 <span> &#9650;</span><br /><span className='f6 fw4 black'>2020</span></p>
         <p className = "f6 no-underline br-pill ph3 pv2 mb2 dib white btncolor">Explore All</p> 
      </div>
      </Link>
    </div>
</article>
</div>
</div>
<div className="row">
<div className="col">
<article className="dark-gray b--black-10 mv4 w-100 w-50-m w-40-l center shadow-2 grow mw5">
<div className="card bg-transparent pointer">
<Link to='/home/contactdetails' className='no-underline'>
    <img src={`${img_url}contacts.png`} className="card-img-top" alt="pic"/>
      </Link>
    </div>
</article>
</div>
<div className="col">
<article className="dark-gray b--black-10 mv4 w-100 w-50-m w-40-l center shadow-2 grow mw5">
<div className="card bg-transparent pointer">
<Link to='/home/helpdesk' className='no-underline'>
    <img src={`${img_url}helpdesk.jpeg`} className="card-img-top" alt="pic"/>
    </Link>
    </div>
</article>
</div>
</div>
          
        </div>
}

export default Cards2;
