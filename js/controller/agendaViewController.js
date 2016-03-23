var AgendaViewController = function (agendaView, agendaModel) {
        
    enableDragAndDrop = function(container) {
        container.sortable({
                    connectWith: '.dailyActivitiesContainer',
                    update: function(event, ui) { 
                        if(ui.sender != null) {
                            activity = ui.item;
                            activityId = activity.attr('id');
                            if(ui.sender.attr('id') == "parkedActivitiesContainer")
                                srcContainerPos = null;
                            else
                                srcContainerPos = ui.sender.attr('id').slice(0, -1);
                            alert("srcContainerPos " + srcContainerPos);
                            activitySrcPos = agendaModel.getActivityPosById(activityId);
                            destContainer = ui.item.closest('.dailyActivitiesContainer');
                            if(destContainer.attr('id') == "parkedActivitiesContainer")
                                destContainerPos = null;
                            else
                                destContainerPos = destContainer.attr('id').slice(0, -1);
                            alert("destContainerPos " + destContainerPos);
                            activityDestPos = destContainer.find('.activityContainer').index(activity);
                            
                            agendaModel.moveActivity(srcContainerPos, activitySrcPos, destContainerPos, activityDestPos);
                        } 
                    } 
            }); 
    }
    
    agendaModel.addObserver(this);
    
    var parkedActivitiesContainer = $('#parkedActivitiesContainer');
    var activitiesContainer = parkedActivitiesContainer.find(".dailyActivitiesContainer");
    activitiesContainer.attr('id', '-1a');
    parkedActivitiesContainer.html("");
    enableDragAndDrop(parkedActivitiesContainer);


    $('#addDayButtonContainer').on('click', function(){
        agendaModel.addDay();
    });

	
    updateStartTimeEvents = function(){
		var days = agendaModel.getDays();
		for( i=0; i<days.length; i++){
			$('#removeIndex'+String(i)).click(function(){
				agendaModel.removeDay( parseInt($(this).attr("id").split("Index")[1]) );
			});		
		
			$('#startTimeInput'+String(i)).change(function(){
				var timeInput = $('#startTimeInput'+ parseInt($(this).attr("id").split("Input")[1]) ).val().split(":");
				days[ parseInt($(this).attr("id").split("Input")[1]) ].setStart( parseInt(timeInput[0]), parseInt(timeInput[1]) );
			});
			
			$('#startTimeInput'+String(i)).submit(function(){
				var timeInput = $('#startTimeInput'+ parseInt($(this).attr("id").split("Input")[1]) ).val().split(":");
				days[ parseInt($(this).attr("id").split("Input")[1]) ].setStart( parseInt(timeInput[0]), parseInt(timeInput[1]) );
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