let bebidas = [
    {nombre:"Cafe", precio: 100}, 
    {nombre:"Cortado", precio: 150}, 
    {nombre:"Te", precio: 140 }, 
    {nombre:"Capuccino", precio: 180} 
];
let comidas= [
    {nombre:"Tostado", precio: 200}, 
    {nombre:"Medialuna", precio: 160}, 
    {nombre:"Scon", precio: 50 }, 
    {nombre:"Alfajores", precio: 80} 
];


let formulario = document.getElementById("formulario")

let qtyCafe = document.getElementById("qtyCafe")
let qtyCortado = document.getElementById("qtyCortado")
let qtyTe = document.getElementById("qtyTe")
let qtyCapp = document.getElementById("qtyCapp")
let qtyTost = document.getElementById("qtyTost")
let qtyMedLun = document.getElementById("qtyMedLun")
let qtyScon = document.getElementById("qtyScon")
let qtyAlf = document.getElementById("qtyAlf")

addEventListener("submit", calcularPedido)
function calcularPedido(e){
    e.preventDefault()

    qtyCafe = qtyCafe.value
    qtyCortado = qtyCortado.value
    qtyTe = qtyTe.value
    qtyCapp = qtyCapp.value
    qtyTost = qtyTost.value
    qtyMedLun = qtyMedLun.value
    qtyScon = qtyScon.value
    qtyAlf = qtyAlf.value

    let totalBebidas= bebidas[0].precio*qtyCafe + bebidas[1].precio*qtyCortado + bebidas[2].precio*qtyTe + bebidas[3].precio*qtyCapp;

    let totalComidas = comidas[0].precio*qtyTost + comidas[1].precio*qtyMedLun + comidas[2].precio*qtyScon + comidas[3].precio*qtyAlf;

    let total = totalBebidas + totalComidas;

    alert(`Gracias por su pedido, en breve lo estaremos preparando. El total a abonar es de $${total}`)
    
}