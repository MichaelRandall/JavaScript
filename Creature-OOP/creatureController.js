var catamaran = window.catamaran || {};

catamaran.creature = (function(){
	var Creature = function(name, type){
		this.name = name;
		this.type = type;
		
		var size = "large";
		
		this.getCreatureType = function(){
			return this.type;
		};
	};
	
	Creature.prototype.updateName = function(name){
		this.name = name;
	};
	
	return {
		makeCreature:function(name, type){
			var creature = new Creature(name, type);
			return creature;
		},
		getCreature:function(){
			console.log(this.name);
		}
	};

})();