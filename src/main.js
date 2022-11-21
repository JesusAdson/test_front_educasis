import { createApp } from 'vue';
import { router } from './router';
import App from "./App.vue";
/***********Layout **********/
import LayoutHeader from './views/layouts/Header'
import Sidebar from './views/layouts/Sidebar'
import Footer from './views/layouts/Footer'
/***********Layout Components **********/
import Usermenu from './components/usermenu.vue'
import Notification from './components/notification.vue'
import Mobilemenu from './components/mobilemenu.vue'
import Search from './components/search.vue'
import Toggle from './components/toggle.vue'
import Logo from './components/logo.vue'
/***********Page header components ***************/
import Indexpage from './views/pages/pageheader/Indexpage.vue'
import AddBook from './views/pages/pageheader/Addbook.vue'
import Adddepartment from './views/pages/pageheader/Adddepartment.vue'
import Addevent from './views/pages/pageheader/Addevent.vue'
import Addexam from './views/pages/pageheader/Addexam.vue'
import Addexpense from './views/pages/pageheader/Addexpense.vue'
import Addfee from './views/pages/pageheader/Addfee.vue'
import Addfeecollection from './views/pages/pageheader/Addfeecollection.vue'
import Addholiday from './views/pages/pageheader/Addholiday'
import Addroom from './views/pages/pageheader/Addroom'
import Addsalary from './views/pages/pageheader/Addsalary'
import Addsport from './views/pages/pageheader/Addsport'
import Addstudent from './views/pages/pageheader/Addstudent'
import Addsubject from './views/pages/pageheader/Addsubject'
import Addteacher from './views/pages/pageheader/Addteacher'
import Blankpage from './views/pages/pageheader/Blankpage'
import Addtransport from './views/pages/pageheader/Addtransport'
import Addtimetable from './views/pages/pageheader/Addtimetable'
import Component from './views/pages/pageheader/Component'
import Compose from './views/pages/pageheader/Compose'
import Datatable from './views/pages/pageheader/Datatable'
import Editbook from './views/pages/pageheader/Editbook'
import Editdepartment from './views/pages/pageheader/Editdepartment'
import Editevent from './views/pages/pageheader/Editevent'
import Editexam from './views/pages/pageheader/Editexam'
import Editfee from './views/pages/pageheader/Editfee'
import Editroom from './views/pages/pageheader/Editroom'
import Editsport from './views/pages/pageheader/Editsport'
import Editstudent from './views/pages/pageheader/Editstudent'
import Editsubject from './views/pages/pageheader/Editsubject'
import Editteacher from './views/pages/pageheader/Editteacher'
import Edittimetable from './views/pages/pageheader/Edittimetable'
import Edittransport from './views/pages/pageheader/Edittransport'
import Events from './views/pages/pageheader/Events'
import Exam from './views/pages/pageheader/Exam'
import Teachers from './views/pages/pageheader/Teachers'
import Expenses from './views/pages/pageheader/Expenses'
import Fees from './views/pages/pageheader/Fees'
import Formbasicinput from './views/pages/pageheader/Formbasicinput'
import feecollection from './views/pages/pageheader/feecollection'
import Formhorizontal from './views/pages/pageheader/Formhorizontal'
import Basictable from './views/pages/pageheader/Basictable'
import Teacherdetail from './views/pages/pageheader/Teacherdetail'
import Timetable from './views/pages/pageheader/Timetable'
import Emailsetting from './views/pages/pageheader/Emailsetting'
import Localizationdetails from './views/pages/pageheader/Localization'
import Othersetting from './views/pages/pageheader/othersetting'
import Paymentsetting from './views/pages/pageheader/paymentsetting'
import Seosetting from './views/pages/pageheader/Seo'
import Settings from './views/pages/pageheader/setting'
import Sociallink from './views/pages/pageheader/sociallink'
import Socialsetting from './views/pages/pageheader/Socialsetting'
import Addinvoice from './views/pages/pageheader/Addinvoice'
import Banksetting from './views/pages/pageheader/banksetting'
import Taxsetting from './views/pages/pageheader/taxsetting'
import Invoice from './views/pages/pageheader/Invoice'
import Invoicelistheader from './views/pages/pageheader/Invoices'
import Invoicedraft from './views/pages/pageheader/Invoicedraft'
/***********Index page components ****************/
import Indexwidget from './views/pages/Dashboard/indexdashboard/Indexwidget.vue'
import Indexwidget1 from './views/pages/Dashboard/indexdashboard/Indexwidget1.vue'
import Studentchart from './views/pages/Dashboard/indexdashboard/StudentChart.vue'
import RevenueChart from './views/pages/Dashboard/indexdashboard/RevenueChart.vue'
import StudentActivity from './views/pages/Dashboard/indexdashboard/Studentactivity.vue'
import StarStudent from './views/pages/Dashboard/indexdashboard/Starstudent.vue'
import Department from './views/pages/pageheader/Department.vue'
/************Components page ********************/
import Avatar from './views/pages/uiinterface/component/Avatar.vue'
import Breadcrumb from './views/pages/uiinterface/component/Breadcrumb.vue'
import Card from './views/pages/uiinterface/component/Card.vue'
import Dropdown from './views/pages/uiinterface/component/Dropdown.vue'
import Pagination from './views/pages/uiinterface/component/Pagination.vue'
import Tab from './views/pages/uiinterface/component/Tab.vue'
import Typography from './views/pages/uiinterface/component/Typography.vue'
/***********Compose page ***********************/
import Composesidebar from './views/pages/mail/Composesidebar.vue'
/***********Events page ***********************/
import Editeventmodal from './views/pages/event/Editeventmodal.vue'
/***********Form page *************************/
import Inputsize from './views/pages/uiinterface/form/formbasic/Inputsize.vue'
import Personaldetail from './views/pages/uiinterface/form/formhorizontal/Personaldetail'
import Personalinformation from './views/pages/uiinterface/form/formhorizontal/Personalinformation'
import Addressform from './views/pages/uiinterface/form/formhorizontal/Addressform'
import Basicform from './views/pages/uiinterface/form/formhorizontal/Basicform'
import Dropdown1 from './views/pages/uiinterface/form/forminput/Dropdown1'
import Checkbox from './views/pages/uiinterface/form/forminput/Checkbox'
import Formbasic from './views/pages/uiinterface/form/forminput/Formbasic'
import Formmask from './views/pages/uiinterface/form/formmask/Formmask'
import Formvalidation from './views/pages/uiinterface/form/Formvalidation'
import Formvertical from './views/pages/uiinterface/form/Formvertical'
/**********Table page ***********************/
import Contexttable from './views/pages/uiinterface/table/Contexttable'
import Tablebasic from './views/pages/uiinterface/table/Tablebasic'
import Teacherabout from './views/pages/teacher/Teacherabout'
import Skills from './views/pages/teacher/Skills'
import Setting from './views/pages/teacher/Setting'
import Settingtab from './views/pages/setting/settingtab'
import Emailcontent from './views/pages/setting/email/emailcontent'
import Emailcontent1 from './views/pages/setting/email/emailcontent1'
import Othercontent from './views/pages/setting/other/othercontent'
import Othercontent1 from './views/pages/setting/other/othercontent1'
import Othercontent2 from './views/pages/setting/other/othercontent2'
import Paymentcontent from './views/pages/setting/payment/paymentcontent'
import Paymentcontent1 from './views/pages/setting/payment/paymentcontent1'
import Settingcontent from './views/pages/setting/setting/settingcontent'
import Settingcontent1 from './views/pages/setting/setting/settingcontent1'
import Addcontent from './views/pages/invoice/add/addcontent'
import Addcontent1 from './views/pages/invoice/add/addcontent1'
import Addcontent2 from './views/pages/invoice/add/addcontent2'
import Addtable from './views/pages/invoice/add/addtable'
import Invoicemodal from './views/pages/invoice/modal'
import Settingsidebar from './views/pages/invoice/setting/settingsidebar'
import Edittable from './views/pages/invoice/edit/edittable'
import Editcontent from './views/pages/invoice/edit/editcontent'
import Invoicefilter from './views/pages/invoice/invoicefilter'
import Viewcontent from './views/pages/invoice/view/viewcontent'
import Viewcontent1 from './views/pages/invoice/view/viewcontent1'
import Viewcontent2 from './views/pages/invoice/view/viewcontent2'
import Viewcontent3 from './views/pages/invoice/view/viewcontent3'
import Invoicewidget from './views/pages/invoice/invoicewidget'
import Invoicetabfilter from './views/pages/invoice/invoicetabfilter'

