import { CurrencyController } from "./controller/currency-controller.js"

const controller = new CurrencyController

const currencySrc = document.querySelector('#currencies__src')
if(currencySrc){
    currencySrc.addEventListener('input', function() {
        controller.curSrc()
    })
}

const currencyDest = document.querySelector('#currencies__dest') 
if(currencyDest){
    currencyDest.addEventListener('input', function() {
        controller.curDest()
    })
}

const tokenSrc = document.querySelector('#token__source')
if(tokenSrc){
    tokenSrc.addEventListener('input', function() {
        controller.tokenSrc()
    })
}

const tokenDest = document.querySelector('#token__destination')
if(tokenDest){
    tokenDest.addEventListener('input', function() {
        controller.tokenDest()
    })
}

const swapButton = document.querySelector('.converter__swap')
if(swapButton){
    swapButton.addEventListener('click', function(){
        controller.swap()
    })
}

function main(){
    controller.getNames()
}

main()