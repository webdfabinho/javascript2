/*Troque todos os elementos pares e diferentes de zero de um array pelo número 0. 
Se o array for vazio, retorne -1.
Exemplo: Input -> [1, 3, 4, 6, 80, 33, 23, 90]
Output -> [1, 3, 0, 0, 0, 33, 23, 0]
Input -> []
Output -> -1  */

// solução 01

function substituiNumerosPares(array) {
	if (!array.length) return console.log(-1);

	const naoZero = (num) => num !== 0;
	const numPar = (num) => num % 2 === 0;

	for (let i = 0; i < array.length; i++) {
		if (numPar(array[i]) && naoZero(array[i])) {
			console.log(`trocando ${array[i]} por 0...`);
			array[i] = 0;
		} else if (!naoZero(array[i])) {
			console.log('Ops, você já vale 0!');
		}
	}
	console.log(array);
}

substituiNumerosPares([2, 0, 3, 5]);

//solução 02

function substituiPares(array){
    for (let i = 0; i < array.length; i++){
        if(array[i] === 0){
            console.log("Você já é Zero Cabeção!")
        } else if (array[i] % 2 === 0){
            console.log(`Substituindo ${array[i]} por 0 ...`);
            array[i] = 0;
        } 
    }
    return array;
}

let arr = [1, 3, 4, 6, 80, 33, 23, 90];
console.log(substituiPares(arr));

//solução 03

function substituiPares(array){
    
    if (!array.length) return -1;

    for (let i = 0; i < array.length; i++){
        if(array[i] === 0){
            console.log("Você já é Zero Cabeção!")
        } else if (array[i] % 2 === 0){
            console.log(`Substituindo ${array[i]} por 0 ...`);
            array[i] = 0;
        } 
    }
    return array;
}

let arr = [1, 3, 4, 6, 80, 33, 23, 90];
console.log(substituiPares([]));

//solução 04

function substituiPares(array){
    if (!array) return -1;
    if (!array.length) return -1;

    for (let i = 0; i < array.length; i++){
        if(array[i] === 0){
            console.log("Você já é Zero Cabeção!")
        } else if (array[i] % 2 === 0){
            console.log(`Substituindo ${array[i]} por 0 ...`);
            array[i] = 0;
        } 
    }
    return array;
}

let arr = [1, 3, 4, 6, 80, 33, 23, 90];
// console.log(substituiPares(null));
console.log(substituiPares(undefined));
// console.log(substituiPares(false));