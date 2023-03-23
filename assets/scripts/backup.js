// const nome = document.querySelector('[data-tipo]')

// function validaNome() {
    
//     const nomeValor = nome.value;

//     if (nomeValor.trim() === "") {
//         const mensagem = 'Espaços em branco foram encontrados, digite seu NOME para o campo ser aceito.';
//         input.setCustomValidity(mensagem)
        
//         return false;
//     }
  
//     // outras validações que você queira incluir
//     return true;
// }

// nome.addEventListener('blur', (evento) =>{
//     validaNome(evento.target)
// })


// This code only runs on the browser

if (typeof document !== 'undefined') {
    let element = document.querySelector('.class-name');

    const form = document.querySelector('#form');
    const inputNome = document.querySelector('#name-input');
    
    form.addEventListener('submit', evento => {
        evento.preventDefault()
    
        const valorInputNome = inputNome.value.trim()
    
        if(!valorInputNome){
            const mensagem = 'Espaços em branco foram encontrados, digite seu NOME para o campo ser aceito.';
            input.setCustomValidity(mensagem)
        }
    })

    // Manipulating the DOM here
 }



//  DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
const inputNome = document.querySelector('#name-input');
const inputEmail = document.querySelector('#email-input');
const inputAssunto = document.querySelector('#subject-input');
const inputMensagem = document.querySelector('#message-input');

function validaNome(inputNome){
    // Validação de espaço vazio ou em branco
    const nomeValor = inputNome.value.trim();
    if(nomeValor === ""){
        const mensagemNome = 'Espaços em branco foram encontrados, digite seu NOME para o campo ser aceito. Caso já tenha preenchido corretamente, passe para o campo de formulário seguinte';
        inputNome.setCustomValidity(mensagemNome)
    }else{
        inputNome.setCustomValidity("")    
    }
    // Validação do tamanho de no máximo 50 caracteres
    if(nomeValor.length >= 50){
        const mensagemTamanho = 'Você atingiu o tamanho máximo desse campo de formulário que é de 50 caracteres! Caso já tenha preenchido corretamente, passe para o campo de formulário seguinte'
        inputNome.setCustomValidity(mensagemTamanho)
    }else{
        inputNome.setCustomValidity("")    
    }
};


inputNome.addEventListener("blur", (evento) => {
    validaNome(evento.target);
});

function validaEmail(inputEmail){
    const emailValor = inputEmail.value.trim();
    if(emailValor === ""){
        const mensagemEmail = 'Espaços em branco foram encontrados, digite seu E-MAIL para o campo ser aceito. Caso já tenha preenchido corretamente, passe para o campo de formulário seguinte';
        inputEmail.setCustomValidity(mensagemEmail)
    }else{
        inputEmail.setCustomValidity("")    
    }
};

inputEmail.addEventListener("blur", (evento) => {
    validaEmail(evento.target);
});

function validaAssunto(inputAssunto){
    // Validação de espaço vazio ou em branco
    const assuntoValor = inputAssunto.value.trim();
    if(assuntoValor === ""){
        const mensagemAssunto = 'Espaços em branco foram encontrados, digite o ASSUNTO da mensagem para o campo ser aceito. Caso já tenha preenchido corretamente, passe para o campo de formulário seguinte';
        inputAssunto.setCustomValidity(mensagemAssunto)
    }else{
        inputAssunto.setCustomValidity("")    
    }
    // Validação do tamanho de no máximo 50 caracteres
    if(assuntoValor.length >= 50){
        const mensagemTamanho = 'Você atingiu o tamanho máximo desse campo de formulário que é de 50 caracteres! Caso já tenha preenchido corretamente, passe para o campo de formulário seguinte'
        inputAssunto.setCustomValidity(mensagemTamanho)
    }else{
        inputAssunto.setCustomValidity("")    
    }
};

inputAssunto.addEventListener("blur", (evento) => {
    validaAssunto(evento.target);
});

// Validando campo de MENSAGEM
function validaMensagem(inputMensagem){
    // Validação de espaço vazio ou em branco
    const mensagemValor = inputMensagem.value.trim();
    if(mensagemValor === ""){
        const mensagemCampoDeMensagem = 'Espaços em branco foram encontrados, digite s para o campo ser aceito. Caso já tenha preenchido corretamente, passe para o campo de formulário seguinte';
        inputAssunto.setCustomValidity(mensagemAssunto)
    }else{
        inputAssunto.setCustomValidity("")    
    }
    // Validação do tamanho de no máximo 50 caracteres
    if(assuntoValor.length >= 50){
        const mensagemTamanho = 'Você atingiu o tamanho máximo desse campo de formulário que é de 50 caracteres! Caso já tenha preenchido corretamente, passe para o campo de formulário seguinte'
        inputAssunto.setCustomValidity(mensagemTamanho)
    }else{
        inputAssunto.setCustomValidity("")    
    }
};

inputAssunto.addEventListener("blur", (evento) => {
    validaAssunto(evento.target);
});