/**********Importing plugins ***********/
import './assets/plugins/bootstrap/css/bootstrap.min.css'
import './assets/plugins/bootstrap/js/bootstrap.bundle.min.js'
import './assets/plugins/fontawesome/css/fontawesome.min.css'
import './assets/plugins/fontawesome/css/all.min.css'
import './assets/css/bootstrap-datetimepicker.min.css'
import './assets/css/bootstrap-datetimepicker.min.js'
import './assets/css/style.css'
import './assets/css/bootstrap4.min.css'
import './assets/css/dataTables.bootstrap4.min.css'
import './assets/css/jquery.dataTables.min.js'
import './assets/css/dataTables.bootstrap4.min.js'
import './assets/plugins/simple-calendar/simple-calendar.css'
import './assets/css/feather.css'


import VueSelect from 'vue3-select2-component'
import DatePicker from 'vue3-datepicker'
import 'moment'
import jquery from 'jquery'; 
window.$ = jquery
const app = createApp(App)
/*Global Components */
app.component('layout-header', LayoutHeader)
app.component('layout-sidebar', Sidebar)
app.component('layout-footer', Footer)
app.component('usermenu', Usermenu)
app.component('notification', Notification)
app.component('mobilemenu', Mobilemenu)
app.component('search', Search)
app.component('toggle', Toggle)
app.component('logo', Logo)
app.component('indexpage', Indexpage)
app.component('addbook', AddBook)
app.component('adddepartment', Adddepartment)
app.component('addevent', Addevent)
app.component('addexam', Addexam)
app.component('addexpense', Addexpense)
app.component('addfee', Addfee)
app.component('addfeecollection', Addfeecollection)
app.component('addholiday', Addholiday)
app.component('addroom', Addroom)
app.component('addsalary', Addsalary)
app.component('addsport', Addsport)
app.component('addstudent', Addstudent)
app.component('addtransport', Addtransport)
app.component('addsubject', Addsubject)
app.component('datatable', Datatable)
app.component('editbook', Editbook)
app.component('editdepartment', Editdepartment)
app.component('addtimetable', Addtimetable)
app.component('editevent', Editevent)
app.component('editexam', Editexam)
app.component('editfee', Editfee)
app.component('editroom', Editroom)
app.component('editsport', Editsport)
app.component('editstudent', Editstudent)
app.component('editsubject', Editsubject)
app.component('editteacher', Editteacher)
app.component('compose', Compose)
app.component('component', Component)
app.component('blankpage', Blankpage)
app.component('addteacher', Addteacher)
app.component('indexwidget', Indexwidget)
app.component('studentchart', Studentchart)
app.component('revenuechart', RevenueChart)
app.component('studentactivity', StudentActivity)
app.component('starstudent', StarStudent)
app.component('indexwidget1', Indexwidget1)
app.component('vue-select', VueSelect);
app.component('datepicker', DatePicker);
app.component('avatar', Avatar);
app.component('breadcrumb', Breadcrumb);
app.component('card', Card);
app.component('dropdown', Dropdown);
app.component('pagination', Pagination);
app.component('tab', Tab);
app.component('typography', Typography);
app.component('composesidebar', Composesidebar);
app.component('department', Department);
app.component('edittimetable', Edittimetable);
app.component('edittransport', Edittransport);
app.component('events', Events);
app.component('editeventmodal', Editeventmodal);
app.component('exam', Exam);
app.component('formhorizontal', Formhorizontal);
app.component('expenses', Expenses);
app.component('fees', Fees);
app.component('inputsize', Inputsize);
app.component('formbasicinput', Formbasicinput);
app.component('feecollection', feecollection);
app.component('personaldetail', Personaldetail);
app.component('personalinformation', Personalinformation);
app.component('addressform', Addressform);
app.component('basicform', Basicform);
app.component('dropdown', Dropdown1);
app.component('checkbox', Checkbox);
app.component('formbasic', Formbasic);
app.component('formmask', Formmask);
app.component('formvertical', Formvertical);
app.component('formvalidation', Formvalidation);
app.component('basictable', Basictable);
app.component('contexttable', Contexttable);
app.component('tablebasic', Tablebasic);
app.component('teacherdetail', Teacherdetail);
app.component('teacherabout', Teacherabout);
app.component('skills', Skills);
app.component('setting', Setting);
app.component('teachers', Teachers);
app.component('timetable', Timetable);
app.component('emailsetting', Emailsetting);
app.component('settingtab', Settingtab);
app.component('emailcontent', Emailcontent);
app.component('emailcontent1', Emailcontent1);
app.component('localizationdetails', Localizationdetails);
app.component('othercontent', Othercontent);
app.component('othercontent1', Othercontent1);
app.component('othercontent2', Othercontent2);
app.component('othersettings', Othersetting);
app.component('paymentsettings', Paymentsetting);
app.component('paymentcontent', Paymentcontent);
app.component('paymentcontent1', Paymentcontent1);
app.component('seosetting', Seosetting);
app.component('settings', Settings);
app.component('Settingcontent', Settingcontent);
app.component('Settingcontent1', Settingcontent1);
app.component('sociallink', Sociallink);
app.component('socialsetting', Socialsetting);
app.component('addinvoice', Addinvoice);
app.component('addcontent', Addcontent);
app.component('addcontent1', Addcontent1);
app.component('addcontent2', Addcontent2);
app.component('addtable', Addtable);
app.component('invoicemodal', Invoicemodal);
app.component('invoicesettingsidebar', Settingsidebar);
app.component('banksetting', Banksetting);
app.component('edittable', Edittable);
app.component('editcontent', Editcontent);
app.component('invoicefilter', Invoicefilter);
app.component('taxsetting', Taxsetting);
app.component('Invoiceheader', Invoice);
app.component('viewcontent', Viewcontent);
app.component('viewcontent1', Viewcontent1);
app.component('viewcontent2', Viewcontent2);
app.component('viewcontent3', Viewcontent3);
app.component('invoicelistheader', Invoicelistheader);
app.component('invoicewidget', Invoicewidget);
app.component('invoicetabfilter', Invoicetabfilter);
app.component('invoicedraft', Invoicedraft);

app.use(router)
.mount('#app');