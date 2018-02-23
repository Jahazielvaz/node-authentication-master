//SETTING UP PASSPORT: We need to add the logic for our local strategy that will tell passport whether the information the user is sending over meets our requirements.
//Think about what kind of information do you want to validate.

//Export the function that accepst a passport object.
//To define our local sign-up strategy, we'll call the use function on the passport object and provide the following:
//* 'local-signup': the name we're calling this strategy.
 //* usernameField: the field on the request that will contain the username
 //* passwordField: the field on the request that will contain the password
 //* passReqToCallback: whether to pass the incoming request to the callback that will handle the logic for signing up.
 //* the callback: the function that will perform the logic and actually create the new user in our system
    
var LocalStrategy = require('passport-local').strategy;

module.exports = function(passport){

	passport.use('local-signup', new LocalStrategy({
		usernameField: 'email',
		passowordField: 'password',
		passReqToCallback: true
	}, processSignupCallback)); 

};

//Implementing the processSignupCallback function (it's called with the following parameters):
	
	/*
		At this point we need to implement the 'processSignupCallback' function.
	 * This function is called with the following parameters:
     * request: because we passed 'passReqToCallback : true' from the step above, the first parameter to this function will be the incoming request.
   	 * email: the email of the user wanting to sign up.
   	 * password: the password of the user wanting to sign up.
   	 * done: this is called the 'verify callback' and it is a function we call when we've completed processing the sign up request.
    
	*/ 

	function processSignupCallback(request, email, password, done){
		
	}