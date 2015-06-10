<!DOCTYPE html>
<html style="margin:0;padding:0;color:#000">
<head>
	<title></title>
	<link href='http://fonts.googleapis.com/css?family=Ubuntu' rel='stylesheet' type='text/css'>
</head>
<body style="margin:0;font-family: 'Ubuntu', sans-serif;">
<div style="width:100%;margin:0;">
	<div id="header" style="margin:0;text-align:center;padding:10px;">
		<span style="font-size:25px; color:#000;">
            <img src="<?php echo base_url('public/img/canvass.png') ?>" style="width:50px;display:inline-block;vertical-align:middle;">CANVASS
        </span>
	</div>
	<div id="main" style="padding:20px;margin:0;">
		<b style="font-size:20px">Hi, <?php echo $user_name; ?>!</b>
		<br /><br />
		Thank you for registering to Canvass.
		<table>
			<tr>
				<td>
					<b>Email</b>
				</td>
				<td style="padding-left:20px;">
					<?php echo $user_email; ?>
				</td>
			</tr>
			<tr>
				<td>
					<b>Password</b>
				</td>
				<td style="padding-left:20px;">
					<?php echo $user_password; ?>
				</td>
			</tr>
		</table>
		<br /><br />
		To complete this registration please verify your account by clicking the link below.
		<br />
		<a href="<?php echo $user_link; ?>"><?php echo $user_link; ?></a>
	</div>
	<div id="footer" style="text-align:center; color:#FFF;padding:10px;">
		
	</div>
</div>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script type="text/javascript">
	$(window).resize(function() {
		var screening = window.innerHeight;
		var top = $("#header").outerHeight( true );
		var bottom = $("#footer").outerHeight( true );
		var main = screening - (bottom + top + 40);
		$('#main').css('min-height', main);
	}).resize();
</script>
</body>
</html>
	
