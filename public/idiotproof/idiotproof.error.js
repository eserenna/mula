	var filter = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;;
	var password = /^(?=.*?[a-z])(?=.*?\d)[a-z\d]+$/i;
	var filter_web = /.com|.net/;
//first name	

	$( "#web-address" ).focusout(function() 
	{
		if($('#web-address').val() == 0 || !filter_web.test($('#web-address').val()) )
		{
			$("#error_webadd").text("PLEASE ENTER VALID WEB ADDRESS");
			$("#error_webadd").slideDown();	
		}
	});
	$( "#web-address" ).focusin(function() 
	{
		$("#error_webadd").slideUp();
	});
	$( "#fname" ).focusout(function() 
	{
		if($('#fname').val() == 0)
		{
			$("#error_fname").text("PLEASE ENTER FIRST NAME.");
			$("#error_fname").slideDown();
		}
	});
	$( "#fname" ).focusin(function() 
	{
		$("#error_fname").slideUp();
	});
//last name
	$( "#lname" ).focusout(function() 
	{
		if($('#lname').val() == 0)
		{
			$("#error_lname").text("PLEASE ENTER LAST NAME.");
			$("#error_lname").slideDown();
		}
	});
	$( "#lname" ).focusin(function() 
	{
		$("#error_lname").slideUp();
	});
//user name
	$( "#uname" ).focusout(function() 
	{
		if($('#uname').val() == 0)
		{
			$("#error_uname").text("PLEASE ENTER USER NAME.");
			$("#error_uname").slideDown();
		}
	});
	$( "#uname" ).focusin(function() 
	{
		$("#error_uname").slideUp();
	});
//email	register
	$( "#reg_email" ).focusout(function() 
	{
		if($('#reg_email').val() == 0 || !filter.test($('#reg_email').val()))
		{
			$("#reg_error_email").text("PLEASE ENTER VALID EMAIL ADDRESS.");
			$("#reg_error_email").slideDown();
		}
		else if($('#reg_email').val().length > 3)
		{
		$.ajax({
			type: "POST",
			url: idiotproof_email_checker,
			data: "email="+ $('#reg_email').val(),
			success: function(server_response)
			{
				if(server_response == '1')
				{
					$("#reg_error_email").text("THE EMAIL ADDRESS IS REGISTERED IN THE SYSTEM.");
					$("#reg_error_email").slideDown();
				}
			}
		});
		}
	});
	$( "#reg_email" ).focusin(function() 
	{
		$("#reg_error_email").slideUp();
	});
//email	retrieval
	$( "#retrieval_email" ).focusout(function() 
	{
		if($('#retrieval_email').val() == 0 || !filter.test($('#retrieval_email').val()))
		{
			$("#retrieval_error_email").text("PLEASE ENTER VALID EMAIL ADDRESS.");
			$("#retrieval_error_email").slideDown();
		}
		else if($('#retrieval_email').val().length > 3)
		{
		$.ajax({
			type: "POST",
			url: idiotproof_email_checker,
			data: "email="+ $('#retrieval_email').val(),
			success: function(server_response)
			{
				if(server_response == '2')
				{
					$("#retrieval_error_email").text("THE EMAIL ADDRESS IS NOT VERIFIED.");
					$("#retrieval_error_email").slideDown();
				}else if(server_response == '0')
				{
					$("#retrieval_error_email").text("THE EMAIL ADDRESS IS NOT REGISTERED IN THE SYSTEM.");
					$("#retrieval_error_email").slideDown();
				}
			}
		});
		}
	});
	$( "#retrieval_email" ).focusin(function() 
	{
		$("#retrieval_error_email").slideUp();
	});
