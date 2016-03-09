var ActivityCreationViewController = function (activityCreationView, agendaModel) {
    
    showCreationContainer = function(){
        $('#activityCreationContainer').show();
        $('#fullSize').show();
    }
    
    hideCreationContainer= function(){
        $('#activityTitle').val("");
        $('#activityLengthInMin').val("0");
        $('#activityType').val(0);
        $('#activityDescription').val("");
        
        $('#activityCreationContainer').hide();
        $('#fullSize').hide();
    }
    
    hideCreationContainer();
    
    $('#createNewActivityButton').on('click', function(){
        showCreationContainer();
    });
    
    $('#fullSize').on('click', function(){
        hideCreationContainer();
    });
	
	// Adding new activity to model
	$('#submitNewActivityButton').on('click', function(){
        agendaModel.addActivity(new Activity( $('#activityTitle').val() , parseInt($('#activityLengthInMin').val()) , $('#activityType').val() , $('#activityDescription').val() ),0);
        hideCreationContainer();
    });
    
	$('#cancelNewActivityButton').on('click', function(){
        hideCreationContainer();
    });
}