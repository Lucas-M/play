$(document).keypress(function (e) {
	// alert(e.which);
	console.log(e.which);
    if (e.which == 119) {
        change_direction(0);
    };
    if (e.which == 100) {
        change_direction(1);
    };
    if (e.which == 115) {
        change_direction(2);
    };
    if (e.which == 97) {
        change_direction(3);
    };
    if (e.which == 122) {
        shrink();
    };
    if (e.which == 99) {
        grow();
    };
});
    
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 70;
var dx = 0;
var dy = 0;
var speed = 1;

var direction = 1;

draw_circle(centerX, centerY, radius);

function erase_circle() {
	draw_circle(centerX, centerY, radius + 5, 'white', 0);
}

function draw_circle(x, y, r, fill, stroke) {

	console.log("X: " + centerX + "\nY: " + centerY);
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = (fill) ? fill : 'green';
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = 'white';
    context.stroke();
}

function move_shape() {
	centerX = centerX + dx;
	centerY = centerY + dy;
}

function shrink() {
	for (var i=3; i>1; i--) {
		draw_circle(centerX, centerY, radius, 'white', 0);
		radius = ((radius - i) > 5) ? radius - i : 5;
		draw_circle(centerX, centerY, radius);
	}
}

function grow() {
	for (var i=3; i>1; i--) {
		draw_circle(centerX, centerY, radius, 'white', 0);
		radius = ((radius + i) < 100) ? radius + i : 100;
		draw_circle(centerX, centerY, radius);
	}
}

function change_direction(ord) {
	erase_circle();
	switch (ord) {
		case 0:
			dx = 0;
			dy = speed * -1;
			console.log("up");
			break;
		case 1:
			dx = speed;
			dy = 0;
			console.log("right");
			break;
		case 2:
			dx = 0;
			dy = speed;
			console.log("down");
			break;
		case 3:
			dx = speed * -1;
			dy = 0;
			console.log("left");
			break;
		case 4:
			dx = 0;
			dy = 0;
			break;
	} 
	draw_circle(centerX, centerY, radius);
}

var Circle = function(name, x, y, r) {
	this.name = name;
	console.log("New circle created named: " + this.name);
};

var cir1 = new Circle("bob", 300, 300, 100);

// Shape.event = {
// 	addListener: function(el, type, fn) {
// 		console.log("Listener added");
// 	},
// 	removeListener: function(el, type, fn) {
// 		console.log("Listener removed");

// 	},
// 	getEvent: function(e) {

// 	}
// }

// Shape.location = {
	
// }	
