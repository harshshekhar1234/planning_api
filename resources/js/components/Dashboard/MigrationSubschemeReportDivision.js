import React, {useState, useEffect} from 'react'

function MigrationSubSchemeReportDivision({report}) {

  const subschemename = report.name;
  const subschemecode = report.subscheme_code;


  const [rowofspan, setRowofspan] = useState(1)
  const [toDisplay, setToDisplay] = useState('outputindicators')
  

    useEffect(() => {
      if(report.status === 200){
      const toRender = ((report.outputindicators.length >= report.outcomeindicators.length) ? 'outputindicators' : 'outcomeindicators' )
      if(toRender === 'outputindicators'){
        setRowofspan(report.outputindicators.length);
        setToDisplay('outputindicators')
      }
      if(toRender === 'outcomeindicators'){
        setRowofspan(report.outcomeindicators.length);
        setToDisplay('outcomeindicators')
      }
      }
      }, [report]);

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
     let outputindicatorloop = ((report.status === 200) ? report.outputindicators.filter(indicator => indicator.output_id === report.outputs[0].id) : [])
     let outcomeloop1 = 0
     let outcomeloopcount1 = 1
     let outcomelooprow1 = 1
     let outcomeindicatorloop = ((report.status === 200) ? report.outcomeindicators.filter(indicator => indicator.outcome_id === report.outcomes[0].id) : [])

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

     
     
  return (
    <>
      <tbody className="lh-copy">
        <tr className="stripe-dark ba" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', textAlign:"left"}}>
          <td className="pa3 tl" colSpan='3' rowSpan='2' style={{fontWeight: 'bold'}}>Name of the sub-scheme</td>
          <td className="pa3 tl" colSpan='10' rowSpan='2'>{`${subschemecode}-${subschemename}`}</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
        </tr>
    {/* <table className="f6 w-100 mw8 center mb3" cellspacing="0">
      <thead>
        <tr>
          <th className="fw6 bb b--black-80 tl pb3 pr3 bg-light-yellow">Financial Outlay (in Lakhs)</th>
          <th className="fw6 bb b--black-80 tl pb3 pr3 bg-light-yellow">Allotment</th>
          <th className="fw6 bb b--black-80 tl pb3 pr3 bg-light-yellow">Sanction</th>
          <th className="fw6 bb b--black-80 tl pb3 pr3 bg-light-yellow">Expenditure</th>
          <th className="fw6 bb b--black-80 tl pb3 pr3 bg-light-yellow">% Expenditure</th>
        </tr>
      </thead>
      <tbody className="lh-copy">
        <tr>
          <td className="pv3 pr3 bb b--black-80 bg-light-yellow">Hassan Johnson</td>
          <td className="pv3 pr3 bb b--black-80 bg-light-yellow">@hassan</td>
          <td className="pv3 pr3 bb b--black-80 bg-light-yellow">hassan@companywithalongdomain.co</td>
          <td className="pv3 pr3 bb b--black-80 bg-light-yellow">14419232532474</td>
          <td className="pv3 pr3 bb b--black-80 bg-light-yellow">14419232532474</td>
        </tr>
        <tr>
          <td className="pv3 pr3 bb b--black-80 bg-light-yellow">Taral Hicks</td>
          <td className="pv3 pr3 bb b--black-80 bg-light-yellow">@hicks</td>
          <td className="pv3 pr3 bb b--black-80 bg-light-yellow">taral@companywithalongdomain.co</td>
          <td className="pv3 pr3 bb b--black-80 bg-light-yellow">72326219423551</td>
          <td className="pv3 pr3 bb b--black-80 bg-light-yellow">14419232532474</td>
        </tr>
      </tbody>
    </table> */}
        {(toDisplay === 'outputindicators') && (report.status === 200) && report.outputindicators.map((indicator,i) => {
          const handleloop = (i) => {
            if(i === 0){
             (outputloop1 = report.outputs[0].outputindicatorscount);
             (outputlooprow1 = i + outputloop1);
            }
     
            if(i === outputlooprow1){
             (outputloop1 = report.outputs[outputloopcount1].outputindicatorscount);
             (outputindicatorloop = outputindicatorloop.concat(report.outputindicators.filter(indicator => indicator.output_id === report.outputs[outputloopcount1].id)));
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

           const handleOutcomeMeasurement = (id) => {
            let target = '';
            target = report.target_outcomes.filter(target => target.outcomeindicator_id === id)
             return(
               (target.length !== 0) ? target[0].measurement : null
             )
           }

           const socialcategory = () => {
             const social = report.socials.map(social => social['name'])
             return social.toString();
           }

           const gendercategory = () => {
            const gender = report.genders.map(gender => gender['name'])
            return gender.toString();
          }

          return (
            <tr>
            { (i === 0) ? <td className="pv3 pr3 reportextcolor b--black-80" rowSpan={rowofspan} style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{report.financial_outlay}</td> : null}
            { (i === 0) ? <td className="pv3 pr3 reportextcolor b--black-80" rowSpan={rowofspan} style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{socialcategory()}</td> : null}
            { (i === 0) ? <td className="pv3 pr3 reportextcolor b--black-80" rowSpan={rowofspan} style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{gendercategory()}</td> : null}
              {((i === 0) ? <td className="pv3 pr3 reportoutputcolor b--black-80" rowSpan={report.outputs[0].outputindicatorscount} style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{report.outputs[0].name}</td> : null)}
              {((i === outputlooprow1) ? <td className="pv3 pr3 reportoutputcolor b--black-80" rowSpan={report.outputs[outputloopcount1].outputindicatorscount} style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{report.outputs[outputloopcount1].name}</td> : null)}
              {handleloop(i)}
            {<td className="pv3 pr3 reportoutputcolor b--black-80" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{outputindicatorloop[i].name}</td>}
            {<td className="pv3 pr3 reportoutputcolor b--black-80" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{handleOutputTarget(outputindicatorloop[i].id)}</td>}
            {<td className="pv3 pr3 reportoutputcolor b--black-80" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{handleOutputMeasurement(outputindicatorloop[i].id)}</td>}
            {(i === 0) ? <td className="pv3 pr3 reportoutcomecolor b--black-80" rowSpan={report.outcomes[0].outcomeindicatorscount} style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{report.outcomes[0].name}</td> : null}
            {(((i === outcomelooprow1) && (report.outcomes[outcomeloopcount1])) ? <td className="pv3 pr3 reportoutcomecolor b--black-80" rowSpan={report.outcomes[outcomeloopcount1].outcomeindicatorscount} style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{report.outcomes[outcomeloopcount1].name}</td> : null)}
            {handleoutcomeloop(i)}
            {(outcomeindicatorloop[i] !== undefined) ? <td className="pv3 pr3  b--black-80 reportoutcomecolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{outcomeindicatorloop[i].name}</td> : <td className="pv3 pr3  b--black-80 reportoutcomecolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{''}</td>}
            {(outcomeindicatorloop[i] !== undefined) ? null : <td className="pv3 pr3  b--black-80 reportoutcomecolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{''}</td>}
            {(outcomeindicatorloop[i] !== undefined) ? <td className="pv3 pr3  b--black-80 reportoutcomecolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{handleOutcomeTarget((outcomeindicatorloop[i])? outcomeindicatorloop[i].id : 10000)}</td> : <td className="pv3 pr3  b--black-80 reportoutcomecolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{''}</td>}
            {(outcomeindicatorloop[i] !== undefined) ? <td className="pv3 pr3  b--black-80 reportoutcomecolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{handleOutcomeMeasurement((outcomeindicatorloop[i])? outcomeindicatorloop[i].id : 10000)}</td> : <td className="pv3 pr3  b--black-80 reportoutcomecolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{''}</td>}
            {(i === 0) ? <td className="pv3 pr3 reportextcolor b--black-80" rowSpan={rowofspan} style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{`Goal ${report.sdg[0].goal_number}: ${report.sdg[0].goal_name}`}</td> : null}
            {(i === 0) ? <td className="pv3 pr3 reportextcolor b--black-80" rowSpan={rowofspan} style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{report.initial_remarks ? report.initial_remarks.split('\n').map(function(item) {
  return (
    <span>
      {item}
      <br/>
    </span>
  )
}): '-'}</td> : null}
          </tr>
          )
        })
        }
        {(toDisplay === 'outcomeindicators') && (report.status === 200) && report.outcomeindicators.map((indicator,i) => {
          const handleloop = (i) => {
            if(i === 0){
             (outcomeloop1 = report.outcomes[0].outcomeindicatorscount);
             (outcomelooprow1 = i + outcomeloop1);
            }
     
            if(i === outcomelooprow1){
             (outcomeloop1 = report.outcomes[outcomeloopcount1].outcomeindicatorscount);
             (outcomeindicatorloop = outcomeindicatorloop.concat(report.outcomeindicators.filter(indicator => indicator.outcome_id === report.outcomes[outcomeloopcount1].id)));
             (outcomeloopcount1 = (outcomeloopcount1 + 1 ));
             (outcomelooprow1 = (outcomelooprow1 + outcomeloop1));
            }
           }

           const handleoutputloop = (i) => {
            if(i === 0){
             (outputloop1 = report.outputs[0].outputindicatorscount);
             (outputlooprow1 = i + outputloop1);
            }
     
            if(i === outputlooprow1){
             (outputloop1 = ((report.outputs[outputloopcount1]) ? report.outputs[outputloopcount1].outputindicatorscount : 100));
             (outputindicatorloop = ((report.outputs[outputloopcount1]) ? outputindicatorloop.concat(report.outputindicators.filter(indicator => indicator.output_id === report.outputs[outputloopcount1].id)): [] ));
             (outputloopcount1 = (outputloopcount1 + 1 ));
             (outputlooprow1 = (outputlooprow1 + outputloop1));
            }
           }

           const handleOutcomeTarget = (id) => {
            let target = '';
            target = report.target_outcomes.filter(target => target.outcomeindicator_id === id)
             return(
              parseFloat(target[0].value)
             )
           }

           const handleOutputTarget = (id) => {
            let target = '';
            target = report.target_outputs.filter(target => target.outputindicator_id === id)
             return(
               (target.length !== 0) ? parseFloat(target[0].value) : ''
             )
           }

           const handleOutcomeMeasurement = (id) => {
            let target = '';
            target = report.target_outcomes.filter(target => target.outcomeindicator_id === id)
             return(
              target[0].measurement
             )
           }

           const handleOutputAchievement = (id) => {
            let achievement = '';
            achievement = report.achievement_outputs.filter(achievement => achievement.outputindicator_id === id)
             return(
               (achievement.length !== 0) ? parseFloat(achievement[0].value) : (id === 10000 ? '' : 0)
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

           const handleOutputAchievementPercent = (id) => {
            if(id === 10000){
              return ''
            }
            let achievement = '';
            achievement = report.achievement_outputs.filter(achievement => achievement.outputindicator_id === id)
            let target = '';
            target = report.target_outputs.filter(target => target.outputindicator_id === id)
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
              (target.length !== 0) ? target[0].measurement : ''
             )
           }

           const socialcategory = () => {
            const social = report.socials.map(social => social['name'])
            return social.toString();
          }

          const gendercategory = () => {
           const gender = report.genders.map(gender => gender['name'])
           return gender.toString();
         }

          return (
            <tr>
              { (i === 0) ? <td className="pv3 pr3 reportextcolor b--black-80" rowSpan={rowofspan} style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{report.financial_outlay}</td> : null}
            { (i === 0) ? <td className="pv3 pr3 reportextcolor b--black-80" rowSpan={rowofspan} style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{socialcategory()}</td> : null}
            { (i === 0) ? <td className="pv3 pr3 reportextcolor b--black-80" rowSpan={rowofspan} style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{gendercategory()}</td> : null}
            {(i === 0) ? <td className="pv3 pr3 reportoutputcolor b--black-80" rowSpan={report.outputs[0].outputindicatorscount} style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{report.outputs[0].name}</td> : null}
            {(((i === outputlooprow1) && (report.outputs[outputloopcount1])) ? <td className="pv3 pr3 reportoutputcolor b--black-80" rowSpan={report.outputs[outputloopcount1].outputindicatorscount} style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{report.outputs[outputloopcount1].name}</td> : null)}
            {((i >= report.outputindicators.length) ? <td className="pv3 pr3 reportoutputcolor b--black-80" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{''}</td> : null)}
            
            {handleoutputloop(i)}
            {<td className="pv3 pr3 reportoutputcolor b--black-80" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{(outputindicatorloop[i] !== undefined) ?outputindicatorloop[i].name : ''}</td>}
            {<td className="pv3 pr3 reportoutputcolor b--black-80" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{handleOutputTarget((outputindicatorloop[i]) ? outputindicatorloop[i].id : 10000)}</td>}
            {<td className="pv3 pr3 reportoutputcolor b--black-80" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{handleOutputMeasurement((outputindicatorloop[i] !== undefined) ? outputindicatorloop[i].id : 10000)}</td>}
            {((i === 0) ? <td className="pv3 pr3 reportoutcomecolor b--black-80" rowSpan={report.outcomes[0].outcomeindicatorscount} style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{report.outcomes[0].name}</td> : null)}
              {((i === outcomelooprow1) ? <td className="pv3 pr3 reportoutcomecolor b--black-80" rowSpan={report.outcomes[outcomeloopcount1].outcomeindicatorscount} style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{report.outcomes[outcomeloopcount1].name}</td> : null)}
              {handleloop(i)}
            {(outcomeindicatorloop[i] !== undefined) ? <td className="pv3 pr3 reportoutcomecolor b--black-80" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{outcomeindicatorloop[i].name}</td> : null}
            {(outcomeindicatorloop[i] !== undefined) ? <td className="pv3 pr3 reportoutcomecolor b--black-80" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{handleOutcomeTarget((outcomeindicatorloop[i])? outcomeindicatorloop[i].id : 10000)}</td> : null}
            {(outcomeindicatorloop[i] !== undefined) ? <td className="pv3 pr3 reportoutcomecolor b--black-80" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{handleOutcomeMeasurement((outcomeindicatorloop[i])? outcomeindicatorloop[i].id : 10000)}</td> : null}
            {(i === 0) ? <td className="pv3 pr3 reportextcolor b--black-80" rowSpan={rowofspan} style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{`Goal ${report.sdg[0].goal_number}: ${report.sdg[0].goal_name}`}</td> : null}
            {(i === 0) ? <td className="pv3 pr3 reportextcolor b--black-80" rowSpan={rowofspan} style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{report.initial_remarks ? report.initial_remarks.split('\n').map(function(item) {
  return (
    <span>
      {item}
      <br/>
    </span>
  )
}): '-'}</td> : null}
          </tr>
          )
        })
        }
      </tbody>
</>
  )
}

export default MigrationSubSchemeReportDivision