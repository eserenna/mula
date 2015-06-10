<script type="text/javascript">
var idiotproof_email_checker = '<?php echo site_url("/checker/email_checker"); ?>';
var idiotproof_email_checker = '<?php echo site_url("/checker/password_checker"); ?>';
var idiotproof_login = '<?php echo site_url("/circle/login_check"); ?>';
var nowDate = new Date();
var today = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 0, 0, 0, 0);

$('#endless-branding').delay(1000).show(1000);
$('#main').fadeIn(1100);

function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#name-image').html(input.files[0].name);
            $('#preview-image').attr('src', e.target.result);
            $('#hide-it').slideDown(1000);
            $('#preview-image').slideDown(1000);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#imgInp").change(function(){
    setTimeout(readURL(this), 1000);
});

$('[data-toggle="tooltip"]').tooltip();
$('.collapse').collapse();
$('#add-create-group').tooltip();
$('#drop, #check-email, #change-password').fadeIn(1100);
$('#preview-image').hide();

//open main-intro
$('#open-retrieval').click(function() {
    $('#drop, #register, #send-verification').hide();
    $('#forgot-password').fadeIn(1100);
});

$('#open-register').click(function() {
    $('#forgot-password, #drop, #send-verification').hide();
    $('#register').fadeIn(1100);
});

$('#open-verification').click(function() {
    $('#forgot-password, #register, #drop').hide();
    $('#send-verification').fadeIn(1100);
});

$('.back-to-start').click(function() {
    $('#forgot-password, #register, #send-verification').hide();
    $('#drop').fadeIn(1100);
}); 
//open main-intro

//open main-setting
$('#open-change-password').click(function() {
    $('#change-password').fadeIn(1100);
    $('#change-email, #change-username').hide();
});

$('#open-change-email').click(function() {
    $('#change-email').fadeIn(1100);
    $('#change-password, #change-username').hide();
});

$('#open-change-username').click(function() {
    $('#change-username').fadeIn(1100);
    $('#change-email, #change-password').hide();
});
//open main-setting

$('#setdate').datepicker({
	format: "yyyy-mm-dd",
	startDate: new Date()
});

 $('#selecttimer, #filtertimer, #selecttype, #filter_survey').selectpicker({
 	style: 'btn-info'
 });

 $("#file-1").fileinput({
    browseLabel: 'Select...',
    removeIcon: '',
    browseIcon: '',
    browseClass: 'btn btn-warning',
    allowedFileExtensions : ['jpg', 'png','gif'],
    overwriteInitial: true,
    maxFileCount: 1,
    showUpload: false,
    fileActionSettings:{
        removeIcon: '',
        removeClass: '',
        removeTitle: '',
    },
    previewSettings: {
        image: {
            width: "100%", 
            height: "auto"
        },
    },
    layoutTemplates:{
        icon: '',
    },
});
</script>
