const div = document.createElement('div')
const createMessages = (element, message, type) => {
 
    let typeClass = ''
    switch (type) {
        case 'error':
            typeClass = 'alert-danger';
            break;
        case 'success':
            typeClass = 'alert-success';
            break;
        case 'warning':
            typeClass = 'alert-warning';
            break;
        default:
            typeClass = 'alert-primary';
        break;
    }
    //crio os elementos para gerar o erro com html dinâmico
    //crio a div e adiciono classses á ela
    div.innerHTML = ""
    div.classList.add('alert', typeClass,'alert-dismissible','fade','show')
    div.role = 'alert'
    
    //crio o bnotão e crio propiedades e classes
    const buttonDiv = document.createElement('button')
    buttonDiv.classList.add('btn-close')
    buttonDiv.setAttribute("data-bs-dismiss","alert")
    buttonDiv.setAttribute("aria-label","Close")
    
    div.innerHTML = `${message}`
    div.appendChild(buttonDiv)
    element.append(div)
    
}
export { createMessages }