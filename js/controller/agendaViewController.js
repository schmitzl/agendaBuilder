var AgendaViewController = function (agendaView, agendaModel) {
    
    agendaModel.addObserver(this);


    $('#addDayButtonContainer').on('click', function(){
        agendaModel.addDay();
    });

    var days = agendaModel.getDays();
    for( var i=0; i<days.length; i++){
        $('#startTimeInput'+i).change(function(){
        	var timeInput = $('#startTimeInput').val().split(":");
        	days[i].setStart( parseInt(timeInput[0]), parseInt(timeInput[1]) );
        	console.log(i);
    	});
            
    } 
    
     this.update = function() {
        var days = agendaModel.getDays();
        $('#daysContainer').html("");
        for( var i=0; i<days.length; i++){
            var dayContainer = agendaView.createDayView(days[i].getStart(), days[i].getEnd(), days[i].getTotalLength(), i );
            var dailyActivitesContainer = dayContainer.find(".dailyActivitiesContainer");
          /*  dailyActivitesContainer.droppable({
                accept: ".activityContainer",
                hoverClass: 'hovered',
                drop: positioning
            });
            dailyActivitesContainer.bind('drop', function(event){
                event.preventDefault();
                alert('drop');
                //originalEvent = event.originalEvent.dataTransfer;
                //event.target.appendChild(document.getElementById(originalEvent));
            });*/
            
            var activities = days[i].getActivities();
            for( var j=0; j < activities.length; j++){
                activityContainer = agendaView.createActivityContainer(dayContainer.find(".dailyActivitiesContainer") ,activities[j].getType(), days[i].getActivityStartTime(j), activities[j].getName());
                activityContainer.draggable({
  revert: "invalid",
  opacity: 0.7,
  snap: ".dailyActivitiesContainer",
  snapMode: "inner"
});
        
            } 
        }
        layoutContainer();
    }

         
         
}