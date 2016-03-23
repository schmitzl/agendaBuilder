// this is our main module that contians days and praked activites
function AgendaModel(){
	this.days = [];
	this.parkedActivities = [];
	
	// adds a new day. if startH and startM (start hours and minutes)
	// are not provided it will set the default start of the day to 08:00
	this.addDay = function (startH,startM) {
		var day;
		if(startH){
			day = new Day(startH,startM,this);
		} else {
			day = new Day(8,0,this);
		}
		this.days.push(day);
		this.notifyObservers();
		return day;

	};
	
	this.removeDay = function (dayIndex) {
		this.days.splice(dayIndex,1);
		this.notifyObservers();
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
        this.notifyObservers();
	};
	
	// remove an activity on provided position from parked activites 
	this.removeParkedActivity = function(position) {
		act = this.parkedActivities.splice(position,1)[0];
		this.notifyObservers();
		return act;
	};
    
    this.getActivityPosById = function(id) {
        for(var i = 0; i < this.days.length; i++) {
            activities = this.days[i].getActivities();
            for(var j = 0; j < activities.length; j++) {
                if(activities[j].getId() == id) 
                    return j;
            }
        
        }
        
        for(var i = 0; i < this.parkedActivities.length; i++) {
            if(this.parkedActivities[i].getId() == id)
                return i;
        }
        
        return null;
    }
    
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
    
    this.getParkedActivites = function() {
        return this.parkedActivities;
    };

	
	//*** OBSERVER PATTERN *** 
	var observers = [];
	
	this.notifyObservers = function (args) {
	    for (var i = 0; i < observers.length; i++){
	        observers[i].update(args);
	    }
	};
	
	this.addObserver = function (observer) {
	    observers.push(observer);
	};
}