<template>
    
		<!-- Main Wrapper -->
        <div class="main-wrapper">
            <layout-header></layout-header>
			<layout-sidebar></layout-sidebar>
			
			<!-- Page Wrapper -->
            <div class="page-wrapper">
                <div class="content container-fluid">
				
					<editstudent />
				
					<div class="row">
						<div class="col-sm-12">
						
							<div class="card">
								<div class="card-body">
									<form>
										<div class="row">
											<div class="col-12">
												<h5 class="form-title"><span>Student Information</span></h5>
											</div>
											<div class="col-12 col-sm-6">  
												<div class="form-group">
													<label>First Name</label>
													<input type="text" class="form-control" value="Nathan Humphries">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Last Name</label>
													<input type="text" class="form-control" value="Stephen Marley">
												</div>
											</div>
											<div class="col-12 col-sm-6">  
												<div class="form-group">
													<label>Student Id</label>
													<input type="text" class="form-control" value="PRE1234">
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
													<div>
														<input type="date" class="form-control">
													</div>
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Class</label>
													<input type="text" class="form-control" value="10">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Religion</label>
													<input type="text" class="form-control" value="Religion">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Joining Date</label>
													<div>
														<input type="date" class="form-control">
													</div>
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Mobile Number</label>
													<input type="text" class="form-control" value="077 3499 9959">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Admission Number</label>
													<input type="text" class="form-control" value="PRE1252">
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
													<label>Student Image</label>
													<input type="file" class="form-control">
												</div>
											</div>
											
											<div class="col-12">
												<h5 class="form-title"><span>Parent Information</span></h5>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Father's Name</label>
													<input type="text" class="form-control" value="Stephen Marley">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Father's Occupation</label>
													<input type="text" class="form-control" value="Technician">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Father's Mobile</label>
													<input type="text" class="form-control" value="	402 221 7523">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Father's Email</label>
													<input type="email" class="form-control" value="stephenmarley@gmail.com">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Mother's Name</label>
													<input type="text" class="form-control" value="Cleary Wong">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Mother's Occupation</label>
													<input type="text" class="form-control" value="Home Maker">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Mother's Mobile</label>
													<input type="text" class="form-control" value="026 7318 4366">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Mother's Email</label>
													<input type="email" class="form-control" value="clearywong@gmail.com">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Present Address</label>
													<textarea class="form-control">86 Lamphey Road, Thelnetham</textarea>
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Permanent Address</label>
													<textarea class="form-control">86 Lamphey Road, Thelnetham</textarea>
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
      addgender: ["Select Gender", "Female", "Male", "Others"]
    }
    },
    components: {
   
    },
    mounted() {
    },
  }
</Script>