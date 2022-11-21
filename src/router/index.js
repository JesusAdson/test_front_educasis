import {createRouter, createWebHistory} from 'vue-router';
import Index from '../views/pages/Dashboard/indexdashboard/Index'
import Addbook from '../views/pages/library/Addbook.vue'
import Adddepartment from '../views/pages/department/Adddepartment.vue'
import Addevent from '../views/pages/event/Addevent.vue'
import Addexam from '../views/pages/exam/Addexam.vue'
import Addexpenses from '../views/pages/account/expense/Addexpense.vue'
import Addfee from '../views/pages/fee/Addfee.vue'
import Addfeecollection from '../views/pages/account/feecollection/Addfeecollection.vue'
import Addholiday from '../views/pages/holiday/Addholiday.vue'
import Addroom from '../views/pages/hostel/Addroom.vue'
import Addsalary from '../views/pages/account/salary/Addsalary'
import Addsport from '../views/pages/sport/Addsport'
import Addstudent from '../views/pages/student/Addstudent'
import Addsubject from '../views/pages/subject/Addsubject'
import Addteacher from '../views/pages/teacher/Addteacher'
import Addtimetable from '../views/pages/timetable/Addtimetable'
import Addtransport from '../views/pages/transport/Addtransport'
import Blankpage from '../views/pages/page/Blankpage'
import Components from '../views/pages/uiinterface/component/Components'
import Compose from '../views/pages/mail/Compose'
import Datatable from '../views/pages/uiinterface/table/Datatable'
import Departments from '../views/pages/department/Departments'
import Editbook from '../views/pages/library/Editbook'
import Editdepartment from '../views/pages/department/Editdepartment'
import Editevent from '../views/pages/event/Editevent'
import Editroom from '../views/pages/hostel/Editroom'
import Editexam from '../views/pages/exam/Editexam'
import Editfee from '../views/pages/fee/Editfee'
import Editsport from '../views/pages/sport/Editsport'
import Editstudent from '../views/pages/student/Editstudent'
import Editsubject from '../views/pages/subject/Editsubject'
import Editteacher from '../views/pages/teacher/Editteacher'
import Edittimetable from '../views/pages/timetable/Edittimetable'
import Edittransport from '../views/pages/transport/Edittransport'
import Error404 from '../views/pages/page/authentication/Error404'
import Events from '../views/pages/event/Events'
import Exam from '../views/pages/exam/Exam'
import Expenses from '../views/pages/account/expense/Expenses'
import Fees from '../views/pages/fee/Fees'
import Formbasicinput from '../views/pages/uiinterface/form/formbasic/Formbasicinput'
import Forgotpassword from '../views/pages/page/authentication/Forgotpassword'
import feecollections from '../views/pages/account/feecollection/feecollections'
import Horizontal from '../views/pages/uiinterface/form/formhorizontal/Horizontal'
import Forminput from '../views/pages/uiinterface/form/forminput/Forminput'
import Formmask from '../views/pages/uiinterface/form/formmask/Formmask'
import Formvalidation from '../views/pages/uiinterface/form/Formvalidation'
import Formvertical from '../views/pages/uiinterface/form/Formvertical'
import Holiday from '../views/pages/holiday/Holiday'
import Hostel from '../views/pages/hostel/Hostel'
import Inbox from '../views/pages/mail/Inbox'
import Library from '../views/pages/library/Library'
import Login from '../views/pages/page/authentication/Login'
import Profile from '../views/pages/page/Profile'
import Register from '../views/pages/page/authentication/Register'
import Salary from '../views/pages/account/salary/Salary'
import Sport from '../views/pages/sport/Sport'
import Studentdash from '../views/pages/Dashboard/studentdashboard/Studentdash'
import Studentdetail from '../views/pages/student/Studentdetail'
import Student from '../views/pages/student/Student'
import Subjects from '../views/pages/subject/Subjects'
import Basictable from '../views/pages/uiinterface/table/Basictable'
import Teacherdash from '../views/pages/Dashboard/teacherdashboard/Teacherdash'
import Teacherdetail from '../views/pages/teacher/Teacherdetail'
import Teachers from '../views/pages/teacher/Teachers'
import Timetable from '../views/pages/timetable/Timetable'
import Transport from '../views/pages/transport/Transport'
import Emailsetting from '../views/pages/setting/email/emailsetting'
import Localization from '../views/pages/setting/localization'
import Othersetting from '../views/pages/setting/other/othersetting'
import Paymentsetting from '../views/pages/setting/payment/paymentsetting'
import Seosetting from '../views/pages/setting/seo'
import Setting from '../views/pages/setting/setting/setting'
import Social from '../views/pages/setting/social'
import Socialsetting from '../views/pages/setting/socialsetting/setting'
import Addinvoice from '../views/pages/invoice/add/addinvoice'
import Banksetting from '../views/pages/invoice/setting/bank'
import Editinvoice from '../views/pages/invoice/edit/editinvoice'
import Invoicegrid from '../views/pages/invoice/invoicegrid'
import Taxsetting from '../views/pages/invoice/setting/tax'
import Invoice from '../views/pages/invoice/setting/invoice'
import Viewinvoice from '../views/pages/invoice/view/viewinvoice'
import Invoicelist from '../views/pages/invoice/list/invoices'
import Invoicecancelled from '../views/pages/invoice/list/invoicecancelled'
import Invoicedraft from '../views/pages/invoice/list/invoicedraft'
import Invoiceoverdue from '../views/pages/invoice/list/invoiceoverdue'
import Invoicepaid from '../views/pages/invoice/list/invoicepaid'
import Invoicerecurring from '../views/pages/invoice/list/invoicerecurring'
const routes = [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
     {
      path: '/add-books',
      name: 'add-books',
      component: Addbook
    },
    {
      path: '/add-department',
      name: 'add-department',
      component: Adddepartment
    },
    {
      path: '/add-events',
      name: 'add-events',
      component: Addevent
    },
    {
      path: '/add-exam',
      name: 'add-exam',
      component: Addexam
    },
    {
      path: '/add-expenses',
      name: 'add-expenses',
      component: Addexpenses
    },
    {
      path: '/add-fees',
      name: 'add-fees',
      component: Addfee
    },
    {
      path: '/add-fees-collection',
      name: 'add-fees-collection',
      component: Addfeecollection
    },
    {
      path: '/add-holiday',
      name: 'add-holiday',
      component: Addholiday
    },
    {
      path: '/add-room',
      name: 'add-room',
      component: Addroom
    },
    {
      path: '/add-salary',
      name: 'add-salary',
      component: Addsalary
    },
    {
      path: '/add-sports',
      name: 'add-sports',
      component: Addsport
    },
    {
      path: '/add-student',
      name: 'add-student',
      component: Addstudent
    },
    {
      path: '/add-subject',
      name: 'add-subject',
      component: Addsubject
    },
    {
      path: '/add-teacher',
      name: 'add-teacher',
      component: Addteacher
    },
    {
      path: '/add-time-table',
      name: 'add-time-table',
      component: Addtimetable
    },
    {
      path: '/add-transport',
      name: 'add-transport',
      component: Addtransport
    },
     {
      path: '/blank-page',
      name: 'blank-page',
      component: Blankpage
    },
    {
      path: '/components',
      name: 'components',
      component: Components
    },
    {
      path: '/compose',
      name: 'compose',
      component: Compose
    },
    {
      path: '/data-tables',
      name: 'data-tables',
      component: Datatable
    },
    {
      path: '/departments',
      name: 'departments',
      component: Departments
    },
     {
      path: '/edit-books',
      name: 'edit-books',
      component: Editbook
    },
     {
      path: '/edit-department',
      name: 'edit-department',
      component: Editdepartment
    },
     {
      path: '/edit-events',
      name: 'edit-events',
      component: Editevent
    },
     {
      path: '/edit-exam',
      name: 'edit-exam',
      component: Editexam
    },
    {
      path: '/edit-fees',
      name: 'edit-fees',
      component: Editfee
    },
    {
      path: '/edit-room',
      name: 'edit-room',
      component: Editroom
    },
    {
      path: '/edit-sports',
      name: 'edit-sports',
      component: Editsport
    },
    {
      path: '/edit-student',
      name: 'edit-student',
      component: Editstudent
    },
    {
      path: '/edit-subject',
      name: 'edit-subject',
      component: Editsubject
    },
    {
      path: '/edit-teacher',
      name: 'edit-teacher',
      component: Editteacher
    },
    {
      path: '/edit-time-table',
      name: 'edit-time-table',
      component: Edittimetable
    },
    {
      path: '/edit-transport',
      name: 'edit-transport',
      component: Edittransport
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: Error404
    },
    {
      path: '/event',
      name: 'event',
      component: Events
    },
    {
      path: '/exam',
      name: 'exam',
      component: Exam
    },
    {
      path: '/expenses',
      name: 'expenses',
      component: Expenses
    },
    {
      path: '/fees',
      name: 'fees',
      component: Fees
    },
    {
      path: '/form-horizontal',
      name: 'form-horizontal',
      component: Horizontal
    },
    {
      path: '/fees-collections',
      name: 'fees-collections',
      component: feecollections
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: Forgotpassword
    },
    {
      path: '/form-basic-inputs',
      name: 'form-basic-inputs',
      component: Formbasicinput
    },
    {
      path: '/form-input-groups',
      name: 'form-input-groups',
      component: Forminput
    },
     {
      path: '/form-mask',
      name: 'form-mask',
      component: Formmask
    },
    {
      path: '/form-validation',
      name: 'form-validation',
      component: Formvalidation
    },
    {
      path: '/form-vertical',
      name: 'form-vertical',
      component: Formvertical
    },
     {
      path: '/holiday',
      name: 'holiday',
      component: Holiday
    },
    {
      path: '/hostel',
      name: 'hostel',
      component: Hostel
    },
    {
      path: '/inbox',
      name: 'inbox',
      component: Inbox
    },
     {
      path: '/library',
      name: 'library',
      component: Library
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/salary',
      name: 'salary',
      component: Salary
    },
    {
      path: '/sports',
      name: 'sports',
      component: Sport
    },
     {
      path: '/student-dashboard',
      name: 'student-dashboard',
      component: Studentdash
    },
      {
      path: '/student-details',
      name: 'student-details',
      component: Studentdetail
    },
    {
      path: '/students',
      name: 'students',
      component: Student
    },
     {
      path: '/subjects',
      name: 'subjects',
      component: Subjects
    },
    {
      path: '/tables-basic',
      name: 'tables-basic',
      component: Basictable
    },
    {
      path: '/teacher-dashboard',
      name: 'teacher-dashboard',
      component: Teacherdash
    },
    {
      path: '/teacher-details',
      name: 'teacher-details',
      component: Teacherdetail
    },
    {
      path: '/teachers',
      name: 'teachers',
      component: Teachers
    },
    {
      path: '/time-table',
      name: 'time-table',
      component: Timetable
    },
    {
      path: '/transport',
      name: 'transport',
      component: Transport
    },
    {
      path: '/email-settings',
      name: 'email-settings',
      component: Emailsetting
    },
    {
      path: '/localization-details',
      name: 'localization-details',
      component: Localization
    },
    {
      path: '/others-settings',
      name: 'others-settings',
      component: Othersetting
    },
    {
      path: '/payment-settings',
      name: 'payment-settings',
      component: Paymentsetting
    },
    {
      path: '/seo-settings',
      name: 'seo-settings',
      component: Seosetting
    },
    {
      path: '/settings',
      name: 'settings',
      component: Setting
    },
    {
      path: '/social-links',
      name: 'social-links',
      component: Social
    },
    {
      path: '/social-settings',
      name: 'social-settings',
      component: Socialsetting
    },
    {
      path: '/add-invoice',
      name: 'add-invoice',
      component: Addinvoice
    },
    {
      path: '/bank-settings',
      name: 'bank-settings',
      component: Banksetting
    },
    {
      path: '/edit-invoice',
      name: 'edit-invoice',
      component: Editinvoice
    },
    {
      path: '/invoice-grid',
      name: 'invoice-grid',
      component: Invoicegrid
    },
    {
      path: '/tax-settings',
      name: 'tax-settings',
      component: Taxsetting
    },
    {
      path: '/invoices-settings',
      name: 'invoices-settings',
      component: Invoice
    },
    {
      path: '/view-invoice',
      name: 'view-invoice',
      component: Viewinvoice
    },
    {
      path: '/invoices',
      name: 'invoices',
      component: Invoicelist
    },
    {
      path: '/invoices-cancelled',
      name: 'invoices-cancelled',
      component: Invoicecancelled
    },
    {
      path: '/invoices-draft',
      name: 'invoices-draft',
      component: Invoicedraft
    },
    {
      path: '/invoices-overdue',
      name: 'invoices-overdue',
      component: Invoiceoverdue
    },
    {
      path: '/invoices-paid',
      name: 'invoices-paid',
      component: Invoicepaid
    },
    {
      path: '/invoices-recurring',
      name: 'invoices-recurring',
      component: Invoicerecurring
    },
    
  ];
  export const router = createRouter({
    history: createWebHistory('vuejs/template'),
    linkActiveClass: 'active',
    routes
});