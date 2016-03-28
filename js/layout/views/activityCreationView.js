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
    }
    
    this.setValues = function(id, title, length, type, desciption){
        this.resetValues();
        
        $('#submitNewActivityButton').hide();
        $('#submitEditedActivityButton').show();
        $('#deleteNewActivityButton').show();
        
        $('#activityTitle').val(title);
        $('#activityLengthInMin').val(length);
        $('#activityType').val(type);
        $('#activityDescription').val(desciption);
        $('#activityId').val(id);
        
    }
    
}