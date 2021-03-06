Package.describe({
  summary: "Ultimate MVC - The Ultimate Toolset of Uniform Classes for Meteor",
  version: "0.0.21",
  git: "https://github.com/ultimate-ide/meteor-ultimate-models.git",
  name: "ultimateide:ultimate-mvc"
});

Package.on_use(function (api, where) {
  api.versionsFrom('METEOR@1.2');
  api.use([
		"underscore",
    'templating',
    'blaze',
		'http',
		'random',
		'aldeed:simple-schema@1.3.0',
		'aldeed:autoform@4.2.2',
		'reactive-dict'
	]);
	api.imply(['reactive-dict', 'ejson']);

	api.imply([
		'aldeed:simple-schema@1.3.0',
		'aldeed:autoform@4.2.2',
		'mrt:moment@2.8.1',
		'meteorhacks:unblock@1.1.0'
	]);

	
	
	api.add_files([
		'lib/overrides/string_methods.js',
		'lib/overrides/underscore_mixin.js',
		'lib/overrides/meteor_overrides.js',
	]);
	
	
	/** INHERITANCE & ULTIMATECLASS CORE **/
	
  api.add_files([
		'lib/ultimate/ultimate.js',
		'lib/ultimate/create_class.js',
		'lib/ultimate/shortcut_methods.js',
		'lib/ultimate/add_methods.js',
		
		
		'lib/ultimate/ultimate_double.js',
		
		'lib/ultimate_clone/ultimate_clone.js',

		'lib/ultimate_class/ultimate_class.js',
		'lib/ultimate_class/extend.js',
		'lib/ultimate_class/mixin.js',
    'lib/ultimate_class/events.js',
		
		'lib/ultimate_class/tracker.js',
		'lib/ultimate_class/timer.js',
		
		'lib/ultimate_class/format_dates.js',
		'lib/ultimate_class/format_money.js',

  	'lib/ultimate_utilities/ultimate_utilities.js',

		'lib/ultimate_http/ultimate_http.js',
		'lib/ultimate_http/meteor_method.js',
		'lib/ultimate_http/stub_obj.js',
		'lib/ultimate_http/meteor_call.js',
		'lib/ultimate_http/startup.js',
		'lib/ultimate_http/ultimate_extend_http_mixin.js'
  ], ['client', 'server']);

  api.export(['Ultimate', 'UltimateClass', 'UltimateClone']);
	
	
	
	/** ULTIMATE_FORM & ULTIMATE_MODEL **/

	api.use([
		'matb33:collection-hooks@0.8.1',
		'smeevil:session-store@1.0.0',
		'meteorhacks:aggregate@1.2.1',
		'meteorhacks:subs-manager@1.3.0'
	]);

	api.imply([
		'alanning:roles@1.2.12',
		'check'
	]);

	api.add_files([
		'lib/ultimate_form/ultimate_form.js',
		'lib/ultimate_form/form_mixin.js',
	
		'lib/ultimate_form/mongo_attributes.js',
		'lib/ultimate_form/reactive_methods.js',
		'lib/ultimate_form/submit_async.js',
	
		'lib/ultimate_model/ultimate_model.js',
		'lib/ultimate_model/model_mixin.js',
	
		'lib/ultimate_model/client_methods.js',
		'lib/ultimate_model/additional_methods.js'
		]);

	api.export(['UltimateForm', 'UltimateModel']);


	api.add_files([
		'lib/ultimate_form/templates.html',
		'lib/ultimate_form/templates.js',
	], ['client']);
	
	
	/** MODEL COLLECTION HOOKS **/
	api.add_files([
		'lib/ultimate_collection_hooks/ultimate_collection_hooks.js',
	]);

	/** MODEL PUB SUB **/

	api.add_files([
		/** ULTIMATE SUBSCRIPTION **/
		'lib/ultimate_subscription/ultimate_subscription_mixin.js',
		'lib/ultimate_subscription/extend_ultimate_model.js',


		'lib/ultimate_subscription/publisher_factory.js',
		'lib/ultimate_subscription/relations_publisher.js',
		'lib/ultimate_subscription/parent_publisher.js',
	
	
		/** ULTIMATE SUBSCRIPTION CACHE **/
		'lib/ultimate_subscription_cache/extend_ultimate_model.js',
		'lib/ultimate_subscription_cache/subscription_mixin.js',
		'lib/ultimate_subscription_cache/subscription_cache.js',
		'lib/ultimate_subscription_cache/client_publisher_duck.js',
	
	
		/** ULTIMATE SUBSCRIPTION INTERVAL **/
		'lib/ultimate_subscription_interval/extend_ultimate_model.js',
	
		/** ULTIMATE RELATION **/
		'lib/ultimate_relation/ultimate_relation_mixin.js',
		'lib/ultimate_relation/extend_ultimate_model.js',


		'lib/ultimate_relation/has_belongs_publisher.js',
		'lib/ultimate_relation/has_many_publisher.js',
		'lib/ultimate_relation/belongs_to_publisher.js',
		'lib/ultimate_relation/through_publisher.js',
		'lib/ultimate_relation/many_many_publisher.js',



		/** ULTIMATE AGGREGATE **/
		'lib/ultimate_throttle/ultimate_throttle.js',
		'lib/ultimate_aggregate/ultimate_aggregate_mixin.js',
		'lib/ultimate_aggregate/extend_ultimate_model.js',
		'lib/ultimate_aggregate/ultimate_aggregate.js',


		'lib/ultimate_aggregate/helper.js',
		'lib/ultimate_aggregate/helper_class.js',
		'lib/ultimate_aggregate/helper_instance.js',
		'lib/ultimate_aggregate/helper_groupby.js',

		'lib/ultimate_aggregate/observer.js',
		'lib/ultimate_aggregate/observer_collection.js',
		'lib/ultimate_aggregate/observer_relation.js',

		'lib/ultimate_aggregate/publisher_collection.js',
	], ['client', 'server']);

	
	
	/** ULTIMATE_REACTIVE **/
	
	api.add_files([
		'lib/ultimate_reactive/ultimate_reactive.js',
		'lib/ultimate_reactive/autorun_subscribe.js',
		'lib/ultimate_reactive/get_autorun_subscribe.js',
		'lib/ultimate_reactive/model_mixin.js'
	], ['client']);
	
	
	
	/** FACADES **/
	
	api.use([
		'accounts-base' //for ultimate_accounts.js
	]);
		
	
	api.imply([
	  'iron:router@1.0.5',
		'cmather:handlebars-server@0.2.0'
	]);
	

	
	api.add_files([
		'lib/ultimate_facade/ultimate_facade.js',

		'lib/ultimate_startup/ultimate_startup.js',
		'lib/ultimate_config/ultimate_config.js',
		'lib/ultimate_accounts/ultimate_accounts.js',
		'lib/ultimate_router/ultimate_router.js',
		'lib/ultimate_publish/ultimate_publish.js',
    'lib/ultimate_email/ultimate_email.js',

    'lib/ultimate_behavior/ultimate_behavior.js', //depends on ultimate_facade too
		'lib/ultimate_behavior/extend_ultimate_class.js',
	]);
	
	api.export([
		'UltimateFacade',
		'UltimateStartup',
		'UltimateConfig',
		'UltimateAccounts',
		'UltimatePermissions',
		'UltimateRouter',
		'UltimateRouterServer',
		'UltimatePublish',
		'UltimateEmail',
		'UltimateBehavior'
	]);
	
	
		
		
		
	/** UTILITIES **/
	
	Npm.depends({
		"remote-exec": "0.0.3",
		'async': '0.9.0',
		"ssh2": "0.2.14",
		"braintree": "1.26.0"
	});
	
	api.add_files([
		'lib/ultimate_sync/ultimate_sync.js',
    	'lib/ultimate_sync/extend_ultimate_class.js',

    	'lib/ultimate_exec/ultimate_exec.js',
    	'lib/ultimate_exec/ultimate_exec_local.js',
    	'lib/ultimate_exec/ultimate_exec_remote.js'
	], ['server']);

	api.export(['UltimateSync', 'UltimateExec'], ['server']);


	
	/** UI TOOLS **/
	
	api.use([
	  	'tracker',
	  	'session',
	], 'client');

	api.imply([
		'aldeed:template-extension@3.4.3'
	], 'client');

	api.imply([
		'naxio:flash@0.2.2',
		'channikhabra:block-ui@0.2.2',
		'percolate:velocityjs@1.2.1_1',
	]);

	api.addFiles([
		'lib/ultimate_modal/ultimate_modal.js',
		'lib/ultimate_modal/public_interface.js',
		'lib/ultimate_modal/ultimate_modal_form.js',
		'lib/ultimate_modal/ultimate_modal_content.js',
		
		
		'lib/ultimate_modal/ultimate_model_prompt.js',
		'lib/ultimate_modal/ultimate_schema_prompt.js',
		'lib/ultimate_modal/ultimate_prompt.js',
		
		'lib/ultimate_modal/ultimate_modal_wizard.js',
		'lib/ultimate_modal/ultimate_modal_tabbed.js',
		
	  'lib/ultimate_modal/templates.html',


	  'lib/ultimate_wizard/ultimate_wizard.js',
		'lib/ultimate_wizard/templates.html',
	  'lib/ultimate_wizard/templates.js',
		
		'lib/ultimate_component/lookup.js',
		
		'lib/ultimate_component/ultimate_component_parent.js',
		'lib/ultimate_component/component_mixin.js',
		
		'lib/ultimate_component/callbacks.js',
		'lib/ultimate_component/helpers.js',
		'lib/ultimate_component/events.js',
		
		
		'lib/ultimate_component/instance_methods.js',
		'lib/ultimate_component/instance_data.js',
		'lib/ultimate_component/mixins.js',
		
		'lib/ultimate_component/templates.html',
		
		
		'lib/ultimate_component/ultimate_component.js',	
		'lib/ultimate_component_model/ultimate_component_model.js',
		
		'lib/ultimate_events/ultimate_events.js',
		'lib/ultimate_animation/animation.js',
		'lib/ultimate_helpers/helper_shortcut.js',
		'lib/ultimate_helpers/selected_helper.js',

	], 'client');


	api.imply([
		'ultimateide:tabular@1.2.3'
	]);

	api.addFiles([
		'lib/ultimate_datatable_component/ultimate_datatable_component.js',
		'lib/ultimate_datatable_component/datatable_methods.js',
	]);

	api.addFiles([
		'lib/ultimate_datatable_component/model_mixin.js',
    	'lib/ultimate_datatable_component/ultimate_datatable_component.html'
	], ['client']);



	api.export([ 
		'UltimateModal', 
		'UltimateModalForm', 
		'UltimatePrompt',
		'UltimateModalPrompt',
		'UltimateModalContent', 
		'UltimateModalTabbed', 
		'UltimateModalWizard',
		'UltimateWizards',
		'UltimateWizard',
		
		'UltimateComponent',
		'UltimateComponentModel'
	], ['client']);
	
	api.export([ 
		'UltimateDatatableComponent'
	], ['client', 'server']);
	
	
	/** SPECIALIZED MODEL CLASSES **/
	
	api.add_files([
		'lib/ultimate_user/ultimate_user.js'

		], ['client', 'server']);
	
	api.export(['UltimateUser']);



	api.add_files([
		'lib/ultimate_app/ultimate_app.js'
		], ['client', 'server']);
	
	api.export(['UltimateApp']);
	
	
	/** ULTIMATE CHART **/
	
	api.use("sergeyt:d3@3.4.1", 'client');
	api.use("peernohell:c3@1.1.3", 'client');

	
	api.use([
		"sergeyt:d3@3.4.1",
		'aldeed:template-extension@3.4.3'
	], 'client');
	
	api.use('templating');


	api.addAssets([
	    'lib/ultimate_chart/c3.min.js',
	    'lib/ultimate_chart/c3.min.css'
	  ], 'client');
		
	api.add_files('lib/ultimate_chart/templates.html', "client");
	api.add_files('lib/ultimate_chart/ultimate_chart.js', "client");
	
	
	api.export([
		'UltimateChart',
	], ['client']);
	
	/** ULTIMATE BRAINTREE **/
		
	api.add_files('lib/ultimate_braintree/ultimate_braintree.js');
	api.export([
		'UltimateBraintree'
	]);
	
	/**
	api.use('isobuild:compiler-plugin@1.0.0');
	**/
	
  api.use('isobuild:compiler-plugin@1.0.0');
  api.imply('babel-runtime@0.1.2');
  api.imply('promise@0.4.1');
});


Package.registerBuildPlugin({
  name: 'compile-ultimate-ecmascript',
  use: ['babel-compiler'],
  sources: ['lib/ultimate_ecmascript/ultimate_transpilation.js', 'lib/ultimate_ecmascript/plugin.js']
});