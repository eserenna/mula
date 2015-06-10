var min_date;
var max_date;
var mei = new Array();
(function($) {

    $.fn.pickdate = function(parameters) {
        var parameters = $.extend({
	   		min_date : "1970-01-01",
	        max_date : "2500-12-31"
	    }, parameters);
	    this.focus(function() {
	    	parameters.new_date = $(this).val(),
    		parameters.id = $(this).attr('id');
    		html_caller(parameters);
	    });
    }
    
    
    function html_caller(parameters){
    	html_call = '<div class="pop">\
			        <div class="pop-shadow">\
			        </div>\
			        <div class="pop-content">\
			        <div class="pop-main">\
			        </div>\
			        </div>\
			        </div>';
		$('body').append(html_call);
		$('.pop').fadeIn('slow');
		layout_for_datepicker(parameters);
    }

            	function layout_for_datepicker(parameters){
            		if (parameters.new_date) {
            			get_date = new Date(parameters.new_date);
            		}else{
            			get_date = new Date();//default date
            		}
			        day = get_date.getDay();
			        date = get_date.getDate();
			        month = get_date.getMonth();
			        year = get_date.getYear();

			        chosen = date;

			        min_date = parameters.min_date.split("-");
			        min_year = parseInt(min_date[0]);
			        min_month = min_date[1] - 1;
			        min_date = parseInt(min_date[2]);

			        max_date = parameters.max_date.split("-");
			        max_year = parseInt(max_date[0]);
			        max_month = max_date[1] - 1;
			        max_date = parseInt(max_date[2]);

			        if(year<=200)
			        {
			            year += 1900;
			        }
			        var firstDay = new Date(year,month,1);
			        firstDay = firstDay.getDay();

			        //array for day, month and dates
			        all_day = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
			        all_month = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
			        days_in_month = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
			        //change February for leap year
			        if(year%4 == 0 && year!=1900)
			        {
			            days_in_month[1]=29;
			        }

			        content_day = all_day[day];
			        content_month = all_month[month];
			        content_date = date;
			        content_year = year;

			        //html contents
			        day_html = '<div class="cal-day">'+ content_day +'</div>';
			        month_html = '<div class="cal-month">\
			        <div class="top-navigation prev-month"></div>\
			        <div class="top-navigation context-month">'+ content_month  +'</div>\
			        <div class="top-navigation next-month"></div>\
			        </div>';
			        date_html = '<div class="cal-date">'+ content_date +'</div>';
			        year_html = '<div class="cal-year">\
			        <div class="top-navigation prev-year"></div>\
			        <div class="top-navigation context-year">'+ content_year  +'</div>\
			        <div class="top-navigation next-year"></div>\
			        </div>';
			        top_play_html = '<div class="top-play"><div class="cal-close"></div></div>';
			        cal_top = '<div class="cal-top">'+ top_play_html + day_html + month_html + date_html + year_html +'</div>';
			        //days label
			        cal_calendar_day = '<tr class="cal_d_weeks">';
			        for(i=0;i<all_day.length;i++){
			        	cal_calendar_day += '<th>'+ all_day[i].substring(0, 3) +'</th>';
			        }
			        cal_calendar_day += '</tr>';

			        //first row
			        first_row = '<tr class="first-week">';
			        j = 1;
			        for (i = 0; i < 7; i++) {
			        	if(i < firstDay){//get number for 1st day of the month
			        		first_row += '<td></td>';
			        	}else{
			        		if(j == chosen){
			        			first_row += '<td class="chosen">'+ j +'</td>';	
			        		}else if(j >= min_date && j <= max_date && month >= min_month  && month <= max_month && year >= min_year && year <= max_year){
			        			first_row += '<td class="activated">'+ j +'</td>';
			        		}else{
			        			first_row += '<td>'+ j +'</td>';
			        		}
			        		j++;
			        	}
			        };
			        first_row += '</tr>';

			        next_rows = '<tr class="next-weeks">';
			        seven_days = 0;
			        for (i = j; i <= days_in_month[month]; i++) {
			        	seven_days++;
			        	if(i == chosen){
				        	next_rows += '<td class="chosen">'+ i +'</td>';	
				        }else if(i >= min_date && i <= max_date && month >= min_month  && month <= max_month && year >= min_year && year <= max_year){
				        	next_rows += '<td class="activated">'+ i +'</td>';	
				        }else{
				        	next_rows += '<td>'+ i +'</td>';	
				        }
				        if (seven_days > 6) {
				        	seven_days = 0;
				        	next_rows += '</tr><tr class="next-weeks">';
				        }
			        };
			        next_rows += "</tr>";

			        cal_calendar = '<table class="cal-tb">' + cal_calendar_day + first_row + next_rows + '</table>';
			        cal_end = '<div class="cal-end"><button class="btn-beautify button-okay white-text" id="cal-choose">CHOOSE</button></div>';
			        cal_bottom = '<div class="cal-bottom">' + cal_calendar + cal_end + '</div>';
			       
			        $('.pop-main').html(cal_top + cal_bottom);
			        
			        month+=1;
			        year = parseInt(year);
			        month = parseInt(month);
			        date = parseInt(date);

					
			        $("div.prev-month").click( function () {
						month-=1;
						if(month == 0){
				        	year -= 1;
				        	month = 12;
				        }
				        if (month < 10 ) {
					      	month = "0"+month;
					    }
			        	parameters.new_date = year+"-"+month+"-01";
			        	change_date(parameters);
					});

					$("div.next-month").click( function () {
						month+=1;
						if(month == 13){
				        	year += 1;
				        	month = 1;
				        }
				        if (month < 10 ) {
					      	month = "0"+month;
					    }
					    parameters.new_date = year+"-"+month+"-01";
			        	change_date(parameters);
					});

			        $("div.prev-year").click( function () {
			        	year-=1;
						parameters.new_date = year+"-"+month+"-01";
			        	change_date(parameters);
					});

					$("div.next-year").click( function () {
						year+=1;
						parameters.new_date = year+"-"+month+"-01";
			        	change_date(parameters);
					});

					$(".activated").click(function () {
						date = this.textContent;

						if (date < 10 ) {
				        	date = "0"+date;
				        }

						parameters.new_date = year+"-"+month+"-"+date;
						change_date(parameters);
					});

					$('.cal-close, .pop-shadow').click(function() {
						$('.pop').fadeOut('slow');
						$('.pop').remove();
					});

					$('#cal-choose').click(function() {
				        if (month < 10) {
				        	month = "0"+month;
				        }
				        if (date < 10 ) {
				        	date = "0"+date;
				        }

				        new_date = year+"-"+month+"-"+date;
						
						$('#'+parameters.id).val(new_date);
						$('.pop').fadeOut('slow');
						$('.pop').remove();
					});
			    }

            	function change_date (parameters) {
            		new_date = parameters.new_date.split("-");
			        year = parseInt(new_date[0]);
			        month = parseInt(new_date[1]);
			        date = parseInt(new_date[2]);

			        if (month < 10) {
			        	month = "0"+month;
			        }
			        if (date < 10 ) {
			        	date = "0"+date;
			        }

			        new_date = year+"-"+month+"-"+date;
			        parameters.new_date = new_date;
			        layout_for_datepicker(parameters);
            	}
}(jQuery));