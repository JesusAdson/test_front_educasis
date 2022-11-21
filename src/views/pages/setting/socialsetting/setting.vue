<template>
    	
		<!-- Main Wrapper -->
        <div class="main-wrapper">
            <layout-header></layout-header>
			<layout-sidebar></layout-sidebar>
			
			<!-- Page Wrapper -->
			<div class="page-wrapper">
				<div class="content container-fluid">
					
                    <socialsetting></socialsetting>
				
					<div class="row">
						<div class="col-lg-12">

							<!-- Settings Menu -->
							<settingtab></settingtab>
							<!-- Settings Menu -->

							<div class="row">
								<div class="col-md-6">
									<div class="card">
										<div class="card-header d-flex justify-content-between align-items-center">
											<h5 class="card-title">Google Login Credential</h5>
											<div class="status-toggle d-flex justify-content-between align-items-center">
												<input type="checkbox" id="status_1" class="check" checked="">
												<label for="status_1" class="checktoggle">checkbox</label>
											</div>
										</div>
										<div class="card-body pt-0">
											<form>
												<div class="settings-form">
													<div class="form-group form-placeholder">
														<label>Client ID <span class="star-red">*</span></label>
														<input type="text" class="form-control">
													</div>
													<div class="form-group form-placeholder">
														<label>Client Secret <span class="star-red">*</span></label>
														<input type="text" class="form-control">
													</div>
													<div class="form-group mb-0">
														<div class="settings-btns">
															<button type="submit" class="btn btn-orange">Save</button>
														</div>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="card">
										<div class="card-header d-flex justify-content-between align-items-center">
											<h5 class="card-title">Facebook</h5>
											<div class="status-toggle d-flex justify-content-between align-items-center">
												<input type="checkbox" id="status_2" class="check" checked="">
												<label for="status_2" class="checktoggle">checkbox</label>
											</div>
										</div>
										<div class="card-body pt-0">
											<form>
												<div class="settings-form">
													<div class="form-group form-placeholder">
														<label>App ID <span class="star-red">*</span></label>
														<input type="text" class="form-control">
													</div>
													<div class="form-group form-placeholder">
														<label>App Secret <span class="star-red">*</span></label>
														<input type="text" class="form-control">
													</div>
													<div class="form-group mb-0">
														<div class="settings-btns">
															<button type="submit" class="btn btn-orange">Save</button>
														</div>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="card">
										<div class="card-header d-flex justify-content-between align-items-center">
											<h5 class="card-title">Twiter Login Credential</h5>
											<div class="status-toggle d-flex justify-content-between align-items-center">
												<input type="checkbox" id="status_3" class="check">
												<label for="status_3" class="checktoggle">checkbox</label>
											</div>
										</div>
										<div class="card-body pt-0">
											<form>
												<div class="settings-form">
													<div class="form-group form-placeholder">
														<label>Client ID <span class="star-red">*</span></label>
														<input type="text" class="form-control">
													</div>
													<div class="form-group form-placeholder">
														<label>Client Secret <span class="star-red">*</span></label>
														<input type="text" class="form-control">
													</div>
													<div class="form-group mb-0">
														<div class="settings-btns">
															<button type="submit" class="btn btn-orange">Save</button>
														</div>
													</div>
												</div>
											</form>
										</div>
									</div>
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
        timezone: ["(UTC +5:30) Antarctica/Palmer", "(UTC+05:30) India"],
        dateformat: ["15 May 2016", "15/05/2016", "15.05.2016", "15-05-2016", "05/15/2016", "2016/05/15","2016-05-15"],
        timeformat: ["12 Hours", "24 Hours", "36 Hours", "48 Hours", "60 Hours"],
        currency: ["$", "₹", "£", "€"]
      }
      },
      components: {
     
      },
      mounted() {
      },
    }
  </Script>