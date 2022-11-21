<template>
    <div>
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
								<h3 class="page-title">Events</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
									<li class="breadcrumb-item active">Events</li>
								</ul>
							</div>
							<div class="col-auto text-end float-end ms-auto">
								<router-link to="/add-events" class="btn btn-primary"><i class="fas fa-plus"></i></router-link>
							</div>
						</div>
					</div>
					<!-- /Page Header -->

					
					<div class="row">						
						<div class="col-lg-12 col-md-12">
							<div class="card">
								<div class="card-body">
									 <FullCalendar :options="calendarOptions" :events="events"></FullCalendar>
								</div>
							</div>
						</div>
					</div>
				
					<!-- Add Event Modal -->
					<div class="modal fade none-border" id="my_event">
						<div class="modal-dialog modal-dialog-centered">
							<div class="modal-content">
								<div class="modal-header">
									<h4 class="modal-title">Add Event</h4>
									<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
								</div>
								<div class="modal-body"></div>
								<div class="modal-footer justify-content-center">
									<button type="button" class="btn btn-success save-event submit-btn">Create event</button>
									<button type="button" class="btn btn-danger delete-event submit-btn" data-dismiss="modal">Delete</button>
								</div>
							</div>
						</div>
					</div>
					<!-- /Add Event Modal -->

				</div>
            <layout-footer></layout-footer>
				
			</div>
			<!-- /Page Wrapper -->

		
        </div>
		<!-- /Main Wrapper -->
            
           <!-- Edit Event Modal -->
			<div id="edit_event" class="modal fade">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h4 id="modalTitle" class="modal-title">Add Event</h4>
							<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span> <span class="sr-only">close</span></button>

						</div>
						<div id="modalBody" class="modal-body">
							<form><label>Change event name</label><div class="input-group"><input class="form-control" type="text" id="event_value"><span class="input-group-append"><button type="submit" class="btn btn-success"><i class="fa fa-check"></i> Save</button></span></div></form>
						</div>
						<div class="modal-footer justify-content-center">
							<button type="button" class="btn btn-danger delete-event submit-btn" data-dismiss="modal" style="">Delete</button>
							<button class="btn btn-info displaynone" type="button" id="triggerevent" data-toggle="modal" data-target="#edit_event"></button>
							<button class="btn btn-default displaynone"  type="button" id="cancelevent" data-dismiss="modal" >cancel</button>
						</div>
					</div>
				</div>
			</div>
			<!-- /Edit Event Modal -->

			<!-- Add Event Modal -->
			<div id="create_event" class="modal fade">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h4 id="modalTitle" class="modal-title">Add Event</h4>
							<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span> <span class="sr-only">close</span></button>

						</div>
						<div id="modalBody" class="modal-body">
								<form>
									<div class="event-inputs">
										<div class="form-group">
											<label class="control-label">Event Name</label>
											<input class="form-control" placeholder="Insert Event Name" type="text" id="event_name" name="title">
										</div>
										<div class="form-group mb-0">
											<label class="control-label">Category</label>
											<select class="form-control" id="event_category" name="category">
												<option value="bg-danger">Danger</option>
												<option value="bg-success">Success</option>
												<option value="bg-purple">Purple</option>
												<option value="bg-primary">Primary</option>
												<option value="bg-info">Info</option>
												<option value="bg-warning">Warning</option>
											</select>
										</div>
									</div>
								</form>
						</div>
						<div class="modal-footer justify-content-center">
							<button type="submit" class="btn btn-success save-event" style="">Create event</button>
							<button class="btn btn-info displaynone" type="button" id="addevent" data-toggle="modal" data-target="#create_event"></button>
							<button class="btn btn-default displaynone"  type="button" id="cancelevents" data-dismiss="modal" >cancel</button>
							<button type="button" class="btn btn-danger displaynone delete-event submit-btn" data-dismiss="modal">Delete</button>
						</div>
					</div>
				</div>
			</div>
			<!-- /Add Event Modal -->

	</div>

</template>
<script>
  import Vue from 'vue'
  import FullCalendar from "@fullcalendar/vue3";
  import {
  CalendarOptions,
  EventApi,
  DateSelectArg,
  EventClickArg,
} from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
  export default {
    components: {
    FullCalendar,
    },
    data() {
    return {
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin, // needed for dateClick
        ],
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        },
        events: [
        {
            title  : '10.02p Test Event 1',
            start  : '2020-08-29',
        },
        {
            title  : '7.55p Test Event 3',
            start  : '2020-09-02',
        },
      ],

        initialView: "dayGridMonth",
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        /* you can update a remote database when these fire:
        eventAdd:
        eventChange:
        eventRemove:
        */
      },
    }
  },
  props: {
    msg: String,
  },
    mounted() {

    },
    name: 'events'
  }
</Script>