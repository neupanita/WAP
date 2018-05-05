
var myTextArea, start, stop, fontsize, turbo, animation;
var count = 0;
var timer = null;

window.onload = function(){
	init();
	buttonSetting();
};

function init(){
"use strict";
	myTextArea = document.getElementById("text-area");
	start 	 = 	document.getElementById("start");
	stop 	 = 	document.getElementById("stop");
	fontsize 	 = 	document.getElementById("fontsize");
	turbo 	 = 	document.getElementById("turbo");
	animation = 	document.getElementById("animation");
}

function buttonSetting(){
"use strict";
	start.onclick 	= 	begin;
	stop.onclick 	=	end;
	fontsize.onchange 	=	sizeHandler;
	turbo.onchange 	=	speedHandler;
    animation.onchange = beginAnimation;
}

function begin(){
"use strict";
if(timer === null){
	if(turbo.checked){
	 timer = setInterval(beginAnimation, 50);
	}
	else {
	timer = setInterval(beginAnimation, 250);
	}
	
		
	}
	disabler(true, false, true);
}

function end(){
"use strict";
	if(timer !== null){
		clearInterval(timer);
		timer = null;
		count = 0;
	}
	disabler(false, true, false);
}

function sizeHandler(){
"use strict";
	myTextArea.style.fontSize = fontsize.value+"px";
}

function speedHandler(){
"use strict";
	if(turbo.checked){
	 changeSpeed(50);
	}
	else {
	changeSpeed(250);
	}
}

function changeSpeed(speedValue){
"use strict";
	if(timer !== null){
		clearInterval(timer);
		var parse = parseInt(speedValue);
		timer = setInterval(beginAnimation, parse);
	}
}

function beginAnimation(){
"use strict";
	var animationSprint = ANIMATIONS[document.getElementById("animation").value].split("=====\n");
	myTextArea.innerHTML = animationSprint[count];
	count = (count == animationSprint.length-1)?0:count+1;

}


function disabler(astart, astop, aanimation){
"use strict";
	start.disabled = astart;
	stop.disabled = astop;
	animation.disabled = aanimation;
}
