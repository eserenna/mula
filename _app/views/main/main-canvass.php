<div id="main">
	<div class="container">
		<div class="col-lg-4 col-md-4 col-sm-6 col-xs-6">
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-canvass white-text">
				<h4 class="bg-canvass">Filter</h4>
			</div>
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-white p-overall-20 m-bottom-10">
				<form>
					<select class="form-control m-bottom-5" id="filtertimer" name="canvass_timer">
						<option value="" disabled selected>Filter survey type</option>
					    <option value="5">5 seconds</option>
					    <option value="10">10 seconds</option>
					    <option value="15">15 seconds</option>
					    <option value="20">20 seconds</option>
					    <option value="25">25 seconds</option>
					    <option value="30">30 seconds</option>
					</select>
					<input type="submit" class="col-lg-12 col-sm-12 col-xs-12 btn btn-warning" value="Filter survey">
				</form>
			</div>
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-canvass white-text">
				<h4 class="bg-canvass col-lg-4 col-md-4 col-sm-6 col-xs-6">
					Group
				</h4>
				<div class="text-right m-top-5 m-bottom-5">	
					<div id="add-create-group" class="add-button" type="button" data-toggle="collapse" data-target="#collapseExample" data-placement="bottom" aria-expanded="false" title="Add New Group">
					</div>
				</div>
			</div>
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-white p-overall-20 m-bottom-10">
				<div class="collapse in" id="collapseExample">
				  <form>
				  	<input class="form-control m-bottom-5" name="canvass_group_name" type="text" placeholder="Enter group name">
				  	<input class="form-control m-bottom-5" name="canvass_group_invite" type="email" placeholder="Invite with email" multiple>
				  	<input type="submit" class="col-lg-12 col-sm-12 col-xs-12 btn btn-warning" value="Create Group">
				  </form>
				</div>
			</div>
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-canvass white-text">
				<h4 class="bg-canvass">Create Survey</h4>
			</div>
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-white p-overall-20 m-bottom-10">
				<?php 
					$attributes = array('id' => 'formCreateSurvey');
					echo form_open_multipart('processes/create_survey', $attributes);
				?>
					<input class="form-control m-bottom-5" id="settitle" name="canvass_name" type="text"  placeholder="Enter survey title">
					<div id="error_settitle" class="error-message"></div>
					<input class="form-control m-bottom-5" id="setdate" name="canvass_date" placeholder="Enter survey expiry date">
					<div id="error_setdate" class="error-message"></div>
					<select class="form-control m-bottom-5" id="selecttimer" name="canvass_timer">
						<option value="" disabled selected>Select survey timer</option>
					    <option value="5">5 seconds</option>
					    <option value="10">10 seconds</option>
					    <option value="15">15 seconds</option>
					    <option value="20">20 seconds</option>
					    <option value="25">25 seconds</option>
					    <option value="30">30 seconds</option>
					</select>
					<div id="error_selecttimer" class="error-message"></div>
					<textarea class="form-control m-bottom-5 m-top-5 no-resize" id="setdesc" name="canvass_description" placeholder="Enter survey description"></textarea>
					<div id="error_setdesc" class="error-message"></div>
					<div class="form-group">
						<input id="imgInp" type="file" name="userfile" size="20" class="beautify" />
						<label for="imgInp" class="beautify-upload">Select Files</label>
						<br />
						<div id="hide-it" style="display:hidden">
							<h4 id="name-image"></h4>
							<img id="preview-image" src="#" style="width:100%" />	
						</div>
						
		            </div>
		            <div id="error_file-1" class="error-message"></div>
					<input type="button"  onclick="createSurvey()" class="col-lg-12 col-sm-12 col-xs-12 btn btn-warning" value="Create Survey">
				<?php echo form_close(); ?>
			</div>
		</div>
		<div class="col-lg-8 col-md-8 col-sm-6 col-xs-6">
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-white p-overall-20 m-bottom-10">
				<?php echo "Welcome back ".$name."!";?>
			</div>
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-white p-overall-20 text-center">
				Welcome to
				<br />
				<img src="<?php echo base_url('public/img/canvass.png') ?>" style="display:inline-block">
                <b style="font-size:50px;">Canvass</b>
                <br />
                Helps you out to survey the effectiveness of your advertisement to the crowd before being displayed to public.
			</div>
		</div>
	</div>
</div>