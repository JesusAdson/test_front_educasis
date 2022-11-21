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
								<h3 class="page-title">Library</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
									<li class="breadcrumb-item active">Library</li>
								</ul>
							</div>
							<div class="col-auto text-end float-end ms-auto">
								<a href="javascript:void(0);" class="btn btn-outline-primary me-2"><i class="fas fa-download"></i> Download</a>
								<router-link to="/add-books" class="btn btn-primary"><i class="fas fa-plus"></i></router-link>
							</div>
						</div>
					</div>
					<!-- /Page Header -->
				
					<div class="row">
						<div class="col-sm-12">
						
							<div class="card card-table">
								<div class="card-body">
									<div class="table-responsive">
										<table class="table table-hover table-center mb-0 datatable" id="librarytable">
											<thead>
												<tr>
													<th>ID</th>
													<th>Name</th>
													<th>Language</th>
													<th>Department</th>
													<th>Class</th>
													<th>Type</th>
													<th>Status</th>
													<th class="text-end">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in library" :key="item.id">
													<td>{{item.library_id}}</td>
													<td>
														<h2>
															<a>{{item.name}}</a>
														</h2>
													</td>
													<td>{{item.language}}</td>
													<td>{{item.department}}</td>
													<td>{{item.class}}</td>
													<td>{{item.type}}</td>
													<td>
													<span class="badge badge-success" v-if="item.status =='In Stock'">In Stock</span>
                                                    <span class="badge badge-danger" v-else>Out of Stock</span>
													</td>
													<td class="text-end">
														<div class="actions">
															<router-link to="/edit-books" class="btn btn-sm bg-success-light me-2">
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
import library from '../../../assets/json/library.json';
import util from '../../../assets/utils/util'
const images = require.context('../../../assets/img/profiles', false, /\.png$|\.jpg$/)
export default {
	data() {
		return {
			library: library,
		}
	},
	mounted() {
		// Datatable
		util.datatable('#librarytable')
	},
	methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
		},
    },
}
</script>