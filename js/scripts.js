/*var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();

const outputElement = document.querySelector('#js-output');
const callStack = document.querySelector('#js-callstack');
const range = 10;
const toAdd = 5;
const intervalTime = toAdd * 1000;

// Reset the putput and then print out the numbers
function displayNumbers() {
  outputElement.innerHTML = '';
  for (let i = 0; i < range; i++) {
    outputElement.innerHTML += i + ', ';
    setTimeout(() => {
      outputElement.innerHTML += 'T' + i + ', ';
    }, 0);
  }
}

// Add the initial 5
addCallbacks(toAdd * 2);
// Set a timeout to add X blocks every X*1000 seconds
setInterval(() => {
  addCallbacks(toAdd);
}, intervalTime);

// Set an interval to remove a block of the 'stack' every second.
setTimeout(() => {
  setInterval(()=> {
    callStack.childNodes[0].classList.add('removing');
    setTimeout(() => {
      callStack.removeChild(callStack.childNodes[0]);
      if (!callStack.childNodes[0].classList.contains('on-stack')) {
        callStack.childNodes.forEach((node) => {
          node.classList.add('on-stack');
        });
      }
    }, 300);
  }, 1000);
}, 500);

// Add blocks To the callback stack
function addCallbacks(numToAdd) {
  for(let j = 0; j < numToAdd; j++) {
    let newBlock = document.createElement('div');
    newBlock.classList.add('stack-block');
    callStack.appendChild(newBlock);
    setTimeout(() => {
      newBlock.style.height = '50px';
    }, 50);
  }
}
