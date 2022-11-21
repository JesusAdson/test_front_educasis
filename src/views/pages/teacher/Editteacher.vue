<template>
    <!-- Main Wrapper -->
        <div class="main-wrapper">
            <layout-header></layout-header>
			<layout-sidebar></layout-sidebar>
			
			<!-- Page Wrapper -->
            <div class="page-wrapper">
                <div class="content container-fluid">
				
					<editteacher />
				
					<div class="row">
						<div class="col-sm-12">
						
							<div class="card">
								<div class="card-body">
									<form>
										<div class="row">
											<div class="col-12">
												<h5 class="form-title"><span>Basic Details</span></h5>
											</div>
											<div class="col-12 col-sm-6">  
												<div class="form-group">
													<label>Teacher ID</label>
													<input type="text" class="form-control" value="PRE1234">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Name</label>
													<input type="text" class="form-control" value="Vincent">
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
													<label>Date of Birth</label>
													<input type="date" class="form-control">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Mobile</label>
													<input type="text" class="form-control" value="077 3499 9959">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Joining Date</label>
													<input type="date" class="form-control">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Qualification</label>
													<input class="form-control" type="text" value="Bachelor of Engineering">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Experience</label>
													<input class="form-control" type="text" value="5">
												</div>
											</div>
											<div class="col-12">
												<h5 class="form-title"><span>Login Details</span></h5>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Username</label>
													<input type="text" class="form-control" value="Vincent">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Email ID</label>
													<input type="email" class="form-control" value="vincent20@gmail.com">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Password</label>
													<input type="password" class="form-control" value="vincent">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Repeat Password</label>
													<input type="password" class="form-control" value="vincent">
												</div>
											</div>
											<div class="col-12">
												<h5 class="form-title"><span>Address</span></h5>
											</div>
											<div class="col-12">
												<div class="form-group">
												<label>Address</label>
													<input type="text" class="form-control" value="3979 Ashwood Drive">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>City</label>
													<input type="text" class="form-control" value="Omaha">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>State</label>
													<input type="text" class="form-control" value="Omaha">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Zip Code</label>
													<input type="text" class="form-control" value="3979">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Country</label>
													<input type="text" class="form-control" value="USA">
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
      addgender: ["Male", "Female", "Others"]
    }
    },
    components: {
   
    },
    mounted() {
    },
  }
</Script>