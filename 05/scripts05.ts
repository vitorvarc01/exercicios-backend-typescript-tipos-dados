let palavra = 'programador'

const soletrando = (palavra: string): string => {
    let soletrando: string = ''

    for (let i = 0; i <= palavra.length - 1; i++) {
        soletrando += `${palavra[i]}-`

    }
    return soletrando

}

console.log(soletrando(palavra))
