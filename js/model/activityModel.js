// JavaScript Document

// The possible activity types
var ActivityType = ["Presentation","Group Work","Discussion","Break"];
var idCounter = 0;

// This is an activity constructor
// When you want to create a new activity you just call
// var act = new Activity("some activity",20,1,"Some description);
function Activity(agendaModel, name,length,typeid,description){
	var _name = name;
	var _length = length;
	var _typeid = typeid;
	var _description = description;
    var _id = idCounter;
    var _agendaModel = agendaModel;
    idCounter++;
    
    notifyAgendaModelAboutChange = function(){
        _agendaModel.receiveChangeNotification();
    }
	
    this.setValues = function(name, length, typeid, description){
        _name = name;
        _length = length; 
        _typeid = typeid;
        _description = description;
        _agendaModel.notifyObservers();
        
    }
    
	// sets the name of the activity
	this.setName = function(name) {
		_name = name;
		_agendaModel.notifyObservers();
	}

	// get the name of the activity
	this.getName = function(name) {
		return _name;
	}
	
	// sets the length of the activity
	this.setLength = function(length) {
		_length = length;
		_agendaModel.notifyObservers();
	}

	// get the name of the activity
	this.getLength = function() {
		return _length;
	}
	
	// sets the typeid of the activity
	this.setTypeId = function(typeid) {
		_typeid = typeid;
		_agendaModel.notifyObservers();
	}

	// get the type id of the activity
	this.getTypeId = function() {
		return _typeid;
	}
	
	// sets the description of the activity
	this.setDescription = function(description) {
		_description = description;
		_agendaModel.notifyObservers();
	}

	// get the description of the activity
	this.getDescription = function() {
		return _description;
	}
	
	// This method returns the string representation of the
	// activity type.
	this.getType = function () {
		return ActivityType[_typeid];
	};
    
    this.getId = function() {
        return _id;  
    };
}