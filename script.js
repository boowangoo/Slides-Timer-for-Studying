function toDoCtrl($scope, $timeout) {
  $scope.minute = '00';
  $scope.second = '00';
  
  $scope.hourElapsed = '00';
  $scope.minuteElapsed = '00';
  $scope.secondElasped = '00';

  var addZero = function(timeUnit) {
  	if (timeUnit < 10) {
  		return '0'+parseInt(timeUnit);
  	}
    return timeUnit;
  };

  var incrTime = function(timeUnit) {
    var bob = addZero(parseInt(timeUnit)+1);
    console.log(bob);
  	return bob;
  };
  
  var countUp = function () {
    $scope.secondElasped = incrTime($scope.secondElasped)
    if ($scope.secondElasped > 59) {
      $scope.minuteElapsed = incrTime($scope.minuteElapsed);
      if ($scope.minuteElapsed > 59) {
        $scope.hourElapsed = incrTime($scope.hourElapsed);
        $scope.minuteElapsed = '00';
      }
      $scope.secondElasped = '00';
    }
    
    if ($scope.minute && ($scope.second|0) === 0) {
      $scope.minute--;
      $scope.second = 60;
    }
    if ($scope.second > 0) {
      $scope.second--;
    }
    $scope.minute = addZero($scope.minute);
    $scope.second = addZero($scope.second);
    
    if ($scope.minute === '00' && $scope.second === '00') {
      $scope.updateSpeed();
      $scope.slide++;
    }
    
    $timeout(countUp, 1000);
  }
  $timeout(countUp, 1000);
  
  
  $scope.currSlide = 0;
  $scope.slide = $scope.currSlide;
  $scope.slideSpeed = 60;
  
  $scope.reset = function() {
    $scope.hourElapsed = '00';
    $scope.minuteElapsed = '00';
    $scope.secondElasped = '00';
    
    $scope.minute = addZero(($scope.slideSpeed/60)|0);
    $scope.second = addZero($scope.slideSpeed - ($scope.minute*60));
  }
  $timeout($scope.reset, 1);
  
  $scope.updateSlide = function() {
    $scope.slide = $scope.currSlide;
  }
  
  $scope.updateSpeed = function() {
    if ($scope.slideSpeed < 1) {
      $scope.slideSpeed = 60;
    } else {
      $scope.minute = addZero(($scope.slideSpeed/60)|0);
      $scope.second = addZero($scope.slideSpeed - ($scope.minute*60));
    }
  }
}
