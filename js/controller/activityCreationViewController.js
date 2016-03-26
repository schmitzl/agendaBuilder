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
    
    submitNewActivity = function() {        
        var temp1=0;
        var temp2=0;
       
            var str = $('#activityTitle').val();
            var title = str.trim().length;
            $('#titleError').html("");
            if( title > 25 || title < 1){
                    $('#titleError').html("Enter 1-25 characters!");
            }
            else{
                temp1= 1;
            }
            var activityLenght = parseInt($('#activityLengthInMin').val());
            if(val = $('#activityLengthInMin').val(), $.isNumeric(val) && Math.floor(val) == val){
                $('#lengthError').html("");
                if( activityLenght > 1440){
                    $('#lengthError').html("Enter a shorter activity length!");
                } 
                else if(activityLenght <= 0){
                    $('#lengthError').html("Enter a positive number!");
                }
                else{
                    temp2 = 1;
                }

            } 
            else
            {
                $('#lengthError').html("Enter a number!");
            }

        if (temp1 === 1 && temp2 === 1){
        agendaModel.addParkedActivity(new Activity( $('#activityTitle').val() , parseInt($('#activityLengthInMin').val()) , $('#activityType').val() , $('#activityDescription').val() ), null);
                    hideCreationContainer();
        }};
	
	// Adding new activity to model
    $('#submitNewActivityButton').on('click', function(){submitNewActivity()});
    
    $(document).keypress(function(e) {
        if(e.which == 13 && $('#activityCreationContainer').is(":visible")) {
            submitNewActivity();
        }
    });
    
	$('#cancelNewActivityButton').on('click', function(){
        hideCreationContainer();
    });
}