//resend email verification
	$( "#resending_email" ).focusout(function() 
	{
		if( $('#resending_email').val() == 0 || !filter.test($('#resending_email').val()) )
		{
			$("#resending_error_email").text("PLEASE ENTER VALID EMAIL ADDRESS.");
			$("#resending_error_email").slideDown();
		}
		else if($('#resending_email').val().length > 3)
		{
		$.ajax({
			type: "POST",
			url: idiotproof_email_checker,
			data: "email="+ $('#resending_email').val(),
			success: function(server_response)
			{
				if(server_response == '0')
				{
					$("#resending_error_email").text("THE EMAIL ADDRESS IS NOT REGISTERED IN THE SYSTEM.");
					$("#resending_error_email").slideDown();
				}else if(server_response == '1')
				{
					$("#resending_error_email").text("THE EMAIL ADDRESS IS ALREADY VERIFIED.");
					$("#resending_error_email").slideDown();
				}
			}
		});
		}
	});
	$( "#resending_email" ).focusin(function() 
	{
		$("#resending_error_email").slideUp();
	});
//email	
	$( "#email" ).focusout(function() 
	{
		if( $('#email').val() == 0 || !filter.test($('#email').val()) )
		{
			$("#error_email").text("PLEASE ENTER VALID EMAIL ADDRESS.");
			$("#error_email").slideDown();
		}
		else if($('#email').val().length > 3)
		{
		$.ajax({
			type: "POST",
			url: idiotproof_email_checker,
			data: "email="+ $('#email').val(),
			success: function(server_response)
			{
				if(server_response == '2')
				{
					$("#error_email").text("THE EMAIL ADDRESS IS NOT VERIFIED.");
					$("#error_email").slideDown();
				}else if(server_response == '0')
				{
					$("#error_email").text("THE EMAIL ADDRESS IS NOT REGISTERED IN THE SYSTEM.");
					$("#error_email").slideDown();
				}
			}
		});
		}
	});
	$( "#email" ).focusin(function() 
	{
		$("#error_email").slideUp();
	});
//password
	$( "#password" ).focusout(function() 
	{
		if($('#password').val() == 0)
		{
			$("#error_password").text("PLEASE FILL IN THE PASSWORD.");
			$("#error_password").slideDown();
		}
	});
	$( "#password" ).focusin(function() 
	{
		$("#error_password").slideUp();
	});

	//update email password
	$( "#o_password" ).focusout(function() 
	{
		if($('#o_password').val() == 0)
		{
			$("#error_o_password").text("PLEASE FILL IN PASSWORD.");
			$("#error_o_password").slideDown();
		}
	});
	$( "#opassword" ).focusin(function() 
	{
		$("#error_opassword").slideUp();
	});	
//register password
	$( "#reg_password" ).focusout(function() 
	{
		if($('#reg_password').val() == 0 || document.getElementById('reg_password').value.length < 8 || !password.test($('#reg_password').val()))
		{
			$("#error_reg_password").text("MUST CONTAIN  8 - 20 ALPHANUMERIC CHARACTERS.");
			$("#error_reg_password").slideDown();
		}
	});
	$( "#reg_password" ).focusin(function() 
	{
		$("#error_reg_password").slideUp();
	});
//repeat password
	$( "#rep_password" ).focusout(function() 
	{
		if($('#rep_password').val() == 0)
		{
			$("#error_rep_password").text("PLEASE REPEAT PASSWORD");
			$("#error_rep_password").slideDown();
		}
		else if($('#rep_password').val() != $('#reg_password').val())
		{
			$("#error_rep_password").text("THESE PASSWORDS DON'T MATCH");
			$("#error_rep_password").slideDown();
		}
	});
	$( "#rep_password" ).focusin(function() 
	{
		$("#error_rep_password").slideUp();
	});
//security answer
	$( "#security" ).focusout(function() 
	{
		if($('#security').val() == 0)
		{
			$("#error_security").text("PLEASE ANSWER SECURITY QUESTION");
			$("#error_security").slideDown();	
		}
	});
