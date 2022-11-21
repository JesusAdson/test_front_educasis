<template>
    
		<!-- Main Wrapper -->
        <div class="main-wrapper">
            <layout-header></layout-header>
			<layout-sidebar></layout-sidebar>
			
			<!-- Page Wrapper -->
            <div class="page-wrapper">
             <div class="content container-fluid">
				
					<fees />
				
					<div class="row">
						<div class="col-sm-12">
						
							<div class="card card-table">
								<div class="card-body">
									<div class="table-responsive">
										<table class="table table-hover table-center mb-0 datatable" id="feestable">
											<thead>
												<tr>
													<th>ID</th>
													<th>Fees Name</th>
													<th>Class</th>
													<th>Amount</th>
													<th>Start Date</th>
													<th>End Date</th>
													<th class="text-end">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in fees" :key="item.id">
													<td>{{item.fee_id}}</td>
													<td>
														<h2>
															<a>{{item.fees_name}}</a>
														</h2>
													</td>

													<td>{{item.class}}</td>
													<td>{{item.Amount}}</td>
													<td>{{item.start_date}}</td>
													<td>{{item.end_date}}</td>
													<td class="text-end">
														<div class="actions">
															<router-link to="/edit-fees" class="btn btn-sm bg-success-light me-2">
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
import fees from '../../../assets/json/fees.json';
import util from '../../../assets/utils/util'
const images = require.context('../../../assets/img/profiles', false, /\.png$|\.jpg$/)
export default {
	data() {
		return {
			fees: fees,
		}
	},
	mounted() {
		// Datatable
		util.datatable('#feestable')
	},
	methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
		},
    },
}
</script>