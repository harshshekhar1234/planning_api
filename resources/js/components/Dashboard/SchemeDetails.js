import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import { laravel_api } from '../configuration';

function DepartmentDetails() {

    let params = useParams();
    const [department, setDepartment] = useState([])

    const getDetail = (id) => {
        fetch(`${laravel_api}department/${id}`)
        .then(response => response.json())
        .then(data => {
          setDepartment(data)
        })
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        getDetail(params.id)
    }, []);

  return (
      <>
      <h1>{department.name}</h1>
    <div className="pa4">
  <div className="overflow-auto">
    <table className="f6 w-100 mw8 center " cellSpacing="0">
      <thead>
        <tr>
          <th className="b--black-80 tc pb3 pr3  b" rowSpan="3">Sl. No.</th>
          <th className=" b--black-80 tc pb3 pr3  b" rowSpan="3">Name of the scheme</th>
          <th className=" b--black-80 tc pb3 pr3  b" rowSpan="3">Sub-Scheme</th>
          <th className=" b--black-80 tc  b" colSpan="7">Financial</th>
          <th className=" b--black-80 tc  b" colSpan="8">Physical</th>
          <th className=" b--black-80 tc pb3 pr3  b" rowSpan="3">Risk Factors/Any Other Remarks</th>
        </tr>
        <tr>
          <th className="fw6 b--black-80 tc pr3   " rowSpan="2">Budgetary Allocation for Yr. 2021-22 (Rs. In Lakhs)</th>
          <th className="fw6 b--black-80 tc pr3   " colSpan="5">Fund Released (Rs. in Lakh)</th>
          <th className="fw6 b--black-80 tc   " rowSpan="2">Exp. till date (Rs. in Lakh) (Cumulative)</th>
          <th className=" b--black-80 tc pr3  b" rowSpan="2">Output Indicator(s)</th>
          <th className=" b--black-80 tc pr3  b" rowSpan="2">Physical Target (s)</th>
          <th className="fw6 b--black-80 tc  " colSpan="6">Ach. against Physical Target
          </th>
          </tr>
          <tr>
          <th className="fw6 b--black-80 tc   ">Q1</th>
          <th className="fw6 b--black-80 tc   ">Q2</th>
          <th className="fw6 b--black-80 tc   ">Q3</th>
          <th className="fw6 b--black-40 tc   ">Q4</th>
          <th className="fw6 b--black-40 tc   ">Total</th>
          <th className="fw6 b--black-80 tc   ">Q1</th>
          <th className="fw6 b--black-80 tc   ">Q2</th>
          <th className="fw6 b--black-80 tc   ">Q3</th>
          <th className="fw6 b--black-40 tc   ">Q4</th>
          <th className="fw6 b--black-80 tc    ">Ach. as on date</th>
          <th className="fw6 b--black-80 tc   ">% Ach</th>
          </tr>
      </thead>
      <tbody className="lh-copy">
        <tr>
          <td className="pv3 pr3  b--black-80">1</td>
          <td className="pv3 pr3  b--black-80">JHARKHAND RAJYA FASAL RAHAT YOJNA</td>
          <td className="pv3 pr3  b--black-80"></td>
          <td className="pv3 pr3  b--black-80">5000</td>
          <td className="pv3 pr3  b--black-80">0</td>
          <td className="pv3 pr3  b--black-80">0</td>
          <td className="pv3 pr3  b--black-80">0</td>
          <td className="pv3 pr3  b--black-80">0</td>
          <td className="pv3 pr3  b--black-80">2750</td>
          <td className="pv3 pr3  b--black-80">2750</td>
          <td className="pv3 pr3  b--black-80">TO COMPENSATE FARMERS FOR THEIR CROP LOSS</td>
          <td className="pv3 pr3  b--black-80">50000 Farmers</td>
          <td className="pv3 pr3  b--black-80">NIL</td>
          <td className="pv3 pr3  b--black-80">2500</td>
          <td className="pv3 pr3  b--black-80">NIL</td>
          <td className="pv3 pr3  b--black-80">250</td>
          <td className="pv3 pr3  b--black-80">NIL</td>
          <td className="pv3 pr3  b--black-80">0</td>
          <td className="pv3 pr3  b--black-80">A Corpus Fund of Rs. 25 crores has been created in JSCB.Selection of Technical Assistance Group and development of Portal for farmer registration is under process</td>
        </tr>
        <tr>
          <td className="pv3 pr3  b--black-80">2</td>
          <td className="pv3 pr3  b--black-80">JHARKHAND RAJYA FASAL RAHAT YOJNA</td>
          <td className="pv3 pr3  b--black-80"></td>
          <td className="pv3 pr3  b--black-80">5000</td>
          <td className="pv3 pr3  b--black-80">0</td>
          <td className="pv3 pr3  b--black-80">0</td>
          <td className="pv3 pr3  b--black-80">0</td>
          <td className="pv3 pr3  b--black-80">0</td>
          <td className="pv3 pr3  b--black-80">2750</td>
          <td className="pv3 pr3  b--black-80">2750</td>
          <td className="pv3 pr3  b--black-80">TO COMPENSATE FARMERS FOR THEIR CROP LOSS</td>
          <td className="pv3 pr3  b--black-80">50000 Farmers</td>
          <td className="pv3 pr3  b--black-80">NIL</td>
          <td className="pv3 pr3  b--black-80">2500</td>
          <td className="pv3 pr3  b--black-80">NIL</td>
          <td className="pv3 pr3  b--black-80">250</td>
          <td className="pv3 pr3  b--black-80">NIL</td>
          <td className="pv3 pr3  b--black-80">0</td>
          <td className="pv3 pr3  b--black-80">A Corpus Fund of Rs. 25 crores has been created in JSCB.Selection of Technical Assistance Group and development of Portal for farmer registration is under process</td>
        </tr>
        <tr>
          <td className="pv3 pr3  b--black-80">3</td>
          <td className="pv3 pr3  b--black-80">JHARKHAND RAJYA FASAL RAHAT YOJNA</td>
          <td className="pv3 pr3  b--black-80"></td>
          <td className="pv3 pr3  b--black-80">5000</td>
          <td className="pv3 pr3  b--black-80">0</td>
          <td className="pv3 pr3  b--black-80">0</td>
          <td className="pv3 pr3  b--black-80">0</td>
          <td className="pv3 pr3  b--black-80">0</td>
          <td className="pv3 pr3  b--black-80">2750</td>
          <td className="pv3 pr3  b--black-80">2750</td>
          <td className="pv3 pr3  b--black-80">TO COMPENSATE FARMERS FOR THEIR CROP LOSS</td>
          <td className="pv3 pr3  b--black-80">50000 Farmers</td>
          <td className="pv3 pr3  b--black-80">NIL</td>
          <td className="pv3 pr3  b--black-80">2500</td>
          <td className="pv3 pr3  b--black-80">NIL</td>
          <td className="pv3 pr3  b--black-80">250</td>
          <td className="pv3 pr3  b--black-80">NIL</td>
          <td className="pv3 pr3  b--black-80">0</td>
          <td className="pv3 pr3  b--black-80">A Corpus Fund of Rs. 25 crores has been created in JSCB.Selection of Technical Assistance Group and development of Portal for farmer registration is under process</td>
        </tr>
        <tr>
          <td className="pv3 pr3  b--black-80">4</td>
          <td className="pv3 pr3  b--black-80">JHARKHAND RAJYA FASAL RAHAT YOJNA</td>
          <td className="pv3 pr3  b--black-80"></td>
          <td className="pv3 pr3  b--black-80">5000</td>
          <td className="pv3 pr3  b--black-80">0</td>
          <td className="pv3 pr3  b--black-80">0</td>
          <td className="pv3 pr3  b--black-80">0</td>
          <td className="pv3 pr3  b--black-80">0</td>
          <td className="pv3 pr3  b--black-80">2750</td>
          <td className="pv3 pr3  b--black-80">2750</td>
          <td className="pv3 pr3  b--black-80">TO COMPENSATE FARMERS FOR THEIR CROP LOSS</td>
          <td className="pv3 pr3  b--black-80">50000 Farmers</td>
          <td className="pv3 pr3  b--black-80">NIL</td>
          <td className="pv3 pr3  b--black-80">2500</td>
          <td className="pv3 pr3  b--black-80">NIL</td>
          <td className="pv3 pr3  b--black-80">250</td>
          <td className="pv3 pr3  b--black-80">NIL</td>
          <td className="pv3 pr3  b--black-80">0</td>
          <td className="pv3 pr3  b--black-80">A Corpus Fund of Rs. 25 crores has been created in JSCB.Selection of Technical Assistance Group and development of Portal for farmer registration is under process</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</>
  )
}

export default DepartmentDetails