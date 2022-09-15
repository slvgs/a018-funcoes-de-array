const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

// 1. A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em CAIXA ALTA.


function uperzinText (obj){
    for(let i in obj){
        obj [i] = obj[i].toUpperCase()
    }
    return obj
    
}
console.log(uperzinText(objeto))




// 2. A segunda deve retornar os valores do objeto como texto corrido.
function ObjetText(obj) {
    let text = "";
    for (let i in obj){
        text += `${obj[i]} `
    }
    return text.trim()
}
console.log(ObjetText(objeto))


function objectToCallback(obj, func){
    console.log(func(obj))
}

console.log(objectToCallback(objeto, ObjetText))