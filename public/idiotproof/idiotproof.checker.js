var filter = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var password = /^(?=.*?[a-z])(?=.*?\d)[a-z\d]+$/i;
var error = 0;
var aurora = '';	

function valid_registration(){
	if($('#fname').length > 0 && $('#fname').val() == 0)
	{
		$("#error_fname").text("PLEASE ENTER FIRST NAME.");
		$("#error_fname").slideDown();
		error++;
	}
	if($('#lname').length > 0 && $('#lname').val() == 0)
	{
		$("#error_lname").text("PLEASE ENTER LAST NAME.");
		$("#error_lname").slideDown();
		error++;
	}
	if($('#uname').length > 0 && $('#uname').val() == 0)
	{
		$("#error_uname").text("PLEASE ENTER USER NAME.");
		$("#error_uname").slideDown();
		error++;
	}
	if($('#reg_email').length > 0 && $('#reg_email').val() == 0 || !filter.test($('#reg_email').val()))
	{
		$("#reg_error_email").text("PLEASE ENTER VALID EMAIL ADDRESS.");
		$("#reg_error_email").slideDown();
		error++;
	}
	if($('#reg_email').length > 0 && $('#reg_email').length > 0 && $('#reg_email').val().length > 3)
	{
		$.ajax({
			type: "POST",
			async: false,
			url: idiotproof_email_checker,
			data: "email="+ $('#reg_email').val(),
			success: function(server_response)
			{
				if(server_response == '1')
				{
					$("#reg_error_email").text("THE EMAIL ADDRESS IS REGISTERED IN THE SYSTEM.");
					$("#reg_error_email").slideDown();
					error++;
				}
			}
		});
	}
	if($('#reg_password').length > 0 && ($('#reg_password').val() == 0 || document.getElementById('reg_password').value.length < 8 || document.getElementById('reg_password').value.length > 20 || !password.test($('#reg_password').val())))
	{
		$("#error_reg_password").text("MUST CONTAIN  8 - 20 ALPHANUMERIC CHARACTERS.");
		$("#error_reg_password").slideDown();
		error++;
	}
	if($('#rep_password').length > 0 ){
		if($('#rep_password').val() == 0)
		{
			$("#error_rep_password").text("PLEASE REPEAT PASSWORD");
			$("#error_rep_password").slideDown();
			error++;
		}
		else if($('#rep_password').val() != $('#reg_password').val())
		{
			$("#error_rep_password").text("THESE PASSWORDS DON'T MATCH");
			$("#error_rep_password").slideDown();
			error++;
		}
	}
	if($('#security').length > 0 && $('#security').val() == 0)
	{
		$("#error_security").text("PLEASE ANSWER SECURITY QUESTION");
		$("#error_security").slideDown();	
		error++;
	}
	if($('#security_q').length > 0 && $('#security_q').val() == 0 )
	{
		if($('#security_q_o').length > 0 && $('#security_q_o').val() == 0 )
		{
			$("#error_security_q").text("PLEASE ENTER SECURITY QUESTION");
			$("#error_security_q").slideDown();
			error++;
		}
	}
	if($('#web-address').length > 0 && ($('#web-address').val() == 0 || !filter_web.test($('#web-address').val())) )
	{
		$("#error_webadd").text("PLEASE ENTER VALID WEB ADDRESS");
		$("#error_webadd").slideDown();
		error++;
	}
	if($('#address').length > 0 && $('#address').val() == 0 )
	{
		$("#error_cadd").text("PLEASE ENTER COMPANY ADDRESS");
		$("#error_cadd").slideDown();
		error++;
	}
	if($('#city').length > 0 && $('#city').val() == 0 )
	{
		$("#error_city").text("PLEASE ENTER CITY");
		$("#error_city").slideDown();
		error++;
	}
	if($('#zip').length > 0 && $('#zip').val() == 0 )
	{
		$("#error_zip").text("PLEASE ENTER ZIP CODE");
		$("#error_zip").slideDown();
		error++;
	}
	if($('#state').length > 0 && $('#state').val() == 0 )
	{
		$("#error_state").text("ZIP CODE NOT AVAILABLE");
		$("#error_state").slideDown();
		error++;
	}

	if( error > 0 )
	{
		alert(error);
		error = 0;
	}
	else
	{
		$("#formRegister").submit();
	}
}	

