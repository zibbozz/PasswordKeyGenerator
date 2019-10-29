function getRandom(max){
	return Math.floor(Math.random() * Math.floor(max));
}

function generate(){
	let char1 = document.getElementById("char1");
	let char2 = document.getElementById("char2");
	let char3 = document.getElementById("char3");
	let char4 = document.getElementById("char4");
	let char5 = document.getElementById("char5");
	let char6 = document.getElementById("char6");
	let char7 = document.getElementById("char7");
	let char8 = document.getElementById("char8");
	let char9 = document.getElementById("char9");
	let char10 = document.getElementById("char10");
	let char11 = document.getElementById("char11");
	let char12 = document.getElementById("char12");

	let lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	let upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	let special = ['!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '\\', '^', '_', '{', '}', '|', '~'];
	let all = lower.concat(upper).concat(numbers).concat(special);

	char1.innerHTML = numbers[getRandom(numbers.length)];
	char2.innerHTML = lower[getRandom(lower.length)];
	char3.innerHTML = upper[getRandom(upper.length)];
	char4.innerHTML = special[getRandom(special.length)];
	char5.innerHTML = all[getRandom(all.length)];
	char6.innerHTML = all[getRandom(all.length)];
	char7.innerHTML = all[getRandom(all.length)];
	char8.innerHTML = all[getRandom(all.length)];
	char9.innerHTML = all[getRandom(all.length)];
	char10.innerHTML = all[getRandom(all.length)];
	char11.innerHTML = all[getRandom(all.length)];
	char12.innerHTML = all[getRandom(all.length)];
}