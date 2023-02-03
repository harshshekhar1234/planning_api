import React, {useState, useEffect, useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from "react-router-dom";
import {getSubSchemesDivisionReportId} from '../store/quaterReport-actions';
import {divisionsActions} from '../store/divisionsSlice';
import {quaterReportActions} from '../store/quaterReportSlice';
import SubSchemeReportDivision from './SubschemeReportDivision';
import XLSX from 'xlsx-js-style';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import SubSchemeReportDivisionQuater from './SubschemeReportDivisionQuater';



function QuaterReportDivisionDownloadVerifier() {

  const dispatch = useDispatch();
  let params = useParams();

  const divisionreport = useSelector((state) => state.quaterreport.divisionReportId);
  const quater = useSelector((state) => state.quaterreport.quater);
  const financialyear = useSelector((state) => state.quaterreport.financialyear);

  useEffect(() => {
    dispatch(getSubSchemesDivisionReportId(params.id,params.rid));
    return () => {
      dispatch(quaterReportActions.setDivisionReportId({divisionReportId: {}})) 
      dispatch(quaterReportActions.setQuater({quater: ''}))
      dispatch(quaterReportActions.setFinancialYear({financialyear: ''}))
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
    {wpx: 75},{wpx: 75},{wpx: 100},{wpx: 100},{wpx: 75},{wpx: 75},{wpx: 75},{wpx: 75},{wpx: 100},{wpx: 100},{wpx: 75},{wpx: 75},{wpx: 75},{wpx: 100},{wpx: 100}
];
sheet['!cols'] = wscols;
  for (i in sheet) {
    if (typeof(sheet[i]) != "object") continue;
    let cell = XLSX.utils.decode_cell(i);
    const l = ['A1','A2','A3','A4','A5','A6','A7','A8','A9','A10','A11','A12','A13','B13','C13','D13','E13','F13','G13','H13','I13','J13','K13','L13','M13','N13','O13']
    const k = ['A2','A3','A4','A5','A6','A7','A8','A9','A10','A11','A12','D2','D3','D4','D5','D6','D7','D8','D9','D10','D11','D12']
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
          return <SubSchemeReportDivisionQuater report={report} year={financialyear} quater={quater}/>
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

export default QuaterReportDivisionDownloadVerifier