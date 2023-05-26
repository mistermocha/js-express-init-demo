

function addParaTexts(){
para = document.body.appendChild(documetn.createElement("p"))
para.id="fruits"
}

function makeFruit(name,colors){
    fruitDiv = document.createElement("div")
    fruitDiv.style.border = "1px solid" + colors.border
    fruitDiv.style.background = colors.backgroundfruitDiv.innetText = name
    return fruitDiv
}
function makeFruits(){
    fetch('fruit').then( function(res){
        if (res.ok){
            return res.json
        }

    }).then(function(data){
        for (const fruit in data){
            let colors = data[fruit]
            fruitDiv = makeFruit(fruit,colors)
            document.getElementById("fruits").appendChild(fruitDiv)
        }
    })
}

function bindMakeContent(event){
    addParaText()
    makeFruits()
}

window.addEventListener('DOMContentLoaded', bindMakeContent)