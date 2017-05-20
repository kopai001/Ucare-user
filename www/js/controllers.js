angular.module('starter.controllers', ['firebase'])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', ['$scope', '$firebaseObject', '$firebaseArray', '$firebaseAuth', 
  function($scope, $firebaseObject, $firebaseArray, $firebaseAuth) {

    var config = {
      apiKey: "AIzaSyBpLnjUpiggW-yVvOzS5i1qmXR-CyjFXns",
      authDomain: "ucare-chat.firebaseapp.com",
      databaseURL: "https://ucare-chat.firebaseio.com"
    };

    firebase.initializeApp(config);
    var ref = firebase.database().ref("chat");

    // var sync = $firebase(ref);
    // $scope.chats = sync.$asArray();
    $scope.chats = $firebaseArray(ref);

    $scope.sendChat = function (chat) {
      $scope.chats.$add({
        user: 'Guest',
        message: chat.message
      });
      chat.message = "";
    }

}])

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
