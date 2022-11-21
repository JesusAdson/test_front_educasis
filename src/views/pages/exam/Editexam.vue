<template>
    <!-- Main Wrapper -->
        <div class="main-wrapper">
            <layout-header></layout-header>
			<layout-sidebar></layout-sidebar>
			
			<!-- Page Wrapper -->
            <div class="page-wrapper">
                <div class="content container-fluid">
				
					<editexam />
				
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
													<input type="text" class="form-control" value="Class Test">
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
													<input type="text" class="form-control" value="English">
												</div>
											</div>
											<div class="col-12 col-sm-6">  
												<div class="form-group">
													<label>Fees</label>
													<input type="text" class="form-control" value="$50">
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

export default {

	mounted() {

	},
}
</script>