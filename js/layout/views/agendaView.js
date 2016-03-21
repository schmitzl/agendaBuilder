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
    

    this.createActivityContainer = function(container, activityType, time, heading, id) {
        
        activityContainerClass = "";
        
        switch(activityType) {
            case "Presentation":
                activityContainerClass = "presentationContainer";
                break;
            case "Group Work":
                activityContainerClass = "groupWorkContainer";
                break;
            case "Discussion":
                activityContainerClass = "discussionContainer";
                break;
            case "Break":
                activityContainerClass = "breakContainer";
                break;
        }
        
        var timeElem = $("<span></span>").html(time + " ");
        var headingElem = $("<span></span>").html(heading);
        var activityContainer = $("<div></div>").addClass("activityContainer").addClass(activityContainerClass);  
        activityContainer.attr('id', id);
        activityContainer.append(timeElem, headingElem);
        container.append(activityContainer); 
        return activityContainer;
    }

}