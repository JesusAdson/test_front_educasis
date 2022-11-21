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
								<h3 class="page-title">Hostel</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
									<li class="breadcrumb-item active">Hostel</li>
								</ul>
							</div>
							<div class="col-auto text-end float-end ms-auto">
								<a href="javascript:void(0);" class="btn btn-outline-primary me-2"><i class="fas fa-download"></i> Download</a>
								<router-link to="/add-room" class="btn btn-primary"><i class="fas fa-plus"></i></router-link>
							</div>
						</div>
					</div>
					<!-- /Page Header -->
				
					<div class="row">
						<div class="col-sm-12">
						
							<div class="card card-table">
								<div class="card-body">
									<div class="table-responsive">
										<table class="table table-hover table-center mb-0 datatable" id="hosteltable">
											<thead>
												<tr>
													<th>Block</th>
													<th>Room No</th>
													<th>Room Type</th>
													<th>No of Beds</th>
													<th>Cost per Bed</th>
													<th>Availability</th>
													<th class="text-end">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in hostel" :key="item.id">
													<td>{{item.block}}</td>
													<td>{{item.room_no}}</td>
													<td>{{item.room_type}}</td>
													<td>{{item.no_of_beds}}</td>
													<td>{{item.cost_per_bed}}</td>
													<td>
														<span class="badge badge-danger" v-if="item.availability== 'Full'">{{item.availability}}</span>
														<span class="badge badge-warning" v-else-if="item.availability== '2 Available'">{{item.availability}}</span>
                                                        <span class="badge badge-success" v-else>{{item.availability}}</span>

													</td>
													<td class="text-end">
														<div class="actions">
															<router-link to="/edit-room" class="btn btn-sm bg-success-light me-2">
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
import hostel from '../../../assets/json/hostel.json';
import util from '../../../assets/utils/util'
const images = require.context('../../../assets/img/profiles', false, /\.png$|\.jpg$/)
export default {
	data() {
		return {
			hostel: hostel,
		}
	},
	mounted() {
		// Datatable
		util.datatable('#hosteltable')
	},
	methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
		},
    },
}
</script>