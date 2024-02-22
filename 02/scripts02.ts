const usuarios2 = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
]


function filtrarNomes(lista: { nome: string, idade: number, status: boolean }[], iniciais: string) {
    const iniciaisUpper = iniciais.toUpperCase()
    let nomesEncontrados: string[] = []

    for (const item of lista) {
        if (item.nome.toUpperCase().startsWith(iniciaisUpper)) {
            nomesEncontrados.push(item.nome);
        }
    }
    if (nomesEncontrados.length === 0) {
        return 'Nome Não encontrado.'
    }
    return nomesEncontrados
}

console.log(filtrarNomes(usuarios2, 'jo'))
