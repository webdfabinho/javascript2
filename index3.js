/*Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.
Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para 
a direita ou vice-versa (ex.: raiar, ama, ovo, radar)*/

// solução 1
function verificaPalindromo(string) {
	if (!string) return;
	console.log(string === string.split('').reverse().join(''));
}
verificaPalindromo('ovo');

// solução 2

function verificaPalindromo2(string) {
	if (!string) return;
	if (!string.length) return;

	for (var i = 0; i < string.length / 2; i++) {
		if (string[i] !== string[string.length - 1 - i]) {
			return console.log(false);
		}
	}
	return console.log(true);
}

varificaPalindromo2('asa');

//solução 3
function verificaPalindromo(string) {
	if (!string) return;

    return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo("ana"));

// solução 4

function verificaPalindromo2(string) {
	if (!string) return "string inexistente";
	
	for (let i = 0; i < string.length / 2; i++) {
		if (string[i] !== string[string.length - 1 - i]) {
			return false;
		}
	}
	return true;
}

console.log(verificaPalindromo2("abba"));
