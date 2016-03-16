$(function() {
    
    // create models
    var agendaModel = new AgendaModel();

    // create views
    var agendaView = new AgendaView(agendaModel);
    var activityCreationView = new ActivityCreationView();
    
    // create controllers
    var agendaViewController = new AgendaViewController(agendaView, agendaModel);
    var activityCreationViewController = new ActivityCreationViewController(activityCreationView, agendaModel);
    
    //test
    //var test = new Test();
    //test.testDayCreation(agendaView); 
   // createTestData();

    // you can use this method to create some test data and test your implementation
   /* function createTestData(){
        agendaModel.addDay();
        agendaModel.addActivity(new Activity("Introduction",10,0,""),0, 1);
        agendaModel.addActivity(new Activity("Idea 1",30,0,""),0, 1);
        agendaModel.addActivity(new Activity("Working in groups",35,1,""), 0, 1);
        agendaModel.addActivity(new Activity("Idea 1 discussion",15,2,""),0, 1);
        agendaModel.addActivity(new Activity("Coffee break",20,3,""),0, 1);

        console.log("Day Start: " + agendaModel.days[0].getStart());
        console.log("Day End: " + agendaModel.days[0].getEnd());
        console.log("Day Length: " + agendaModel.days[0].getTotalLength() + " min");
        $.each(ActivityType,function(index,type){
            console.log("Day '" + ActivityType[index] + "' Length: " +  agendaModel.days[0].getLengthByType(index) + " min");
        });
    }*/
    
});