const app = angular.module('MyApp', []);

// initialize a controller
app.controller('MyController', ['$http', function($http){ // constructor function called MyController
	this.resultsArray = [];
	this.hello = 'Hey Buddy';
	this.isActive = true;
	this.items = ['apple', 'banana', 'pear'];
	this.divExist = false;
	this.hideDiv = true;
	this.showDiv = false;
	this.imgSrc = 'https://i.ytimg.com/vi/mRf3-JkwqfU/hqdefault.jpg';
	this.someProperty = 'Yellow';
	this.toDoText = '';
	this.toDoList = [];
	this.editedText = '';
	this.handleSubmit = function(){
		console.log('form is submitting');
		this.toDoList.push(this.toDoText);
		console.log('form has submitted');
	},
	this.handleClick = function(){
		console.log('div is clicked');
	},
	this.deleteTask = function(index){
		console.log('deleting selected task');
		this.toDoList.splice(index, 1);
	},
	this.revealEditor = function(){
		console.log('revealing hidden edit div');
		this.showDiv = true;
	},
	this.handleEdit = function(index, string){
		console.log('edit is being made');
		this.toDoList[index] = string;
	},
	this.getCrimes = function(){
		console.log(this); // Shows all the functions and objects within the window
		const ctrl = this; // This controller variable will now equal all of the possible functions that can be done
		$http({
			method: 'GET',
			url: 'https://data.cityofchicago.org/resource/crimes.json'
		}).then(function(response){
			// successful callback
			console.log(this); // Shows all the functions and objects within the window
			console.log(response);
			for (let i = 0; i < response.data.length; i++) {
				const caseNumber = response.data[i].case_number;
				const currentDescription = response.data[i].description;
				const combinedInfo = 'Case Number: ' + caseNumber + ', Description: ' + currentDescription;
				const resResult = {crimeText: combinedInfo};
				ctrl.resultsArray.push(resResult);
			}
			console.log(ctrl.resultsArray);
			console.log("finished looping through data");
		}, function(err){
			// failure callback
			console.log(err);
		});
	}
}]);
