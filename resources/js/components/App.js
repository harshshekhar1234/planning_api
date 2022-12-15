import React, {useState, useEffect} from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Yoyo from './Yoyo';
import Dashboard from './Dashboard/Dashboard';
import ErrorPage from './ErrorPage';
import {getUserData} from './store/user-action'
import Register from './Dashboard/Register';
import Signin from './Signin';
import ProductFetch from './ProductFetch';
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from './store/userSlice';
import Main from './Dashboard/Main';
import Departments from './Dashboard/Departments';
import DepartmentsEntry from './Dashboard/DepartmentsEntry';
import OutcomeBudgetDashboard from './Dashboard/OutcomeBudgetDashboard';
import SdgFront from './Dashboard/SdgFront';
import MainHome from './Home/Pages/MainHome';
import OutcomeBudget from './Home/Pages/OutcomeBudget';
import Map from './Map';
import Home from './Home/Home';
import Home2 from './Home/Home2';
import DistrictDetail from './DistrictDetail';
import AgricultureDept from './Home/Pages/AgricultureDept';
import DrinkingWaterDept from './Home/Pages/DrinkingWaterDept';
import FoodDept from './Home/Pages/FoodDept';
import ForestDept from './Home/Pages/ForestDept';
import HealthDept from './Home/Pages/HealthDept';
import HigherEducation from './Home/Pages/HigherEducation';
import PanchayatiDept from './Home/Pages/PanchayatiDept';
import RuralDevelopmentDept from './Home/Pages/RuralDevelopmentDept';
import RuralWorksDept from './Home/Pages/RuralWorksDept';
import ScheduleDept from './Home/Pages/ScheduleDept';
import SchoolEducationDept from './Home/Pages/SchoolEducationDept';
import ContactDetails from './Home/Pages/ContactDetails';
import About from './Home/Pages/About';
import HelpDesk from './Home/Pages/HelpDesk';
import SDGFrontPage from './Home/Pages/SDGFrontPage';
import UrbanDevelopmentDept from './Home/Pages/UrbanDevelopmentDept';
import SocialSecurity from './Home/Pages/SocialSecurity';
import HomeLayout from './Home/Pages/HomeLayout';
import DepartmentData from './Dashboard/DepartmentData';
import Department from './Dashboard/Department';
import Division from './Dashboard/Division';
import Scheme from './Dashboard/Scheme';
import SubScheme from './Dashboard/SubScheme';
import CreateScheme from './Dashboard/CreateScheme';
import CreateSubScheme from './Dashboard/CreateSubScheme';
import CreateOutput from './Dashboard/CreateOutput';
import CreateOutcome from './Dashboard/CreateOutcome';
import CreateOutputIndicator from './Dashboard/CreateOutputIndicator';
import CreateOutcomeIndicator from './Dashboard/CreateOutcomeIndicator';
import CreateOutputTarget from './Dashboard/CreateOutputTarget';
import CreateOutcomeTarget from './Dashboard/CreateOutcomeTarget';
import Main_Dept_User from './Dashboard/Main_Dept_User';
import Dashboard_Dept_User from './Dashboard/Dashboard_Dept_User';
import OutcomeBudgetDeptUser from './Dashboard/OutcomeBudgetDeptUser';
import SubSchemeDeptUser from './Dashboard/SubSchemeDeptUser';
import AchievementEntryForm from './Dashboard/AchievementEntryForm';
import AorAchievementEntryForm from './Dashboard/Aor_AchivementEntryForm';
import DeptUserEntryForm from './Dashboard/DeptUserEntryForm';
import IndicatorEditSchemeListDeptUser from './Dashboard/IndicatorEditSchemeListDeptUser';
import IndicatorEditSubSchemeListDeptUser from './Dashboard/IndicatorEditSubSchemeListDeptUser';
import SchemeEntry from './Dashboard/SchemeEntry';
import DepartmentDataEntry from './Dashboard/DepartmentDataEntry';
import DivisionEntry from './Dashboard/DivisionEntry';
import AdminEntryForm from './Dashboard/AdminEntryForm';
import DivisionReport from './Dashboard/DivisionReport';
import DivisionReportDownload from './Dashboard/DivisionReportDownload';
import PublicDashboard from './Home/Pages/PublicDashboard';
import Users from './Dashboard/Users';
import ReportSocialCategory from './Dashboard/ReportSocialCategory';
import DeptUserDivisionReportDownload from './Dashboard/DeptUserDivisionReportDownload';
import UpdatePasswordDeptUser from './Dashboard/UpdatePasswordDeptUser';
import Main_Verifier from './Dashboard/Main_Verifier';
import DashboardVerifier from './Dashboard/DashboardVerifier';
import SubmitVerification from './Dashboard/SubmitVerification';
import AorSubmitVerification from './Dashboard/Aor_submitverification';
import VerifierListPage from './Dashboard/VerifierListPage';
import AorVerifierListPage from './Dashboard/Aor_VerifierListPage';
import VerifierSubSchemeDetail from './Dashboard/VerifierSubSchemeDetail';
import AorVerifierSubSchemeDetail from './Dashboard/Aor_VerifierSubSchemeDetail';
import QuaterWiseReport from './Dashboard/QuaterWiseReport';
import AsOnDivisionReportDownload from './Dashboard/Aor_AdminDivisionList';
import AsOnReportListAdmin from './Dashboard/Aor_AdminAsOnReportList';
import QuaterReportDivisionDownload from './Dashboard/QuaterReportDivisionDownload';
import AsOnReportDivisionDownload from './Dashboard/Aor_AsOnReportDivisionDownload';
import QuaterReportDivisionDownloadVerifier from './Dashboard/QuaterReportDivisionDownloadVerifier';
import AsOnReportDivisionDownloadVerifier from './Dashboard/Aor_AsOnReportDivisionDownloadVerifier';
import QuaterWiseReportVerifier from './Dashboard/QuaterWiseReportVerifier';
import AsOnReportVerifier from './Dashboard/Aor_AsOnReportListVerifier';
import AsOnReportDeptUser from './Dashboard/Aor_AsOnReportListDeptUser';
import DivisionReportDownloadQuater from './Dashboard/DivisionReportDownloadQuater';
import QuaterWiseReportAdmin from './Dashboard/QuaterWiseReportAdmin';
import AsOnReportDivisionDownloadDeptUser from './Dashboard/Aor_AsOnReportDivisionDownloadDeptUser';
import BlockEntry from './Dashboard/BlockEntry'
import DeptUserCreateScheme from './Dashboard/DeptUserCreateScheme'
import DeptUserCreateSubScheme from './Dashboard/DeptUserCreateSubScheme'
import MigrationDepartments from './Dashboard/MigrationDepartments';
import MigrationDepartmentData from './Dashboard/MigrationDepartmentData';
import MigrationDivision from './Dashboard/MigrationDivision';
import MigrationScheme from './Dashboard/MigrationScheme';
import MigrationSubScheme from './Dashboard/MigrationSubScheme';
import MigrationDivisionReportDownload from './Dashboard/MigrationDivisionReportDownload';
import MigrationOutcomeBudgetDashboard from './Dashboard/MigrationOutcomeBudgetDashboard';
import MigrationDeptUserDivisionReportDownload from './Dashboard/MigrationDeptUserDivisionReportDownload';
import CurrentSubScheme from './Dashboard/CurrentSubScheme';


