      
	$(window).resize(function() {
		var screening = window.innerHeight;
		var top = $("header").outerHeight( true );
		var bottom = $("footer").outerHeight( true );
		var main = screening - (bottom + top + 70);
		$('#main').css('min-height', main);
	}).resize();



	$('#xix').click(function(){
		$("#error_overall").slideUp();
		$("#xix").slideUp();
	});

	$('#xis').click(function(){
		$("#success_overall").slideUp();
		$("#xis").slideUp();
	});

	//number only	
	$("input.number-only").keydown(function(e) {
		// Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
             // Allow: Ctrl+C
            (e.keyCode == 67 && e.ctrlKey === true) ||
             // Allow: Ctrl+X
            (e.keyCode == 88 && e.ctrlKey === true) ||
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        	if($('#no-letters').length == 0){
        		$(this).after("<div id='no-letters' class='error-message'>Please enter numbers only</div>");	
        		$('#no-letters').slideDown(1000).delay(1000).slideUp(1000);
        		setTimeout(function() {
  					$('#no-letters').remove();
				}, 3000);
        	}
        }
	});

      //inputs - text,email,password
   $('input[type=text].beauty,input[type=email].beauty,input[type=password].beauty').each(function(){
        $(this).val('');
        $(this).before('<label class="placeholder-to-label">'+$(this).attr("placeholder")+'</label>');
    }).focus(function(e){
        if ($(this).attr("placeholder")) {
            placehold = $(this).prev("label").text();
            $(this).attr('placeholder'," ");
            $(this).prev("label").fadeIn("slow");
        }
    }).blur(function(){
        if ($(this).attr('placeholder')) {
            $(this).attr('placeholder', placehold);
            $(this).prev("label").fadeOut("slow");
        }
    });
    //input file
    $('input[type=file].beauty').each(function () {
        $(this).next("label").after('<p class="file-upload-list"></p>');
    }).change(function(){
        $(this).next("label").next("p").slideUp("fast");
        $(this).next("label").next("p").text("");
        for (var i = 0; i < this.files.length; i++)
        {
            if(i<this.files.length-1){
                upload_content = this.files[i].name+", ";
            }else{
                upload_content = this.files[i].name;
            }
            $(this).next("label").next("p").append(upload_content);
            
        }
        $(this).next("label").next("p").slideDown("fast");
    });

    //select
    $('select.beautify').each(function(){
        var $this = $(this), numberOfOptions = $(this).children('option').length;
      
        $this.addClass('select-hidden'); 
        $this.wrap('<div class="beautify-select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());
      
        var $list = $('<ul />', {
            'class': 'select-options mCustomScrollbar content fluid light',
            'data-mcs-theme': 'dark-2'
        }).insertAfter($styledSelect);
      
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }
      
        var $listItems = $list.children('li');
      
        $styledSelect.click(function(e) {
            e.stopPropagation();
            $('div.select-styled.active').each(function(){
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });
      
        $listItems.click(function(e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            //console.log($this.val());
        });
      
        $(document).click(function() {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });


function centerModal() {
    $(this).css('display', 'block');
    var $dialog = $(this).find(".modal-dialog");
    var offset = ($(window).height() - $dialog.height()) / 2.5;
    // Center modal vertically in window
    $dialog.css("margin-top", offset);
}