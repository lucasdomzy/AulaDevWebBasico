function displayRadioValue(){
    var elementos = document.getElementsByName('gender')
    for(i = 0; i < elementos.length; i++){
        if(elementos[i].checked){
            document.getElementById('result').innerHTML = 
            "O gênero selecionado é "+ elementos[i].value
        }
    }
}