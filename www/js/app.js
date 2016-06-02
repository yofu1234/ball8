var app = angular.module('8ball', ['ionic'])

app.run(function ($ionicPlatform) {
	$ionicPlatform.ready(function () {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
});

//testing git for dev.. this is the test change in order to commit
//git checkout dev branch
app.controller('PredictionController', function ($scope, $timeout) {

  //Predictions that the 8 Ball can give
	var predictionList = [
		"Signs point to yes",
		"Yes",
		"Reply hazy, try again",
		"Without a doubt",
		"My sources say no",
		"As I see it, yes",
		"You may rely on it",
		"Concentrate and ask again",
		"Outlook not so good",
		"It is decidedly so",
		"Better not tell you now",
		"Very doubtful",
		"Yes - definitely",
		"It is certain",
		"Cannot predict now",
		"Most likely",
		"Ask again later",
		"My reply is no",
		"Outlook good",
		"Don't count on it"
	];

	$scope.prediction = "Tap 8 ball for an answer";

  //Is the question Answered
  $scope.answered = true;

  //randomly chooses a prediction from the prediction list
  $scope.ask = function(){

    //set answered to false because the question has not been answered yet
    $scope.answered = false;
    $scope.prediction = "Asking your Mom...";

    //pauses for 2 seconds for the fake "thinking/loading..." effect
    $timeout(function (){
    $scope.prediction = predictionList[Math.floor(Math.random() * predictionList.length)];

      //set it to true once the answer is returned
      $scope.answered = true;
    }, 2000);
  };
});
