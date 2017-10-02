var tsstApp = {} || tsstApp;

tsstApp.main = (function(){
	var miniWidget = {};
	
	miniWidget.init = function(){
		var options = {
			size:"Large",
			color:"Green",
			count:0,
			state:"Off"
		};
		
		function getOption(opt){
			return options[opt];
		};
	};
	miniWidget.size = function(){
		return miniWidget.options[size];
	};
	return miniWidget
})();


