<template>
    	
		<!-- Main Wrapper -->
        <div class="main-wrapper">
            <layout-header></layout-header>
			<layout-sidebar></layout-sidebar>
			
			<!-- Page Wrapper -->
			<div class="page-wrapper">
				<div class="content container-fluid">
			
					<!-- Page Header -->
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
					<!-- /Page Header -->
			   
					<!-- Report Filter -->
					<invoicefilter></invoicefilter>
					<!-- /Report Filter -->

					<div class="card invoices-tabs-card border-0">
						<div class="card-body card-body pt-0 pb-0">
							<div class="invoices-main-tabs border-0 pb-0">
								<div class="row align-items-center">
									<div class="col-lg-12 col-md-12">
										<div class="invoices-settings-btn invoices-settings-btn-one">
											<router-link to="/invoices-settings" class="invoices-settings-icon">
												<i class="feather feather-settings"></i>
                                            </router-link>
											<router-link to="/add-invoice" class="btn">
												<i class="feather feather-plus-circle"></i> New Invoice
                                            </router-link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div class="row">
                        <div class="col-sm-6 col-lg-4 col-xl-3 d-flex" v-for="item in grid" :key="item.id">
                            <div class="card invoices-grid-card w-100">
                                <div class="card-header d-flex justify-content-between align-items-center">
                                    <router-link to="/view-invoice" class="invoice-grid-link">{{item.no}}</router-link>
                                    <div class="dropdown dropdown-action">
                                        <a href="javascript:void(0);" class="action-icon" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-ellipsis-v"></i></a>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <router-link class="dropdown-item" to="/edit-invoice"><i class="far fa-edit me-2"></i>Edit</router-link>
                                            <router-link class="dropdown-item" to="/view-invoice"><i class="far fa-eye me-2"></i>View</router-link>
                                            <a class="dropdown-item" href="javascript:void(0);"><i class="far fa-trash-alt me-2"></i>Delete</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-middle">
                                    <h2 class="card-middle-avatar">
                                        <router-link to="/profile"><img class="avatar avatar-sm me-2 avatar-img rounded-circle" :src="loadImg(item.img)" alt="User Image"> {{item.name}}</router-link>
                                    </h2>
                                </div>
                                <div class="card-body">
                                    <div class="row align-items-center">
                                        <div class="col">
                                            <span><i class="far fa-money-bill-alt"></i> {{item.name1}}</span>
                                            <h6 class="mb-0">{{item.rate}}</h6>
                                        </div>
                                        <div class="col-auto">
                                            <span><i class="far fa-calendar-alt"></i> {{item.name2}}</span>
                                            <h6 class="mb-0">{{item.date}}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <div class="row align-items-center">
                                        <div class="col-auto">
                                            <span class="badge bg-success-dark">{{item.status}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="invoice-load-btn">
                                <a href="javascript:void(0);" class="btn">
                                    <span class="spinner-border text-primary"></span> Load more
                                </a>
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
	import grid from '../../../assets/json/grid.json'
	const images = require.context('../../../assets/img/profiles', false, /\.png$|\.jpg$/)
	export default {
	mounted() {
        $(function() {
    $("input[name='invoice']").click(function() {
        if ($("#chkYes").is(":checked")) {
            $("#show-invoices").show();
        } else {
            $("#show-invoices").hide();
        }
    });
});
$(document).on("click",".add-links1",function () {
    var experiencecontent = '<div class="links-cont">' +
        '<div class="service-amount">' +
            '<a href="javascript:void(0);" class="service-trash1"><i class="fa fa-minus-circle me-1"></i>Service Charge</a> <span>$ 4</span' +
        '</div>' +
    '</div>';
    
    $(".links-info-one").append(experiencecontent);
    return false;
});
$(document).on("click",".add-links-one",function () {
		var experiencecontent = '<div class="links-cont-discount">' +
			'<div class="service-amount">' +
				'<a href="javascript:void(0);" class="service-trash-one"><i class="fa fa-minus-circle me-1"></i>Offer new</a> <span>$ 4 %</span' +
			'</div>' +
		'</div>';
		
        $(".links-info-discount").append(experiencecontent);
        return false;
    });
    // Checkbox Select
$('.app-listing .selectBox').on("click", function() {
    $(this).parent().find('#checkBoxes').fadeToggle();
    $(this).parent().parent().siblings().find('#checkBoxes').fadeOut();
});
$('.invoices-main-form .selectBox').on("click", function() {
    $(this).parent().find('#checkBoxes-one').fadeToggle();
    $(this).parent().parent().siblings().find('#checkBoxes-one').fadeOut();
});
//Checkbox Select
if($('.SortBy').length > 0) {
    var show = true;
    var checkbox1 = document.getElementById("checkBox");
    $('.selectBoxes').on("click", function() {
        
        if (show) {
            checkbox1.style.display = "block";
            show = false;
        } else {
            checkbox1.style.display = "none";
            show = true;
        }
    });		
}
// Invoices Checkbox Show
$(function() {
    $("input[name='invoice']").click(function() {
        if ($("#chkYes").is(":checked")) {
            $("#show-invoices").show();
        } else {
            $("#show-invoices").hide();
        }
    });
});

    if ($('.datetimepicker').length > 0) {
        $('.datetimepicker').datetimepicker({
            format: 'DD/MM/YYYY',
            icons: {
                up: "fa fa-angle-up",
                down: "fa fa-angle-down",
                next: 'fa fa-angle-right',
                previous: 'fa fa-angle-left'
            }
        });
    }
	},
	methods:{
        loadImg(imgPath) {
            return images('./' + imgPath).default
        },
    },
	data() {
        return {
            grid: grid
        }
    }
	}
	</script>