function valid_login(){
	if($('#email').val() == 0 || !filter.test($('#email').val()))
	{
		$("#error_email").text("PLEASE ENTER VALID EMAIL ADDRESS.");
		$("#error_email").slideDown();
		error++;
	}else if($('#email').val().length > 3)
	{
		$.ajax({
			type: "POST",
			async: false,
			url: idiotproof_email_checker,
			data: "email="+ $('#email').val(),
			success: function(server_response)
			{
				if(server_response == '2')
				{
					$("#error_email").text("THE EMAIL ADDRESS IS NOT VERIFIED.");
					$("#error_email").slideDown();
					error++;
				}else if(server_response == '0')
				{
					$("#error_email").text("THE EMAIL ADDRESS IS NOT REGISTERED IN THE SYSTEM.");
					$("#error_email").slideDown();
					error++;
				}
			}
		});
	}
	if($('#password').val() == 0)
	{
		$("#error_password").text("PLEASE FILL IN THE PASSWORD.");
		$("#error_password").slideDown();
		error++;
	}
	//error counter	
	if( error > 0 )
	{
		error = 0;
		console.log(error);
	}
	else
	{
		$.ajax({
			type: "POST",
			async: false,
			url: idiotproof_login,
			data: "email="+ $('#email').val() +"&password="+ $('#password').val(),
			success: function(server_response)
			{
				if(server_response == '1')
				{
					$('#valid').show();
					$('#hide_butt').hide();
					setTimeout(function () {
				        $("#formLogin").submit();
				    }, 3000); // in milliseconds
				}else if(server_response == '0')
				{
					$("#error_password").text("YOU ENTERED THE WRONG PASSWORD.");
					$("#error_password").slideDown();
					error++;
				}
			}
		});
	}
}

function valid_retrieval(){
	if($('#retrieval_email').val() == 0 || !filter.test($('#retrieval_email').val()))
		{
			$("#retrieval_error_email").text("PLEASE ENTER VALID EMAIL ADDRESS.");
			$("#retrieval_error_email").slideDown();
			error++;
		}
		else if($('#retrieval_email').val().length > 3)
		{
		$.ajax({
			type: "POST",
			async: false,
			url: idiotproof_email_checker,
			data: "email="+ $('#retrieval_email').val(),
			success: function(server_response)
			{
				if(server_response == '2')
				{
					$("#error_email").text("THE EMAIL ADDRESS IS NOT VERIFIED.");
					$("#error_email").slideDown();
					error++;
				}else if(server_response == '0')
				{
					$("#retrieval_error_email").text("THE EMAIL ADDRESS IS NOT REGISTERED IN THE SYSTEM.");
					$("#retrieval_error_email").slideDown();
					error++;
				}
			}
		});
		}
	//error counter	
	if( error > 0 )
	{
		error = 0;
	}
	else
	{
		$("#formRetrieval").submit();
	}
}

function change_password(){
	if($('#opassword').val() == 0)
	{
		$("#error_opassword").text("PLEASE FILL IN THE OLD PASSWORD.");
		$("#error_opassword").slideDown();
		error++;
	}
	if($('#npassword').val() == 0|| document.getElementById('npassword').value.length < 8 || !password.test($('#npassword').val()))
	{
		$("#error_npassword").text("MUST CONTAIN  8 - 20 ALPHANUMERIC CHARACTERS.");
		$("#error_npassword").slideDown();
		error++;
	}
	if($('#rpassword').val() == 0)
	{
		$("#error_rpassword").text("PLEASE REPEAT THE NEW PASSWORD.");
		$("#error_rpassword").slideDown();
		error++;
	}else if($('#npassword').val() != $('#rpassword').val())
	{
		$("#error_rpassword").text("THESE PASSWORDS DON'T MATCH");
		$("#error_rpassword").slideDown();
		error++;
	}
	//error counter	
	if( error > 0 )
	{
		error = 0;
	}
	else
	{
		$("#formChangePassword").submit();
	}
}