//create and update security question and answer
	//security question select
		$( "#security_q" ).on('change', function()  
		{
			if($('#security_q').val() == 0)
			{
				$("#security_c").slideDown();
				$("#security_q").slideUp();
			}
		});
		$( "#cancel" ).click(function()  
		{
				$("#security_c").slideUp();
				$("#security_q").slideDown();
				$("#error_security_q").slideUp();
		});
	//security question own question	
		$( "#security_q_o" ).focusout(function() 
		{
			if($('#security_q_o').val() == 0)
			{
				$("#error_security_q").text("PLEASE ENTER SECURITY QUESTION");
				$("#error_security_q").slideDown();	
			}
		});
		$( "#security_q_o" ).focusin(function() 
		{
			$("#error_security_q").slideUp();
		});
	//change security answer
	$( "#answer" ).focusout(function() 
	{
		if($('#answer').val() == 0)
		{
			$("#error_answer").text("PLEASE ANSWER SECURITY QUESTION");
			$("#error_answer").slideDown();	
		}
	});
	$( "#answer" ).focusin(function() 
	{
		$("#error_answer").slideUp();
	});
	//change security answer new
	$( "#answer_new" ).focusout(function() 
	{
		if($('#answer_new').val() == 0)
		{
			$("#error_answer_new").text("PLEASE ANSWER SECURITY QUESTION");
			$("#error_answer_new").slideDown();	
		}
	});
	$( "#answer_new" ).focusin(function() 
	{
		$("#error_answer_new").slideUp();
	});
//create and update address
	//address
	$( "#address" ).focusout(function() 
		{
			if($('#address').val() == 0 )
			{
				$("#error_cadd").text("PLEASE ENTER ADDRESS");
				$("#error_cadd").slideDown();
			}
		});
		$( "#address").focusin(function() 
		{
			$("#error_cadd").slideUp();
		});
		$( "#u_address" ).focusout(function() 
		{
			if($('#u_address').val() == 0 )
			{
				$("#error_uadd").text("PLEASE ENTER ADDRESS");
				$("#error_uadd").slideDown();
			}
		});
		$( "#address").focusin(function() 
		{
			$("#error_cadd").slideUp();
		});
	//city
	$( "#city" ).focusout(function() 
		{
			if($('#city').val() == 0 )
			{
				$("#error_city").text("PLEASE ENTER CITY");
				$("#error_city").slideDown();
			}
		});
		$( "#city" ).focusin(function() 
		{
			$("#error_city").slideUp();
		});
	//zip
	$( "#zip" ).focusout(function() 
		{
			if($('#zip').val() == 0 )
			{
				$("#error_zip").text("PLEASE ENTER ZIP CODE");
				$("#error_zip").slideDown();
			}
		});
		$( "#zip" ).focusin(function() 
		{
			$("#error_zip").slideUp();
			$("#error_state").slideUp();
		});
//update/change password
 //old password
	$( "#opassword" ).focusout(function() 
	{
		if($('#opassword').val() == 0)
		{
			$("#error_opassword").text("PLEASE FILL IN THE OLD PASSWORD.");
			$("#error_opassword").slideDown();
		}
	});
	$( "#opassword" ).focusin(function() 
	{
		$("#error_opassword").slideUp();
	});	
//new password
	$( "#npassword" ).focusout(function() 
	{
		if($('#npassword').val() == 0|| document.getElementById('npassword').value.length < 8 || !password.test($('#npassword').val()))
		{
			$("#error_npassword").text("MUST CONTAIN  8 - 20 ALPHANUMERIC CHARACTERS.");
			$("#error_npassword").slideDown();
		}
	});
	$( "#npassword" ).focusin(function() 
	{
		$("#error_npassword").slideUp();
	});	
//repeat password
	$( "#rpassword" ).focusout(function() 
	{
		if($('#rpassword').val() == 0)
		{
			$("#error_rpassword").text("PLEASE REPEAT NEW PASSWORD.");
			$("#error_rpassword").slideDown();
		}
	});
	$( "#rpassword" ).focusin(function() 
	{
		$("#error_rpassword").slideUp();
	});	
