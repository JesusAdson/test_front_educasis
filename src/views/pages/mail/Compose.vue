<template>
    
		<!-- Main Wrapper -->
        <div class="main-wrapper">
		
			<layout-header></layout-header>
			<layout-sidebar></layout-sidebar>
			
			<!-- Page Wrapper -->
            <div class="page-wrapper">
                <div class="content container-fluid">
				
					<compose />
					
					<div class="row">
						<div class="col-lg-3 col-md-4">
							<composesidebar />
						</div>
						<div class="col-lg-9 col-md-8">
							<div class="card">
								<div class="card-body">
									<form>
										<div class="form-group">
											<input type="email" placeholder="To" class="form-control">
										</div>
										<div class="row">
											<div class="col-md-6">
												<div class="form-group">
													<input type="email" placeholder="Cc" class="form-control">
												</div>
											</div>
											<div class="col-md-6">
												<div class="form-group">
													<input type="email" placeholder="Bcc" class="form-control">
												</div>
											</div>
										</div>
										<div class="form-group">
											<input type="text" placeholder="Subject" class="form-control">
										</div>
										<div class="form-group">
											<textarea rows="4" class="form-control summernote" placeholder="Enter your message here"></textarea>
										</div>
										<div class="form-group mb-0">
											<div class="text-center">
											<router-link to="/inbox">
												<button class="btn btn-primary"><i class="fas fa-paper-plane m-r-5"></i> <span>Send</span></button>
											</router-link>
												<button class="btn btn-success m-l-5" type="button"> <i class="far fa-save m-r-5"></i> <span>Draft</span></button>
												<button class="btn btn-danger m-l-5" type="button"> <i class="far fa-trash-alt m-r-5"></i><span>Delete</span></button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				
				</div>			
			</div>
			<!-- /Main Wrapper -->
		
        </div>
		<!-- /Main Wrapper -->
</template>

<script>
export default {
	mounted() {
	
	}
}
</script>