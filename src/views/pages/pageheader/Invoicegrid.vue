<template>
<div class="page-header">
						<div class="row align-items-center">
							<div class="col">
								<h3 class="page-title">Invoice Grid</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
									<li class="breadcrumb-item active">Invoice Grid</li>
								</ul>
							</div>
							<div class="col-auto">
								<router-link to="/invoices" class="invoices-links">
									<i class="feather feather-list"></i>
                                </router-link>
								<router-link to="/invoice-grid" class="invoices-links active">
									<i class="feather feather-grid"></i>
                                </router-link>
							</div>
						</div>
					</div>
</template>