(function(){
  function HomeCtrl(Room, Message, $uibModal, $cookies) {
    this.rooms = Room.all;
    this.currentRoom = null;
    this.currentUser = $cookies.get('blocChatCurrentUser');

    this.addRoom = function() {
      $uibModal.open({
        templateUrl: '/templates/modal.html',
        size: 'sm',
        controller: 'ModalCtrl',
        controllerAs: 'modal',
      });
    }

    this.setCurrentRoom = function(room) {
      this.currentRoom = room;
      this.messages = Message.getByRoomId(this.currentRoom.$id);
    }

    this.sendMessage = function() {
      this.newMessage.roomId = this.currentRoom.$id;
      this.newMessage.username = this.currentUser;
      Message.send(home.newMessage);
    }

  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();
