var start = document.querySelectorAll('.run-timer')
var stop = document.querySelectorAll('.clear-timer')


var elementSeconds = document.getElementById('seconds')

var	seconds = 1;

function counter(event) {
	
	event = seconds++;
	elementSeconds.textContent = event;
	console.log(seconds)
}

var secondsId 

function startConrol(event) {
 	secondsId = setInterval(counter,1000)
 }
 // secondsId = startConrol(event) 



function stopControl() {
	 console.log(secondsId)
	clearInterval(secondsId)
}

function show() {
	 console.log(secondsId + 1)
	
}

start[0].addEventListener('click',startConrol)
stop[0].addEventListener('click',stopControl)

// setTimeout(stopControl,5000)
// setTimeout(show,7000)

//stop[0].addEventListener('click')






