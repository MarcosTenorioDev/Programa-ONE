//Declarando variáveis
let inputText = document.getElementById('mainInput');
let buttonEncrypt = document.getElementById('btn1');
let buttonDecrypt = document.getElementById('btn2');
let imageNotFound = document.getElementById('imageNotFound');
let labelImage = document.getElementById('labelImage');
let imageDescription = document.getElementById('imageDescription');
let result = document.getElementById('result');


//Função main
buttonEncrypt.onclick = () =>{
    codeToEncrypt = inputText.value; //código para ser criptografado (input)
    encrypt(codeToEncrypt); //processo de criptogração (função)
    codeEncrypted = encrypt(codeToEncrypt); //codigo criptografado (output)
    hideRightSideElements(); //Função para esconder os elementos estáticos do outrput
    showCodeEncrypt(codeEncrypted); //Função para mostrar o código criptografado no HTML
    

}

//função para encriptar os dados
const encrypt = (codeToEncrypt) =>{

    codeToEncrypt = codeToEncrypt
    .replaceAll('e', 'enter')
    .replaceAll('i', 'imes')
    .replaceAll('o', 'ober')
    .replaceAll('a', 'ai')
    .replaceAll('u','ufat');
    
    return codeToEncrypt

}

//Função para mostrar o código criptografado no HTML
const showCodeEncrypt = (codeEncrypted) =>{
    result.innerHTML = `${codeEncrypted}`
}
//Função para esconder os elementos estáticos do output
const hideRightSideElements = () =>{
    imageNotFound = imageNotFound.classList.add('hide');
    labelImage = labelImage.classList.add('hide');
    imageDescription = imageDescription.classList.add('hide');
}
