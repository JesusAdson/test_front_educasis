<template>
<!-- Sidebar -->
            <div class="sidebar" id="sidebar">
                <div class="sidebar-inner">
                <perfect-scrollbar class="scroll-area"  :settings="settings" @ps-scroll-y="scrollHanle">
                    <div id="sidebar-menu" class="sidebar-menu">
                        <ul>
                            <li class="menu-title"> 
                                <span>Main Menu</span>
                            </li>
                            <li class="submenu">
                                <a href="javascript:void(0);"><i class="fas fa-th-large"></i> <span> Dashboard</span> <span class="menu-arrow"></span></a>
                                <ul>
                                    <li><router-link to="/index">Admin Dashboard</router-link></li>
                                    <li><router-link to="/teacher-dashboard">Teacher Dashboard</router-link></li>
                                    <li><router-link to="/student-dashboard">Student Dashboard</router-link></li>
                                </ul>
                            </li>
                            <li class="submenu">
                                <a href="javascript:void(0);"><i class="fas fa-user-graduate"></i> <span> Students</span> <span class="menu-arrow"></span></a>
                                <ul>
                                    <li><router-link to="/students">Student List</router-link></li>
                                    <li><router-link to="/student-details">Student View</router-link></li>
                                    <li><router-link to="/add-student">Student Add</router-link></li>
                                    <li><router-link to="/edit-student">Student Edit</router-link></li>
                                </ul>
                            </li>
                            <li class="submenu">
                                <a href="javascript:void(0);"><i class="fas fa-chalkboard-teacher"></i> <span> Teachers</span> <span class="menu-arrow"></span></a>
                                <ul>
                                    <li><router-link to="/teachers">Teacher List</router-link></li>
                                    <li><router-link to="/teacher-details">Teacher View</router-link></li>
                                    <li><router-link to="/add-teacher">Teacher Add</router-link></li>
                                    <li><router-link to="/edit-teacher">Teacher Edit</router-link></li>
                                </ul>
                            </li>
                            <li class="submenu">
                                <a href="javascript:void(0);"><i class="fas fa-building"></i> <span> Departments</span> <span class="menu-arrow"></span></a>
                                <ul>
                                    <li><router-link to="/departments">Department List</router-link></li>
                                    <li><router-link to="/add-department">Department Add</router-link></li>
                                    <li><router-link to="/edit-department">Department Edit</router-link></li>
                                </ul>
                            </li>
                            <li class="submenu">
                                <a href="javascript:void(0);"><i class="fas fa-book-reader"></i> <span> Subjects</span> <span class="menu-arrow"></span></a>
                                <ul>
                                    <li><router-link to="/subjects">Subject List</router-link></li>
                                    <li><router-link to="/add-subject">Subject Add</router-link></li>
                                    <li><router-link to="/edit-subject">Subject Edit</router-link></li>
                                </ul>
                            </li>

                            <li class="submenu">
								<a href="javascript:void(0);"><i class="fas fa-clipboard"></i> <span> Invoices</span> <span class="menu-arrow"></span></a>
								<ul>
									<li><router-link to="/invoices" :class="{'active': currentPath === 'invoices-cancelled' || currentPath === 'invoices-draft' || currentPath === 'invoices-overdue' || currentPath === 'invoices-recurring' || currentPath === 'invoices-paid'}">Invoices List</router-link></li>
									<li><router-link to="/invoice-grid">Invoices Grid</router-link></li>
									<li><router-link to="/add-invoice">Add Invoices</router-link></li>
									<li><router-link to="/edit-invoice">Edit Invoices</router-link></li>
									<li><router-link to="/view-invoice">Invoices Details</router-link></li>
									<li><router-link to="/invoices-settings" :class="{'active': currentPath === 'tax-settings' || currentPath === 'bank-settings'}">Invoices Settings</router-link></li>
								</ul>
							</li>

                            <li class="menu-title"> 
                                <span>Management</span>
                            </li>

                            <li class="submenu">
                                <a href="javascript:void(0);"><i class="fas fa-file-invoice-dollar"></i> <span> Accounts</span> <span class="menu-arrow"></span></a>
                                <ul>
                                    <li><router-link to="/fees-collections">Fees Collection</router-link></li>
                                    <li><router-link to="/expenses">Expenses</router-link></li>
                                    <li><router-link to="/salary">Salary</router-link></li>
                                    <li><router-link to="/add-fees-collection">Add Fees</router-link></li>
                                    <li><router-link to="/add-expenses">Add Expenses</router-link></li>
                                    <li><router-link to="/add-salary">Add Salary</router-link></li>
                                </ul>
                            </li>
                            <li v-bind:class="{'active': currentPath == 'add-holiday' || currentPath == 'edit-holiday' }"> 
                                <router-link to="/holiday"><i class="fas fa-holly-berry"></i> <span>Holiday</span></router-link>
                            </li>
                            <li v-bind:class="{'active': currentPath == 'add-fees' || currentPath == 'edit-fees' }"> 
                                <router-link to="/fees"><i class="fas fa-comment-dollar"></i> <span>Fees</span></router-link>
                            </li>
                            <li> 
                                <router-link to="/exam" v-bind:class="{'active': currentPath == 'add-exam' || currentPath == 'edit-exam'}"><i class="fas fa-clipboard-list"></i> <span>Exam list</span></router-link>
                            </li>
                            <li v-bind:class="{'active': currentPath == 'add-events' || currentPath == 'edit-events'  }"> 
                                <router-link to="/event"><i class="fas fa-calendar-day"></i> <span>Events</span></router-link>
                            </li>
                            <li v-bind:class="{'active': currentPath == 'add-time-table'  || currentPath == 'edit-time-table'}"> 
                                <router-link to="/time-table"><i class="fas fa-table"></i> <span>Time Table</span></router-link>
                            </li>
                            <li v-bind:class="{'active': currentPath == 'add-books'  || currentPath == 'edit-books'}"> 
                                <router-link to="/library"><i class="fas fa-book"></i> <span>Library</span></router-link>
                            </li>

                            <li v-bind:class="{'active': currentPath == 'social-settings' || currentPath == 'social-links' || currentPath == 'settings' || currentPath == 'seo-settings' || currentPath == 'payment-settings' || currentPath == 'others-settings' || currentPath == 'email-settings' || currentPath == 'localization-details'}"> 
								<router-link to="/settings"><i class="fas fa-cog"></i> <span>Settings</span></router-link>
							</li>

                            <li class="menu-title"> 
                                <span>Pages</span>
                            </li>

                            <li class="submenu">
                                <a href="javascript:void(0);"><i class="fas fa-shield-alt"></i> <span> Authentication </span> <span class="menu-arrow"></span></a>
                                <ul>
                                    <li><router-link to="/">Login</router-link></li>
                                    <li><router-link to="/register">Register</router-link></li>
                                    <li><router-link to="/forgot-password">Forgot Password</router-link></li>
                                    <li><router-link to="/error-404">Error Page</router-link></li>
                                </ul>
                            </li>
                            <li> 
                                <router-link to="/blank-page"><i class="fas fa-file"></i> <span>Blank Page</span></router-link>
                            </li>

                            <li class="menu-title"> 
                                <span>Others</span>
                            </li>

                            <li v-bind:class="{'active': currentPath == 'add-sports'  || currentPath == 'edit-sports'}"> 
                                <router-link to="/sports"><i class="fas fa-baseball-ball"></i> <span>Sports</span></router-link>
                            </li>
                            <li v-bind:class="{'active': currentPath == 'add-room'  || currentPath == 'edit-room'}"> 
                                <router-link to="/hostel"><i class="fas fa-hotel"></i> <span>Hostel</span></router-link>
                            </li>
                            <li v-bind:class="{'active': currentPath == 'add-transport'  || currentPath == 'edit-transport'}"> 
                                <router-link to="/transport"><i class="fas fa-bus"></i> <span>Transport</span></router-link>
                            </li>
                            <li class="menu-title"> 
                                <span>UI Interface</span>
                            </li>
                            <li> 
                                <router-link to="/components"><i class="fas fa-vector-square"></i> <span>Components</span></router-link>
                            </li>
                            <li class="submenu">
                                <a href="javascript:void(0);"><i class="fas fa-columns"></i> <span> Forms </span> <span class="menu-arrow"></span></a>
                                <ul>
                                    <li><router-link to="/form-basic-inputs">Basic Inputs </router-link></li>
                                    <li><router-link to="/form-input-groups">Input Groups </router-link></li>
                                    <li><router-link to="/form-horizontal">Horizontal Form </router-link></li>
                                    <li><router-link to="/form-vertical"> Vertical Form </router-link></li>
                                    <li><router-link to="/form-mask"> Form Mask </router-link></li>
                                    <li><router-link to="/form-validation"> Form Validation </router-link></li>
                                </ul>
                            </li>
                            <li class="submenu">
                                <a href="javascript:void(0);"><i class="fas fa-table"></i> <span> Tables </span> <span class="menu-arrow"></span></a>
                                <ul>
                                    <li><router-link to="/tables-basic">Basic Tables </router-link></li>
                                    <li><router-link to="/data-tables">Data Table </router-link></li>
                                </ul>
                            </li>
                            <li class="submenu">
                                <a href="javascript:void(0);"><i class="fas fa-code"></i> <span>Multi Level</span> <span class="menu-arrow"></span></a>
                                <ul>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"> <span>Level 1</span> <span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="javascript:void(0);"><span>Level 2</span></a></li>
                                            <li class="submenu">
                                                <a href="javascript:void(0);"> <span> Level 2</span> <span class="menu-arrow"></span></a>
                                                <ul>
                                                    <li><a href="javascript:void(0);">Level 3</a></li>
                                                    <li><a href="javascript:void(0);">Level 3</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="javascript:void(0);"> <span>Level 2</span></a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);"> <span>Level 1</span></a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </perfect-scrollbar>
                </div>
            </div>
            <!-- /Sidebar -->
