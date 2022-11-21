<template>
<!-- Revenue Chart -->
							<div class="card card-chart">
								<div class="card-header">
									<div class="row align-items-center">
										<div class="col-6">
											<h5 class="card-title">Revenue</h5>
										</div>
										<div class="col-6">
											<ul class="list-inline-group text-end mb-0 pl-0">
												<li class="list-inline-item">
													  <div class="form-group mb-0 amount-spent-select">
														<select class="form-control form-control-sm form-select">
														  <option>Today</option>
														  <option>Last Week</option>
														  <option>Last Month</option>
														</select>
													</div>
												</li>
											</ul>                                        
										</div>
									</div>						
								</div>
								<div class="card-body">
									<div id="apexcharts-area"></div>
								</div>
							</div>
							<!-- /Revenue Chart -->
</template>
<script>
import ApexCharts from 'apexcharts'

export default {
    data() {
        return {
            revenueOptions : {
                chart: {
                    height: 350,
                    type: "area",
                    toolbar: {
                        show: false
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: "smooth"
                },
                series: [{
                    name: "Teachers",
                    data: [45, 60, 75, 51, 42, 42, 30]
                }, {
                    name: "Students",
                    color: '#FFBC53',
                    data: [24, 48, 56, 32, 34, 52, 25]
                }],
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                }
            },
        }
    },
    mounted() {
        let areaChart = new ApexCharts(
		document.querySelector("#apexcharts-area"),
		this.revenueOptions
	);
        areaChart.render();
    }
}
</script>