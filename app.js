const app = angular.module('MyApp', []);



// initialize a controller
app.controller('MyController', ['$http', function($http){ // constructor function called MyController
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
	}
}]);
