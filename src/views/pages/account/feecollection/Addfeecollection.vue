<template>
    <!-- Main Wrapper -->
        <div class="main-wrapper">
            <layout-header></layout-header>
			<layout-sidebar></layout-sidebar>
			
			<!-- Page Wrapper -->
            <div class="page-wrapper">
                <div class="content container-fluid">
				
					<addfeecollection />
				
					<div class="row">
						<div class="col-sm-12">
						
							<div class="card">
								<div class="card-body">
									<form>
										<div class="row">
											<div class="col-12">
												<h5 class="form-title"><span>Fees Information</span></h5>
											</div>
											<div class="col-12 col-sm-6">  
												<div class="form-group">
													<label>Student ID</label>
													<input type="text" class="form-control">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Student Name</label>
													<input type="text" class="form-control">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Gender</label>
													<vue-select :options="addgender" />
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Fees Type</label>
													<vue-select :options="addfeetype" />
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Fees Amount</label>
													<input type="text" class="form-control">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Paid Date</label>
													<input type="date" class="form-control">
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
      addgender: ["Select Gender", "Female", "Male", "Others"],
      addfeetype: ["Select Type", "Class Test", "Exam Fees", "Hostel Fees", "Transport Fees", "Mess Fees"]
    }
    },
    components: {
   
    },
    mounted() {
    },
  }
</Script>