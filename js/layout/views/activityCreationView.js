var ActivityCreationView = function () {
            
    this.resetValues = function() {
        $('#activityTitle').val("");
        $('#activityLengthInMin').val("30");
        $('#activityType').val(0);
        $('#activityDescription').val("");
        $('.errorMessage').html("");
    }
    
}