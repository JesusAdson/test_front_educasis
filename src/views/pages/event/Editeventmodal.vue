<template>
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
</template>