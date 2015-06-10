var error = 0;

$( "#settitle" ).focusout(function() 
{
	if($('#settitle').val() == 0)
	{
		$("#error_settitle").text("PLEASE ENTER SURVEY TITLE.");
		$("#error_settitle").slideDown();
	}
});
$( "#settitle" ).focusin(function() 
{
	$("#error_settitle").slideUp();
});

$( "#setdate" ).focusout(function() 
{
	if($('#setdate').val() == 0)
	{
		$("#error_setdate").text("PLEASE ENTER SURVEY EXPIRE DATE.");
		$("#error_setdate").slideDown();
	}
});
$( "#setdate" ).focusin(function() 
{
	$("#error_setdate").slideUp();
});

$( "#selecttimer" ).focusin(function() 
{
	$("#error_selecttimer").slideUp();
});

$( "#setdesc" ).focusout(function() 
{
	if($('#setdesc').val() == 0)
	{
		$("#error_setdesc").text("PLEASE ENTER SURVEY DESCRIPTION.");
		$("#error_setdesc").slideDown();
	}
});
$( "#setdesc" ).focusin(function() 
{
	$("#error_setdesc").slideUp();
});

$( "#file-1" ).focusout(function() 
{
	if($(".file-caption-name").length > 0){
		$("#error_file-1").slideUp();
		console.log($(".file-caption-name").val());
	}else{
		console.log("show error");
		$("#error_file-1").text("PLEASE ENTER SURVEY IMAGE.");
		$("#error_file-1").slideDown();
	}
});
$( "#file-1" ).focusin(function() 
{
	console.log("show error");
	$("#error_file-1").slideUp();
});

//checker
function createSurvey(){
	
}



//forms jquery functions
function createSurvey(){
	if($('#settitle').val() == 0)
	{
		$("#error_settitle").text("PLEASE ENTER SURVEY TITLE.");
		$("#error_settitle").slideDown();
		error++;
	}
	if($('#setdate').val() == 0)
	{
		$("#error_setdate").text("PLEASE ENTER SURVEY EXPIRE DATE.");
		$("#error_setdate").slideDown();
		error++;
	}
	if($('#selecttimer').val() == null)
	{
		$("#error_selecttimer").text("PLEASE ENTER SURVEY TIMER.");
		$("#error_selecttimer").slideDown();
		error++;
	}
	if($('#setdesc').val() == 0)
	{
		$("#error_setdesc").text("PLEASE ENTER SURVEY DESCRIPTION.");
		$("#error_setdesc").slideDown();
		error++;
	}
	if($('#file-1').val() == 0)
	{
		$("#error_file-1").text("PLEASE ENTER SURVEY IMAGE.");
		$("#error_file-1").slideDown();
		error++;
	}
	if( error > 0 )
	{
		console.log($('#selecttimer').val());
		error = 0;
	}
	else
	{
		$("#formCreateSurvey").submit();
	}
	
}