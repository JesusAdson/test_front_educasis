<template>
    <!-- Main Wrapper -->
        <div class="main-wrapper">
            <layout-header></layout-header>
			<layout-sidebar></layout-sidebar>
			
			 <!-- Page Wrapper -->
            <div class="page-wrapper">
                <div class="content container-fluid">
				
					<edittimetable />
				
					<div class="row">
						<div class="col-sm-12">
						
							<div class="card">
								<div class="card-body">
									<form>
										<div class="row">
											<div class="col-12">
												<h5 class="form-title"><span>Time Table</span></h5>
											</div>
											<div class="col-12 col-sm-6">  
												<div class="form-group">
													<label>Teacher Id</label>
													<input type="text" class="form-control" value="PRE1534">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Name</label>
													<input type="text" class="form-control" value="Kozma  Tatari">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Class</label>
													<input type="text" class="form-control" value="11">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Section</label>
													<input type="text" class="form-control" value="B">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Subject</label>
													<input type="text" class="form-control" value="Mathematics">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Date</label>
													<input type="date" class="form-control">
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