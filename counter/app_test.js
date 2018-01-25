var start = document.querySelectorAll('.run-timer');
var stop = document.querySelectorAll('.clear-timer');
var pause = document.querySelectorAll('.pause');
var cont = document.querySelectorAll('.continue');



var elementSeconds = document.getElementById('seconds');
var elementMinutes = document.getElementById('minutes');
var elementHours = document.getElementById('hours');
var elementMilSeconds1st = document.getElementById('mili-seconds-first');
var elementMilSeconds2nd = document.getElementById('mili-seconds-second');
var elementMilSeconds3rd = document.getElementById('mili-seconds-third');


console.log('elementSeconds',elementSeconds);
console.log('elementMinutes',elementMinutes);
console.log('elementHours',elementHours);
console.log('mili-seconds',elementMilSeconds1st);
console.log('mili-seconds',elementMilSeconds2nd);
console.log('mili-seconds',elementMilSeconds3rd);

var a;
var varSec;
var e1
var	seconds = 1;
var	milSecond1 = 1;
var	milSecond2 = 1;
var	milSecond3 = 1;

function counterMS1 (e) {
	e1 = milSecond1++

	if (e1 < 10) {
		elementMilSeconds1st.innerHTML = e1;
	} else {
		elementMilSeconds1st.innerHTML = e1%10;
	}
	console.log('elementMilSeconds1st',elementMilSeconds1st.innerHTML)


	varSec = parseInt(e1/10);
	if (varSec<10) {//elementSeconds.innerHTML = varSec;
		elementSeconds.innerHTML = '0' + varSec;
	} else if (varSec<60) {
		elementSeconds.innerHTML = varSec;
	}
	else {//elementSeconds.innerHTML = varSec%60;
		if ( (varSec%60) < 10) {
			elementSeconds.innerHTML = '0' + varSec%60;
		} else {
			elementSeconds.innerHTML = varSec%60;
		}
	}
	a = varSec;
	console.log('elementSeconds.innerHTML = ',elementSeconds.innerHTML);
	
	var countMinutes = parseInt(varSec/60);		//Счетчик минут

	if (countMinutes < 10) {
		countMinutes = parseInt( varSec/60);
		elementMinutes.innerHTML = '0' + countMinutes;
	} else if (countMinutes < 60) {
		elementMinutes.innerHTML =  countMinutes;
	} else {

		if ((countMinutes%60) < 10 ) {
			elementMinutes.innerHTML = '0' + countMinutes%60;
		} else {
			elementMinutes.innerHTML = countMinutes%60;
		}
	}

	var	countHours = parseInt(countMinutes/60)  //Счетчик часов
	if (countHours < 10) {
		elementHours.innerHTML = '0' + countHours;
	} else if (countHours < 24) {
		elementHours.innerHTML = countHours;
	} else {
		if ((countHours%24) < 10) {
			elementHours.innerHTML = '0' + countHours%24
		} else {
			elementHours.innerHTML = countHours%24
		}
	}
	
}

function counterMS2 (e) {
	e2 = milSecond2++

	if (e2 < 10) {
		elementMilSeconds2nd.innerHTML = e2;
	} else {
		elementMilSeconds2nd.innerHTML = e2%10;
	}
	console.log('elementMilSeconds2nd',elementMilSeconds2nd.innerHTML)
}

function counterMS3 (e) {
	e3 = milSecond3++

	if (e3 < 10) {
		elementMilSeconds3rd.innerHTML = e3;
	} else {
		elementMilSeconds3rd.innerHTML = e3%10;
	}
	console.log('elementMilSeconds3rd',elementMilSeconds3rd.innerHTML)
}

// function counterMilSec (e) {

// 	e = (milSecond++);
	
// 	if (e<10) {//elementSeconds.innerHTML = varSec;
// 		elementMilSeconds.innerHTML = '00' + e;
// 	} else if (e<100) {
// 		elementMilSeconds.innerHTML = '0' + e;
// 	}
// 	else if (e<1000) {
// 		elementMilSeconds.innerHTML =  e;
// 	}
// 	else {//elementSeconds.innerHTML = varSec%60;
// 		if ( (e%1000) < 10) {
// 			elementMilSeconds.innerHTML = '00' + e%1000;
// 		} else if ( (e%1000) < 100) {
// 			elementMilSeconds.innerHTML = '0' + e%1000;
// 		} else {
// 			elementMilSeconds.innerHTML = + e%1000;
// 		}
// 	}
// console.log(eventsMsId);
// }

// function counterMilSec (e) {

// 	e = milSecond++;
	
// 	if (e<10) {//elementSeconds.innerHTML = varSec;
// 		elementMilSeconds.innerHTML = '0' + e;
// 	} else if (e<100) {
// 		elementMilSeconds.innerHTML =  e;
// 	}
// 	else {//elementSeconds.innerHTML = varSec%60;
// 		if ( (e%100) < 10) {
// 			elementMilSeconds.innerHTML = '0' + e%100;
// 		} else  {
// 			elementMilSeconds.innerHTML = + e%100;
// 		} 
// 	}
// console.log(eventsMsId);
// }

