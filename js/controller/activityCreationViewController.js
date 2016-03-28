var ActivityCreationViewController = function (activityCreationView, agendaModel) {
    
    var activityIdCounter = 0;
    
    showCreationContainer = function(){
        $('#activityCreationContainer').show();
        $('#fullSize').show();
        $('#activityTitle').focus(); 
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
                $('#groupActivityTitle').addClass('has-error');
        }
        else{
            temp1= 1;
            $('#groupActivityTitle').removeClass('has-error');
        }
        var activityLenght = parseInt($('#activityLengthInMin').val());
        if(val = $('#activityLengthInMin').val(), $.isNumeric(val) && Math.floor(val) == val){
            $('#groupLengthError').addClass('has-error');
            $('#lengthError').html("");
            if( activityLenght > 1440){
                $('#lengthError').html("Enter a shorter activity length!");
                $('#groupLengthError').addClass('has-error');
            } 
            else if(activityLenght <= 0){
                $('#lengthError').html("Enter a positive number!");
                $('#groupLengthError').addClass('has-error');
            }
            else{
                temp2 = 1;
                $('#groupLengthError').removeClass('has-error');
            }

        } 
        else
        {
            $('#lengthError').html("Enter a number!");
            $('#groupLengthError').addClass('has-error');
        }

        if (temp1 === 1 && temp2 === 1){
        agendaModel.addParkedActivity(new Activity( $('#activityTitle').val() , parseInt($('#activityLengthInMin').val()) , $('#activityType').val() , $('#activityDescription').val() ), null);
                    hideCreationContainer();
        }
    };
	
	// Adding new activity to model
    $('#submitNewActivityButton').on('click', function(){
        var activityLenghtCorrect=false;
        var titleLeghtCorrect=false;
       
        var str = $('#activityTitle').val();
        var title = str.trim().length;
        $('#titleError').html("");
        if( title > 25 || title < 1){
                $('#titleError').html("Enter 1-25 characters!");
                $('#groupActivityTitle').addClass('has-error');
        }
        else{
            activityLenghtCorrect= true;
            $('#groupActivityTitle').removeClass('has-error');
        }
        var activityLenght = parseInt($('#activityLengthInMin').val());
        if(val = $('#activityLengthInMin').val(), $.isNumeric(val) && Math.floor(val) == val){
            $('#groupLengthError').addClass('has-error');
            $('#lengthError').html("");
            if( activityLenght > 1440){
                $('#lengthError').html("Enter a shorter activity length!");
                $('#groupLengthError').addClass('has-error');
            } 
            else if(activityLenght <= 0){
                $('#lengthError').html("Enter a positive number!");
                $('#groupLengthError').addClass('has-error');
            }
            else{
                titleLeghtCorrect = true;
                $('#groupLengthError').removeClass('has-error');
            }

        } 
        else
        {
            $('#lengthError').html("Enter a number!");
            $('#groupLengthError').addClass('has-error');
        }

        if (activityLenghtCorrect === true && titleLeghtCorrect === true){
        agendaModel.addParkedActivity(new Activity( $('#activityTitle').val() , parseInt($('#activityLengthInMin').val()) , $('#activityType').val() , $('#activityDescription').val() ), null);
                    hideCreationContainer();
        }
    });
    
    $(document).keypress(function(e) {
        if(e.which == 13 && $('#activityCreationContainer').is(":visible")) {
            submitNewActivity();
        }
    });
    
	$('#cancelNewActivityButton').on('click', function(){
        hideCreationContainer();
    });
}