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
       if(val = $('#activityLengthInMin').val(), $.isNumeric(val) && Math.floor(val) == val){
            var activityLenght = parseInt($('#activityLengthInMin').val());
            if( activityLenght > 1440){
                $('#lengthError').html("Insert a smaller activity lenght!");
            } 
            else if(activityLenght <= 0){
                $('#lengthError').html("Please insert a positive number!");
            }
            else {
                agendaModel.addActivity(new Activity( $('#activityTitle').val() , parseInt($('#activityLengthInMin').val()) , $('#activityType').val() , $('#activityDescription').val() ),0);
                hideCreationContainer();
            }
        } 
        else{
            $('#lengthError').html("Your input has to be a number!");
        }
    });
    
	$('#cancelNewActivityButton').on('click', function(){
        hideCreationContainer();
    });
}