//add item
 //item code
	$( "#i_code" ).focusout(function() 
	{
		if($('#i_code').val() == 0)
		{
			$("#error_i_code").text("PLEASE ENTER ITEM CODE.");
			$("#error_i_code").slideDown();
		}
		else if($('#i_code').val().length > 0)//if the lenght greater than 3 characters
		{
		$.ajax({
			type: "POST",
			url: site_url + "/engine/mono/item_checker",  //file name
			data: "icode="+ $('#i_code').val() +'&icategory='+ $('#i_category').val(),  //data
			success: function(server_response)
			{
				if(server_response == '1')//if ajax_check_username.php return value "0"
				{
					$("#error_i_code").text("ITEM ID EXIST IN DATABASE.");
					$("#error_i_code").slideDown();
				}
			}
		});
		}
	});
	$( "#i_code" ).focusin(function() 
	{
		$("#error_i_code").slideUp();
	});
	//item file
	$( "#i_file" ).focusout(function() 
	{
		if($('#i_file').val() == 0)
		{
			$("#error_i_file").text("PLEASE ENTER ITEM'S IMAGE.");
			$("#error_i_file").slideDown();
		}
	});
	$( "#i_file" ).focusin(function() 
	{
		$("#error_i_file").slideUp();
	});	
	//item cost
	$( "#i_cost" ).focusout(function() 
	{
		if($('#i_cost').val() == 0)
		{
			$("#error_i_cost").text("PLEASE ENTER ITEM'S COST.");
			$("#error_i_cost").slideDown();
		}
	});
	$( "#i_cost" ).focusin(function() 
	{
		$("#error_i_cost").slideUp();
	});	
	//item price
	$( "#i_price" ).focusout(function() 
	{
		if($('#i_price').val() == 0)
		{
			$("#error_i_price").text("PLEASE ENTER ITEM'S PRICE.");
			$("#error_i_price").slideDown();
		}
	});
	$( "#i_price" ).focusin(function() 
	{
		$("#error_i_price").slideUp();
	});	
	//item quantity
	$( "#i_quantity" ).focusout(function() 
	{
		if($('#i_quantity').val() == 0)
		{
			$("#error_i_quantity").text("PLEASE ENTER ITEM'S QUANTITY.");
			$("#error_i_quantity").slideDown();
		}
	});
	$( "#i_quantity" ).focusin(function() 
	{
		$("#error_i_quantity").slideUp();
	});	
	//item sizes
	$( "#i_sizes1" ).focusout(function() 
	{
		if($('#i_sizes1').val() == 0)
		{
			$("#error_i_sizes1").text("PLEASE ENTER ITEM'S SIZES.");
			$("#error_i_sizes1").slideDown();
		}
	});
	$( "#i_sizes1" ).focusin(function() 
	{
		$("#error_i_sizes1").slideUp();
	});	





//contact us
	$( "#name_con" ).focusout(function() 
	{
		if( $('#name_con').val() == 0 )
		{
			$("#error_name_con").text("PLEASE ENTER YOUR NAME.");
			$("#error_name_con").slideDown();
		}
	});
	$( "#name_con" ).focusin(function() 
	{
		$("#error_name_con").slideUp();
	});
	$( "#email_con" ).focusout(function() 
	{
		if( $('#email_con').val() == 0 || !filter.test($('#email_con').val()) )
		{
			$("#error_email_con").text("PLEASE ENTER VALID EMAIL ADDRESS.");
			$("#error_email_con").slideDown();
		}
	});
	$( "#email_con" ).focusin(function() 
	{
		$("#error_email_con").slideUp();
	});
	$( "#message_con" ).focusout(function() 
	{
		if( $('#message_con').val() == 0)
		{
			$("#error_message_con").text("PLEASE ENTER YOUR MESSAGE.");
			$("#error_message_con").slideDown();
		}
	});
	$( "#message_con" ).focusin(function() 
	{
		$("#error_message_con").slideUp();
	});
