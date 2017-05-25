<!doctype html>
<html>
	<head>
		<title>OO and Constructors and Prototypes<title>
		<script>
			'use strict';
			//constructor1
			function Person(firstName, lastName){
				this.fname = firstName;
				this.lname = lastName;
				
				this.getFullName = function(){
					return this.fname + " " + this.lname;
				};
			}
			
			//constructor2 with methods
			function Vehicle(make, model){
				this.make = make;
				this.model = model;
				
				this.getMake = function(){
					return this.make;
				};
				
				this.getModel = function(){
					return this.model;
				};
			}
		</script>
	</head>


</html>