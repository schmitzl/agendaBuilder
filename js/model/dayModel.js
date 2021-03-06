// This is a day consturctor. You can use it to create days, 
// but there is also a specific function in the Model that adds
// days to the model, so you don't need call this yourself.
function Day(startH,startM,agendaModel) {
	this._start = startH * 60 + startM;
	this._activities = [];

	// sets the start time to new value
	this.setStart = function(startH,startM) {
		this._start = startH * 60 + startM;
		agendaModel.notifyObservers();
	}

	// returns the total length of the acitivities in 
	// a day in minutes
	this.getTotalLength = function () {
		var totalLength = 0;
		$.each(this._activities,function(index,activity){
			totalLength += activity.getLength();
		});
		return totalLength;
	};
	
	// returns the string representation Hours:Minutes of 
	// the end time of the day
	this.getEnd = function() {
		var end = this._start + this.getTotalLength();
		if(end % 60 < 10){
			return Math.floor(end/60) + ":0" + end % 60;
		}
		else{
			return Math.floor(end/60) + ":" + end % 60;
		}
	};
	
	// returns the minitues to 
	// the end time of the day
	this.getEndMinutes = function() {
		return end = this._start + this.getTotalLength();
	};
	
	// returns the string representation Hours:Minutes of 
	// the start time of the day
	this.getStart = function() {
		if(this._start % 60 < 10){
			return Math.floor(this._start/60) + ":0" + this._start % 60;
		}
		else{
			return Math.floor(this._start/60) + ":" + this._start % 60;
		}

	};
	
	// returns the length (in minutes) of activities of certain type
	this.getLengthByType = function (typeid) {
		var length = 0;
		$.each(this._activities,function(index,activity){
			if(activity.getTypeId() == typeid){
				length += activity.getLength();
			}
		});
		return length;
	};

	this.getActivities = function (){
		return this._activities;
	}
	
	// adds an activity to specific position
	// if the position is not provided then it will add it to the 
	// end of the list
	this._addActivity = function(activity,position){
		if(position != null){
			this._activities.splice(position,0,activity);
		} else {
			this._activities.push(activity);
		}
	};
	
	// removes an activity from specific position
	// this method will be called when needed from the model
	// don't call it directly
	this._removeActivity = function(position) {
		return this._activities.splice(position,1)[0];
	};
	
	// moves activity inside one day
	// this method will be called when needed from the model
	// don't call it directly
	this._moveActivity = function(oldposition,newposition) {
		// In case new position is greater than the old position and we are not moving
		// to the last position of the array
		if(newposition > oldposition && newposition < this._activities.length - 1) {
			newposition--;
		}
		var activity = this._removeActivity(oldposition);
		this._addActivity(activity, newposition);
	};
	this.getActivityStartTime = function (activityPosition){
		var activityStartTime = this._start ; 
		for(var i=0 ; i<activityPosition; i++){
			activityStartTime += this._activities[i].getLength() ;
		}

		if(activityStartTime % 60 < 10){
			return Math.floor(activityStartTime/60) + ":0" + activityStartTime % 60;
		}
		else{
			return Math.floor(activityStartTime/60) + ":" + activityStartTime % 60;
		}
	}
}