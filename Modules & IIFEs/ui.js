//file named for the module class ui, and uses lowercase
//A modular approach using an object "MadEffects", creating a ui module
//Loaded at the top of every script file

var MadEffects = window.MadEffects || {};

MadEffects.ui = (function(){
	//creates a simple ui object - different from Game which creates a class
	var ui = {
		init: function(){
			//do something on init
		},
		hideDialog: function(){
			//hideDialog when run
		}
	};
	return ui;
)}();