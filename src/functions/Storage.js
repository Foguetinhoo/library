import { J } from "./JClass.js"

// classe para salvar os itens  no local ou session storage herdando da classe J
class StorageL  extends J{

     constructor(type){
        super(type)
        this.type = type
    }
    // Metodo para retornar item do local ou session
    getItem(name){
        const data =  this.type == 'session' ? 
        this.parseData(sessionStorage.getItem(name))
        : this.parseData(localStorage.getItem(name))
        return data  
    }
    // Metodo para salva item no local ou session
    saveItem(name,data){
        console.log('save',data)
       this.type == 'session' ? sessionStorage.setItem(name,this.stringfyData(data))
        : localStorage.setItem(name,this.stringfyData(data))
    }
    clearItem(){
       this.type == 'session' ? sessionStorage.clear()
        : localStorage.clear()
    }
    removeItem(name){
        this.type == 'session' ? sessionStorage.removeItem(name)
        : localStorage.removeItem(name)
    }
}

export {StorageL}