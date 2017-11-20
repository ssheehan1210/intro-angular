const app = angular.module('MyApp', []);



// initialize a controller
app.controller('MyController', [function(){ // constructor function called MyController
	this.hello = 'Hey Buddy';
	this.isActive = true;
	this.items = ['apple', 'banana', 'pear'];
	this.divExist = false;
	this.hideDiv = true;
	this.showDiv = false;
	this.imgSrc = 'https://i.ytimg.com/vi/mRf3-JkwqfU/hqdefault.jpg';
	this.someProperty = 'Yellow';
	this.handleSubmit = function(){
		console.log('form has been submitted');
	},
	this.handleClick = function(){
		console.log('div is clicked')
	}
}])
