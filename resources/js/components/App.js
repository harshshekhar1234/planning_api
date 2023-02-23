import React, {useState, useEffect} from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
const Dashboard = React.lazy(() => import('./Dashboard/Dashboard'));
import ErrorPage from './ErrorPage';
import {getUserData} from './store/user-action'
const Register = React.lazy(() => import('./Dashboard/Register'));
const Signin = React.lazy(() => import('./Signin'));
import Loading from './Loading';
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from './store/userSlice';
const Setting = React.lazy(() => import('./Dashboard/Setting'));
const MigrationSummaryDivisionAdmin = React.lazy(() => import('./Dashboard/MigrationSummaryDivisionAdmin'));
const MigrationOutcomeBudgetDashboardAdmin = React.lazy(() => import('./Dashboard/MigrationOutcomeBudgetDashboardAdmin'));
const MigrationDivisionExtraSubSchemeInternal = React.lazy(() => import('./Dashboard/MigrationDivisionExtraSubSchemeInternal'));
const MigDivisionExtraSubSchemeListInternal = React.lazy(() => import('./Dashboard/MigDivisionInternalExtraSubScheme'));
const MigDivisionExtraSchemeInternal = React.lazy(() => import('./Dashboard/MigDivisionExtraSchemeInternal'));
const MigDivisionExtraSchemeListInternal = React.lazy(() => import('./Dashboard/MigDivisionInternalExtraScheme'));
const PoliciesAndDisclaimer = React.lazy(() => import('./Home/Pages/PoliciesAndDisclaimer'));
const Privacy = React.lazy(() => import('./Home/Pages/Privacy'));
const TermsOfUse = React.lazy(() => import('./Home/Pages/TermsOfUse'));
const Main = React.lazy(() => import('./Dashboard/Main'));
const Departments = React.lazy(() => import('./Dashboard/Departments'));
const DepartmentsEntry = React.lazy(() => import('./Dashboard/DepartmentsEntry'));
const OutcomeBudgetDashboard = React.lazy(() => import('./Dashboard/OutcomeBudgetDashboard'));
const SdgFront = React.lazy(() => import('./Dashboard/SdgFront'));
const OutcomeBudget = React.lazy(() => import('./Home/Pages/OutcomeBudget'));
const Map = React.lazy(() => import('./Map'));
const Home2 = React.lazy(() => import('./Home/Home2'));
const DistrictDetail = React.lazy(() => import('./DistrictDetail'));
const AgricultureDept = React.lazy(() => import('./Home/Pages/AgricultureDept'));
const DrinkingWaterDept = React.lazy(() => import('./Home/Pages/DrinkingWaterDept'));
const FoodDept = React.lazy(() => import('./Home/Pages/FoodDept'));
const ForestDept = React.lazy(() => import('./Home/Pages/ForestDept'));
const HealthDept = React.lazy(() => import('./Home/Pages/HealthDept'));
const HigherEducation = React.lazy(() => import('./Home/Pages/HigherEducation'));
const PanchayatiDept = React.lazy(() => import('./Home/Pages/PanchayatiDept'));
const RuralDevelopmentDept = React.lazy(() => import('./Home/Pages/RuralDevelopmentDept'));
const RuralWorksDept = React.lazy(() => import('./Home/Pages/RuralWorksDept'));
const ScheduleDept = React.lazy(() => import('./Home/Pages/ScheduleDept'));
const SchoolEducationDept = React.lazy(() => import('./Home/Pages/SchoolEducationDept'));
const ContactDetails = React.lazy(() => import('./Home/Pages/ContactDetails'));
const About = React.lazy(() => import('./Home/Pages/About'));
const HelpDesk = React.lazy(() => import('./Home/Pages/HelpDesk'));
const SDGFrontPage = React.lazy(() => import('./Home/Pages/SDGFrontPage'));
const UrbanDevelopmentDept = React.lazy(() => import('./Home/Pages/UrbanDevelopmentDept'));
const SocialSecurity = React.lazy(() => import('./Home/Pages/SocialSecurity'));
const HomeLayout = React.lazy(() => import('./Home/Pages/HomeLayout'));
const DepartmentData = React.lazy(() => import('./Dashboard/DepartmentData'));
const Department = React.lazy(() => import('./Dashboard/Department'));
const Division = React.lazy(() => import('./Dashboard/Division'));
const Scheme = React.lazy(() => import('./Dashboard/Scheme'));
const SubScheme = React.lazy(() => import('./Dashboard/SubScheme'));
const CreateScheme = React.lazy(() => import('./Dashboard/CreateScheme'));
const CreateSubScheme = React.lazy(() => import('./Dashboard/CreateSubScheme'));
const CreateOutput = React.lazy(() => import('./Dashboard/CreateOutput'));
const CreateOutcome = React.lazy(() => import('./Dashboard/CreateOutcome'));
const CreateOutputIndicator = React.lazy(() => import('./Dashboard/CreateOutputIndicator'));
const CreateOutcomeIndicator = React.lazy(() => import('./Dashboard/CreateOutcomeIndicator'));
const CreateOutputTarget = React.lazy(() => import('./Dashboard/CreateOutputTarget'));
const CreateOutcomeTarget = React.lazy(() => import('./Dashboard/CreateOutcomeTarget'));
const Main_Dept_User = React.lazy(() => import('./Dashboard/Main_Dept_User'));
const Dashboard_Dept_User = React.lazy(() => import('./Dashboard/Dashboard_Dept_User'));
const OutcomeBudgetDeptUser = React.lazy(() => import('./Dashboard/OutcomeBudgetDeptUser'));
const SubSchemeDeptUser = React.lazy(() => import('./Dashboard/SubSchemeDeptUser'));
const AchievementEntryForm = React.lazy(() => import('./Dashboard/AchievementEntryForm'));
const AorAchievementEntryForm = React.lazy(() => import('./Dashboard/Aor_AchivementEntryForm'));
const DeptUserEntryForm = React.lazy(() => import('./Dashboard/DeptUserEntryForm'));
const IndicatorEditSchemeListDeptUser = React.lazy(() => import('./Dashboard/IndicatorEditSchemeListDeptUser'));
const IndicatorEditSubSchemeListDeptUser = React.lazy(() => import('./Dashboard/IndicatorEditSubSchemeListDeptUser'));
const SchemeEntry = React.lazy(() => import('./Dashboard/SchemeEntry'));
const DepartmentDataEntry = React.lazy(() => import('./Dashboard/DepartmentDataEntry'));
const DivisionEntry = React.lazy(() => import('./Dashboard/DivisionEntry'));
const MigDivisionSubSchemeInternal = React.lazy(() => import('./Dashboard/MigDivisionSubSchemeInternal'));
const MigDivisionSchemeInternal = React.lazy(() => import('./Dashboard/MigDivisionSchemeInternal'));
const AdminEntryForm = React.lazy(() => import('./Dashboard/AdminEntryForm'));
const DivisionReport = React.lazy(() => import('./Dashboard/DivisionReport'));
const DivisionReportDownload = React.lazy(() => import('./Dashboard/DivisionReportDownload'));
const PublicDashboard = React.lazy(() => import('./Home/Pages/PublicDashboard'));
const Users = React.lazy(() => import('./Dashboard/Users'));
const ReportSocialCategory = React.lazy(() => import('./Dashboard/ReportSocialCategory'));
const DeptUserDivisionReportDownload = React.lazy(() => import('./Dashboard/DeptUserDivisionReportDownload'));
const UpdatePasswordDeptUser = React.lazy(() => import('./Dashboard/UpdatePasswordDeptUser'));
const Main_Verifier = React.lazy(() => import('./Dashboard/Main_Verifier'));
const DashboardVerifier = React.lazy(() => import('./Dashboard/DashboardVerifier'));
const SubmitVerification = React.lazy(() => import('./Dashboard/SubmitVerification'));
const AorSubmitVerification = React.lazy(() => import('./Dashboard/Aor_submitverification'));
const VerifierListPage = React.lazy(() => import('./Dashboard/VerifierListPage'));
const AorVerifierListPage = React.lazy(() => import('./Dashboard/Aor_VerifierListPage'));
const VerifierSubSchemeDetail = React.lazy(() => import('./Dashboard/VerifierSubSchemeDetail'));
const AorVerifierSubSchemeDetail = React.lazy(() => import('./Dashboard/Aor_VerifierSubSchemeDetail'));
const QuaterWiseReport = React.lazy(() => import('./Dashboard/QuaterWiseReport'));
const AsOnDivisionReportDownload = React.lazy(() => import('./Dashboard/Aor_AdminDivisionList'));
const AsOnReportListAdmin = React.lazy(() => import('./Dashboard/Aor_AdminAsOnReportList'));
const QuaterReportDivisionDownload = React.lazy(() => import('./Dashboard/QuaterReportDivisionDownload'));
const AsOnReportDivisionDownload = React.lazy(() => import('./Dashboard/Aor_AsOnReportDivisionDownload'));
const QuaterReportDivisionDownloadVerifier = React.lazy(() => import('./Dashboard/QuaterReportDivisionDownloadVerifier'));
const AsOnReportDivisionDownloadVerifier = React.lazy(() => import('./Dashboard/Aor_AsOnReportDivisionDownloadVerifier'));
const QuaterWiseReportVerifier = React.lazy(() => import('./Dashboard/QuaterWiseReportVerifier'));
const AsOnReportVerifier = React.lazy(() => import('./Dashboard/Aor_AsOnReportListVerifier'));
const AsOnReportDeptUser = React.lazy(() => import('./Dashboard/Aor_AsOnReportListDeptUser'));
const DivisionReportDownloadQuater = React.lazy(() => import('./Dashboard/DivisionReportDownloadQuater'));
const QuaterWiseReportAdmin = React.lazy(() => import('./Dashboard/QuaterWiseReportAdmin'));
const AsOnReportDivisionDownloadDeptUser = React.lazy(() => import('./Dashboard/Aor_AsOnReportDivisionDownloadDeptUser'));
const BlockEntry = React.lazy(() => import('./Dashboard/BlockEntry'));
const DeptUserCreateScheme = React.lazy(() => import('./Dashboard/DeptUserCreateScheme'));
const DeptUserCreateSubScheme = React.lazy(() => import('./Dashboard/DeptUserCreateSubScheme'));
const MigrationDepartments = React.lazy(() => import('./Dashboard/MigrationDepartments'));
const MigDivisionListInternal = React.lazy(() => import('./Dashboard/MigDivisionListInternal'));
const MigrationDepartmentData = React.lazy(() => import('./Dashboard/MigrationDepartmentData'));
const MigrationDivision = React.lazy(() => import('./Dashboard/MigrationDivision'));
const MigrationScheme = React.lazy(() => import('./Dashboard/MigrationScheme'));
const MigrationSubScheme = React.lazy(() => import('./Dashboard/MigrationSubScheme'));
const MigrationDivisionReportDownload = React.lazy(() => import('./Dashboard/MigrationDivisionReportDownload'));
const MigrationOutcomeBudgetDashboard = React.lazy(() => import('./Dashboard/MigrationOutcomeBudgetDashboard'));
const MigrationDeptUserDivisionReportDownload = React.lazy(() => import('./Dashboard/MigrationDeptUserDivisionReportDownload'));
const CurrentSubScheme = React.lazy(() => import('./Dashboard/CurrentSubScheme'));
const PendingScheme = React.lazy(() => import('./Dashboard/PendingScheme'));
const PendingSubScheme = React.lazy(() => import('./Dashboard/PendingSubScheme'));
const PendingSubSchemeDept = React.lazy(() => import('./Dashboard/PendingSubSchemeDept'));
const AdminDivisionSubSchemePendingList = React.lazy(() => import('./Dashboard/AdminDivisionSubSchemePendingList'));
const AdminDivisionSchemePendingList = React.lazy(() => import('./Dashboard/AdminDivisionSchemePendingList'));
const AdminPendingScheme = React.lazy(() => import('./Dashboard/AdminPendingScheme'));
const AdminPendingSubScheme = React.lazy(() => import('./Dashboard/AdminPendingSubScheme'));
const MigrationSummaryDivision = React.lazy(() => import('./Dashboard/MigrationSummaryDivision'));
const AdminMigrationDivisionSummary = React.lazy(() => import('./Dashboard/AdminMigrationDivisionSummary'));


