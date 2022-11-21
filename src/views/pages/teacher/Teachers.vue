<template>
    <!-- Main Wrapper -->
        <div class="main-wrapper">
            <layout-header></layout-header>
			<layout-sidebar></layout-sidebar>
			
			<!-- Page Wrapper -->
            <div class="page-wrapper">
             
              <div class="content container-fluid">
				
				<teachers />
				
					<div class="row">
						<div class="col-sm-12">
						
							<div class="card card-table">
								<div class="card-body">
									<div class="table-responsive">
										<table class="table table-hover table-center mb-0 datatable" id=teacherstable>
											<thead>
												<tr>
													<th>ID</th>
													<th>Name</th>
													<th>Class</th>
													<th>Gender</th>
													<th>Subject</th>
													<th>Section</th>
													<th>Mobile Number</th>
													<th>Address</th>
													<th class="text-end">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in teachers" :key="item.id">
													<td>{{item.teacher_id}}</td>
													<td>
														<h2 class="table-avatar">
															<router-link to="/teacher-details" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" :src="loadImg(item.image)" alt="User Image"></router-link>
															<router-link to="/teacher-details">{{item.teacher_name}}</router-link>
														</h2>
													</td>
													<td>{{item.class}}</td>
													<td>{{item.gender}}</td>
													<td>{{item.subject}}</td>
													<td>{{item.section}}</td>
													<td>{{item.mobile_number}}</td>
													<td>{{item.address}}</td>
													<td class="text-end">
														<div class="actions">
															<router-link to="/edit-teacher" class="btn btn-sm bg-success-light me-2">
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
import teachers from '../../../assets/json/teachers.json';
import util from '../../../assets/utils/util'
const images = require.context('../../../assets/img/profiles', false, /\.png$|\.jpg$/)
export default {
	data() {
		return {
			teachers: teachers
		}
	},
	mounted() {
		// Datatable
		util.datatable('#teacherstable')
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