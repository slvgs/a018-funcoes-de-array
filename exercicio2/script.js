const arraynumero = [1, 45, 56, 2, 34, 44, 12, 9]

// Depois disso, utilize este array para criar duas funcões de array `map()`:

// 1. A primeira deve retornar um novo array contendo os números múltiplicados por 3, Crie uma `const triplos`, e guarde o valor do array nesta const;
const funcaoUm = arraynumero.map((numeros, indice, array) => numeros * 3) 

console.log(funcaoUm)

// 2. A segunda deve retornar um novo array contendo os números divididos por 2. Crie uma `const metades`, e guarde o valor do array nesta const;
const funcaoDois = arraynumero.map((elementos, indice, array) =>{ 
    const resultado = elementos / 2 
    return resultado
})
console.log(funcaoDois)