<template>
    <!-- Main Wrapper -->
        <div class="main-wrapper">
            <layout-header></layout-header>
			<layout-sidebar></layout-sidebar>
			<!-- Page Wrapper -->
            <div class="page-wrapper">
             <div class="content container-fluid">
				
					<department />
				
					<div class="row">
						<div class="col-sm-12">
						
							<div class="card card-table">
								<div class="card-body">
									<div class="table-responsive">
										<table class="table table-hover table-center mb-0 datatable" id="departmenttable">
											<thead>
												<tr>
													<th>ID</th>
													<th>Name</th>
													<th>HOD</th>
													<th>Started Year</th>
													<th>No of Students</th>
													<th class="text-end">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in departments" :key="item.id">
													<td>{{item.department_id}}</td>
													<td>
														<h2>
															<a>{{item.department_name}}</a>
														</h2>
													</td>
													<td>{{item.hod}}</td>
													<td>{{item.started_year}}</td>
													<td>{{item.no_of_students}}</td>
													<td class="text-end">
														<div class="actions">
															<router-link to="/edit-department" class="btn btn-sm bg-success-light me-2">
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
import departments from '../../../assets/json/departments.json';
import util from '../../../assets/utils/util'
const images = require.context('../../../assets/img/profiles', false, /\.png$|\.jpg$/)
export default {
	data() {
		return {
			departments: departments,

		}
	},
	mounted() {
		// Datatable
		util.datatable('#departmenttable')
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