// Node Interpreter Practice

// Arays
let greeting = "Hi!"
"hello world".split("")
[ 'h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd' ].join("")
let num = [1, 3, 5];
let final = num[Math.floor(Math.random() * num.length)];

let fiElem = num[Math.floor(Math.random() * num.length)];
let seElem = num[Math.floor(Math.random() * num.length)];
arrNum[arrNum.indexOf(fiElem)] = secElem;
arrNum[arrNum.indexOf(secElem)] = fiElem;

// Maps
let candy = new Map();
candy.set('purple', 'grape');
candy.set('red', 'apple');
candy.set('green', 'pear');
candy.set('orange', 'orange');
candy.set('yellow', 'banana');

for (let [k,v] of candy){
	console.log(`The ${v} flavor is colored ${k}.`);
}

candy.get("red");
candy.get("pink");
