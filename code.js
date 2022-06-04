const inputFileButton = document.getElementById("inputfilebutton");
inputFileButton.addEventListener("click", clickFileButton);

const inputNumberButton = document.getElementById("inputnumberbutton");
inputNumberButton.addEventListener("click", clickNumberButton);

function clickFileButton(){
    arquivo = document.getElementById("inputfile");

    var fr=new FileReader();

    try{
        fr.readAsText(arquivo.files[0]);
        fr.onload=function(){
            info = fr.result; 
            document.getElementById('output').textContent=fr.result;
        }  
    }
    catch(erro){
        console.log(erro);
        alert(erro);
    }
    finally{
        alert("Obrigado pela visita");
    }
    
    
}

function clickNumberButton(){

    number = document.getElementById("inputnumber").value

    try{
        if (number == '') 
        {
           throw 'Informe um valor'
        }
        
        if (number < 5 || number > 10 )
        {
            throw 'Informe um valor maior que 5 e menor que 10'
        }

        if ((isNaN(number)))  // Vai verificar que se o character é um numero se for ok!!!    ||  Agora se for Letras, Simbolos e/ou characteres especiais o NaN vai barrar.
        {
            throw 'Erro + erro JavaScript'
        }
    }
        
    catch(erro){
        document.getElementById("outputnumber").innerHTML = erro;
        alert(erro);
    }
    finally{
        alert("O número escolhido foi " + number);
    }
}

