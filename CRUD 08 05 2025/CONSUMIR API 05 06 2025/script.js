
const div = document.getElementById("catalogo");
async function fetchProdutos()
{
    try {
    
        const resposta = await fetch('https://fakestoreapi.com/products');
        const listaProdutos = resposta.json();
        console.log(listaProdutos);
        imprimirProdutos(listaProdutos);
    } catch (error) {
        console.log(`Erro ao buscar página ${error}`);
        div.innerHTML = 'Tente novamente mais tarde...';
    }
    
}

function imprimirProdutos(vetor)
{
    div.innerHTML = '';
    vetor.forEach(element => {
        let divProduto = document.getElementById("div");
        divProduto.className = 'produto';
        divProduto.innerHTML = `
        <img src="${element.image}" alt="${element.titel}">
        <h2>${element.title}</h2>
        <button class="btn" onclick="comprar()"></button>
        `
    });
}

fetchProdutos();