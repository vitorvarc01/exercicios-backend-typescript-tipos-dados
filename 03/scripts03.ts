function tabuadas(numeros: number[]): void {
    for (const num of numeros) {
        console.log(`Tabuada do ${num}:`);
        for (let i = 0; i <= 10; i++) {
            console.log(`${num} x ${i} = ${num * i}`);
        }
        console.log('---------------');
    }
}

// Testando a função com o exemplo fornecido
const numerosExemplo: number[] = [1, 5, 2];
tabuadas(numerosExemplo);

