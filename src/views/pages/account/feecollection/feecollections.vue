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
								<h3 class="page-title">Fees Collections</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
									<li class="breadcrumb-item active">Fees Collections</li>
								</ul>
							</div>
							<div class="col-auto text-end float-end ms-auto">
								<a href="javascript:void(0);" class="btn btn-outline-primary me-2"><i class="fas fa-download"></i> Download</a>
								<router-link to="/add-fees-collection" class="btn btn-primary"><i class="fas fa-plus"></i></router-link>
							</div>
						</div>
					</div>
					<!-- /Page Header -->
				
					<div class="row">
						<div class="col-sm-12">
						
							<div class="card card-table">
								<div class="card-body">
									<div class="table-responsive">
										<table class="table table-hover table-center mb-0 datatable" id="feescollectiontable">
											<thead>
												<tr>
													<th>ID</th>
													<th>Name</th>
													<th>Gender</th>
													<th>Fees Type</th>
													<th>Amount</th>
													<th>Paid Date</th>
													<th class="text-end">Status</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in feescollection" :key="item.id">
													<td>{{item.collection_id}}</td>
													<td>
														<h2 class="table-avatar">
															<a class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" :src="loadImg(item.image)" alt="User Image"></a>
															<a>{{item.student_name}}</a>
														</h2>
													</td>
													<td>{{item.gender}}</td>
													<td>{{item.fees_type}}</td>
													<td>{{item.amount}}</td>
													<td>{{item.paid_date}}</td>
													<td class="text-end">
														<span class="badge badge-success" v-if="item.status == 'Paid'">Paid</span>
                                                        <span class="badge badge-danger" v-else>Unpaid</span>
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
import feescollection from '../../../../assets/json/feescollection.json';
import util from '../../../../assets/utils/util'
const images = require.context('../../../../assets/img/profiles', false, /\.png$|\.jpg$/)
export default {
	data() {
		return {
			feescollection: feescollection,
		}
	},
	mounted() {
		// Datatable
		util.datatable('#feescollectiontable')
	},
	methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
		},
    },
}
</script>