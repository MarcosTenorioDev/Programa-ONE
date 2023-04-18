//Declarando variáveis
let inputText = document.getElementById('mainInput');
let buttonEncrypt = document.getElementById('btn1');
let buttonDecrypt = document.getElementById('btn2');
let result = document.getElementById('result');
let codeDecrypted = '';


//Função main
buttonEncrypt.onclick = () => {
    codeToEncrypt = inputText.value; //código para ser criptografado (input)
    codeEncrypted = encrypt(codeToEncrypt); //codigo criptografado (output)
    hideRightSideElements(); //Função para esconder os elementos estáticos do outrput
    showCodeEncrypt(codeEncrypted); //Função para mostrar o código criptografado no HTML
}

//Função traduzir criptografia
buttonDecrypt.onclick = () =>{
    codeToDecrypt = inputText.value;//código para ser descriptografado (input)
    codeDecrypted = decrypt(codeToDecrypt);//codigo descriptografado (output)
    hideRightSideElements();//Função para esconder os elementos estáticos do outrput
    showCodeDecrypted(codeDecrypted);//Função para mostrar o código descriptografado no HTML
}

//função para encriptar os dados
const encrypt = (codeToEncrypt) => {

    codeToEncrypt = codeToEncrypt
        .replaceAll('e', 'enter')
        .replaceAll('i', 'imes')
        .replaceAll('o', 'ober')
        .replaceAll('a', 'ai')
        .replaceAll('u', 'ufat');

    return codeToEncrypt

}

//função para descriptografar os dados
const decrypt = (codeToDecrypt) =>{
    
    codeToDecrypt = codeToDecrypt
    .replaceAll('enter', 'e')
    .replaceAll('imes','i')
    .replaceAll('ober','o')
    .replaceAll('ai','a')
    .replaceAll('ufat','u');

    return codeToDecrypt;
}

//Função para mostrar o código criptografado no HTML
const showCodeEncrypt = (codeEncrypted) => {
    result.innerHTML = `${codeEncrypted}`;
}
//Função para mostrar o código descriptografado
const showCodeDecrypted = (codeDecrypted) =>{
    result.innerHTML = `${codeDecrypted}`;
}
//Função para esconder os elementos estáticos do output
const hideRightSideElements = () => {
    let imageNotFound = document.getElementById('imageNotFound');
    let labelImage = document.getElementById('labelImage');
    let imageDescription = document.getElementById('imageDescription');
    imageNotFound = imageNotFound.classList.add('hide');
    labelImage = labelImage.classList.add('hide');
    imageDescription = imageDescription.classList.add('hide');
}
