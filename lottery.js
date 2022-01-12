function lotteryRoll(toRoll){
f = document.getElementById('container-main')

for(let i=1; i<7; i++){
    newDiv = createDiv(i)
    f.appendChild(newDiv)
if (toRoll == "start"){
     randomNum = Math.floor(Math.random() * 69)
     newDiv.innerHTML = (`${randomNum}`)
    }
    }
}

function createDiv(rollNum){
    addDiv = document.createElement("DIV")
    addDiv.setAttribute("id","roll${ROLLNUM}")
    addDiv.className = "circle"
    return addDiv
}