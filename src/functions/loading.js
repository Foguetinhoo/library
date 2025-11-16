

const loading = (page, reload = false) => {
    const isLoading = sessionStorage.getItem("loading")

        document.body.innerHTML = ""
        const div = document.createElement("div")
        div.classList.add("loading-div")
        const p = document.createElement("p")
        const i = document.createElement("i")
        i.classList.add("fa-solid", "fa-spinner")
        p.innerHTML = `Carregando`
        p.classList.add('fs-1')
        p.append(i)
        div.append(p)
        document.body.append(div)
        setTimeout(() => {
            location.href = `${page}.html`

        }, 1500)

}

export { loading }