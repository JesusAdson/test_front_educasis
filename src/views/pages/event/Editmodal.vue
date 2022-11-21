<template>
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
</template>