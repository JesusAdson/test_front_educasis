<template>
    	<!-- Main Wrapper -->
        <div class="main-wrapper">
            <layout-header></layout-header>
			<layout-sidebar></layout-sidebar>
			
			<!-- Page Wrapper -->
            <div class="page-wrapper">
                <div class="content container-fluid">
				
					<addbook />
				
					<div class="row">
						<div class="col-sm-12">
						
							<div class="card">
								<div class="card-body">
									<form>
										<div class="row">
											<div class="col-12">
												<h5 class="form-title"><span>Book Information</span></h5>
											</div>
											<div class="col-12 col-sm-6">  
												<div class="form-group">
													<label>Book ID</label>
													<input type="text" class="form-control">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Book Name</label>
													<input type="text" class="form-control">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Language</label>
													<vue-select :options="adddlanguage" />
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Department</label>
													<input type="text" class="form-control">
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Class</label>
													<vue-select :options="adddclass" />
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Type</label>
													<vue-select :options="adddtype" />
												</div>
											</div>
											<div class="col-12 col-sm-6">
												<div class="form-group">
													<label>Status</label>
													<vue-select :options="adddstatus" />
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
      adddlanguage: ["Select Language", "English", "Turkish", "Chinese", "Spanish", "Arabic"],
      adddclass: ["Select Class", "LKG", "UKG", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
      adddtype: ["Select Type", "Book", "DVD", "CD", "Newspaper"],
      adddstatus: ["Select Status", "In Stock", "Out of Stock"]
    }
    },
    components: {
   
    },
    mounted() {
    },
  }
</Script>