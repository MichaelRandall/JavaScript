//file named for the module class Game, but uses lowercase
//A modular approach using an object "MadEffects", creating a game module which will run most of the app
//Loaded at the top of every script file

var MadEffects = window.MadEffects || {};


//Creates an empty object (a namespace) that holds all objects and variables of the game / app
MadEffects.Game = (function(){
	
	//creates an class Game that can be accessed using notation MadEffects.Game - different from ui which creates an object
	var Game = function(){
	
		//this refers to any instance of the Game class/object and init is a function used to initialize game which can include setting values and event handlers
		this.init = function(){
			var el = document.getElementById("but_start_game");
			addEvent(el, 'click', startGame);
		};
		
		var startGame = function(){
			var el = document.getElementById("but_start_game");
	
			MadEffects.ui.hideDialog();
			removeEvent(el, 'click', startGame);
		};
	
	};
	
	//provides access to variable and functions/methods that belong to the Game object/class
	return Game;
})();