var AgendaView = function () {
    
    this.createDayView = function(startTime, endTime, totalLength, dayIndex) {
        
        var dayInformationContainer = $("<div></div>").addClass("dayInformation");

        var startTimeContainer = $("<form></form>").attr("role","form");
        startTimeContainer.on( "submit", function(){
            return false;
        } );
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
    
    this.createActivityContainer = function(container, activityType, time, heading, id) {
        
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
        
        var activityContainer = $("<div></div>").addClass("activityContainer").addClass(rowClass);  
        activityContainer.attr('id', id);
        activityContainer.html(heading);
        container.append(activityContainer); 
        return activityContainer;
    }

}