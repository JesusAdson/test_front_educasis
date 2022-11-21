<template>
    <!-- Main Wrapper -->
        <div class="main-wrapper">
            <layout-header></layout-header>
			<layout-sidebar></layout-sidebar>
			
			<!-- Page Wrapper -->
            <div class="page-wrapper">
             
             <div class="content container-fluid">
				
					<timetable />
				
					<div class="row">
						<div class="col-sm-12">
						
							<div class="card card-table">
								<div class="card-body">
									<div class="table-responsive">
										<table class="table table-hover table-center mb-0 datatable" id="timetable">
											<thead>
												<tr>
													<th>ID</th>
													<th>Name</th>
													<th>Class</th>
													<th>Subject</th>
													<th>Start Time</th>
													<th>End Time</th>
													<th>Date</th>
													<th class="text-end">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in timetable" :key="item.id">
													<td>{{item.table_id}}</td>
													<td>
														<h2 class="table-avatar">
															<a class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" :src="loadImg(item.image)" alt="User Image"></a>
															<a>{{item.name}}</a>
														</h2>
													</td>
													<td>{{item.class}}</td>
													<td>{{item.subject}}</td>
													<td>{{item.start_time}}</td>
													<td>{{item.end_time}}</td>
													<td>{{item.date}}</td>
													<td class="text-end">
														<div class="actions">
															<router-link to="/edit-time-table" class="btn btn-sm bg-success-light me-2">
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
import timetable from '../../../assets/json/timetable.json';
import util from '../../../assets/utils/util'
const images = require.context('../../../assets/img/profiles', false, /\.png$|\.jpg$/)
export default {
	data() {
		return {
			timetable: timetable,
		}
	},
	mounted() {
		// Datatable
		util.datatable('#timetable')
	},
	methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
		},
    },
}
</script>