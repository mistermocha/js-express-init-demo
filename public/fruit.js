let addParaText = () => {
    para = document.body.appendChild(document.createElement("p"))
    para.id = "fruits"
}

let makeOneFruit = (name, colors) => {
    fruitdiv = document.createElement("div")
    fruitdiv.style.border = "lpx solid" + colors.border
    fruitdiv.stlye.background = colors.backgroundfruitdiv.innerText = name
    return fruitdiv

}


let makeFruits = () => {
    fetch('/public/fruit').then((res) => {

        if (res.ok) {
            return res.json()

        }

    }).then((data) => {
        for (const fruit in data) {
            let colors = data[fruit]
            fruitdiv = makeOneFruit(fruit, colors)
            document.getElementById("fruits").appendChild(fruitdiv)


        }
    }
    )

}