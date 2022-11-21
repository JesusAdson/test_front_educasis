<template>
    
		<!-- Main Wrapper -->
        <div class="main-wrapper">
            <layout-header></layout-header>
			<layout-sidebar></layout-sidebar>
			
			<!-- Page Wrapper -->
            <div class="page-wrapper">
                <div class="content container-fluid">
				
					<addexam />
				
					<div class="row">
						<div class="col-sm-12">
						
							<div class="card">
								<div class="card-body">
									<form>
										<div class="row">
											<div class="col-12">
												<h5 class="form-title"><span>Exam Information</span></h5>
											</div>
											<div class="col-12 col-sm-6">  
												<div class="form-group">
													<label>Exam Name</label>
													<input type="text" class="form-control">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Class</label>
													<vue-select :options="addclass" />
												</div>
											</div>
											<div class="col-12 col-sm-6">  
												<div class="form-group">
													<label>Subject</label>
													<input type="text" class="form-control">
												</div>
											</div>
											<div class="col-12 col-sm-6">  
												<div class="form-group">
													<label>Fees</label>
													<input type="text" class="form-control">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Start Time</label>
													<input type="time" class="form-control">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>End Time</label>
													<input type="time" class="form-control">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Event Date</label>
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
    addclass: ["Select Class", "LKG", "UKG", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
    }
    },
    components: {
   
    },
    mounted() {
    },
  }
</Script>