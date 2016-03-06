var Test = function() {

    this.testDayCreation = function(agendaView){
        var dayContainer1 = agendaView.createDayView("8:00", "12:00", "120");
        agendaView.createActivity(dayContainer1, "Presentation", "60", "Introduction");
        
        var dayContainer2 = agendaView.createDayView("8:00", "12:00", "120");
        agendaView.createActivity(dayContainer2, "Break", "60", "break");
        
        var dayContainer3 = agendaView.createDayView("8:00", "12:00", "120");
        agendaView.createActivity(dayContainer3, "Group Work", "60", "group");
        
        var dayContainer4 = agendaView.createDayView("8:00", "12:00", "120");
        agendaView.createActivity(dayContainer4, "Discussion", "60", "And talk!");
        
        var dayContainer5 = agendaView.createDayView("8:00", "12:00", "120");
        agendaView.createActivity(dayContainer5, "Presentation", "60", "Introduction");
    }
};