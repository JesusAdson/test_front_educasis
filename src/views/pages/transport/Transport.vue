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
								<h3 class="page-title">Transport</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
									<li class="breadcrumb-item active">Transport</li>
								</ul>
							</div>
							<div class="col-auto text-end float-end ms-auto">
								<a href="javascript:void(0);" class="btn btn-outline-primary me-2"><i class="fas fa-download"></i> Download</a>
								<router-link to="/add-transport" class="btn btn-primary"><i class="fas fa-plus"></i></router-link>
							</div>
						</div>
					</div>
					<!-- /Page Header -->
				
					<div class="row">
						<div class="col-sm-12">
						
							<div class="card card-table">
								<div class="card-body">
									<div class="table-responsive">
										<table class="table table-hover table-center mb-0 datatable" id="transporttable">
											<thead>
												<tr>
													<th>Route Name</th>
													<th>Vehicle Number</th>
													<th>Driver Name</th>
													<th>Driver License</th>
													<th>Contact Number</th>
													<th>Driver Address</th>
													<th class="text-end">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in transport" :key="item.id">
													<td>{{item.route_name}}</td>
													<td>{{item.vehicle_number}}</td>
													<td>{{item.driver_name}}</td>
													<td>{{item.driver_license}}</td>
													<td>{{item.contact_number}}</td>
													<td>{{item.driver_address}}</td>
													<td class="text-end">
														<div class="actions">
															<router-link to="/edit-transport" class="btn btn-sm bg-success-light me-2">
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
import transport from '../../../assets/json/transport.json';
import util from '../../../assets/utils/util'
const images = require.context('../../../assets/img/profiles', false, /\.png$|\.jpg$/)
export default {
	data() {
		return {
			transport: transport,
		}
	},
	mounted() {
		// Datatable
		util.datatable('#transporttable')
	},
	methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
		},
    },
}
</script>