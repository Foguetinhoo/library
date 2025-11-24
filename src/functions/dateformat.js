const format = (date) => {
    try {
      const novaData = new Date(date);
        return novaData.toLocaleString('pt-BR', { 
            timezone: 'UTC',
            dateStyle: 'short',
	       });
    
    } catch (e) {
        console.log(e)
        createMessages(document.body, e.message, 'error')
    }
}

const quant = (date_inicio,date_fim) =>{
    const data1 = Date.now();
const data2 = new Date(date_fim);

const diferencaEmMs = data1 - data2;
const diferencaEmDias = Math.floor(diferencaEmMs / (1000 * 60 * 60 * 24))
return diferencaEmDias

}

export{quant,format}