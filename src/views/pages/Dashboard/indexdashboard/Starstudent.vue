<template>
<div class="col-md-6 d-flex">						
							<!-- Star Students -->
							<div class="card flex-fill">
								<div class="card-header">
									<h5 class="card-title">Star Students</h5>
								</div>
								<div class="card-body">
									<div class="table-responsive">
										<table class="table table-hover table-center">
											<thead class="thead-light">
												<tr>
													<th>ID</th>
													<th>Name</th>
													<th class="text-center">Marks</th>
													<th class="text-center">Percentage</th>
													<th class="text-end">Year</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in starstudent" :key="item.id">
													<td class="text-nowrap">
														<div>{{item.idno}}</div>
													</td>
													<td class="text-nowrap">{{item.name}}</td>
													<td class="text-center">{{item.marks}}</td>
													<td class="text-center">{{item.percentage}}</td>
													<td class="text-end">
														<div>{{item.year}}</div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
							<!-- /Star Students -->							
						</div>
</template>
<script>
  import starstudent from '../../../../assets/json/starstudent.json';
  import Vue from 'vue'
  export default {
     data() {
    return {
      starstudent: starstudent,
    }
    },
    components: {
   
    },
    mounted() {
    }
  }
</Script>