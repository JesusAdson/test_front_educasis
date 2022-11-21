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
						<div class="row">
							<div class="col-sm-12">
								<h3 class="page-title">Welcome Bruklin!</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
									<li class="breadcrumb-item active">Student Dashboard</li>
								</ul>
							</div>
						</div>
					</div>
					<!-- /Page Header -->

					<!-- Overview Section -->
					<div class="row">
						<div class="col-xl-3 col-sm-6 col-12 d-flex">
							<div class="card bg-nine w-100">
								<div class="card-body">
									<div class="db-widgets d-flex justify-content-between align-items-center">
										<div class="db-icon">
											<i class="fas fa-book-open"></i>
										</div>
										<div class="db-info">
											<h3>04/06</h3>
											<h6>All Courses</h6>
										</div>										
									</div>
								</div>
							</div>
						</div>

						<div class="col-xl-3 col-sm-6 col-12 d-flex">
							<div class="card bg-six w-100">
								<div class="card-body">
									<div class="db-widgets d-flex justify-content-between align-items-center">
										<div class="db-icon">
											<i class="fas fa-file-alt"></i>
										</div>
										<div class="db-info">
											<h3>40/60</h3>
											<h6>All Projects</h6>
										</div>										
									</div>
								</div>
							</div>
						</div>

						<div class="col-xl-3 col-sm-6 col-12 d-flex">
							<div class="card bg-ten w-100">
								<div class="card-body">
									<div class="db-widgets d-flex justify-content-between align-items-center">
										<div class="db-icon">
											<i class="fas fa-clipboard-list"></i>
										</div>
										<div class="db-info">
											<h3>30/50</h3>
											<h6>Test Attended</h6>
										</div>										
									</div>
								</div>
							</div>
						</div>

						<div class="col-xl-3 col-sm-6 col-12 d-flex">
							<div class="card bg-eleven w-100">
								<div class="card-body">
									<div class="db-widgets d-flex justify-content-between align-items-center">
										<div class="db-icon">
											<i class="fas fa-clipboard-check"></i>
										</div>
										<div class="db-info">
											<h3>15/20</h3>
											<h6>Test Passed</h6>
										</div>										
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- /Overview Section -->				

					<!-- Student Dashboard -->
					<div class="row">
						<div class="col-12 col-lg-12 col-xl-9">

							<div class="card flex-fill">
								<div class="card-header">
									<div class="row align-items-center">
										<div class="col-6">
											<h5 class="card-title">Today’s Lesson</h5>
										</div>
										<div class="col-6">
											<span class="float-end view-link"><a href="javascript:void(0);">View All Courses</a></span>
										</div>
									</div>						
								</div>

								<div class="dash-circle">
									<div class="row">
										<div class="col-12 col-lg-6 col-xl-6 dash-widget3">
											<div class="card-body dash-widget1">
												<div class="circle-bar circle-bar2">
													<CircleProgress
    :percent="20"
    :viewport="true"
    :show-percent="true"
	:angle="180"
  /> 
													<h6>Lesson Learned</h6>
													<h4>10 <span>/ 50</span></h4>
												</div>
												<div class="dash-details">
													<h4>Facilisi etiam</h4>
													<ul>
														<li><i class="fas fa-clock"></i> 2.30pm - 3.30pm</li>
														<li><i class="fas fa-book-open"></i> 5 Lessons</li>
														<li><i class="fas fa-hourglass-end"></i> 60 Minutes</li>
														<li><i class="fas fa-clipboard-check"></i> 5 Asignment</li>
													</ul>
													<div class="dash-btn">
														<button type="submit" class="btn btn-info btn-border">Skip</button>
														<button type="submit" class="btn btn-info">Continue</button>
													</div>
												</div>
											</div>
										</div>

										<div class="col-12 col-lg-6 col-xl-6 dash-widget4">
											<div class="card-body dash-widget1 dash-widget2">
												<div class="circle-bar circle-bar3">
													<CircleProgress
    :percent="50"
    :viewport="true"
    :show-percent="true"
	:angle="180"
  /> 
													<h6>Lesson Learned</h6>
													<h4>25 <span>/ 50</span></h4>
												</div>
												<div class="dash-details">
													<h4>Augue mauris</h4>
													<ul>
														<li><i class="fas fa-clock"></i> 3.30pm - 4.30pm</li>
														<li><i class="fas fa-book-open"></i> 6 Lessons</li>
														<li><i class="fas fa-hourglass-end"></i> 60 Minutes</li>
														<li><i class="fas fa-clipboard-check"></i> 6 Asignment</li>
													</ul>
													<div class="dash-btn">
														<button type="submit" class="btn btn-info btn-border">Skip</button>
														<button type="submit" class="btn btn-info">Continue</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col-12 col-lg-12 col-xl-8 d-flex">
									<div class="card flex-fill">
										<div class="card-header">
											<div class="row align-items-center">
												<div class="col-6">
													<h5 class="card-title">Learning Activity</h5>
												</div>
												<div class="col-6">
													<ul class="list-inline-group text-end mb-0 ps-0">
														<li class="list-inline-item">
															  <div class="form-group mb-0 amount-spent-select">
																<select class="form-control form-control-sm form-select">
																  <option>Weekly</option>
																  <option>Monthly</option>
																  <option>Yearly</option>
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
								</div>
								<div class="col-12 col-lg-12 col-xl-4 d-flex">
									<div class="card flex-fill">
										<div class="card-header">
											<h5 class="card-title">Learning History</h5>
										</div>
										<div class="card-body">
											<div class="teaching-card">
												<ul class="activity-feed">
													<li class="feed-item">
														<div class="feed-date1">Sep 05, 9 am - 10 am (60min)</div>
														<span class="feed-text1"><a>Lorem ipsum dolor</a></span>
														<p><span>In Progress</span></p>
													</li>
													<li class="feed-item">
														<div class="feed-date1">Sep 04, 2 pm - 3 pm (70min)</div>
														<span class="feed-text1"><a>Et dolore magna</a></span>
														<p>Completed</p>
													</li>
													<li class="feed-item">
														<div class="feed-date1">Sep 02, 1 pm - 2 am (80min)</div>
														<span class="feed-text1"><a>Exercitation ullamco</a></span>
														<p><span>In Progress</span></p>
													</li>
													<li class="feed-item">
														<div class="feed-date1">Aug 30, 10 am - 12 pm (90min)</div>
														<span class="feed-text1"><a>Occaecat cupidatat</a></span>
														<p>Completed</p>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
								
						</div>

						<div class="col-12 col-lg-12 col-xl-3 d-flex">
							<div class="card flex-fill">
								<div class="card-header">
									<div class="row align-items-center">
										<div class="col-12">
											<h5 class="card-title">Calendar</h5>
										</div>
									</div>									
								</div>
								<div class="card-body">
									<div id="calendar-doctor" class="calendar-container"></div>
									<div class="calendar-info calendar-info1">
										<div class="calendar-details">
											<p>09 am</p>
											<h6 class="calendar-blue d-flex justify-content-between align-items-center">Fermentum <span>09am - 10pm</span></h6>
										</div>
										<div class="calendar-details">
											<p>10 am</p>
											<h6 class="calendar-violet d-flex justify-content-between align-items-center">Pharetra et <span>10am - 11am</span></h6>
										</div>
										<div class="calendar-details">
											<p>11 am</p>
											<h6 class="calendar-red d-flex justify-content-between align-items-center">Break <span>11am - 11.30am</span></h6>
										</div>
										<div class="calendar-details">
											<p>12 pm</p>
											<h6 class="calendar-orange d-flex justify-content-between align-items-center">Massa <span>11.30am - 12.00pm</span></h6>
										</div>
										<div class="calendar-details">
											<p>09 am</p>
											<h6 class="calendar-blue d-flex justify-content-between align-items-center">Fermentum <span>09am - 10pm</span></h6>
										</div>
									</div>
								</div>
							</div>
						</div>	
					</div>
					<!-- /Student Dashboard -->
				</div>
				
				 <layout-footer></layout-footer>

			</div>
			<!-- /Page Wrapper -->
		
        </div>
		<!-- /Main Wrapper -->
		
