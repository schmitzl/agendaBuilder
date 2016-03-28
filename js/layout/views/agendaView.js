var AgendaView = function () {
    
    this.createDayView = function(startTime, endTime, totalLength, dayIndex) {
        
        var dayInformationContainer = $("<div></div>").addClass("dayInformation");
        
        var dayHeadingContainer = $("<div></div>").addClass("dayHeading").addClass("partContainer");

        var headingContainer = $("<div></div>").addClass("headingContainer");
		var currentDate = new Date(new Date().getTime() + (24 * 60 * 60 * 1000) * dayIndex );
		var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var heading = $("<span></span>").addClass("dayHead").html( monthNames[currentDate.getMonth()]+" "+currentDate.getDate() );
        
		var deleteDayBtn = $("<span></span>").addClass("deleteDayBtn").attr("id","removeIndex"+dayIndex);
		var deleteIcon = $("<span></span>").addClass("glyphicon glyphicon-remove").attr("aria-hidden","true");
        
		deleteDayBtn.append(deleteIcon);
        
        headingContainer.append(heading, deleteDayBtn);
		
        var startTimeContainer = $("<form onsubmit='return false;'></form>").attr("role","form");
        startTimeContainer.on( "submit", function(){
            return false;
        } );
        var startTimeFormGroupDiv = $("<div></div>").addClass("form-group");
        var startTimeLabel= $("<label></label>").attr("for","startTimeInput"+dayIndex).text("Start time:");
        var startTimeInput= $("<input></input>").attr("id","startTimeInput"+dayIndex).attr("type","text").attr("value",startTime).addClass("form-control");
        startTimeFormGroupDiv.append(startTimeLabel,startTimeInput);
        startTimeContainer.append(startTimeFormGroupDiv);
        
        dayHeadingContainer.append(headingContainer,startTimeContainer);

        var dayTimingContainer = $("<div></div>").addClass("dayTiming").addClass("partContainer");
		
		var dayTimingInfoContainer = $("<div></div>").addClass("dayTimingInfo");
        var endTimeContainer = $("<p></p>").html("End time: <span class='bold'>" + endTime + "</span>");
        var totalLengthContainer = $("<p></p>").html("Total length: <span class='bold'>" + totalLength + " min </span>");
        dayTimingInfoContainer.append(endTimeContainer, totalLengthContainer);
		
		var dayTimingScaleContainer = $("<div></div>").addClass("dayTimingScale").attr("id","dayTimingScale"+dayIndex);
		var dayTimingScaleBreakLine = $("<div></div>").addClass("dayTimingScaleBreakLine");
		dayTimingScaleContainer.append(dayTimingScaleBreakLine);
		dayTimingContainer.append(dayTimingInfoContainer, dayTimingScaleContainer);
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
        
        var timeElem = $("<div></div>").addClass(activityContainerClass).addClass("inline").addClass("activityTimeLabel").html(length + " min ");
        var headingElem = $("<div></div>").addClass("activityHeading").addClass("inline").html(" " + heading);
        var activityContainer = $("<div></div>").addClass("activityContainer");  
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
        
        var timeElem = $("<div></div>").addClass(activityContainerClass).addClass("inline").addClass("activityTimeLabel").html(time + " ");
        var headingElem = $("<div></div>").addClass("activityHeading").addClass("inline").html(heading);
        var activityContainer = $("<div></div>").addClass("activityContainer");  
        activityContainer.attr('id', id);
        activityContainer.append(timeElem, headingElem);
        container.append(activityContainer); 
        return activityContainer;
    }
	
    this.updateDayTimeScale = function(dayIndex, totalLength, typeLengths) {
		$("#dayTimingScale"+dayIndex).html("");
		var filledUpLevel = 0;
		for(j=0; j<typeLengths.length; j++) {
			if(typeLengths[j]>0) {
				var typeRatio = (typeLengths[j]/totalLength);
				$("#dayTimingScale"+dayIndex).append($("<div></div>").addClass("dayTimingScaleActivityType"+j).attr("style","height:"+(typeRatio*50)+"px; top:"+(filledUpLevel*50)+"px"));
				filledUpLevel += typeRatio;
			}
		}
		var dayTimingScaleBreakLine = $("<div></div>").addClass("dayTimingScaleBreakLine");
		$("#dayTimingScale"+dayIndex).append(dayTimingScaleBreakLine);
    }

}