UltimateClass = function UltimateClass() {};

UltimateClass.extendStatic({
	parent: null,
	className: 'UltimateClass',
	__type: 'class_UltimateClass',
	construct: UltimateClass
});

UltimateClass.extend({	
	parent: null,
	className: 'UltimateClass',
	__type: 'instance_UltimateClass',
	construct: UltimateClass,
	
	
	callParent: function() {
		var args = _.toArray(arguments),
			methodName = args.shift();
	
		return this.parent[methodName].apply(this, args);
	},
	applyParent: function(methodName, args) {
		return this.parent[methodName].apply(this, args);
	},
	
	callParentConstructor: function() {
		return this.parent.construct.apply(this, arguments);
	},
	applyParentConstructor: function(args) {
		return this.parent.construct.apply(this, args);
	}
});


//CLASS LEVEL STATIC METHODS (ONLY AT THE FUNCTION.PROTOTYPE LEVEL CAN THEY BE INHERITED UNFORTUNATELY
Function.extend({
	callParent: function() {
		var args = _.toArray(arguments),
			methodName = args.shift();

		return this.parent[methodName].apply(this, args);
	},
	applyParent: function(methodName, args) {
		return this.parent[methodName].apply(this, args);
	}
});