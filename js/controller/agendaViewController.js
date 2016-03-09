var AgendaViewController = function (agendaView, agendaModel) {


    $('#addDayButtonContainer').on('click', function(){
        agendaModel.addDay();
    });

}