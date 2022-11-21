<template>
    <!-- Main Wrapper -->
        <div class="main-wrapper">
            <layout-header></layout-header>
			<layout-sidebar></layout-sidebar>
			
			<!-- Page Wrapper -->
            <div class="page-wrapper">
             
             <div class="content container-fluid">
				
					<expenses />
				
					<div class="row">
						<div class="col-sm-12">
						
							<div class="card card-table">
								<div class="card-body">
									<div class="table-responsive">
										<table class="table table-hover table-center mb-0 datatable" id="expensestable">
											<thead>
												<tr>
													<th>ID</th>
													<th>Item Name</th>
													<th>Item Quality</th>
													<th>Amount</th>
													<th>Purchase Source</th>
													<th>Purchase Date</th>
													<th>Purchase By</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in expenses" :key="item.id">
													<td>{{item.expense_id}}</td>
													<td>
														<h2>
															<a>{{item.item_name}}</a>
														</h2>
													</td>
													<td>{{item.item_quantity}}</td>
													<td>{{item.amount}}</td>
													<td>{{item.purchase_source}}</td>													
													<td>{{item.purchase_date}}</td>
													<td>{{item.purchase_by}}</td>
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
import expenses from '../../../../assets/json/expenses.json';
import util from '../../../../assets/utils/util'
const images = require.context('../../../../assets/img/profiles', false, /\.png$|\.jpg$/)
export default {
	data() {
		return {
			expenses: expenses,
		}
	},
	mounted() {
		// Datatable
		util.datatable('#expensestable')
	},
	methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
		},
    },
}
</script>