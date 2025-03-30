let bill = 0
let tipPercentage = 0
let numberOfPeople = 0

//receber o valor da conta
let billInput = document.querySelector("#bill")
billInput.addEventListener("input", recieveBillValue)

function recieveBillValue() {
    bill = billInput.valuaAsNumber
    calculate()
}

//receber o numero de pessoas
let numberOfPeopleInput = document.querySelector("#people")
numberOfPeopleInput.addEventListener("input", recieveNumberOfPeople)

function recieveNumberOfPeople(){
    numberOfPeople = numberOfPeopleInput.valuaAsNumber
    calculate()
}

function recieveTipPercentage(value){
    let buttonSelected = document.querySelector("button")
}


function calculate(){
    if(bill != 0 && tipPercentage != 0 && numberOfPeople != 0){
        console.log("Calcular")
    }else{
        console.log("Ainda não é possível calcular")
    }
}