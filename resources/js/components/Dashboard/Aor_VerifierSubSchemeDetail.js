import React, {useState, useEffect, useRef} from 'react'
import {aorgetSubSchemesReportVerifier,aorgetSubSchemesHeaderReportVerifier} from '../store/subschemes-actions';
import {aorapproveSubscheme,aorreviewSubscheme,aorgetLatestQuater} from '../store/departmentVerifier-actions';
import {departmentVerifierActions} from '../store/departmentVerifierSlice';
import {schemesActions} from '../store/schemesSlice';
import {subschemesActions} from '../store/subschemesSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function AorVerifierSubSchemeDetail() {

  const dispatch = useDispatch();
  let params = useParams();
  let navigate = useNavigate();

  const report = useSelector((state) => state.subschemes.report);
  const subschemename = useSelector((state) => state.subschemes.subschemename);
  const subschemecode = useSelector((state) => state.subschemes.subschemecode);
  const schemeStateName = useSelector((state) => state.schemes.schemeStateName);
  const schemeCenterName = useSelector((state) => state.schemes.schemeCenterName);
  const schemeCenterCode = useSelector((state) => state.schemes.schemeCenterCode);
  const schemeStateCode = useSelector((state) => state.schemes.schemeStateCode);
  const demand_no = useSelector((state) => state.subschemes.demand_no);
  const department_name = useSelector((state) => state.subschemes.department_name);
  const division_name = useSelector((state) => state.subschemes.division_name);
  const sanction = useSelector((state) => state.subschemes.sanction);
  const allotment = useSelector((state) => state.subschemes.allotment);
  const expenditure = useSelector((state) => state.subschemes.expenditure);
  const updateApprove = useSelector((state) => state.verifier.updateApprove);
  const updateReview = useSelector((state) => state.verifier.updateReview);
  const comment = useSelector((state) => state.verifier.comment);
  const fromDate = useSelector((state) => state.verifier.fromDate);
  const toDate = useSelector((state) => state.verifier.toDate);
  const entrymessagecomment = useSelector((state) => state.verifier.entrymessagecomment);
  const divisionid = useSelector((state) => state.divisions.divisionId);

  const [rowofspan, setRowofspan] = useState(1)
  const [toDisplay, setToDisplay] = useState('outputindicators')
  const [toDisplayButton, setToDisplayButton] = useState(false)
  const [quaterTD, setquaterTD] = useState('')
  const [yearTD, setyearTD] = useState('2022-23')

  

  useEffect(() => {
    dispatch(aorgetSubSchemesReportVerifier(params.id));
    dispatch(aorgetSubSchemesHeaderReportVerifier(params.id));
    dispatch(aorgetLatestQuater(divisionid));
    return () => {
      dispatch(subschemesActions.setSubSchemeReport({report: []})) 
      dispatch(subschemesActions.setSubSchemeName({subschemename: ''}))
      dispatch(subschemesActions.setSubSchemeCode({subschemecode: ''}))
      dispatch(subschemesActions.setDemandNo({demand_no: ''}))
      dispatch(subschemesActions.setDepartmentName({department_name: ''}))
      dispatch(subschemesActions.setDivisionName({division_name: ''}))
      dispatch(schemesActions.setSchemeStateName({schemeStateName: ''}))
      dispatch(schemesActions.setSchemeCenterName({schemeCenterName: ''}))
      dispatch(schemesActions.setSchemeCenterCode({schemeCenterCode: ''}))
      dispatch(schemesActions.setSchemeStateCode({schemeStateCode: ''}))
    }
    }, []);

    useEffect(() => {
      if(updateApprove){
        navigate(`/dashboardverifier/aorverifierpage`);
      }
      }, [updateApprove]);

    useEffect(() => {
      if(updateReview){
        navigate(`/dashboardverifier/aorverifierpage`);
      }
      }, [updateReview]);

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
      if((report.subscheme.aor_verified_status === 'N') || (report.subscheme.aor_verified_status === 'T')){
        setToDisplayButton(true)
      }
      }
      }, [report]);

    const handleApprove = () => {
        dispatch(aorapproveSubscheme(params.id));
    }

    const handleReview = () => {
      handleOpen1()
    }

    const handleCommentsChange = (event) => {
      dispatch(departmentVerifierActions.setEntryMessageComment({entrymessagecomment: ''}))
      dispatch(departmentVerifierActions.setComment({comment: event.target.value}))
    }

    const onSubmitComments = () => {
      if(comment.length < 10){
        dispatch(departmentVerifierActions.setEntryMessageComment({entrymessagecomment: 'Please enter atleast 10 characters'}))
        return
      }
      if(comment.length > 2000){
        dispatch(departmentVerifierActions.setEntryMessageComment({entrymessagecomment: 'Maximum allowed characters is 2000'}))
        return
      }
      dispatch(aorreviewSubscheme(params.id,comment));
      handleClose1()
    }

    const [open1, setOpen1] = React.useState(false);

    const handleOpen1 = () => {
      setOpen1(true)
    };

    const handleClose1 = () => {
      dispatch(departmentVerifierActions.setEntryMessageComment({entrymessagecomment: ''}))
      dispatch(departmentVerifierActions.setComment({comment: ''}))
      setOpen1(false)
    };

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
    <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <span className="b nunito">Comment</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div className='center tc'>
          <textarea id="comments" 
          className='ba b--black'
          name="comments" 
          rows="7" 
          cols="75" 
          value={comment} 
          onChange={handleCommentsChange}
          />  
          <p className="f6 ph3 pv2 mb2 mt2 black w-40 tc pointer b nunito">{`Characters Remaining: ${((2000 - comment.length) > 0) ? (2000 - comment.length) : '2000 characters count exceeded'}`}</p>
          {(entrymessagecomment !== '') && <p className="f6 ph3 pv2 mb2 mt2 red w-100 tc pointer b ba b--dark-red nunito">{entrymessagecomment}</p>}
          <p className="f6 link dim br3 ph3 pv2 mb2 mt2 white bg-dark-green w5 tc pointer center" onClick={onSubmitComments}>Save</p>    
          </div>
          </Typography>
        </Box>
      </Modal>
    <div className="pa4">
                    <div className="overflow-auto">
                    <table id='table-to-xls' className='table-bordered' style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', textAlign:"center"}}>
    <table className="f6 w-100 center mb3 ba" cellSpacing="0">
      <tr style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', textAlign:"center"}}>
        <td colSpan='15' style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', textAlign:"center", fontWeight: 'bold'}}>{`Detailed On Demand Report ( From ${fromDate} To- ${toDate})`}</td>
      </tr>
      <tbody className="lh-copy">
      <tr className="stripe-dark table-bordered" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid'}}>
          <td className="pa3 tl table-bordered" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', textAlign:"left", fontWeight: 'bold'}}>Financial Year</td>
          <td className="pa3 tl table-bordered" colSpan='14' style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', textAlign:"left"}}>2022-23</td>
          
        </tr>
        <tr className="stripe-dark ba" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', textAlign:"left"}}>
          <td className="pa3 tl" style={{fontWeight: 'bold'}}>Name of secretariat department</td>
          <td className="pa3 tl" colSpan='14'>{`${demand_no}-${department_name}(${division_name})`}</td>
          
        </tr>
        <tr className="stripe-dark ba" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', textAlign:"left"}}>
          <td className="pa3 tl" style={{fontWeight: 'bold'}}>Name of the state scheme</td>
          <td className="pa3 tl" colSpan='14'>{`${schemeStateCode ? schemeStateCode : '0000'}-${schemeStateName ? schemeStateName : '0000' }`}</td>
          
        </tr>
        <tr className="stripe-dark ba" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', textAlign:"left"}}>
          <td className="pa3 tl" style={{fontWeight: 'bold'}}>Name of the center scheme</td>
          <td className="pa3 tl" colSpan='14'>{`${schemeCenterCode ? schemeCenterCode : 'NAPL'}-${schemeCenterName ? schemeCenterName : 'NAPL'}`}</td>
          
        </tr>
        <tr className="stripe-dark ba" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', textAlign:"left"}}>
          <td className="pa3 tl" style={{fontWeight: 'bold'}}>Name of the sub-scheme</td>
          <td className="pa3 tl" colSpan='14'>{`${subschemecode}-${subschemename}`}</td>
        
        </tr>
      </tbody>
    </table>

    <table className="f6 w-100 center mb3 ba" cellspacing="0">
      
      <tbody claclassNamess="lh-copy">
      <tr className="bg-light-yellow" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', textAlign:"left"}}>
          <td className="pa3 tl b" style={{fontWeight: 'bold'}}>Budget Estimate (in Lakhs)</td>
          <td className="pa3 tl" colSpan='14'>{report.financial_outlay}</td>
          
        </tr>
        <tr className="bg-lightest-blue" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', textAlign:"left"}}>
          <td className="pa3 tl b" style={{fontWeight: 'bold'}}>Sanction</td>
          <td className="pa3 tl" colSpan='14'>{parseFloat(sanction)}</td>
          
        </tr>
        <tr className="bg-light-yellow" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', textAlign:"left"}}>
          <td className="pa3 tl b" style={{fontWeight: 'bold'}}>Allotment</td>
          <td className="pa3 tl" colSpan='14'>{parseFloat(allotment)}</td>
          
        </tr>
        
        <tr className="bg-lightest-blue" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', textAlign:"left"}}>
          <td className="pa3 tl b" style={{fontWeight: 'bold'}}>Expenditure</td>
          <td className="pa3 tl" colSpan='14'>{parseFloat(expenditure)}</td>
          
        </tr>
        <tr className="bg-light-yellow" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', textAlign:"left"}}>
          <td className="pa3 tl b" style={{fontWeight: 'bold'}}>% Expenditure against Sanction</td>
          <td className="pa3 tl" colSpan='14'>{calculatepercentexpendituresanction(expenditure,sanction)}</td>
        </tr>
        <tr className="bg-lightest-blue" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', textAlign:"left"}}>
          <td className="pa3 tl b" style={{fontWeight: 'bold'}}>% Expenditure against Allotment</td>
          <td className="pa3 tl" colSpan='14'>{calculatepercentexpenditureallotment(expenditure,allotment)}</td>
        </tr>
      </tbody>
    </table>
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
  <div className="overflow-auto">
    <table className="f6 w-100 mw8 center ba" cellSpacing="0" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "center"}}>
        <tr>
          <th className=" b--black-80 tc pb3 pr3 b reportextcolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>Social Category</th>
          <th className=" b--black-80 tc b reportextcolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>Gender Category</th>
          <th className=" b--black-80 tc b reportoutputcolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>Output</th>
          <th className=" b--black-80 tc b reportoutputcolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>Output Indicators</th>
          <th className=" b--black-80 tc b reportoutputcolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>Target</th>
          <th className=" b--black-80 tc b reportoutputcolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>Unit of measurement</th>
          <th className=" b--black-80 tc b reportoutputachcolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>Achievement</th>
          <th className=" b--black-80 tc b reportoutputachcolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>% Achievement</th>
          <th className=" b--black-80 tc b reportoutcomecolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>Outcome</th>
          <th className=" b--black-80 tc b reportoutcomecolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>Outcome Indicators</th>
          <th className=" b--black-80 tc b reportoutcomecolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>Targets</th>
          <th className=" b--black-80 tc b reportoutcomeachcolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>Achievement</th>
          <th className=" b--black-80 tc b reportoutcomeachcolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>% Achievement</th>
          <th className=" b--black-80 tc reportextcolor b" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>Sustainable Development Goals</th>
          <th className=" b--black-80 tc pb3 pr3 reportextcolor b" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>Risk Factors/Any Other Remarks</th>
        </tr>
      <tbody className="lh-copy ba">
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
            { (i === 0) ? <td className="pv3 pr3 reportextcolor b--black-80" rowSpan={rowofspan} style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{socialcategory()}</td> : null}
            { (i === 0) ? <td className="pv3 pr3 reportextcolor b--black-80" rowSpan={rowofspan} style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{gendercategory()}</td> : null}
              {((i === 0) ? <td className="pv3 pr3 reportoutputcolor b--black-80" rowSpan={report.outputs[0].outputindicatorscount} style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{report.outputs[0].name}</td> : null)}
              {((i === outputlooprow1) ? <td className="pv3 pr3 reportoutputcolor b--black-80" rowSpan={report.outputs[outputloopcount1].outputindicatorscount} style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{report.outputs[outputloopcount1].name}</td> : null)}
              {handleloop(i)}
            {<td className="pv3 pr3 reportoutputcolor b--black-80" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{outputindicatorloop[i].name}</td>}
            {<td className="pv3 pr3 reportoutputcolor b--black-80" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{handleOutputTarget(outputindicatorloop[i].id)}</td>}
            {<td className="pv3 pr3 reportoutputcolor b--black-80" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{handleOutputMeasurement(outputindicatorloop[i].id)}</td>}
            {<td className="pv3 pr3 reportoutputachcolor b--black-80" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{handleOutputAchievement(outputindicatorloop[i].id)}</td>}
            {<td className="pv3 pr3 reportoutputachcolor b--black-80" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{handleOutputAchievementPercent(outputindicatorloop[i].id)}</td>}
            {(i === 0) ? <td className="pv3 pr3 reportoutcomecolor b--black-80" rowSpan={report.outcomes[0].outcomeindicatorscount} style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{report.outcomes[0].name}</td> : null}
            {(((i === outcomelooprow1) && (report.outcomes[outcomeloopcount1])) ? <td className="pv3 pr3 reportoutcomecolor b--black-80" rowSpan={report.outcomes[outcomeloopcount1].outcomeindicatorscount} style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{report.outcomes[outcomeloopcount1].name}</td> : null)}
            {handleoutcomeloop(i)}
            {(outcomeindicatorloop[i] !== undefined) ? <td className="pv3 pr3  b--black-80 reportoutcomecolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{outcomeindicatorloop[i].name}</td> : <td className="pv3 pr3  b--black-80 reportoutcomecolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{''}</td>}
            {(outcomeindicatorloop[i] !== undefined) ? null : <td className="pv3 pr3  b--black-80 reportoutcomecolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{''}</td>}
            {(outcomeindicatorloop[i] !== undefined) ? <td className="pv3 pr3  b--black-80 reportoutcomecolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{handleOutcomeTarget((outcomeindicatorloop[i])? outcomeindicatorloop[i].id : 10000)}</td> : <td className="pv3 pr3  b--black-80 reportoutcomecolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{''}</td>}
            {(outcomeindicatorloop[i] !== undefined) ? <td className="pv3 pr3  b--black-80 reportoutcomeachcolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{handleOutcomeAchievement((outcomeindicatorloop[i])? outcomeindicatorloop[i].id : 10000)}</td> : <td className="pv3 pr3  b--black-80 reportoutcomeachcolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{''}</td>}
            {(outcomeindicatorloop[i] !== undefined) ? <td className="pv3 pr3  b--black-80 reportoutcomeachcolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{handleOutcomeAchievementPercent((outcomeindicatorloop[i])? outcomeindicatorloop[i].id : 10000)}</td> : <td className="pv3 pr3  b--black-80 reportoutcomeachcolor" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{''}</td>}
            {(i === 0) ? <td className="pv3 pr3 reportextcolor b--black-80" rowSpan={rowofspan} style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{`Goal ${report.sdg[0].goal_number}: ${report.sdg[0].goal_name}`}</td> : null}
            {(i === 0) ? <td className="pv3 pr3 reportextcolor b--black-80" rowSpan={rowofspan} style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{report.subscheme.aor_risk_remarks ? report.subscheme.aor_risk_remarks.split('\n').map(function(item) {
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
            { (i === 0) ? <td className="pv3 pr3 reportextcolor b--black-80" rowSpan={rowofspan} style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{socialcategory()}</td> : null}
            { (i === 0) ? <td className="pv3 pr3 reportextcolor b--black-80" rowSpan={rowofspan} style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{gendercategory()}</td> : null}
            {(i === 0) ? <td className="pv3 pr3 reportoutputcolor b--black-80" rowSpan={report.outputs[0].outputindicatorscount} style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{report.outputs[0].name}</td> : null}
            {(((i === outputlooprow1) && (report.outputs[outputloopcount1])) ? <td className="pv3 pr3 reportoutputcolor b--black-80" rowSpan={report.outputs[outputloopcount1].outputindicatorscount} style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{report.outputs[outputloopcount1].name}</td> : null)}
            {((i >= report.outputindicators.length) ? <td className="pv3 pr3 reportoutputcolor b--black-80" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{''}</td> : null)}
            
            {handleoutputloop(i)}
            {<td className="pv3 pr3 reportoutputcolor b--black-80" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{(outputindicatorloop[i] !== undefined) ?outputindicatorloop[i].name : ''}</td>}
            {<td className="pv3 pr3 reportoutputcolor b--black-80" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{handleOutputTarget((outputindicatorloop[i]) ? outputindicatorloop[i].id : 10000)}</td>}
            {<td className="pv3 pr3 reportoutputcolor b--black-80" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{handleOutputMeasurement((outputindicatorloop[i] !== undefined) ? outputindicatorloop[i].id : 10000)}</td>}
            {<td className="pv3 pr3 reportoutputachcolor b--black-80" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{handleOutputAchievement((outputindicatorloop[i] !== undefined) ? outputindicatorloop[i].id : 10000)}</td>}
            {<td className="pv3 pr3 reportoutputachcolor b--black-80" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{handleOutputAchievementPercent((outputindicatorloop[i] !== undefined) ? outputindicatorloop[i].id : 10000)}</td>}
            {((i === 0) ? <td className="pv3 pr3 reportoutcomecolor b--black-80" rowSpan={report.outcomes[0].outcomeindicatorscount} style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{report.outcomes[0].name}</td> : null)}
              {((i === outcomelooprow1) ? <td className="pv3 pr3 reportoutcomecolor b--black-80" rowSpan={report.outcomes[outcomeloopcount1].outcomeindicatorscount} style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{report.outcomes[outcomeloopcount1].name}</td> : null)}
              {handleloop(i)}
            {(outcomeindicatorloop[i] !== undefined) ? <td className="pv3 pr3 reportoutcomecolor b--black-80" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{outcomeindicatorloop[i].name}</td> : null}
            {(outcomeindicatorloop[i] !== undefined) ? <td className="pv3 pr3 reportoutcomecolor b--black-80" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{handleOutcomeTarget((outcomeindicatorloop[i])? outcomeindicatorloop[i].id : 10000)}</td> : null}
            {(outcomeindicatorloop[i] !== undefined) ? <td className="pv3 pr3 reportoutcomeachcolor b--black-80" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{handleOutcomeAchievement((outcomeindicatorloop[i])? outcomeindicatorloop[i].id : 10000)}</td> : null}
            {(outcomeindicatorloop[i] !== undefined) ? <td className="pv3 pr3 reportoutcomeachcolor b--black-80" style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{handleOutcomeAchievementPercent((outcomeindicatorloop[i])? outcomeindicatorloop[i].id : 10000)}</td> : null}
            {(i === 0) ? <td className="pv3 pr3 reportextcolor b--black-80" rowSpan={rowofspan} style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{`Goal ${report.sdg[0].goal_number}: ${report.sdg[0].goal_name}`}</td> : null}
            {(i === 0) ? <td className="pv3 pr3 reportextcolor b--black-80" rowSpan={rowofspan} style={{"borderWidth":"1px", 'borderColor':"#000000", 'borderStyle':'solid', 'textAlign':"center", 'verticalAlign': "middle"}}>{report.subscheme.aor_risk_remarks ? report.subscheme.aor_risk_remarks.split('\n').map(function(item) {
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
    </table>
  </div>
  </table>
  {toDisplayButton && <div className='flex justify-around mt3 mw8'>
  <p className="f6 link dim br3 ph3 pv2 mb2 dib mt2 white bg-dark-green w5 tc pointer" onClick={handleApprove}>Approve</p>
  <p className="f6 link dim br3 ph3 pv2 mb2 dib mt2 white bg-red w5 tc pointer" onClick={handleReview}>Review</p>
  </div>}
  </div>
  
</div>
</>
  )
}

export default AorVerifierSubSchemeDetail