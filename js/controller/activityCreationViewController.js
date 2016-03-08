var ActivityCreationViewController = function (activityCreationView, agendaModel) {
    
    showCreationContainer = function(){
        $('#activityCreationContainer').show();
        $('#fullSize').show();
    }
    
    hideCreationContainer= function(){
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
        agendaModel.addActivity("TODO");
    });
}