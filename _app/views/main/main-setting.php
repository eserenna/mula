<div id="main">
	<div class="container">
		<div class="col-lg-4 col-md-4 col-sm-6 col-xs-6">
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-white p-overall-20 m-bottom-10">
				<table width="100%">
					<tr>
						<td>
							<b>NAME </b>			
						</td>
						<td>
							<?php echo $name;?>			
						</td>
					</tr>
					<tr>
						<td>
							<b>EMAIL </b>			
						</td>
						<td>
							<?php echo $email;?>			
						</td>
					</tr>
					<tr>
						<td>
							<b>PASSWORD </b>			
						</td>
						<td>
							<?php echo $password;?>			
						</td>
					</tr>
				</table>
			</div>
			<a href="#" id="open-change-password" class="setting-tab">
				<img src="<?php echo base_url('public/img/special-icon/list.png') ?>"> Change Password
			</a>
			<a href="#" id="open-change-email" class="setting-tab">
				<img src="<?php echo base_url('public/img/special-icon/list.png') ?>"> Change Email Address
			</a>
			<a href="#" id="open-change-username" class="setting-tab">
				<img src="<?php echo base_url('public/img/special-icon/list.png') ?>"> Change User Name
			</a>
		</div>

		<div class="col-lg-8 col-md-8 col-sm-6 col-xs-6">
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-white p-overall-20 m-bottom-10" id="change-password" style="display:none;">
				<h4>Change Password</h4>
				<form id="formChangePassword" method="POST">
					<input class="form-control m-bottom-5"  id="o_password" type="password" name="old_password" placeholder="Type in your old password">
					<div id="error_o_password" class="error-message"></div>
					<input class="form-control m-bottom-5" id="reg_password" type="password" name="new_password" placeholder="Type in your new password">
					<div id="error_reg_password" class="error-message"></div>
					<input class="form-control m-bottom-5" id="rep_password" type="password" name="repeat_password" placeholder="Repeat your new password">
					<div id="error_rep_password" class="error-message"></div>
					<input class="btn btn-warning form-control" type="submit" value="Change Password">
				</form>
			</div>
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-white p-overall-20 m-bottom-10" id="change-email" style="display:none;">
				<h4>Change Email Address</h4>
				<form id="formChangeEmail" method="POST">
					<input class="form-control m-bottom-5" id="reg_email" type="email" name="email" placeholder="Type in new email">
					<div id="reg_error_email" class="error-message"></div>
					<input class="form-control m-bottom-5" id="email_password" type="password" name="email_password" placeholder="Type in your password">
					<div id="error_password" class="error-message"></div>
					<input class="btn btn-warning form-control" type="submit" value="Change Email">
				</form>
			</div>
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-white p-overall-20 m-bottom-10" id="change-username" style="display:none;">
				<h4>Change User Name</h4>
				<form id="formChangeUserName" method="POST">
					<input class="form-control m-bottom-5" id="uname" type="text" name="username" placeholder="Type in new user name">
					<div id="error_uname" class="error-message"></div>
					<input class="btn btn-warning form-control" type="submit" value="Change User Name">
				</form>
			</div>
		</div>
	</div>
</div>