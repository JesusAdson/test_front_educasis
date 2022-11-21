<template>
    <!-- Main Wrapper -->
        <div class="main-wrapper">
            <layout-header></layout-header>
			<layout-sidebar></layout-sidebar>
			
			<!-- Page Wrapper -->
            <div class="page-wrapper">
                <div class="content container-fluid">
				
					<editroom />
				
					<div class="row">
						<div class="col-sm-12">
						
							<div class="card">
								<div class="card-body">
									<form>
										<div class="row">
											<div class="col-12">
												<h5 class="form-title"><span>Room Information</span></h5>
											</div>
											<div class="col-12 col-sm-6">  
												<div class="form-group">
													<label>Block</label>
													<input type="text" class="form-control" value="A Block">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Room No</label>
													<input type="text" class="form-control" value="101">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Room Type</label>
													<vue-select :options="editroomtype" />
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>No of Beds</label>
													<input type="text" class="form-control" value="5">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Cose per Bed</label>
													<input type="text" class="form-control" value="$25">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Availability</label>
													<vue-select :options="editavailability" />
												</div>
											</div>
											<div class="col-12">
												<button type="submit" class="btn btn-primary">Submit</button>
											</div>
										</div>
									</form>
								</div>
							</div>
							
						</div>					
					</div>					
				</div>
				
			</div>
			<!-- /Page Wrapper -->
			
        </div>
		<!-- /Main Wrapper -->
</template>
<script>
import Vue from 'vue'
export default {
data() {
return {
editroomtype: ["Select Type", "Normal", "AC", "Suite"],
editavailability: ["Select Availability", "Available", "Not Available"]
}
},
components: {
},
mounted() {
},
}
</Script>