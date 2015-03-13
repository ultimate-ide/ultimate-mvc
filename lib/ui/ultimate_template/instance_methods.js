UltimateTemplate.extend({
	instance: function(prop, val) {
		if(arguments.length === 0) return Template.instance();
		else if(arguments.length === 1) {
			if(_.isFunction(Template.instance()[prop])) return Template.instance()[prop].call(this);
			else return Template.instance()[prop];
		}
		else if(arguments.length === 2) return Template.instance()[prop] = val;
	},


	$: function(selector) {
		return this.instance().$(selector);
	},
	find: function(selector) {
		return this.instance().find(selector);
	},
	findAll: function(selector) {
		return this.instance().findAll(selector);
	},
	firsNode: function() {
		return this.instance().firsNode;
	},
	lastNode: function() {
		return this.instance().lastNode;
	},
	view: function() {
		return this.instance().view;
	},


	autorun: function(func) {
		return this.instance().autorun(func.bind(this));
	},
	
	
	subscribe: function() {
		var args = arguments;
		
		if(Tracker.currentComputation) return Meteor.subscribe.apply(Meteor, args);	
		else return this.autorun(function() {
			Meteor.subscribe.apply(Meteor, args);
		});	
	},
	
	subscribeLimit: function() {
		var args = _.toArray(arguments),
			startLimit = args.pop();
		
		this.setLimit(startLimit);
			
		if(Tracker.currentComputation) {
			var limit = this.getLimit();
			args.push(limit);
			
			return Meteor.subscribe.apply(Meteor, args);	
		}
		else return this.autorun(function() {
			var limit = this.getLimit();
			args.push(limit);
			
			this._limitSubscribe = Meteor.subscribe.apply(Meteor, args);
		}.bind(this));	
	},
	limitStop: function() {
		if(this._limitSubscribe) this._limitSubscribe.stop();
	},
	limitReady: function() {
		if(this._limitSubscribe) this._limitSubscribe.ready();
	}
});