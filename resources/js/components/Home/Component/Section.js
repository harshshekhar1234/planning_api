import React from 'react';
import { Link } from 'react-router-dom';
import { img_url } from '../../configuration';

function Section() {
  return <main className="cfa w-100a overflow-hidden">
  <div className="fla w-100a w-50-nsa">
    <div className="aspect-ratio aspect-ratio--16x9 bg-black-40">
    <Link to='/home/outcomebudget' className=''>
      <div style={{ 
      backgroundImage: `url(${img_url}image21.jpg)` 
    }}
           className="bg-center cover aspect-ratio--object dim pointer">
               <div className="bg-black-40 pb7">
      <nav className="dt mw8 center"> 
        <div className="dtc v-mid pa3">
    
        </div>
    
      </nav> 
      <div className="tc-l">
        <h1 className="f2 f1-l fw2 white mb5 lh-title">Outcome Budget</h1>
      </div>
    </div>
    
           </div>
           </Link>
    </div>
  </div>
  <div className="fla w-100a w-50-nsa bg-black-40">
    <div className="aspect-ratio aspect-ratio--16x9 dim pointer">
      <div style={{ 
      backgroundImage: `url(${img_url}image15.jpg)` 
    }}
        className="bg-center cover aspect-ratio--object">
            <div className="bg-black-40 pb7">
      <nav className="dt w-100 mw8 center"> 
        <div className="dtc w2 v-mid pa3">
    
        </div>
    
      </nav> 
      <div className="tc-l">
        <h1 className="f2 f1-l fw2 white mb5 lh-title">SDG Goals</h1>
      </div>
    </div>
        </div>
    </div>
  </div>  
</main>;
}

export default Section;
