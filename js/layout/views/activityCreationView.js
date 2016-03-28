var ActivityCreationView = function () {
            
     this.resetValues = function() {
        
        $('#submitEditedActivityButton').hide();
        $('#deleteNewActivityButton').hide();
        $('#submitNewActivityButton').show();
        
        $('#activityTitle').val("");
        $('#activityLengthInMin').val("30");
        $('#activityType').val(0);
        $('#activityDescription').val("");
        $('.errorMessage').html("");
        $('#groupActivityTitle').removeClass('has-error');
        $('#groupLengthError').removeClass('has-error');
        $('#activityId').text('');
    }
    
    this.setValues = function(id, title, length, type, description){
        this.resetValues();
        
        $('#activityId').text(id);
        $('#submitNewActivityButton').hide();
        $('#submitEditedActivityButton').show();
        $('#deleteNewActivityButton').show();
        
        $('#activityTitle').val(title);
        $('#activityLengthInMin').val(length);
        $('#activityType').val(type);
        $('#activityDescription').val(description);
        $('#activityId').val(id);
        
    }
    
}