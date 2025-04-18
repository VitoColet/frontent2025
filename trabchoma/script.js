const campo_nome = document.getElementById("nome");
const duracao_minutos = document.getElementById("duracao");
const selecao1 = document.getElementById("selecao1");
const botao1 = document.getElementById("reservar");
const opc_aula1 = document.getElementById("opc-semanal")
const opc_aula2 = document.getElementById("aula-unica");
const div_infos = document.getElementById("infos");

botao1.addEventListener("click", function(){

    let lingua = selecao1.value;
    let qntd_minutos = duracao_minutos.value;
    let tot=0;
    let taxa=0;
    let semanal_marcado = opc_aula1.checked;
    let unica_marcada = opc_aula2.checked;
    let nome = campo_nome.value;
    let idioma = '';
    let frequencia = '';
    let desconto = 0;

    if (qntd_minutos == 0 || qntd_minutos == null || nome == null || (semanal_marcado == false  && unica_marcada == false) )
    {
        alert("Faltam informações...");
    }
    else
    {

        if (lingua == 1)
        {
            taxa=2.50;
            idioma = 'Inglês';
        }
        else if (lingua == 2)
        {
            taxa=2.0;
            idioma = 'Espanhol';
        }
        else if (lingua == 3)
        {
            taxa=3.0;
            idioma = 'Francês'
        }
        tot += (taxa * qntd_minutos);

        if (semanal_marcado)
        {
            desconto = 0.15;
            tot -= (tot*desconto);
            frequencia = 'Semanal';
        }
        else if (unica_marcada)
        {
            frequencia = 'Aula Única'
        }

        div_infos.innerHTML = '';
        div_infos.innerHTML += '<p>Reserva Confirmada</p></p>';
        div_infos.innerHTML += `<p>Aluno: ${nome}</p>`;
        div_infos.innerHTML += `<p>Idioma: ${idioma}</p>`;
        div_infos.innerHTML += `<p>Duração: ${qntd_minutos}</p>`;
        div_infos.innerHTML += `<p>Frequência: ${frequencia}</p>`;
        div_infos.innerHTML += `<p>Desconto: ${desconto*100}%</p>`;
        div_infos.innerHTML += `<p>Valor Total: R$${tot}</p>`;

    }

    

})