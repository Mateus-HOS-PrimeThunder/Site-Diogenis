let btn = document.getElementById('btn')
let div = document.getElementById('resultado')

let cards = document.getElementById('cards');
let corDoCard = document.getElementById('cor');
let arreyIMC = []

function cadastrar() {

    let resultadoIMC = {
        nome: document.getElementById('nome').value,
        sobrenome: document.getElementById('sobrenome').value,
        categoria: document.getElementById('categoria').value,
        peso: document.getElementById('peso').value,
        altura: document.getElementById('altura').value,

        imc: IMC(document.getElementById('peso').value, document.getElementById('altura').value),

        categoriaDoImc: categoriaIMC(IMC(document.getElementById('peso').value, document.getElementById('altura').value)),
    }

    arreyIMC.push(resultadoIMC)

    console.log(arreyIMC)



    imprimir()
}

function imprimir(){
    div.innerHTML = '';
    cards.innerHTML = '';
    
    for (let i = 0; i < arreyIMC.length; i++) {
            div.innerHTML = `
        
            <p>Peso: ${arreyIMC[i].peso} KG</p>
            <p>Altura: ${arreyIMC[i].altura} M</p>
            <p>Categoria: ${arreyIMC[i].categoria}</p>
            <p>IMC: ${arreyIMC[i].imc.toFixed(2)}</p>
            <p>Categoria do IMC: ${arreyIMC[i].categoriaDoImc}</p>
           
        
      
        `;
        

        cards.innerHTML += `
      <div class="col py-2">
          <div class="card " id="cor">
              <div class="card-body">
                  <h5 class="card-title">${arreyIMC[i].nome} ${arreyIMC[i].sobrenome}</h5>
                  <p class="card-text">${div.innerHTML}</p>
              </div>
          </div>
      </div>`;

    }
}

function IMC(peso, altura) {
    return peso / Math.pow(altura, 2)
}

function categoriaIMC(imc) {

    if (imc <= 18.5) {
        return 'Abaixo do normal' 
    } else if (imc <= 24.9) {
        return 'Normal'
    } else if (imc <= 29.9) {
        return 'Sobre peso'
    } else if (imc <= 34.9) {
        return 'Obesidade Grau I'
    } else if (imc <= 39.9) {
        return 'Obesidade Grau II'
    } else {
        return 'Obesidade Grau III'
    }
}



function Cor(corDoCard) {

    if (corDoCard <= 18.5) {
       return "yelow"; 
    } else if (corDoCard <= 24.9) {
        return "green";
    } else if (corDoCard >= 29.9) {
        return "red";
    }
}





btn.addEventListener('click', cadastrar)