(function() {
  window.Socket = (function() {
    function Socket(host, port, onmessage, onerror) {
      var self = this;
      self.onmessage = onmessage || function () {};
      self.onerror = onerror || function () {};
      self.server = 'ws://' + host + ':' + port;
      var socket = new WebSocket(self.server);
      socket.onopen = function(event) {
        console.log('Socket is opened');
        self.socket = socket;
      };
      socket.onclose = function(event) {
        console.log('Socket is closed');
        self.socket = null;
      };
      socket.error = function(event) {
        console.log(event.data);
        self.onerror(event.data);
      };
      socket.onmessage = function(event) {
        self.onmessage(JSON.parse(event.data));
      };
    }
    Socket.prototype.send = function(msg) {
      if (this.socket) {
        this.socket.send(JSON.stringify(msg));
      }
    };
    return Socket;
  })();
})();
