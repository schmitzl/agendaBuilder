var ActivityCreationViewController = function (activityCreationView, agendaModel) {
    
    var activityIdCounter = 0;
    
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
            var activityLength = parseInt($('#activityLengthInMin').val());
            if( activityLength > 1440){
                $('#lengthError').html("Insert a smaller activity lenght!");
            } 
            else if(activityLength <= 0){
                $('#lengthError').html("Please insert a positive number!");
            }
            else {
                agendaModel.addParkedActivity(new Activity( $('#activityTitle').val(), parseInt($('#activityLengthInMin').val()), $('#activityType').val(), $('#activityDescription').val(), activityIdCounter), null);
                activityIdCounter++;
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