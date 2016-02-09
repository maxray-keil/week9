var pin = process.argv[2]*1;
console.log(pin);
var wpi = require('wiring-pi');

//console.log('wpi',wpi);
wpi.setup('gpio');

wpi.pinMode(pin,wpi.OUTPUT);

var value = 1;

function togleBulb(){
	wpi.digitalWrite(pin, value);
	value =+!value;
}
setInterval(toggleBulb, 500);