import React, {useState, useEffect, useRef} from 'react'
import {migrationActions} from '../store/migrationSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from "react-router-dom";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import {miggetSummaryDeptData} from '../store/migration-actions';

function MigrationSummaryDivision() {

  const dispatch = useDispatch();
  let params = useParams();

  const report = useSelector((state) => state.migration.report);

  const [rowofspan, setRowofspan] = useState(1)
  const [toDisplay, setToDisplay] = useState('outputindicators')
  

  useEffect(() => {
    dispatch(miggetSummaryDeptData(params.id));
    // dispatch(getSubSchemesHeaderReport(params.id));
    return () => {
      dispatch(migrationActions.setReport({report: {}})) 
    }
    }, []);

    // useEffect(() => {
    //   if(report.status === 200){
    //   const toRender = ((report.outputindicators.length >= report.outcomeindicators.length) ? 'outputindicators' : 'outcomeindicators' )
    //   if(toRender === 'outputindicators'){
    //     setRowofspan(report.outputindicators.length);
    //     setToDisplay('outputindicators')
    //   }
    //   if(toRender === 'outcomeindicators'){
    //     setRowofspan(report.outcomeindicators.length);
    //     setToDisplay('outcomeindicators')
    //   }
    //   }
    //   }, [report]);

    // const handleOutputLoop = (i) => {
    //    if(i === 0){
    //     setOutputLoop(report.outputs[0])
    //     setOutputLoopRow(i + outputloop.outputindicatorscount)
    //     return
    //    }

    //    if(i === outputlooprow){
    //     setOutputLoop(report.outputs[outputloopcount])
    //     setOutputLoopcount(prevState => prevState + 1)
    //     setOutputLoopRow(prevState => prevState + outputloop.outputindicatorscount)
    //     return
    //    }
    // }
   
     let outputloop1 = 0
     let outputloopcount1 = 1
     let outputlooprow1 = 1
     let outputindicatorloop = report.status === 200 ? report.schemes[0].subschemes : []
    //  let outcomeloop1 = 0
    //  let outcomeloopcount1 = 1
    //  let outcomelooprow1 = 1
    //  let outcomeindicatorloop = ((report.status === 200) ? report.outcomeindicators.filter(indicator => indicator.outcome_id === report.outcomes[0].id) : [])
    const loopSubscheme = []
     const b = report.status === 200 ? report.schemes.map(s => {
        loopSubscheme.push(...s.subschemes)
     }) : []
     
     const calculatepercentexpendituresanction = (expenditure,sanction) => {
       let percent = 0;
       if(parseFloat(expenditure) === 0){
         return percent
       }

       if(parseFloat(sanction) === 0){
        return percent
       }
       percent = (parseFloat(expenditure)/parseFloat(sanction)) * 100
       return parseFloat(percent.toFixed(2))
     }

     const calculatepercentexpenditureallotment = (expenditure,allotment) => {
      let percent = 0;
      if(parseFloat(expenditure) === 0){
        return percent
      }

      if(parseFloat(allotment) === 0){
       return percent
      }
      percent = (parseFloat(expenditure)/parseFloat(allotment)) * 100
      return parseFloat(percent.toFixed(2))
    }

    const handleTotalOutputCount = () => {
        let total = 0
        loopSubscheme.map(s => {
            total = s.outputindicators_count + total
        })
        return total
      }

    const handleTotalOutcomeCount = () => {
        let total = 0
        loopSubscheme.map(s => {
            total = s.outcomeindicators_count + total
        })
        return total
      }

    const handleTotalStateShare = () => {
        let total = 0
        loopSubscheme.map(s => {
            total = s.state_share + total
        })
        return parseFloat(total.toFixed(2))
      }

    const handleTotalCenterShare = () => {
        let total = 0
        loopSubscheme.map(s => {
            total = s.center_share + total
        })
        return parseFloat(total.toFixed(2))
      }

    const handleTotalOutlay = () => {
        let total = 0
        loopSubscheme.map(s => {
            total = s.center_share + total + s.state_share
        })
        return parseFloat(total.toFixed(2))
      }
     
     
  return (
    <>
    <div className="pa4">
    <h1>{`Scheme-wise list with outlay - 2023-24 (${params.division})`}</h1>
    <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green"
                    table="table-to-xls"
                    filename={params.division}
                    sheet={`Sheet1`}
                    buttonText="Download Report"/>
                    <div className="overflow-auto">
                    <table id='table-to-xls' className='table-bordered' style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', textAlign:"center"}}>
  <div className="overflow-auto">
    <table className="f6 w-100 mw8 center ba" cellSpacing="0" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "center"}}>
        <tr>
          <th className=" b--black-80 tc b reportoutputcolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>State Scheme Name</th>
          <th className=" b--black-80 tc b reportoutputcolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>Center Scheme Name</th>
          <th className=" b--black-80 tc b reportoutputcolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>Sub Scheme Name</th>
          <th className=" b--black-80 tc b reportoutputachcolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>Output Indicators</th>
          <th className=" b--black-80 tc b reportoutputachcolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>Outcome Indicators</th>
          <th className=" b--black-80 tc b reportoutputcolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>Social Category</th>
          <th className=" b--black-80 tc b reportoutcomecolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>Gender Category</th>
          <th className=" b--black-80 tc b reportoutcomeachcolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>State Share(Rs. in Lakhs)</th>
          <th className=" b--black-80 tc b reportoutcomeachcolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>Center Share(Rs. in Lakhs)</th>
          <th className=" b--black-80 tc b reportoutcomeachcolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>Financial Outlay(Rs. in Lakhs)</th>
        </tr>
      <tbody className="lh-copy ba">
        {(toDisplay === 'outputindicators') && (report.status === 200) && loopSubscheme.map((indicator,i) => {
          const handleloop = (i) => {
            if(i === 0){
             (outputloop1 = report.schemes[0].subschemes.length);
             (outputlooprow1 = i + outputloop1);
            }
     
            if(i === outputlooprow1){
             (outputloop1 = report.schemes[outputloopcount1].subschemes.length);
             (outputindicatorloop = outputindicatorloop.concat(report.schemes[outputloopcount1].subschemes));
             (outputloopcount1 = (outputloopcount1 + 1 ));
             (outputlooprow1 = (outputlooprow1 + outputloop1));
            }
           }

           const handleoutcomeloop = (i) => {
            if(i === 0){
             (outcomeloop1 = report.outcomes[0].outcomeindicatorscount);
             (outcomelooprow1 = i + outcomeloop1);
            }
     
            if(i === outcomelooprow1){
             (outcomeloop1 = ((report.outcomes[outcomeloopcount1]) ? report.outcomes[outcomeloopcount1].outcomeindicatorscount : 100));
             (outcomeindicatorloop = ((report.outcomes[outcomeloopcount1]) ? outcomeindicatorloop.concat(report.outcomeindicators.filter(indicator => indicator.outcome_id === report.outcomes[outcomeloopcount1].id)): [] ));
             (outcomeloopcount1 = (outcomeloopcount1 + 1 ));
             (outcomelooprow1 = (outcomelooprow1 + outcomeloop1));
            }
           }

           const handleOutputTarget = (id) => {
            let target = '';
            target = report.target_outputs.filter(target => target.outputindicator_id === id)
             return(
              parseFloat(target[0].value)
             )
           }

           const handleOutputAchievement = (id) => {
            let achievement = '';
            achievement = report.achievement_outputs.filter(achievement => achievement.outputindicator_id === id)
             return(
              (achievement.length !== 0) ? parseFloat(achievement[0].value) : 0
             )
           }

           const handleOutputAchievementPercent = (id) => {
            let achievement = '';
            achievement = report.achievement_outputs.filter(achievement => achievement.outputindicator_id === id)
            let target = '';
            target = report.target_outputs.filter(target => target.outputindicator_id === id)
            let percent = '';
            if((achievement.length !== 0) && (target.length !== 0)) {
              if((parseFloat(target[0].value) === 0)){
                return percent = 0
              }
              percent = Math.round((parseFloat(achievement[0].value)/parseFloat(target[0].value))*100)
            }
            if((achievement.length === 0) && (target.length !== 0)) {
              percent = 0
            }
            if((achievement.length !== 0) && (target.length === 0)) {
              percent = 0
            }
            if((achievement.length === 0) && (target.length === 0)) {
              percent = 0
            }
             return percent
           }

           const handleOutcomeTarget = (id) => {
            let target = '';
            target = report.target_outcomes.filter(target => target.outcomeindicator_id === id)
             return(
               (target.length !== 0) ? parseFloat(target[0].value) : null
             )
           }

           const handleOutcomeAchievement = (id) => {
            let achievement = '';
            achievement = report.achievement_outcomes.filter(achievement => achievement.outcomeindicator_id === id)
             return(
               (achievement.length !== 0) ? parseFloat(achievement[0].value) : 0
             )
           }

           const handleOutcomeAchievementPercent = (id) => {
            let achievement = '';
            achievement = report.achievement_outcomes.filter(achievement => achievement.outcomeindicator_id === id)
            let target = '';
            target = report.target_outcomes.filter(target => target.outcomeindicator_id === id)
            let percent = '';
            if((achievement.length !== 0) && (target.length !== 0)) {
              if(parseFloat(target[0].value) === 0){
                return percent = 0;
              }
              percent = Math.round((parseFloat(achievement[0].value)/parseFloat(target[0].value))*100)
            }
            if((achievement.length === 0) && (target.length !== 0)) {
              percent = 0
            }
            if((achievement.length !== 0) && (target.length === 0)) {
              percent = 0
            }
            if((achievement.length === 0) && (target.length === 0)) {
              percent = 0
            }
             return percent
           }

           const handleOutputMeasurement = (id) => {
            let target = '';
            target = report.target_outputs.filter(target => target.outputindicator_id === id)
             return(
               target[0].measurement
             )
           }

           const socialcategory = socials => {
             const social = socials.map(social => social['name'])
             return social.length ? social.toString() : 'NA';
           }

           const gendercategory = genders => {
            const gender = genders.map(gender => gender['name'])
            return gender.length ? gender.toString() : 'NA';
          }

          return (
            <tr>
              {((i === 0) ? <td className="pv3 pr3 reportoutputcolor b--black-80" rowSpan={report.schemes[0].subschemes.length} style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{`${report.schemes[0].state_code}-${report.schemes[0].state_name}`}</td> : null)}
              {((i === outputlooprow1) ? <td className="pv3 pr3 reportoutputcolor b--black-80" rowSpan={report.schemes[outputloopcount1].subschemes.length} style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{`${report.schemes[outputloopcount1].state_code}-${report.schemes[outputloopcount1].state_name}`}</td> : null)}
              {((i === 0) ? <td className="pv3 pr3 reportoutputcolor b--black-80" rowSpan={report.schemes[0].subschemes.length} style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{`${report.schemes[0].center_code}-${report.schemes[0].center_name}`}</td> : null)}
              {((i === outputlooprow1) ? <td className="pv3 pr3 reportoutputcolor b--black-80" rowSpan={report.schemes[outputloopcount1].subschemes.length} style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{`${report.schemes[outputloopcount1].center_code}-${report.schemes[outputloopcount1].center_name}`}</td> : null)}
              {handleloop(i)}
            {<td className="pv3 pr3 reportoutputcolor b--black-80" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{`${outputindicatorloop[i].subscheme_code}-${outputindicatorloop[i].name}`}</td>}
            {<td className="pv3 pr3 reportoutputachcolor b--black-80" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{outputindicatorloop[i].outputindicators_count}</td>}
            {<td className="pv3 pr3 reportoutputachcolor b--black-80" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{outputindicatorloop[i].outcomeindicators_count}</td>}
            {<td className="pv3 pr3 reportoutputcolor b--black-80" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{socialcategory(outputindicatorloop[i].socials)}</td>}
            {<td className="pv3 pr3 reportoutputcolor b--black-80" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{gendercategory(outputindicatorloop[i].genders)}</td>}
            {<td className="pv3 pr3 reportoutputachcolor b--black-80" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{outputindicatorloop[i].state_share}</td>}
            {<td className="pv3 pr3 reportoutputachcolor b--black-80" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{outputindicatorloop[i].center_share}</td>}
            {<td className="pv3 pr3 reportoutputachcolor b--black-80" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{outputindicatorloop[i].center_share + outputindicatorloop[i].state_share}</td>}
          </tr>
          )
        })
        }
        <tr>
        <td className="pv3 pr3 b b--black-80" colSpan={3} style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>Total - Outcome Budget Schemes</td>
        <td className="pv3 pr3 b b--black-80" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{handleTotalOutputCount()}</td>
        <td className="pv3 pr3 b b--black-80" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{handleTotalOutcomeCount()}</td>
        <td className="pv3 pr3 b b--black-80" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}></td>
        <td className="pv3 pr3 b b--black-80" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}></td>
        <td className="pv3 pr3 b b--black-80" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{handleTotalStateShare()}</td>
        <td className="pv3 pr3 b b--black-80" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{handleTotalCenterShare()}</td>
        <td className="pv3 pr3 b b--black-80" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{handleTotalOutlay()}</td>
        </tr>
      </tbody>
    </table>
  </div>
  </table>
  </div>
</div>
</>
  )
}

export default MigrationSummaryDivision