var AgendaViewController = function (agendaView, agendaModel) {


    $('#addDayButtonContainer').on('click', function(){
        agendaModel.addDay();
    });

    var days = agendaModel.getDays();
    for( var i=0; i<days.length; i++){
        $('#startTimeInput'+i).change(function(){
        	var timeInput = $('#startTimeInput').val().split(":");
        	days[i].setStart( parseInt(timeInput[0]), parseInt(timeInput[1]) );
        	console.log(i);
    	});
            
    } 
    


}