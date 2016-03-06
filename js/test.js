var Test = function() {

    this.testDayCreation = function(agendaView){
        var dayContainer = agendaView.createDayView("8:00", "12:00", "120");
        agendaView.createActivity(dayContainer, "Presentation", "60", "Introduction");
    }
};