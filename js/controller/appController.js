$(function() {
    
    // create models
    var agendaModel = new AgendaModel();

    // create views
    var agendaView = new AgendaView(agendaModel);
    var activityCreationView = new ActivityCreationView();
    
    // create controllers
    var agendaViewController = new AgendaViewController(agendaView, agendaModel);
    var activityCreationViewController = new ActivityCreationViewController(activityCreationView, agendaModel);
});