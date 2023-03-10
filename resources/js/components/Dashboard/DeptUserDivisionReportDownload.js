import React, {useState, useEffect, useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from "react-router-dom";
import {getCurrentSubSchemesDivisionReport} from '../store/divisions-action';
import {divisionsActions} from '../store/divisionsSlice';
import CurrentSubSchemeReportDivision from './CurrentSubschemeReportDivision';
import XLSX from 'xlsx-js-style';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';



function OutcomeBudgetDashboard() {

  const dispatch = useDispatch();
  let params = useParams();

  const divisionreport = useSelector((state) => state.divisions.divisionReport);
  const finYear = useSelector((state) => state.finYear.finYear);

  useEffect(() => {
    dispatch(getCurrentSubSchemesDivisionReport(params.id,finYear));
    return () => {
      dispatch(divisionsActions.setDivisionReport({divisionReport: {}})) 
    }
    }, []);

    const xport = React.useCallback(async () => {
      /* Create worksheet from HTML DOM TABLE */
      // const table = document.getElementById("table-to-xls");
      // const wb = utils.table_to_book(table);

      /* Export to file (start a download) */
      // writeFileXLSX(wb, "SheetJSTable.xlsx");

      /* create new workbook */
var workbook = XLSX.utils.book_new();

let c = []

const j = divisionreport.subschemes.map((s) => {
  let i = 0
  const sheet = XLSX.utils.table_to_sheet(document.getElementById(s.subscheme_code));
  const wscols = [
    {wpx: 200},{wpx: 150},{wpx: 150},{wpx: 150},{wpx: 100},{wpx: 150},{wpx: 150},{wpx: 100},{wpx: 100},{wpx: 150},{wpx: 150},{wpx: 150},{wpx: 150},{wpx: 150},{wpx: 150}
];
sheet['!cols'] = wscols;
  for (i in sheet) {
    if (typeof(sheet[i]) != "object") continue;
    let cell = XLSX.utils.decode_cell(i);
    const l = ['A1','A2','A3','A4','A5','A6','A7','A8','A9','A10','A11','A12','A13','B13','C13','D13','E13','F13','G13','H13','I13','J13','K13','L13','M13','N13','O13']
    const k = ['A2','A3','A4','A5','A6','A7','A8','A9','A10','A11','A12','B2','B3','B4','B5','B6','B7','B8','B9','B10','B11','B12']
    const t = l.filter(h => h === i)
    const m = k.filter(d => d === i)
    sheet[i].s = { // styling for all cells
        font: {
            name: "arial",
            sz: 10,
            bold: t.length
        },
        alignment: {
            vertical: "center",
            horizontal: `${m.length ? "left":"center"}`,
            wrapText: '1', // any truthy value here
        }
  }
  

    
}
  c = [...c , sheet]
  return c
})

const l = j.map((d,i) => {
  XLSX.utils.book_append_sheet(workbook, d[i], `${divisionreport.subschemes[i].sub_scheme[0].demand_no}-${divisionreport.subschemes[i].sub_scheme[0].subscheme_code}`);
})

/* convert table "table1" to worksheet named "Sheet1" */
// var sheet1 = utils.table_to_sheet(document.getElementById("table-to-xls"));
// console.log(sheet1)
// utils.book_append_sheet(workbook, sheet1, "Sheet1");

/* convert table "table2" to worksheet named "Sheet2" */
// var sheet2 = utils.table_to_sheet(document.getElementById("table-to-xls"));
// console.log(sheet2)
// utils.book_append_sheet(workbook, sheet2, "Sheet2");

XLSX.writeFile(workbook, `${divisionreport.subschemes[0].sub_scheme[0].demand_no}.xlsx`);
  });
  
  return (
    <>
    
    {(divisionreport.status === 200) && (
      <div className='mt7 center'>
    <button  onClick={xport} className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green">Export to Excel</button>
    <h2 className='tc mt2 b'>Report Generated</h2>
    </div>
    )}
    {
      (divisionreport.status === 200) ? (
        divisionreport.subschemes.map(report => {
          return <CurrentSubSchemeReportDivision report={report} finYear={finYear}/>
        })
      ):(
        <div>
        <Box sx={{ width: '100%' }}>
         <LinearProgress />
        </Box>
        <h2 className='tc mt2 b'>Generating Report</h2>
        </div>
      )
    }
    
    </>
  )
}

export default OutcomeBudgetDashboard