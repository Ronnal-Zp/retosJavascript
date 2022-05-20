
function calcularDescuento(precio, desc){
    let descBase = (precio * desc) / 100;
    let precioFinal = precio - descBase;
    console.log("El precio del producto es: " + precio);
    console.log("Descuento: " + desc);
    console.log("Su precio final es: " + precioFinal);

    return `Precio: ${precio}$. Descuento: ${desc}$. Precio a pagar con descuento: ${precioFinal}$`;
}

function valideKey(evt){
			
    // code is the decimal ASCII representation of the pressed key.
    var code = (evt.which) ? evt.which : evt.keyCode;
    
    if(code==8) { // backspace.
      return true;
    } else if(code>=48 && code<=57) { // is a number.
      return true;
    } else{ // other keys.
      return false;
    }
}

const button = document.getElementById("calcular");
const reset = document.getElementById("reset");
const inputPrecio = document.getElementById("precio")


inputPrecio.addEventListener("keyup",(e)=>{
    if(valideKey(e)){}else{
        inputPrecio.value = ""
        alert("¡Ese numero no es valido!")
    }
})


button.addEventListener("click", ()=>{

    let precio      = Number(document.getElementById("precio").value);
    let listaDesc   = Number(document.getElementById("listaDescuentos").value);

    console.log(listaDesc);

    let showPrice = document.getElementById("showPrice");

    showPrice.innerText = calcularDescuento(precio, listaDesc);
})

reset.addEventListener("click", ()=>{
    let precio = document.getElementById("precio").value = "";
    let showPrice = document.getElementById("showPrice").innerText = ""
})
