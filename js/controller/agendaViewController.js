var AgendaViewController = function (agendaView, agendaModel) {
        
    enableDragAndDrop = function(container) {
        container.sortable({
                    connectWith: '.dailyActivitiesContainer',
                    stop: function(event, ui) { 
                        
                        activity = ui.item;
                        ui.item.removeClass('helper');
                        activityId = activity.attr('id');
                        if(event.target.id == "parkedActivitiesContainer")
                            srcContainerPos = null;
                        else
                            srcContainerPos = event.target.id.slice(0, -1);

                        activitySrcPos = agendaModel.getActivityPosById(activityId);
                        destContainer = ui.item.closest('.dailyActivitiesContainer');
                        if(destContainer.attr('id') == "parkedActivitiesContainer")
                            destContainerPos = null;
                        else
                            destContainerPos = destContainer.attr('id').slice(0, -1);

                        activityDestPos = destContainer.find('.activityContainer').index(activity);
                        var dropDay = agendaModel.getDays()[destContainerPos];
                        var activityDrop = agendaModel.getActivityById(activityId);

                        
                        if(dropDay.getEndMinutes() + activityDrop.getLength() <= 1440){
                            agendaModel.moveActivity(srcContainerPos, activitySrcPos, destContainerPos, activityDestPos);
                        }
                        else{
                            container.sortable('cancel');
                            alert("The activity is too long for this day.");
                        }
                        
                    },
                    placeholder: {
                        element: function(currentItem) {
                            return $("<div></div>").addClass("placeholder");
                        },
                        update: function(container, p) {
                            return;
                        }
                    },
                    start: function(e, ui){
                        ui.placeholder.height(ui.item.height());
                        ui.helper.addClass('helper');
                    },
            }); 
    }
    
    agendaModel.addObserver(this);
    
    var parkedActivitiesContainer = $('#parkedActivitiesContainer');
    var activitiesContainer = parkedActivitiesContainer.find(".dailyActivitiesContainer");
   // activitiesContainer.attr('id', '-1a');
    parkedActivitiesContainer.html("");
    enableDragAndDrop(parkedActivitiesContainer);


    $('#addDayButton').on('click', function(){
        agendaModel.addDay();
    });

	
	onChangeStartTime = function(caller, days) {
		var timeInput = $('#startTimeInput'+ parseInt($(caller).attr("id").split("Input")[1]) ).val();
		
		if (timeInput.indexOf(":") != -1) {
			var timeInputSplit = timeInput.split(":");
			
			
			if( $.isNumeric(timeInputSplit[0]) && Math.floor(timeInputSplit[0]) == timeInputSplit[0] && $.isNumeric(timeInputSplit[1]) && Math.floor(timeInputSplit[1]) == timeInputSplit[1]){
				var hourInput = parseInt(timeInputSplit[0]);
				var minuteInput = parseInt(timeInputSplit[1]);
				
				if( hourInput >= 0 && hourInput < 24 && minuteInput >= 0 && minuteInput < 60 ) {
					days[ parseInt($(caller).attr("id").split("Input")[1]) ].setStart( hourInput, minuteInput );
				} else {
					startTimeCorrect = false;
					alert("Please enter a time between 00:00 and 23:59");
				}
			} else {
				alert("Please enter start time with numbers");
			}
		} else {
			alert("Enter the start time in the format HH:MM");
		}
	}
	
	
    updateStartTimeEvents = function(){
		var days = agendaModel.getDays();
		for( i=0; i<days.length; i++){
			$('#removeIndex'+String(i)).click(function(){
				agendaModel.removeDay( parseInt($(this).attr("id").split("Index")[1]) );
			});		
		
			$('#startTimeInput'+String(i)).change(function(){
				onChangeStartTime(this, days);
			});
			
			$('#startTimeInput'+String(i)).submit(function(){
				onChangeStartTime(this, days);
				return(false);
			});
				
		}
	}
     
    
     this.update = function() {
        var parkedActivitiesContainer = $('#parkedActivitiesContainer');
        var activitiesContainer = parkedActivitiesContainer.find(".dailyActivitiesContainer");
        parkedActivitiesContainer.html("");
                 
        var parkedActivites = agendaModel.getParkedActivites();
        for(var i = 0; i < parkedActivites.length; i++) {
            agendaView.createParkedActivityContainer(parkedActivitiesContainer, parkedActivites[i].getType(), parkedActivites[i].getLength(), parkedActivites[i].getName(), parkedActivites[i].getId());
        }
         
        var days = agendaModel.getDays();
        $('#daysContainer').html("");
        for( var i=0; i<days.length; i++){
            var dayContainer = agendaView.createDayView(days[i].getStart(), days[i].getEnd(), days[i].getTotalLength(), i );
            var dailyActivitesContainer = dayContainer.find(".dailyActivitiesContainer");
            dailyActivitesContainer.attr('id', i + 'a');
            enableDragAndDrop(dailyActivitesContainer);
            
            var activities = days[i].getActivities();
            for( var j=0; j < activities.length; j++){
                activityContainer = agendaView.createActivityContainer(dayContainer.find(".dailyActivitiesContainer"), activities[j].getType(), days[i].getActivityStartTime(j), activities[j].getName(), activities[j].getId());
            } 
        }
		
		updateStartTimeEvents();
         
        layoutContainer();
    }

         
         
}