// this is our main module that contians days and praked activites
function AgendaModel(){
	this.days = [];
	this.parkedActivities = [];
	
	// adds a new day. if startH and startM (start hours and minutes)
	// are not provided it will set the default start of the day to 08:00
	this.addDay = function (startH,startM) {
		var day;
		if(startH){
			day = new Day(startH,startM);
		} else {
			day = new Day(8,0);
		}
		this.days.push(day);
		this.notifyObservers();
		return day;

	};
	
	// add an activity to model
	this.addActivity = function (activity,day,position) {
		if(day != null) {
			if (position != null) {
				this.days[day]._addActivity(activity,position);
			}
			else {
				this.days[day]._addActivity(activity);
			}
		} else {
			if (position != null) {
				this.parkedActivities.splice(position,0,activity);
			}
			else {
				this.parkedActivities.push(activity);
			}
		}
		this.notifyObservers();
	}
	
	// add an activity to parked activities
	this.addParkedActivity = function(activity,position){
		this.addActivity(activity,null,position);
	};
	
	// remove an activity on provided position from parked activites 
	this.removeParkedActivity = function(position) {
		act = this.parkedActivities.splice(position,1)[0];
		this.notifyObservers();
		return act;
	};
	
	// moves activity between the days, or day and parked activities.
	// to park activity you need to set the new day to null
	// to move a parked activity to let's say day 0 you set oldday to null
	// and new day to 0
	this.moveActivity = function(oldday, oldposition, newday, newposition) {
		if(oldday !== null && oldday == newday) {
			this.days[oldday]._moveActivity(oldposition,newposition);
		}else if(oldday == null && newday == null) {
			var activity = this.removeParkedActivity(oldposition);
			this.addParkedActivity(activity,newposition);
		}else if(oldday == null) {
			var activity = this.removeParkedActivity(oldposition);
			this.days[newday]._addActivity(activity,newposition);
		}else if(newday == null) {
			var activity = this.days[oldday]._removeActivity(oldposition);
			this.addParkedActivity(activity,newposition);
		} else {
			var activity = this.days[oldday]._removeActivity(oldposition);
			this.days[newday]._addActivity(activity,newposition);
		}
		this.notifyObservers();
	};

	this.getDays = function() {
		return this.days;
	};

	
	//*** OBSERVER PATTERN ***
	var observers = [];
	
	this.notifyObservers = function (args) {
	    for (var i = 0; i < observers.length; i++){
	        observers[i].update(args);
	    }
	};
	
	this.addObserver = function (listener) {
	    observers.push(observers);
	};
}