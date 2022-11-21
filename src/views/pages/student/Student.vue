<template>
    <!-- Main Wrapper -->
        <div class="main-wrapper">
            <layout-header></layout-header>
			<layout-sidebar></layout-sidebar>
			
			<!-- Page Wrapper -->
            <div class="page-wrapper">
              <div class="content container-fluid">
				
					<!-- Page Header -->
					<div class="page-header">
						<div class="row align-items-center">
							<div class="col">
								<h3 class="page-title">Students</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
									<li class="breadcrumb-item active">Students</li>
								</ul>
							</div>
							<div class="col-auto text-end float-end ms-auto">
								<a href="javascript:void(0);" class="btn btn-outline-primary me-2"><i class="fas fa-download"></i> Download</a>
								<router-link to="/add-student" class="btn btn-primary"><i class="fas fa-plus"></i></router-link>
							</div>
						</div>
					</div>
					<!-- /Page Header -->
				
					<div class="row">
						<div class="col-sm-12">
						
							<div class="card card-table">
								<div class="card-body">
									<div class="table-responsive">
										<table class="table table-hover table-center mb-0 datatable" id="studentstable">
											<thead>
												<tr>
													<th>ID</th>
													<th>Name</th>
													<th>Class</th>
													<th>DOB</th>
													<th>Parent Name</th>
													<th>Mobile Number</th>
													<th>Address</th>
													<th class="text-end">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in students" :key="item.id">
													<td>{{item.student_id}}</td>
													<td>
														<h2 class="table-avatar">
															<router-link to="/student-details" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" :src="loadImg(item.image)" alt="User Image"></router-link>
															<router-link to="/student-details">{{item.student_name}}</router-link>
														</h2>
													</td>
													<td>{{item.class}}</td>
													<td>{{item.dob}}</td>
													<td>{{item.parent_name}}</td>
													<td>{{item.mobile_number}}</td>
													<td>{{item.address}}</td>
													<td class="text-end">
														<div class="actions">
															<router-link to="/edit-student" class="btn btn-sm bg-success-light me-2">
																<i class="fas fa-pen"></i>
															</router-link>
															<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
																<i class="fas fa-trash"></i>
															</a>
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>							
						</div>					
					</div>					
				</div>
			<layout-footer></layout-footer>			
			</div>
			<!-- /Page Wrapper -->
			
        </div>
		<!-- /Main Wrapper -->
</template>

<script>
import students from '../../../assets/json/students.json';
import util from '../../../assets/utils/util'
const images = require.context('../../../assets/img/profiles', false, /\.png$|\.jpg$/)
export default {
	data() {
		return {
			students: students,

		}
	},
	mounted() {
		// Datatable
		util.datatable('#studentstable')
	},
	methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
		},
		toggleContent() {
			this.toggleCheck = !this.toggleCheck;
		}
        
    },
}
</script>