function valid_resending(){
	if( $('#resending_email').val() == 0 || !filter.test($('#resending_email').val()) )
	{
		$("#resending_error_email").text("PLEASE ENTER VALID EMAIL ADDRESS.");
		$("#resending_error_email").slideDown();
		error++;
	}
	else if($('#resending_email').val().length > 3)
	{
		$.ajax({
			type: "POST",
			async: false,
			url: idiotproof_email_checker,
			data: "email="+ $('#resending_email').val(),
			success: function(server_response)
			{
				if(server_response == '0')
				{
					$("#resending_error_email").text("THE EMAIL ADDRESS IS NOT REGISTERED IN THE SYSTEM.");
					$("#resending_error_email").slideDown();
					error++;
				}else if(server_response == '1')
				{
					$("#resending_error_email").text("THE EMAIL ADDRESS IS ALREADY VERIFIED.");
					$("#resending_error_email").slideDown();
					error++;
				}
			}
		});
	}
	//error counter	
	if( error > 0 )
	{
		error = 0;
	}
	else
	{
		$("#formVerify").submit();
	}
}

function change_email(){
	if($('#reg_email').val() == 0 || !filter.test($('#reg_email').val()))
	{
		$("#reg_error_email").text("PLEASE ENTER VALID EMAIL ADDRESS.");
		$("#reg_error_email").slideDown();
		error++;
	}
	if($('#reg_email').val().length > 3)
	{
		$.ajax({
			type: "POST",
			async: false,
			url: idiotproof_email_checker,
			data: "email="+ $('#reg_email').val(),
			success: function(server_response)
			{
				if(server_response == '1')
				{
					$("#reg_error_email").text("THE EMAIL ADDRESS IS REGISTERED IN THE SYSTEM.");
					$("#reg_error_email").slideDown();
					error++;
				}
			}
		});
	}
	if($('#o_password').val() == 0)
	{
		$("#error_o_password").text("PLEASE FILL IN PASSWORD.");
		$("#error_o_password").slideDown();
		error++;
	}
	//error counter
	if( error > 0 )
	{
		error = 0;
	}
	else
	{
		$("#formChangeEmail").submit();
	}
}

function change_security(){
	if($('#answer').val() == 0)
	{
		$("#error_answer").text("PLEASE ANSWER SECURITY QUESTION");
		$("#error_answer").slideDown();	
		error++;
	}
	if($('#security_q').val() == 0 )
	{
		if($('#security_q_o').val() == 0 )
		{
			$("#error_security_q").text("PLEASE ENTER SECURITY QUESTION");
			$("#error_security_q").slideDown();
			error++;
		}
	}
	if($('#answer_new').val() == 0)
	{
		$("#error_answer_new").text("PLEASE ANSWER SECURITY QUESTION");
		$("#error_answer_new").slideDown();	
		error++;
	}
//error counter
	if( error > 0 )
	{
		error = 0;
	}
	else
	{
		$("#formSecurityQuestion").submit();
	}
}

function change_address(){
	if($('#u_address').val() == 0 )
	{
		$("#error_uadd").text("PLEASE ENTER COMPANY ADDRESS");
		$("#error_uadd").slideDown();
		error++;
	}
	if($('#city').val() == 0 )
	{
		$("#error_city").text("PLEASE ENTER CITY");
		$("#error_city").slideDown();
		error++;
	}
	if($('#zip').val() == 0 )
	{
		$("#error_zip").text("PLEASE ENTER ZIP CODE");
		$("#error_zip").slideDown();
		error++;
	}
	if($('#state').val() == 0 )
	{
		$("#error_state").text("ZIP CODE NOT AVAILABLE");
		$("#error_state").slideDown();
		error++;
	}
	//error counter
	if( error > 0 )
	{
		error = 0;
	}
	else
	{
		$("#formChangeAddress").submit();
	}
}

