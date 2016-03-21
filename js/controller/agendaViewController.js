var AgendaViewController = function (agendaView, agendaModel) {
        
    agendaModel.addObserver(this);


    $('#addDayButtonContainer').on('click', function(){
        agendaModel.addDay();
    });

	
    updateStartTimeEvents = function(){
		console.log("updateStartTimeEvents");
		var days = agendaModel.getDays();
		for( var i=0; i<days.length; i++){
			$('#startTimeInput'+i).change(function(){
				console.log(i);
				var timeInput = $('#startTimeInput').val().split(":");
				days[i].setStart( parseInt(timeInput[0]), parseInt(timeInput[1]) );
			});
				
		}
	}
    
    
    enableDragAndDrop = function(container) {
        container.sortable({
                    connectWith: '.dailyActivitiesContainer',
                    update: function(event, ui) { 
                        if(ui.sender != null) {
                            activity = ui.item;
                            activityId = activity.attr('id');
                            srcContainerPos = ui.sender.attr('id').slice(0, -1);
                            activitySrcPos = agendaModel.getActivityPosById(activityId);
                            destContainer = ui.item.closest('.dailyActivitiesContainer');
                            destContainerPos = destContainer.attr('id').slice(0, -1);
                            activityDestPos = destContainer.find('.activityContainer').index(activity);
                            
                            agendaModel.moveActivity(srcContainerPos, activitySrcPos, destContainerPos, activityDestPos);
                        } 
                    }
            }); 
    }
     
    
     this.update = function() {
		//updateStartTimeEvents();
	 
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
        layoutContainer();
    }

         
         
}