// function counter(event) {		//Счетчик секунд
// 	//seconds = seconds + 1
// 	varSec = seconds++;
// 	if (varSec<10) {//elementSeconds.innerHTML = varSec;
// 		elementSeconds.innerHTML = '0' + varSec;
// 	} else if (varSec<60) {
// 		elementSeconds.innerHTML = varSec;
// 	}
// 	else {//elementSeconds.innerHTML = varSec%60;
// 		if ( (varSec%60) < 10) {
// 			elementSeconds.innerHTML = '0' + varSec%60;
// 		} else {
// 			elementSeconds.innerHTML = varSec%60;
// 		}
// 	}
// 	a = varSec;
// 	console.log('elementSeconds.innerHTML = ',elementSeconds.innerHTML);
	
// 	var countMinutes = parseInt(varSec/60);		//Счетчик минут

// 	if (countMinutes < 10) {
// 		countMinutes = parseInt( varSec/60);
// 		elementMinutes.innerHTML = '0' + countMinutes;
// 	} else if (countMinutes < 60) {
// 		elementMinutes.innerHTML =  countMinutes;
// 	} else {

// 		if ((countMinutes%60) < 10 ) {
// 			elementMinutes.innerHTML = '0' + countMinutes%60;
// 		} else {
// 			elementMinutes.innerHTML = countMinutes%60;
// 		}
// 	}

// 	var	countHours = parseInt(countMinutes/60)  //Счетчик часов
// 	if (countHours < 10) {
// 		elementHours.innerHTML = '0' + countHours;
// 	} else if (countHours < 24) {
// 		elementHours.innerHTML = countHours;
// 	} else {
// 		if ((countHours%24) < 10) {
// 			elementHours.innerHTML = '0' + countHours%24
// 		} else {
// 			elementHours.innerHTML = countHours%24
// 		}
// 	}

// 	return varSec
// }

//console.log(varSec)

//TESTING
// function viewEvent () {
// 	//console.log('a = ', a)
// 	console.log('varSec = ', varSec)
// 	//console.log('seconds = ', seconds)
// 	console.log('eventsId =', eventsId)
// }

// setTimeout(viewEvent, 10000)

var eventsId
function startConrol() {
	
 	//eventsId = setInterval(counter,1000);
 	//eventsMsId = setInterval(counterMilSec, 10);
 	eventMsid1 = setInterval(counterMS1,100)
 	eventMsid2 = setInterval(counterMS2,10)
 	eventMsid3 = setInterval(counterMS3,1)
 	
  }


function stopControl() {
	// seconds = 0;
	// counter(seconds);
	// clearInterval(eventsId);
	 elementSeconds.innerHTML = '00';
	//clearInterval(eventsId);
	milSecond1 = 0;
	counterMS1(milSecond1);
	clearInterval(eventMsid1);
	elementMilSeconds1st.innerHTML = '0';
	milSecond2 = 0;
	counterMS2(milSecond2);
	clearInterval(eventMsid2);
	elementMilSeconds2nd.innerHTML = '0';
	milSecond3 = 0;
	counterMS3(milSecond3);
	clearInterval(eventMsid3);
	elementMilSeconds3rd.innerHTML = '0';
}



function pauseControl () {

	clearInterval(eventsId);
	//clearInterval(eventsMsId);
	clearInterval(eventMsid1);
	clearInterval(eventMsid2);
	clearInterval(eventMsid3);
}

// function continueControl () {
// 	console.log('E1', e1)
// 	console.log('varSec', varSec)

// 	seconds = parseInt(E1/(varSec*10))
// 	counter(seconds);
// }

function enablePauseFromStart() {
	//start[0].className.replace('displayBlock', 'displayNone');
	//pause[0].className.replace('displayNone','displayBlock');
	start[0].classList.add('displayNone');
	start[0].classList.remove('displayBlock');
	pause[0].classList.add('displayBlock');
	pause[0].classList.remove('displayNone');
	pause[0].classList.add('size-pause-continue');
	console.log(start[0]);
	console.log(pause[0]);
	}

function enableContFromPause() {
	//start[0].className.replace('displayBlock', 'displayNone');
	//pause[0].className.replace('displayNone','displayBlock');
	pause[0].classList.add('displayNone');
	pause[0].classList.remove('displayBlock');
	cont[0].classList.add('displayBlock');
	cont[0].classList.remove('displayNone');
	console.log(cont[0]);
	console.log(pause[0]);
}

function enablePauseFromCont() {
	//start[0].className.replace('displayBlock', 'displayNone');
	//pause[0].className.replace('displayNone','displayBlock');
	cont[0].classList.add('displayNone');
	cont[0].classList.remove('displayBlock');
	pause[0].classList.add('displayBlock');
	pause[0].classList.remove('displayNone');
	console.log(cont[0]);
	console.log(pause[0]);
}

function enableStartAfterClear() {
	//start[0].className.replace('displayBlock', 'displayNone');
	//pause[0].className.replace('displayNone','displayBlock');
	start[0].classList.add('displayBlock');
	start[0].classList.remove('displayNone');
	cont[0].classList.add('displayNone');
	cont[0].classList.remove('displayBlock');
	pause[0].classList.add('displayNone');
	pause[0].classList.remove('displayBlock');
	console.log(cont[0]);
	console.log(pause[0]);
}

start[0].addEventListener('click', startConrol);
 stop[0].addEventListener('click', stopControl);
start[0].addEventListener('click', enablePauseFromStart);
pause[0].addEventListener('click', enableContFromPause);
 cont[0].addEventListener('click', enablePauseFromCont);
 stop[0].addEventListener('click', enableStartAfterClear);
pause[0].addEventListener('click', pauseControl);
 cont[0].addEventListener('click',startConrol);
//pause[0].addEventListener('click',continueControl);