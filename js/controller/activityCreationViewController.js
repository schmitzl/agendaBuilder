var ActivityCreationViewController = function (activityCreationView, agendaModel) {
    
    showCreationContainer = function(){
        $('#activityCreationContainer').show();
        $('#fullSize').show();
    }
    
    hideCreationContainer= function(){
        activityCreationView.resetValues();
        
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
       /* if(val = $('#activityLengthInMin').val(), $.isNumeric(val) && Math.floor(val) == val){
            var activityLenght = parseInt($('#activityLengthInMin').val());
            if( activityLenght < 1440){
                $('#lengthError').html("Too much!");
            }
        }*/ 
            agendaModel.addActivity(new Activity( $('#activityTitle').val() , parseInt($('#activityLengthInMin').val()) , $('#activityType').val() , $('#activityDescription').val() ),0);
            hideCreationContainer();
        
    });
    
	$('#cancelNewActivityButton').on('click', function(){
        hideCreationContainer();
    });
}