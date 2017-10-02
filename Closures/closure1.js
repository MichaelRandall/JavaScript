(function(widget){

	var status = "active";
	var size = "large";
	var count = 0;
	
	var options = {
		state:"Off",
		color:"Blue",
		petFriendly:true
	};
	
	widget.getSize=function(){
		return size;
	};
	
	widget.getOptions=function(opt){
		return options[opt];
	};
	
	widget.setOptions=function(key, value){
		options[key] = value;
		return options;
	};

})(this.tstApp = {} || this.tstApp);