</template>

<script>
import ApexCharts from 'apexcharts'
import simpleCalendar from 'simple-calendar'
import CircleProgress from "vue3-circle-progress";
import "vue3-circle-progress/dist/circle-progress.css";
import { ref } from "vue";

export default {
	components: {
		 CircleProgress: CircleProgress,
	},
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

			const percent = ref(75);
		setInterval(() => {
        if (percent.value === 25) {
          percent.value = 75;
        } else {
          percent.value = 25;
        }
      }, 1000);



     // Create the defaults once
  var pluginName = "simpleCalendar",
    defaults = {
      months: ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'], //string of months starting from january
      days: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'], //string of days starting from sunday
      displayYear: true, // display year in header
      fixedStartDay: true, // Week begin always by monday or by day set by number 0 = sunday, 7 = saturday, false = month always begin by first day of the month
      displayEvent: true, // display existing event
      disableEventDetails: false, // disable showing event details
      disableEmptyDetails: false, // disable showing empty date details
      events: [], // List of event
      onInit: function (calendar) {}, // Callback after first initialization
      onMonthChange: function (month, year) {}, // Callback on month change
      onDateSelect: function (date, events) {}, // Callback on date selection
      onEventSelect: function () {},              // Callback fired when an event is selected     - see $(this).data('event')
      onEventCreate: function( $el ) {},          // Callback fired when an HTML event is created - see $(this).data('event')
      onDayCreate:   function( $el, d, m, y ) {}  // Callback fired when an HTML day is created   - see $(this).data('today'), .data('todayEvents')
    };

  // The actual plugin constructor
  function Plugin(element, options) {
    this.element = element;
    this.settings = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
    this.currentDate = new Date();
    this.init();
  }

  // Avoid Plugin.prototype conflicts
  $.extend(Plugin.prototype, {
    init: function () {
      var container = $(this.element);
      var todayDate = this.currentDate;

      var calendar = $('<div class="calendar"></div>');
      var header = $('<header>' +
        '<h2 class="month"></h2>' +
        '<a class="simple-calendar-btn btn-prev" href="javascript:void(0);"></a>' +
        '<a class="simple-calendar-btn btn-next" href="javascript:void(0);"></a>' +
        '</header>');

      this.updateHeader(todayDate, header);
      calendar.append(header);

      this.buildCalendar(todayDate, calendar);
      container.append(calendar);

      this.bindEvents();
      this.settings.onInit(this);
    },

    //Update the current month header
    updateHeader: function (date, header) {
      var monthText = this.settings.months[date.getMonth()];
      monthText += this.settings.displayYear ? ' <div class="year">' + date.getFullYear() : '</div>';
      header.find('.month').html(monthText);
    },

    //Build calendar of a month from date
    buildCalendar: function (fromDate, calendar) {
      var plugin = this;

      calendar.find('table').remove();

      var body = $('<table></table>');
      var thead = $('<thead></thead>');
      var tbody = $('<tbody></tbody>');

      //setting current year and month
      var y = fromDate.getFullYear(), m = fromDate.getMonth();

      //first day of the month
      var firstDay = new Date(y, m, 1);
      //last day of the month
      var lastDay = new Date(y, m + 1, 0);
      // Start day of weeks
      var startDayOfWeek = firstDay.getDay();

      if (this.settings.fixedStartDay !== false) {
        // Backward compatibility
        startDayOfWeek =  this.settings.fixedStartDay ? 1 : this.settings.fixedStartDay;

        // If first day of month is different of startDayOfWeek
        while (firstDay.getDay() !== startDayOfWeek) {
          firstDay.setDate(firstDay.getDate() - 1);
        }
        // If last day of month is different of startDayOfWeek + 7
        while (lastDay.getDay() !== ((startDayOfWeek + 7) % 7)) {
          lastDay.setDate(lastDay.getDate() + 1);
        }
      }

      //Header day in a week ( (x to x + 7) % 7 to start the week by monday if x = 1)
      for (var i = startDayOfWeek; i < startDayOfWeek + 7; i++) {
        thead.append($('<td>' + this.settings.days[i % 7].substring(0, 3) + '</td>'));
      }

      //For firstDay to lastDay
      for (var day = firstDay; day <= lastDay; day.setDate(day.getDate())) {
        var tr = $('<tr></tr>');
        //For each row
        for (var i = 0; i < 7; i++) {
          var td = $('<td><div class="day" data-date="' + day.toISOString() + '">' + day.getDate() + '</div></td>');

          var $day = td.find('.day');

          //if today is this day
          if (day.toDateString() === (new Date).toDateString()) {
            $day.addClass("today");
          }

          //if day is not in this month
          if (day.getMonth() != fromDate.getMonth()) {
            $day.addClass("wrong-month");
          }

          // filter today's events
          var todayEvents = plugin.getDateEvents(day);

          if (todayEvents.length && plugin.settings.displayEvent) {
            $day.addClass(plugin.settings.disableEventDetails ? "has-event disabled" : "has-event");
          } else {
            $day.addClass(plugin.settings.disableEmptyDetails ? "disabled" : "");
          }

          // associate some data available from the onDayCreate callback
          $day.data( 'todayEvents', todayEvents );

          // simplify further customization
          this.settings.onDayCreate( $day, day.getDate(), m, y );

          tr.append(td);
          day.setDate(day.getDate() + 1);
        }
        tbody.append(tr);
      }

      body.append(thead);
      body.append(tbody);

      var eventContainer = $('<div class="event-container"><div class="close"></div><div class="event-wrapper"></div></div>');

      calendar.append(body);
      calendar.append(eventContainer);
    },
    changeMonth: function (value) {
      this.currentDate.setMonth(this.currentDate.getMonth() + value, 1);
      this.buildCalendar(this.currentDate, $(this.element).find('.calendar'));
      this.updateHeader(this.currentDate, $(this.element).find('.calendar header'));
      this.settings.onMonthChange(this.currentDate.getMonth(), this.currentDate.getFullYear())
    },
    //Init global events listeners
    bindEvents: function () {
      var plugin = this;

      //Click previous month
      $(plugin.element).on('click', '.btn-prev', function ( e ) {
        plugin.changeMonth(-1)
        e.preventDefault();
      });

      //Click next month
      $(plugin.element).on('click', '.btn-next', function ( e ) {
        plugin.changeMonth(1);
        e.preventDefault();
      });

      //Binding day event
      $(plugin.element).on('click', '.day', function (e) {
        var date = new Date($(this).data('date'));
        var events = plugin.getDateEvents(date);
        if (!$(this).hasClass('disabled')) {
          plugin.fillUp(e.pageX, e.pageY);
          plugin.displayEvents(events);
        }
        plugin.settings.onDateSelect(date, events);
      });

      //Binding event container close
      $(plugin.element).on('click', '.event-container .close', function (e) {
        plugin.empty(e.pageX, e.pageY);
      });
    },
    displayEvents: function (events) {
      var plugin = this;
      var container = $(this.element).find('.event-wrapper');

      events.forEach(function (event) {
        var startDate = new Date(event.startDate);
        var endDate = new Date(event.endDate);
        var $event = $('' +
          '<div class="event">' +
          ' <div class="event-hour">' + startDate.getHours() + ':' + (startDate.getMinutes() < 10 ? '0' : '') + startDate.getMinutes() + '</div>' +
          ' <div class="event-date">' + plugin.formatDateEvent(startDate, endDate) + '</div>' +
          ' <div class="event-summary">' + event.summary + '</div>' +
          '</div>');

        $event.data( 'event', event );
        $event.click( plugin.settings.onEventSelect );

        // simplify further customization
        plugin.settings.onEventCreate( $event );

        container.append($event);
      })
    },
    //Small effect to fillup a container
    fillUp: function (x, y) {
      var plugin = this;
      var elem = $(plugin.element);
      var elemOffset = elem.offset();

      var filler = $('<div class="filler" style=""></div>');
      filler.css("left", x - elemOffset.left);
      filler.css("top", y - elemOffset.top);

      elem.find('.calendar').append(filler);

      filler.animate({
        width: "300%",
        height: "300%"
      }, 500, function () {
        elem.find('.event-container').show();
        filler.hide();
      });
    },
    //Small effect to empty a container
    empty: function (x, y) {
      var plugin = this;
      var elem = $(plugin.element);
      var elemOffset = elem.offset();

      var filler = elem.find('.filler');
      filler.css("width", "300%");
      filler.css("height", "300%");

      filler.show();

      elem.find('.event-container').hide().find('.event').remove();

      filler.animate({
        width: "0%",
        height: "0%"
      }, 500, function () {
        filler.remove();
      });
    },
    getDateEvents: function (d) {
      var plugin = this;
      return plugin.settings.events.filter(function (event) {
        return plugin.isDayBetween(d, new Date(event.startDate), new Date(event.endDate));
      });
    },
    isDayBetween: function (d, dStart, dEnd) {
      dStart.setHours(0,0,0);
      dEnd.setHours(23,59,59,999);
      d.setHours(12,0,0);

      return dStart <= d && d <= dEnd;
    },
    formatDateEvent: function (dateStart, dateEnd) {
      var formatted = '';
      formatted += this.settings.days[dateStart.getDay()] + ' - ' + dateStart.getDate() + ' ' + this.settings.months[dateStart.getMonth()].substring(0, 3);

      if (dateEnd.getDate() !== dateStart.getDate()) {
        formatted += ' to ' + dateEnd.getDate() + ' ' + this.settings.months[dateEnd.getMonth()].substring(0, 3)
      }
      return formatted;
    }
  });

  // A really lightweight plugin wrapper around the constructor,
  // preventing against multiple instantiations
  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new Plugin(this, options));
      }
    });
  };







    	    let areaChart = new ApexCharts(
		document.querySelector("#apexcharts-area"),
		this.revenueOptions
	);
        areaChart.render();
        let barChart = new ApexCharts(
		document.querySelector("#bar"),
		this.noofstudentsOptions
	);
	    barChart.render();

    	$("#calendar-doctor").simpleCalendar({
		fixedStartDay: 0, // begin weeks by sunday
		disableEmptyDetails: true,
		events: [
			// generate new event after tomorrow for one hour
			{
				startDate: new Date(new Date().setHours(new Date().getHours() + 24)).toDateString(),
				endDate: new Date(new Date().setHours(new Date().getHours() + 25)).toISOString(),
				summary: 'Conference with teachers'
			},
			// generate new event for yesterday at noon
			{
				startDate: new Date(new Date().setHours(new Date().getHours() - new Date().getHours() - 12, 0)).toISOString(),
				endDate: new Date(new Date().setHours(new Date().getHours() - new Date().getHours() - 11)).getTime(),
				summary: 'Old classes'
			},
			// generate new event for the last two days
			{
				startDate: new Date(new Date().setHours(new Date().getHours() - 48)).toISOString(),
				endDate: new Date(new Date().setHours(new Date().getHours() - 24)).getTime(),
				summary: 'Old Lessons'
			}
		],

	});
    
    }
}
</script>