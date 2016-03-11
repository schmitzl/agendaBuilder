var AgendaView = function (agendaModel) {
    
    this.agendaModel = agendaModel;
    this.agendaModel.addObserver(this);
    
    this.createDayView = function(startTime, endTime, totalLength, dayIndex) {
        
        var dayInformationContainer = $("<div></div>").addClass("dayInformation");

        var startTimeContainer = $("<form></form>").attr("role","form");
        var startTimeFormGroupDiv = $("<div></div>").addClass("form-group");
        var startTimeLabel= $("<label></label>").attr("for","startTimeInput"+dayIndex).text("Start time:");
        var startTimeInput= $("<input></input>").attr("id","startTimeInput"+dayIndex).attr("type","text").attr("value",startTime).addClass("form-control");
        startTimeFormGroupDiv.append(startTimeLabel,startTimeInput);
        startTimeContainer.append(startTimeFormGroupDiv);


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
    
    
    this.createActivityView = function(container, activityType, time, heading) {
        
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
        $('#daysContainer').html("");
        for( var i=0; i<days.length; i++){
            var dayContainer = this.createDayView(days[i].getStart(), days[i].getEnd(), days[i].getTotalLength(), i );
            var activities = days[i].getActivities();
            for( var j=0; j < activities.length; j++){
                this.createActivityView(dayContainer.find(".dailyActivitiesTable"),activities[j].getType(), days[i].getActivityStartTime(j), activities[j].getName());
            }
        } 
        
        layoutContainer();
    }

}