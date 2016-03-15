var Test = function() {

    this.testDayCreation = function(agendaView){
        var dayContainer1 = agendaView.createDayView("8:00", "12:00", "120");
        agendaView.createActivityContainer(dayContainer1.find(".dailyActivitiesContainer"), "Presentation", "60", "Introduction");
        
      /*  var dayContainer2 = agendaView.createDayView("8:00", "12:00", "120");
        agendaView.createActivity(dayContainer2.find(".dailyActivitiesTable"), "Break", "60", "break");
        
        var dayContainer3 = agendaView.createDayView("8:00", "12:00", "120");
        agendaView.createActivity(dayContainer3.find(".dailyActivitiesTable"), "Group Work", "60", "group");
        
        var dayContainer4 = agendaView.createDayView("8:00", "12:00", "120");
        agendaView.createActivity(dayContainer4.find(".dailyActivitiesTable"), "Discussion", "60", "And talk!");
        
        var dayContainer5 = agendaView.createDayView("8:00", "12:00", "120");
        agendaView.createActivity(dayContainer5.find(".dailyActivitiesTable"), "Presentation", "60", "Introduction");
    }*/
};