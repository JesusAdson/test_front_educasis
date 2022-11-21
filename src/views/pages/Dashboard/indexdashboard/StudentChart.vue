<template>
<!-- Student Chart -->
							<div class="card card-chart">
								<div class="card-header">
									<div class="row align-items-center">
										<div class="col-6">
											<h5 class="card-title">Number of Students</h5>
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
									<div id="bar"></div>
								</div>
							</div>
							<!-- /Student Chart -->	
</template>
<script>
import ApexCharts from 'apexcharts'

export default {
    data() {
        return {
            noofstudentsOptions : {
                chart: {
                    type: 'bar',
                    height: 350,
                    width: '100%',
                    stacked: true,
                    toolbar: {
                        show: false
                    },
                },
                dataLabels: {
                    enabled: false
                },
                plotOptions: {
                    bar: {
                        columnWidth: '45%',
                    }
                },
                series: [{
                    name: "Boys",
                    color: '#fdbb38',
                    data: [420, 532, 516, 575, 519, 517, 454, 392, 262, 383, 446, 551, 563, 421, 563, 254, 452],
                }, {
                    name: "Girls",
                    color: '#19affb',
                    data: [336, 612, 344, 647, 345, 563, 256, 344, 323, 300, 455, 456, 526, 652, 325, 425, 436],
                }],
                labels: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
                xaxis: {
                    labels: {
                        show: false
                    },
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                },
                yaxis: {
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        style: {
                            colors: '#777'
                        }
                    }
                },
                title: {
                    text: '',
                    align: 'left',
                    style: {
                        fontSize: '18px'
                    }
                }
	        }
        }
    },
    mounted() {
        let barChart = new ApexCharts(
		document.querySelector("#bar"),
		this.noofstudentsOptions
	);
	    barChart.render();
    }
}
</script>