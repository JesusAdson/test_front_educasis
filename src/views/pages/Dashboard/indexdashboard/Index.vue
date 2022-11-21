<template>

		<!-- Main Wrapper -->

        <div class="main-wrapper">

            <layout-header></layout-header>

            <layout-sidebar></layout-sidebar>

			<!-- Page Wrapper -->

            <div class="page-wrapper">
			
            <div class="content container-fluid">
					
			<indexpage />

			<indexwidget />				

			<div class="row">

			<div class="col-md-12 col-lg-6">
						
			<revenuechart />
							
			</div>
						
			<div class="col-md-12 col-lg-6">
						
			<studentchart />

			</div>	
					
			</div>
					
		    <div class="row">
						
			<starstudent />

			<studentactivity />

			</div>

			<indexwidget1 />

			</div>

			<layout-footer></layout-footer>		

			</div>
			<!-- /Page Wrapper -->	
		
        </div>
		<!-- /Main Wrapper -->
		
</template>