</template>

<script>
import {PerfectScrollbar}  from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
export default {
   components: {
   PerfectScrollbar ,
 },
    mounted() {
        var Sidemenu = function() {
		    this.$menuItem = $('#sidebar-menu a');
	    };
        var $this = Sidemenu;
		$('#sidebar-menu a').on('click', function(e) {
			if($(this).parent().hasClass('submenu')) {
				e.preventDefault();
			}
			if(!$(this).hasClass('subdrop')) {
				$('ul', $(this).parents('ul:first')).slideUp(350);
				$('a', $(this).parents('ul:first')).removeClass('subdrop');
				$(this).next('ul').slideDown(350);
				$(this).addClass('subdrop');
			} else if($(this).hasClass('subdrop')) {
				$(this).removeClass('subdrop');
				$(this).next('ul').slideUp(350);
			}
		});
		$('#sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');
   },
    computed: {
        currentPath() {
            return this.$route.name;
        }
      },

 data() {
     return {
       settings: {
suppressScrollX: true,
},
       activeClass: 'active',
     };
             //  isactive : true
   },
   methods: {
   scrollHanle(evt) {
     console.log(evt)
   }
 },
}
</script>
          <style>
          .scroll-area {
            position: relative;
            margin: auto;
            height: calc(100vh - 60px);
            background-color: transparent !important;
        }
      </style>
