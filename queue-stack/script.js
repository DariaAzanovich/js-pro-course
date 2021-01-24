//------------------------------- QUEUE -------------------------------
function Queue() {
	const queue = [];

	function add (value) {
    queue.push(value);
  }
  
  function peek() {
    return queue[0];
  }
  
  function remove() {
    return queue.shift();
  }
  
  function isEmpty() {
    return queue.length === 0;
  }
	
	return {
  	add,
    peek,
    remove,
    isEmpty
  }
}

/* CHECK
const queueArr = new Queue();

console.log(queueArr.isEmpty(),
            queueArr.add(15),
            queueArr.add(35),
            queueArr.isEmpty(),
            queueArr.peek(),
            queueArr.remove(),
            queueArr.remove(),
            queueArr.isEmpty(),
);*/

//------------------------------- STACK -------------------------------
function Stack() {
	const stack = [];

	function add (value) {
    stack.push(value);
  }
  
  function peek() {
    return stack[stack.length - 1];
  }
  
  function remove() {
    return stack.pop();
  }
  
  function isEmpty() {
    return stack.length === 0;
  }
	
	return {
  	add,
    peek,
    remove,
    isEmpty
  }
}

/* CHECK
const stackArr = new Stack();

console.log(stackArr.isEmpty(),
            stackArr.add(15),
            stackArr.add(35),
            stackArr.isEmpty(),
            stackArr.peek(),
            stackArr.remove(),
            stackArr.remove(),
            stackArr.isEmpty(),
);*/