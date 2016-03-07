var ActivityCreationViewController = function (activityCreationView) {
    
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
}