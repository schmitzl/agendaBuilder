var AgendaView = function () {
    
    this.createDayView = function(startTime, endTime, totalLength, dayIndex) {
        
        var dayInformationContainer = $("<div></div>").addClass("dayInformation");
        
        var dayHeadingContainer = $("<div></div>").addClass("dayHeading").addClass("partContainer");

		var deleteDayBtn = $("<button></button>").addClass("btn btn-default").attr("type","button").attr("id","removeIndex"+dayIndex);
		var deleteIcon = $("<span></span>").addClass("glyphicon glyphicon-remove").attr("aria-hidden","true");
		deleteDayBtn.append(deleteIcon);
		
        var startTimeContainer = $("<form></form>").attr("role","form");
        startTimeContainer.on( "submit", function(){
            return false;
        } );
        var startTimeFormGroupDiv = $("<div></div>").addClass("form-group");
        var startTimeLabel= $("<label></label>").attr("for","startTimeInput"+dayIndex).text("Start time:");
        var startTimeInput= $("<input></input>").attr("id","startTimeInput"+dayIndex).attr("type","text").attr("value",startTime).addClass("form-control");
        startTimeFormGroupDiv.append(startTimeLabel,startTimeInput);
        startTimeContainer.append(startTimeFormGroupDiv);
        
        dayHeadingContainer.append(deleteDayBtn,startTimeContainer);

        var dayTimingContainer = $("<div></div>").addClass("dayTiming").addClass("partContainer");
        var endTimeContainer = $("<p></p>").text("End time: " + endTime);
        var totalLengthContainer = $("<p></p>").text("Total length: " + totalLength + " min");
        dayTimingContainer.append(endTimeContainer, totalLengthContainer);
        dayInformationContainer.append(dayHeadingContainer, dayTimingContainer);
        
        var dailyActivitiesContainer = $("<div></div>").addClass("dailyActivitiesContainer");
        var dailyActivitiesTable = $("<table></table>").addClass("dailyActivitiesTable");
        dailyActivitiesContainer.append(dailyActivitiesTable);
        
        var dayContainer = $("<div></div>").addClass("dayContainer horizontalContainer container");
        dayContainer.append(dayInformationContainer, dailyActivitiesContainer);
        
        $('#daysContainer').append(dayContainer);
        
        return dayContainer; 
    }
    
    this.createParkedActivityContainer = function(container, activityType, length, heading, id) {
        
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
        
        var timeElem = $("<span></span>").html(length + " ");
        var headingElem = $("<span></span>").html(heading);
        var activityContainer = $("<div></div>").addClass("activityContainer").addClass(activityContainerClass);  
        activityContainer.attr('id', id);
        activityContainer.append(timeElem, headingElem);
        container.append(activityContainer); 
        return activityContainer;
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