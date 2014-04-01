//Create "constructor" to take in the ip and the port
var ip,port,connected,socket;


//power off: ISC!1PWR00
//power on: ISC!1PWR01


function Reciever(ipAddress,port){
	this.ip = ipAddress;
	this.port = port;
	this.connected = false;
}


//Network functionality
Reciever.prototype.connect = function(callback) {
	this.socket = Ti.Network.Socket.createTCP({
		host: this.ip,
		port: this.port,
		connected: (function(parent) {
			return function(e){
				parent.onConnect(e);
				parent.connected = true;
				if (undefined != callback){
					callback();
				}
				
			};	
		})(this),
		error: (function(parent) {
			return function(e){
				parent.connected = false;
				parent.onError(e);
			};	
		})(this)
	});
	this.socket.connect();
};

Reciever.prototype.onConnect = function(e){
	Ti.API.info('Socket opened!');	
};

Reciever.prototype.onError = function(e){
	Ti.API.info('Error (' + e.errorCode + '): ' + e.error);	
};

Reciever.prototype.pumpCallback = function (e) {
	Ti.API.info("receiving");
    // Has the remote socket closed its end?
    if (e.bytesProcessed < 0) {
        Ti.API.info("Closing client socket.");
        this.connected = false;       
        return;
    }
    try {
        if(e.buffer) {
            var received = e.buffer.toString();
            Ti.API.info('Received: ' + received);
        } else {
            Ti.API.error('Error: read callback called with no buffer!');
        }
    } catch (ex) {
        Ti.API.error(ex);
    }
};


//ISCP handlers

Reciever.prototype.callOut = function(message) {
	Ti.API.info('calling: ' + message);		
	//Define closured callback if need
	var sendMessage = (function(reciever){
		return function(e) {
			if(!reciever.connected){
				Ti.API.info('could not reconnect');			
			} else {
				Ti.API.info('Sending message');
				Ti.Stream.pump(reciever.socket, 
					(function(parent) {
						return function(e){
							parent.pumpCallback(e);
						};	
					})(reciever),
				 	1024, true);
				reciever.socket.write(reciever.getISCPMessage(message));
			}
		};
	})(this);
	
	//Test if connected, if not try to connect then send
	if(!this.connected){
		Ti.API.info('trying to reconnect');
		this.connect(sendMessage);		
	} else {
		sendMessage();
	}
	    
};


//Returns the ISCP command properly disseminated.
//Examples taken from the ISCP over ethernet protocol and 
//https://sites.google.com/a/webarts.ca/toms-blog/Blog/new-blog-items/javaeiscp-integraserialcontrolprotocol

Reciever.prototype.getISCPMessage = function (command){
	var eiscpDataSize = command.length + 2 + 1 ; // this is the eISCP data size
   	var eiscpMsgSize = eiscpDataSize + 1 + 16 ; // this is the eISCP data size
   	   	
	var buffer = Ti.createBuffer({ length: eiscpMsgSize });
	
	//Create hex source with default of 49:53:43:50 ( ISCP )
	buffer[0] = "I".charCodeAt(0);
	buffer[1] = "S".charCodeAt(0);
	buffer[2] = "C".charCodeAt(0);
	buffer[3] = "P".charCodeAt(0);
	
	// 4 char Big Endian Header
    buffer[4] = 0x00;
    buffer[5] = 0x00;
    buffer[6] = 0x00;
    buffer[7] = 0x10;

    // 4 char  Big Endian data size
    buffer[8] = 0x00;
    buffer[9] = 0x00;
    buffer[10] = 0x00;
    //Assume only 1 byte of data
    buffer[11] = eiscpDataSize;
    
    //Version
    buffer[12] = 0x01;
    
    //3 char reservation
    buffer[13] = 0x0;
    buffer[14] = 0x0;
    buffer[15] = 0x0;
    buffer[16] = "!".charCodeAt(0);
    
    
    //unit type ( 1 is reciever)
    buffer[17] = "1".charCodeAt(0);
    
    //Variable Length
    var index = 17;
    
    for (var i = 0; i <= command.length; ++i) {
    	index ++;
    	buffer[index] = command.charCodeAt(i);
  	}
  	index ++;
    //EOF
    buffer[index] = 0x0D;
    
	return buffer;
};



//ONKYO functions


Reciever.prototype.on = function() {
	this.callOut("PWR01");
};

Reciever.prototype.off = function() {
	this.callOut("PWR00");
};

Reciever.prototype.setVolume = function(numericValue) {
	var prefix = "MVL";	
	var suffix = Math.round(numericValue).toString(16).toUpperCase();
	if(suffix.length == 1){
		this.callOut( prefix + "0" + suffix );
	} else {
		this.callOut( prefix + suffix );	
	}
	
};

//PC
Reciever.prototype.computer = function() {
	this.callOut("SLI05");
};

//STB/DVR
Reciever.prototype.roku = function() {
	this.callOut("SLI00");
};
//bd/dvd
Reciever.prototype.airplay = function() {
	this.callOut("SLI10");
};
//game
Reciever.prototype.playstation = function() {
	this.callOut("SLI02");
};

//computer: ISC!1SLI05
//roku: ISC!1SLI00
//airplay: ISC!1SLI10
//playstation: ISC!1SLI02




module.exports = Reciever;