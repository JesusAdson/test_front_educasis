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
                            <h3 class="page-title">Invoices</h3>
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
                                <li class="breadcrumb-item"><router-link to="/invoices">Invoice</router-link></li>
                                <li class="breadcrumb-item active">Invoices Paid</li>
                            </ul>
                        </div>
                        <div class="col-auto">
                            <router-link to="/invoices" class="invoices-links active">
                                <i class="feather feather-list"></i>
                            </router-link>
                            <router-link to="/invoice-grid" class="invoices-links">
                                <i class="feather feather-grid"></i>
                            </router-link>
                        </div>
                    </div>
                </div>
                <!-- /Page Header -->
           
                <!-- Report Filter -->
                <invoicefilter></invoicefilter>
                <!-- /Report Filter -->

                <invoicetabfilter></invoicetabfilter>

                <invoicewidget></invoicewidget>

                <div class="row">
                    <div class="col-sm-12">
                        <div class="card card-table"> 
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-stripped table-hover datatable" id="invoicepaid">
                                        <thead class="thead-light">
                                            <tr>
                                               <th>Invoice number</th>
                                               <th>Created on</th>
                                               <th>Invoice to</th>
                                               <th>Amount</th>
                                               <th>Paid on</th>
                                               <th>Status</th>
                                               <th class="text-end">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in invoicepaid" :key="item.id">
                                                <td>
                                                    <label class="custom_check">
                                                        <input type="checkbox" name="invoice">
                                                        <span class="checkmark"></span> 
                                                    </label>
                                                    <router-link to="/view-invoice" class="invoice-link">{{item.no}}</router-link>
                                                </td>
                                                <td>{{item.date}}</td>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <router-link to="/profile"><img class="avatar avatar-sm me-2 avatar-img rounded-circle" :src="loadImg(item.img)" alt="User Image"> {{item.name}}</router-link>
                                                    </h2>
                                                </td>
                                                <td class="text-primary">{{item.amt}}</td>
                                                <td>{{item.date1}}</td>
                                                <td><span class="badge bg-success-light">{{item.status}}</span></td>
                                                <td class="text-end">
                                                    <router-link to="/edit-invoice" class="btn btn-sm btn-white text-success me-2"><i class="far fa-edit me-1"></i> Edit</router-link> 
                                                    <a class="btn btn-sm btn-white text-danger" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_paid"><i class="far fa-trash-alt me-1"></i>Delete</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Page Wrapper -->
        
        <!-- Delete Paid Modal -->
        <div class="modal custom-modal fade" id="delete_paid" role="dialog">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="form-header">
                            <h3>Delete Invoice Paid</h3>
                            <p>Are you sure want to delete?</p>
                        </div>
                        <div class="modal-btn delete-action">
                            <div class="row">
                                <div class="col-6">
                                    <a href="javascript:void(0);" class="btn btn-primary paid-continue-btn w-100">Delete</a>
                                </div>
                                <div class="col-6">
                                    <a href="javascript:void(0);" data-bs-dismiss="modal" class="btn btn-primary paid-cancel-btn w-100">Cancel</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Delete Paid Modal -->
			
        </div>
		<!-- /Main Wrapper -->
</template>
<script>
	import invoicepaid from '../../../../assets/json/invoicepaid.json'
    import util from '../../../../assets/utils/util'
	const images = require.context('../../../../assets/img/profiles', false, /\.png$|\.jpg$/)
	export default {
	mounted() {
        util.datatable('#invoicepaid')
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
            invoicepaid: invoicepaid
        }
    }
	}
	</script>
