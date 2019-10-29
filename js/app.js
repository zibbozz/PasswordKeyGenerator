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
let special = ['!', '"', '#', '$', '%', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '=', '?', '@', '\\', '^', '_', '{', '}', '|', '~'];
let all = lower.concat(upper).concat(numbers).concat(special);

function getRandom(max){
	return Math.floor(Math.random() * Math.floor(max));
}

function generate(){
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

function printKey(){
	let doc = new jsPDF();

	doc.setLineDash([5, 5], 0);
	doc.setFillColor('#CCCCCC');
	doc.roundedRect(20, 20, 85, 53, 5, 5, 'FD');
	doc.setFillColor('#FFFFFF');
	doc.rect(21, 48, 83, 10, 'F');
	doc.text('Passwort Schlüssel', 25, 28);
	doc.text(char1.innerHTML, 23, 55);
	doc.text(char2.innerHTML, 29, 55);
	doc.text(char3.innerHTML, 35, 55);
	doc.text(char4.innerHTML, 41, 55);

	doc.text(char5.innerHTML, 52, 55);
	doc.text(char6.innerHTML, 58, 55);
	doc.text(char7.innerHTML, 64, 55);
	doc.text(char8.innerHTML, 70, 55);
	doc.text(char9.innerHTML, 76, 55);
	doc.text(char10.innerHTML, 83, 55);
	doc.text(char11.innerHTML, 90, 55);
	doc.text(char12.innerHTML, 96, 55);
	doc.setFontSize(10);
	doc.text('Start-Zeichen', 23, 63);
	doc.setFontSize(7);
	doc.text('ABC', 51, 62);
	doc.text('DEF', 57, 62);
	doc.text('GHI', 63, 62);
	doc.text('JKL', 69, 62);
	doc.text('MNO', 75, 62);
	doc.text('PQRS', 82, 62);
	doc.text('TUV', 90, 62);
	doc.text('WXYZ', 96, 62);
	doc.text('Geheimes Wort ausdenken', 25, 33);
	doc.text('Buchstabe für Buchstabe verschlüsseln', 25, 37);
	doc.text('Zusammen mit den 4 Start-Zeichen ist dies ein sicheres Passwort', 25, 41);

	let now = new Date();
	doc.save('Passwort Schluessel ' + now.getDate() + '.' + (now.getMonth() + 1) + '.' + now.getFullYear() + '.pdf');
}