function Reciever(ipAddress, port) {
    this.ip = ipAddress;
    this.port = port;
    this.connected = false;
}

var ip, port, connected, socket;

Reciever.prototype.connect = function(callback) {
    this.socket = Ti.Network.Socket.createTCP({
        host: this.ip,
        port: this.port,
        connected: function(parent) {
            return function(e) {
                parent.onConnect(e);
                parent.connected = true;
                void 0 != callback && callback();
            };
        }(this),
        error: function(parent) {
            return function(e) {
                parent.connected = false;
                parent.onError(e);
            };
        }(this)
    });
    this.socket.connect();
};

Reciever.prototype.onConnect = function() {
    Ti.API.info("Socket opened!");
};

Reciever.prototype.onError = function(e) {
    Ti.API.info("Error (" + e.errorCode + "): " + e.error);
};

Reciever.prototype.pumpCallback = function(e) {
    Ti.API.info("receiving");
    if (0 > e.bytesProcessed) {
        Ti.API.info("Closing client socket.");
        this.connected = false;
        return;
    }
    try {
        if (e.buffer) {
            var received = e.buffer.toString();
            Ti.API.info("Received: " + received);
        } else Ti.API.error("Error: read callback called with no buffer!");
    } catch (ex) {
        Ti.API.error(ex);
    }
};

Reciever.prototype.callOut = function(message) {
    Ti.API.info("calling: " + message);
    var sendMessage = function(reciever) {
        return function() {
            if (reciever.connected) {
                Ti.API.info("Sending message");
                Ti.Stream.pump(reciever.socket, function(parent) {
                    return function(e) {
                        parent.pumpCallback(e);
                    };
                }(reciever), 1024, true);
                reciever.socket.write(reciever.getISCPMessage(message));
            } else Ti.API.info("could not reconnect");
        };
    }(this);
    if (this.connected) sendMessage(); else {
        Ti.API.info("trying to reconnect");
        this.connect(sendMessage);
    }
};

Reciever.prototype.getISCPMessage = function(command) {
    var eiscpDataSize = command.length + 2 + 1;
    var eiscpMsgSize = eiscpDataSize + 1 + 16;
    var buffer = Ti.createBuffer({
        length: eiscpMsgSize
    });
    buffer[0] = "I".charCodeAt(0);
    buffer[1] = "S".charCodeAt(0);
    buffer[2] = "C".charCodeAt(0);
    buffer[3] = "P".charCodeAt(0);
    buffer[4] = 0;
    buffer[5] = 0;
    buffer[6] = 0;
    buffer[7] = 16;
    buffer[8] = 0;
    buffer[9] = 0;
    buffer[10] = 0;
    buffer[11] = eiscpDataSize;
    buffer[12] = 1;
    buffer[13] = 0;
    buffer[14] = 0;
    buffer[15] = 0;
    buffer[16] = "!".charCodeAt(0);
    buffer[17] = "1".charCodeAt(0);
    var index = 17;
    for (var i = 0; command.length >= i; ++i) {
        index++;
        buffer[index] = command.charCodeAt(i);
    }
    index++;
    buffer[index] = 13;
    return buffer;
};

Reciever.prototype.on = function() {
    this.callOut("PWR01");
};

Reciever.prototype.off = function() {
    this.callOut("PWR00");
};

Reciever.prototype.setVolume = function(numericValue) {
    var prefix = "MVL";
    var suffix = Math.round(numericValue).toString(16).toUpperCase();
    1 == suffix.length ? this.callOut(prefix + "0" + suffix) : this.callOut(prefix + suffix);
};

Reciever.prototype.computer = function() {
    this.callOut("SLI05");
};

Reciever.prototype.roku = function() {
    this.callOut("SLI00");
};

Reciever.prototype.airplay = function() {
    this.callOut("SLI10");
};

Reciever.prototype.playstation = function() {
    this.callOut("SLI02");
};

module.exports = Reciever;