const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem('access_token')){
          dispatch(getUserData())
        }
    }, []);
    
    return (
      <React.Suspense fallback={<><Loading/></>}>
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
              <Route path='termsofuse' element={<TermsOfUse />}/>
              <Route path='policyanddisclaimer' element={<PoliciesAndDisclaimer />}/>
              <Route path='privacy' element={<Privacy />}/>
              <Route path='helpdesk' element={<HelpDesk />}/>
              <Route path='sdgfront' element={<SDGFrontPage />}/>
              <Route path='publicdashboard' element={<PublicDashboard />}/>
        </Route> 
        <Route path='/dashboard' element={<Dashboard />}>
              <Route path='main' element={<Main />}/>
              <Route path='register' element={<Register />} />
              <Route path='setting' element={<Setting />} />
              <Route path='departments' element={<Departments />}/>
              <Route path='migrationdepartments' element={<MigrationDepartments />}/>
              <Route path='departmentsentry' element={<DepartmentsEntry />}/>
              <Route path='departmentdata/:id' element={<DepartmentData />}/>
              <Route path='migrationdepartmentdata/:id' element={<MigrationDepartmentData />}/>
              <Route path='departmentdataentry/:id' element={<DepartmentDataEntry />}/>
              <Route path='admindataentry/:id' element={<AdminEntryForm />}/>
              <Route path='outcomebudget/:id' element={<OutcomeBudgetDashboard />}/>
              <Route path='migrationoutcomebudget/:id' element={<MigrationOutcomeBudgetDashboardAdmin />}/>
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
              <Route path='pendingsubschemedept/:id' element={<AdminPendingSubScheme />}/>
              <Route path='pendingschemedept/:id' element={<AdminPendingScheme />}/>
              <Route path='divisionpendingsubschemedept' element={<AdminDivisionSubSchemePendingList />}/>
              <Route path='divisionpendingschemedept' element={<AdminDivisionSchemePendingList />}/>
              <Route path='divisionmigrationsummary' element={<AdminMigrationDivisionSummary />}/>
              <Route path='divisionmigrationinternal' element={<MigDivisionListInternal />}/>
              <Route path='migrationdivisioninternal/:id' element={<MigDivisionSchemeInternal />}/>
              <Route path='migsubschemeinternal/:id' element={<MigDivisionSubSchemeInternal />}/>
              <Route path='migrationsummarydept/:id/:division' element={<MigrationSummaryDivisionAdmin />}/>
              <Route path='migrationdivisionextrascheme' element={<MigDivisionExtraSchemeListInternal />}/>
              <Route path='migrationdivisionextrasubscheme' element={<MigDivisionExtraSubSchemeListInternal />}/>
              <Route path='migschemeinternalextra/:id' element={<MigDivisionExtraSchemeInternal />}/>
              <Route path='migsubschemeinternalextra/:id' element={<MigrationDivisionExtraSubSchemeInternal />}/>
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
              <Route path='pendingscheme' element={<PendingScheme />}/>
              <Route path='pendingsubscheme/:id' element={<PendingSubScheme />}/>
              <Route path='pendingsubschemedept/:id' element={<PendingSubSchemeDept />}/>
              <Route path='migrationdivisionreport/:id' element={<MigrationDeptUserDivisionReportDownload />}/>
              <Route path='migrationsummarydept/:id/:division' element={<MigrationSummaryDivision />}/>
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
        </Routes>
        </BrowserRouter>
        </React.Suspense>
    );
}

export default App;