//ITEM
function adding_item(){
//item code
	if($('#i_code').val() == 0)
	{
		$("#error_i_code").text("PLEASE ENTER ITEM CODE.");
		$("#error_i_code").slideDown();
		error++;
	}
	else if($('#i_code').val().length > 0)
	{
		$.ajax({
			type: "POST",
			async: false,
			url: site_url + "/engine/mono/item_checker",  
			data: "icode="+ $('#i_code').val() +'&icategory='+ $('#i_category').val(),
			success: function(server_response)
			{
				if(server_response == '1')
				{
					$("#error_i_code").text("ITEM ID EXIST IN DATABASE.");
					$("#error_i_code").slideDown();
					error++;
				}
			}
		});
	}
	if($('#i_file').val() == 0)
	{
		$("#error_i_file").text("PLEASE ENTER ITEM'S IMAGE.");
		$("#error_i_file").slideDown();
		error++;
	}
	if($('#i_cost').val() == 0)
	{
		$("#error_i_cost").text("PLEASE ENTER ITEM'S COST.");
		$("#error_i_cost").slideDown();
		error++;
	}
	if($('#i_price').val() == 0)
	{
		$("#error_i_price").text("PLEASE ENTER ITEM'S PRICE.");
		$("#error_i_price").slideDown();
		error++;
	}
	if($('#i_quantity').val() == 0)
	{
		$("#error_i_quantity").text("PLEASE ENTER ITEM'S QUANTITY.");
		$("#error_i_quantity").slideDown();
		error++;
	}
	if($('#i_sizes1').val() == 0)
	{
		$("#error_i_sizes1").text("PLEASE ENTER ITEM'S SIZES.");
		$("#error_i_sizes1").slideDown();
		error++;
	}
	//error counter
	if( error > 0 )
	{
		error = 0;
	}
	else
	{
		$("#formAddItem").submit();
	}
}

function editing_picture(){

	if($('#i_file').val() == 0)
	{
		$("#error_i_file").text("PLEASE ENTER ITEM'S IMAGE.");
		$("#error_i_file").slideDown();
		error++;
	}
//error counter
	if( error > 0 )
	{
		error = 0;
	}
	else
	{
		$("#formEditPicture").submit();
	}
}

function editing_items(){

	if($('#i_cost').val() == 0 && $('#i_price').val() == 0 && $('#i_quantity').val() == 0)
	{
		$("#error_i_cost").text("PLEASE ENTER ITEM'S COST.");
		$("#error_i_cost").slideDown();
		$("#error_i_price").text("PLEASE ENTER ITEM'S PRICE.");
		$("#error_i_price").slideDown();
		$("#error_i_quantity").text("PLEASE ENTER ITEM'S QUANTITY.");
		$("#error_i_quantity").slideDown();
		error++;
	}
//error counter
	if( error > 0 )
	{
		error = 0;
	}
	else
	{
		$("#formEditItems").submit();
	}
}

function add_item_sizes(){

	if($('#i_sizes1').val() == 0)
	{
		$("#error_i_sizes1").text("PLEASE ENTER ITEM'S SIZES.");
		$("#error_i_sizes1").slideDown();
		error++;
	}
//error counter
	if( error > 0 )
	{
		error = 0;
	}
	else
	{
		$("#formAddItemsSizes").submit();
	}
}

function delete_item_sizes(){

	if ($('[name="i_exist_sizes[]"]:checked').length > 0) {
    	$("#error_d_sizes").slideUp();
		$("#formDeleteItemsSizes").submit();
	}else{
		$("#error_d_sizes").text("SELECT SIZE TO DELETE.");
		$("#error_d_sizes").slideDown();
	}
}

function adding_cart(){
		$("#formCart").submit();
}

function order_item_now(){

	if ($('[name="purchase_ticked[]"]:checked').length > 0) {
    	$("#error_send_order").slideUp();
		$("#formOrderItem").submit();
	}else{
		$("#error_send_order").text("SELECT ITEM TO ORDER.");
		$("#error_send_order").slideDown();
	}
}


function send_contact(){
	if( $('#name_con').val() == 0 )
	{
		$("#error_name_con").text("PLEASE ENTER YOUR NAME.");
		$("#error_name_con").slideDown();
		error++;
	}
	if( $('#email_con').val() == 0 || !filter.test($('#email_con').val()) )
	{
		$("#error_email_con").text("PLEASE ENTER VALID EMAIL ADDRESS.");
		$("#error_email_con").slideDown();
		error++;
	}
	if( $('#message_con').val() == 0)
	{
		$("#error_message_con").text("PLEASE ENTER YOUR MESSAGE.");
		$("#error_message_con").slideDown();
		error++;
	}
	//error counter	
	if( error > 0 )
	{
		error = 0;
	}
	else
	{
		$("#formContact").submit();
	}
}