let btn = document.getElementById('btn')

let div = document.getElementById('resultado')

let cards = document.getElementById('cards');

let arrey = []


function cadastrar(){
    
    
    let Dados = {
        nome:document.getElementById('nome').value,
        sobrenome:document.getElementById('sobrenome').value,
        idade:document.getElementById('idade').value,
        sexo:document.getElementById('sexo').value,
        peso:document.getElementById('peso').value,
        altura:document.getElementById('altura').value,

        tbm: CalcularTBM(document.getElementById('peso').value,document.getElementById('altura').value,document.getElementById('idade').value),

        carbo: carboidrato(document.getElementById('peso').value),

        proteina: proteina(document.getElementById('peso').value),

        gordura: gordura(document.getElementById('peso').value),
    }

    arrey.push(Dados)

    console.log(arrey)

    
function CalcularTBM(peso,altura,idade){
    if(sexo == "Masculino") {
         return 66 + (13.7 * peso) + (5* altura) - (6.8 * idade);
    }else {
        return  655 + (9.6 * peso) + (1.8 * altura) -(4.7 * idade);
    }
}
function carboidrato(peso){
    return 2 * peso
}

function proteina(peso){
    return 1.8 * peso
}

function gordura(peso){
    return 0.7 * peso
}



    imprimir()

}
function imprimir(){
    div.innerHTML = '';
    cards.innerHTML = '';
    
    for (let i = 0; i < arrey.length; i++) {
            div.innerHTML = `
        
            <p>Idade: ${arrey[i].idade} anos</p>
            <p>Sexo: ${arrey[i].sexo}</p>
            <p>Peso: ${arrey[i].peso} KG</p>
            <p>Altura: ${arrey[i].altura} M</p>
            <p>TMB: ${arrey[i].tbm.toFixed(2)}</p>
            <p>Carboidratos: ${arrey[i].carbo.toFixed(2)} g</p>
            <p>Proteina: ${arrey[i].proteina.toFixed(2)} g</p>
            <p>Gordura: ${arrey[i].gordura.toFixed(2)} g</p>
        
      
        `;

        cards.innerHTML += `
      <div class="col py-2">
          <div class="card">
              <div class="card-body">
                  <h5 class="card-title">${arrey[i].nome} ${arrey[i].sobrenome}</h5>
                  <p class="card-text">${div.innerHTML}</p>
              </div>
          </div>
      </div>`;
    }
}



btn.addEventListener('click',cadastrar)