const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem('access_token')){
          dispatch(getUserData())
        }
    }, []);
    
    return (
      
        <BrowserRouter basename={((SITEURL === 'https://outcome.jharkhand.gov.in') || (SITEURL === 'http://localhost:8000')
        || (SITEURL === 'http://127.0.0.1:8000')) ? '' : '/outcome.jharkhand.gov.in/public/'}>
        <Routes>
        <Route path='/' element={<Home2 />}/>
        <Route path='/home' element={<HomeLayout />}>
              <Route path='outcomebudget' element={<OutcomeBudget />}/>
              <Route path='agriculture' element={<AgricultureDept />}/>
              <Route path='water' element={<DrinkingWaterDept />}/>
              <Route path='food' element={<FoodDept />}/>
              <Route path='forest' element={<ForestDept />}/>
              <Route path='health' element={<HealthDept />}/>
              <Route path='education' element={<HigherEducation />}/>
              <Route path='panchayati' element={<PanchayatiDept />}/>
              <Route path='ruraldevelopment' element={<RuralDevelopmentDept />}/>
              <Route path='ruralworks' element={<RuralWorksDept />}/>
              <Route path='schedule' element={<ScheduleDept />}/>
              <Route path='schooleducation' element={<SchoolEducationDept />}/>
              <Route path='urbandevelopment' element={<UrbanDevelopmentDept />}/>
              <Route path='socialsecurity' element={<SocialSecurity />}/>
              <Route path='contactdetails' element={<ContactDetails />}/>
              <Route path='about' element={<About />}/>
              <Route path='helpdesk' element={<HelpDesk />}/>
              <Route path='sdgfront' element={<SDGFrontPage />}/>
              <Route path='publicdashboard' element={<PublicDashboard />}/>
        </Route> 
        <Route path='/testing' exact element={<Yoyo />} />
        <Route path='/dashboard' element={<Dashboard />}>
              <Route path='main' element={<Main />}/>
              <Route path='register' element={<Register />} />
              <Route path='departments' element={<Departments />}/>
              <Route path='migrationdepartments' element={<MigrationDepartments />}/>
              <Route path='departmentsentry' element={<DepartmentsEntry />}/>
              <Route path='departmentdata/:id' element={<DepartmentData />}/>
              <Route path='migrationdepartmentdata/:id' element={<MigrationDepartmentData />}/>
              <Route path='departmentdataentry/:id' element={<DepartmentDataEntry />}/>
              <Route path='admindataentry/:id' element={<AdminEntryForm />}/>
              <Route path='outcomebudget/:id' element={<OutcomeBudgetDashboard />}/>
              <Route path='migrationoutcomebudget/:id' element={<MigrationOutcomeBudgetDashboard />}/>
              <Route path='department/:id' element={<Department />}/>
              <Route path='divisionreportdownload' element={<DivisionReportDownload />}/>
              <Route path='migrationdivisionreportdownload' element={<MigrationDivisionReportDownload/>}/>
              <Route path='division/:id' element={<Division />}/>
              <Route path='migrationdivision/:id' element={<MigrationDivision />}/>
              <Route path='divisionentry/:id' element={<DivisionEntry />}/>
              <Route path='scheme/:id' element={<Scheme />}/>
              <Route path='migrationscheme/:id' element={<MigrationScheme />}/>
              <Route path='schemeentry/:id' element={<SchemeEntry />}/>
              <Route path='subscheme/:id' element={<SubScheme />}/>
              <Route path='currentsubscheme/:id' element={<CurrentSubScheme />}/>
              <Route path='migrationsubscheme/:id' element={<MigrationSubScheme />}/>
              <Route path='createscheme' element={<CreateScheme />}/>
              <Route path='createsubscheme' element={<CreateSubScheme />}/>
              <Route path='createoutput' element={<CreateOutput />}/>
              <Route path='createoutcome' element={<CreateOutcome />}/>
              <Route path='createoutputtarget' element={<CreateOutputTarget />}/>
              <Route path='createoutcometarget' element={<CreateOutcomeTarget />}/>
              <Route path='createoutputindicator' element={<CreateOutputIndicator />}/>
              <Route path='createoutcomeindicator' element={<CreateOutcomeIndicator />}/>
              <Route path='sdgfront' element={<SdgFront />}/>
              <Route path='divisionreport' element={<DivisionReport />}/>
              <Route path='users' element={<Users />}/>
              <Route path='reportsocialcategory' element={<ReportSocialCategory />}/>
              <Route path='quaterwisereport' element={<DivisionReportDownloadQuater />}/>
              <Route path='aorreportdivisionlist' element={<AsOnDivisionReportDownload />}/>
              <Route path='quaterwisereportadmin/:divisionid' element={<QuaterWiseReportAdmin />}/>
              <Route path='aorreportadmin/:divisionid' element={<AsOnReportListAdmin />}/>
              <Route path='quaterreportid/:id/:rid' element={<QuaterReportDivisionDownload />}/>
              <Route path='aorreportid/:id/:rid' element={<AsOnReportDivisionDownload />}/>
        </Route>
        <Route path='/dashboarddeptuser' element={<Dashboard_Dept_User />}>
              <Route path='main' element={<Main_Dept_User />}/>
              <Route path='outcomebudget' element={<OutcomeBudgetDeptUser />}/>
              <Route path='outcomebudget/subscheme/:id' element={<SubSchemeDeptUser />}/>
              <Route path='achievemententry/:id' element={<AchievementEntryForm />}/>
              <Route path='aorachievemententry/:id' element={<AorAchievementEntryForm />}/>
              <Route path='entryformdeptuserscheme' element={<IndicatorEditSchemeListDeptUser />}/>
              <Route path='entryformdeptusersubscheme/:id' element={<IndicatorEditSubSchemeListDeptUser />}/>
              <Route path='entryformdeptuser/:id' element={<DeptUserEntryForm />}/>
              <Route path='divisionreport/:id' element={<DeptUserDivisionReportDownload />}/>
              <Route path='updatepassword' element={<UpdatePasswordDeptUser />}/>  
              <Route path='submitverification' element={<SubmitVerification />}/>
              <Route path='aorsubmitverification' element={<AorSubmitVerification />}/>
              <Route path='quaterreport' element={<QuaterWiseReport />}/>
              <Route path='quaterreportid/:id/:rid' element={<QuaterReportDivisionDownload />}/>
              <Route path='asonreportdeptuser' element={<AsOnReportDeptUser />}/>
              <Route path='aorreportiddeptuser/:id/:rid' element={<AsOnReportDivisionDownloadDeptUser />}/>
              <Route path='blockentry' element={<BlockEntry />}/>
              <Route path='createscheme' element={<DeptUserCreateScheme />}/>
              <Route path='createsubscheme' element={<DeptUserCreateSubScheme />}/>
              <Route path='migrationdivisionreport/:id' element={<MigrationDeptUserDivisionReportDownload />}/>
        </Route>
        <Route path='/dashboardverifier' element={<DashboardVerifier />}>
              <Route path='main' element={<Main_Verifier />}/>
              <Route path='verifierpage' element={<VerifierListPage />}/>
              <Route path='aorverifierpage' element={<AorVerifierListPage />}/>
              <Route path='detailreport/:id' element={<VerifierSubSchemeDetail />}/>
              <Route path='aordetailreport/:id' element={<AorVerifierSubSchemeDetail />}/>
              <Route path='updatepassword' element={<UpdatePasswordDeptUser />}/>
              <Route path='divisionreport/:id' element={<DeptUserDivisionReportDownload />}/>
              <Route path='quaterreportverifier' element={<QuaterWiseReportVerifier />}/>
              <Route path='asonreportverifier' element={<AsOnReportVerifier />}/>
              <Route path='quaterreportidverifier/:id/:rid' element={<QuaterReportDivisionDownloadVerifier />}/>
              <Route path='aorreportidverifier/:id/:rid' element={<AsOnReportDivisionDownloadVerifier />}/>
              <Route path='migrationdivisionreport/:id' element={<MigrationDeptUserDivisionReportDownload />}/>
        </Route>
        <Route path='/errorpage' element={<ErrorPage />} />
        <Route path='/map' element={<Map />} />
        <Route path='/login' element={<Signin />} />
        <Route path='district/:district' element={<DistrictDetail />} />
        <Route path='/products' element={<ProductFetch />} />
        </Routes>
        </BrowserRouter>
        
    );
}

export default App;
