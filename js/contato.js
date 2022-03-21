function validarSubmissao(){
    if(validarDados(0)){
        if(validarDados(1)){
            if(validarDados(2)){
                return true
            }
        }
    } else {
        return false
    }
}

function validarDados(position){
    let element = document.querySelectorAll('.text-form')[position]
    let errorMessage = document.querySelector('.error')
    
    if(element.value == ''){
        errorMessage.innerHTML =`Erro: campo "${element.placeholder}" não foi preenchido`
        element.style.border = '1px solid red'
        element.focus()
        return false
    } else {
        errorMessage.innerHTML = ``
        element.style.border = '1px solid white'
        element.style.background = 'rgba(200, 200, 200, .3)'
    }

    if(position == 1){
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1-3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!regex.test(element.value)){
            errorMessage.innerHTML = `Erro: e-mail inválido`
            element.style.border = '1px solid red'
            element.focus()
            return false
        }
    }
    return true
}