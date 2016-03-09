var AgendaView = function (agendaModel) {

    this.agendaModel = agendaModel;
            
    
    this.createDayView = function(startTime, endTime, totalLength) {
        
        var dayInformationContainer = $("<div></div>").addClass("dayInformation");
        var startTimeContainer = $("<p></p>").text("Start time: " + startTime);
        var endTimeContainer = $("<p></p>").text("End time: " + endTime);
        var totalLengthContainer = $("<p></p>").text("Total length: " + totalLength + " min");
        dayInformationContainer.append(startTimeContainer, endTimeContainer, totalLengthContainer);
        
        var dailyActivitiesContainer = $("<div></div>").addClass("dailyActivitiesContainer");
        var dailyActivitiesTable = $("<table></table>").addClass("dailyActivitiesTable");
        dailyActivitiesContainer.append(dailyActivitiesTable);
        
        var dayContainer = $("<div></div>").addClass("dayContainer horizontalContainer container");
        dayContainer.append(dayInformationContainer, dailyActivitiesContainer);
        
        $('#daysContainer').append(dayContainer);
        
        return dayContainer; 
    }
    
    
    this.createActivity = function(container, activityType, time, heading) {
        
        rowClass = "";
        
        switch(activityType) {
            case "Presentation":
                rowClass = "presentationRow";
                break;
            case "Group Work":
                rowClass = "groupWorkRow";
                break;
            case "Discussion":
                rowClass = "discussionRow";
                break;
            case "Break":
                rowClass = "breakRow";
                break;
        }
        
        var activityRow = $("<tr></tr>").addClass("activityRow " + rowClass);
        var timeCol = $("<td></td>").text(time).addClass("timeCol");
        var activityCol = $("<td></td>").text(heading).addClass("activityCol");
        activityRow.append(timeCol, activityCol);
        
        container.append(activityRow); 
       
    }

    this.update = function() {
        var days = this.agendaModel.getDays();
        for( var i=0; i<days.length; i++){
            $('#daysContainer').html("");
            this.createDayView(days[i].getStart(), days[i].getEnd(), days[i].getTotalLength() );
            console.log(days[i]);
        } 

    }

    this.agendaModel.addObserver(this);

}