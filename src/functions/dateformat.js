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

const quant = (date_inicio, date_fim) => {
    const data1 = new Date(date_inicio);
    const data2 = new Date(date_fim);

    const diferencaEmMs = data2 - data1;
    const diferencaEmDias = Math.floor(diferencaEmMs / (1000 * 60 * 60 * 24))
    return diferencaEmDias

}

const dateAtual = () => {
    let date = new Date();
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0'); // Mês é baseado em zero, então some 1
    let year = date.getFullYear();

    let dateFormatted = `${year}-${month}-${day}`;
    return dateFormatted
}
export { quant, format, dateAtual }