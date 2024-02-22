

const produtoNovo: { produto: string; lote: number; ano: number; qtd: number; } = {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
}



const etiquetas = (produto: { produto: string; lote: number; ano: number; qtd: number; }): string[] => {
    let etiqueta: string[] = []
    for (let i = 1; i <= produto.qtd; i++) {
        etiqueta.push(`${produto.lote} - ${produto.ano} - 00${i}`)
    }

    return etiqueta
}



console.log(etiquetas(produtoNovo));


