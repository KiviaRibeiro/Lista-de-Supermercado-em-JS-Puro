var items = [];

    document.querySelector('input[type=submit]')
    .addEventListener('click',()=>{
        var nomeProduto = document.querySelector('input[name=nome_produto]');
        var valorProduto = document.querySelector('input[name=price]');

        items.push({
            nome: nomeProduto.value,
            valor: valorProduto.value
        });
        let listaProdutos = document.querySelector('.lista_produtos')
        let soma = 0;
        listaProdutos.innerHTML = "";
        items.map(function(val){
            soma+=parseFloat(val.valor);
            listaProdutos.innerHTML+= `
            <div class="lista_produtos_single">
            <h3>`+val.nome+`</h3>
            <h3 class="place-produto"><span>R$`+val.valor+`</span></h3>
            </div><!--lista_produtos_single-->    
            
            `;
        })
        alert(soma);
        soma=soma.toFixed(2);
        nomeProduto.value = "";
        valorProduto.value = "";

        let elementoSoma = document.querySelector('.soma_produto h2');
        elementoSoma.innerHTML = 'R$'+soma
    });
        document.querySelector('button[name=limpar]')
        .addEventListener('click',()=>{
              items = [];
        document.querySelector('.lista_produtos').innerHTML = "";
        document.querySelector('.soma_produto h2').innerHTML = "R$0";

        });


