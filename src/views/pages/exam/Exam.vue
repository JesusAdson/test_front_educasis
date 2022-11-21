<template>
    	
		<!-- Main Wrapper -->
        <div class="main-wrapper">
            <layout-header></layout-header>
			<layout-sidebar></layout-sidebar>
			
			<!-- Page Wrapper -->
            <div class="page-wrapper">
             
            <div class="content container-fluid">
				
					<exam />
				
					<div class="row">
						<div class="col-sm-12">
						
							<div class="card card-table">
								<div class="card-body">
									<div class="table-responsive">
										<table class="table table-hover table-center mb-0 datatable" id="examtable">
											<thead>
												<tr>
													<th>Exam Name</th>
													<th>Class</th>
													<th>Subject</th>
													<th>Start Time</th>
													<th>End Time</th>
													<th>Date</th>
													<th class="text-end">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in exam" :key="item.id">
													<td>
														<h2>
															<a>{{item.exam_name}}</a>
														</h2>
													</td>
													<td>{{item.class}}</td>
													<td>{{item.subject}}</td>
													<td>{{item.start_time}}</td>
													<td>{{item.end_time}}</td>
													<td>{{item.date}}</td>
													<td class="text-end">
														<div class="actions">
															<router-link to="/edit-exam" class="btn btn-sm bg-success-light me-2">
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
import exam from '../../../assets/json/exam.json';
import util from '../../../assets/utils/util'
const images = require.context('../../../assets/img/profiles', false, /\.png$|\.jpg$/)
export default {
	data() {
		return {
			exam: exam,
		}
	},
	mounted() {
		// Datatable
		util.datatable('#examtable')
	},
	methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
		},
    },
}
</script>