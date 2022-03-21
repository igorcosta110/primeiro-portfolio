function validarDados(position){
    let element = document.querySelectorAll('.text-form')[position]
    let errorMessage = document.querySelector('.error')
    
    if(element.value == ''){
        errorMessage.innerHTML =`Erro: campo "${element.placeholder}" não foi preenchido`
        element.classList.remove('error-fixed')
        element.style.border = '1px solid red'
        element.focus()
    } else {
        errorMessage.innerHTML = ``
        element.style.border = '1px solid white'
        element.style.background = '#fff'
    }
}