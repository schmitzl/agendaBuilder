layoutContainer = function(){
    $("#daysContainer").wrapInner("<table><tr>");
    $(".horizontalContainer").wrap("<td>");
};

makeObjectsDraggable = function(){
    $( ".activityRow" ).draggable();
};