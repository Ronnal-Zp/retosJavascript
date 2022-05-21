function perimetroCuadrado(lado){

    return lado*4;
}
function areaCuadrado(lado){
    return lado * lado;
}

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

function perimetroCirculo(radio){
    const diametro = radio * 2;
    return (diametro * Math.PI).toFixed(2)
}
function areaCirculo(radio){
    return ((radio * radio) * Math.PI).toFixed(2)
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


const btnCdrPerimetro = document.getElementById("btnCdrPerimetro");
const btnTrgPerimetro = document.getElementById("btnTrgPerimetro");
const btnCrloPerimetro = document.getElementById("btnCrloPerimetro");
const btnCdrArea = document.getElementById("btnCdrArea");
const btnTrgArea = document.getElementById("btnTrgArea");
const btnCrloArea = document.getElementById("btnCrloArea");
const btnResetCdr = document.getElementById("btnResetCdr");
const btnResetTrg = document.getElementById("btnResetTrg");
const btnResetCrlo = document.getElementById("btnResetCrlo");



btnCdrPerimetro.addEventListener("click", ()=>{
    let cdrLado = Number(document.getElementById("cdrLado").value);
    if(cdrLado == 0){
        alert("¡No ingresaste un numero!");
        return;
    }

    const show = document.getElementById("showRespCdr");
    show.innerText = `El perimetro de su cuadrado es: ${perimetroCuadrado(cdrLado)} cm^2`
})
btnCdrArea.addEventListener("click", ()=>{
    let cdrLado = Number(document.getElementById("cdrLado").value);
    if(cdrLado == 0){
        alert("¡No ingresaste un numero!");
        return;
    }

    const show = document.getElementById("showRespCdr");
    show.innerText = `El area de su cuadrado es: ${areaCuadrado(cdrLado)} cm`
  
})



btnCrloPerimetro.addEventListener("click", ()=>{
    let crloRadio = Number(document.getElementById("crloRadio").value);
    if(crloRadio == 0){
        alert("¡No ingresaste un numero!");
        return;
    }

    const show = document.getElementById("showRespCrlo");
    show.innerText = `La circunsferencia de su circulo mide: ${perimetroCirculo(crloRadio)} cm^2`;
})
btnCrloArea.addEventListener("click", ()=>{
    let crloRadio = Number(document.getElementById("crloRadio").value);
    if(crloRadio == 0){
        alert("¡No ingresaste un numero!");
        return;
    }

    const show = document.getElementById("showRespCrlo");
    show.innerText = `El area de su circulo mide: ${areaCirculo(crloRadio)} cm`;
})



btnTrgPerimetro.addEventListener("click", ()=>{
    let trgLado1 = Number(document.getElementById("trgLado1").value);
    let trgLado2 = Number(document.getElementById("trgLado2").value);
    let trgBase = Number(document.getElementById("trgBase").value);
    if(trgLado1 == 0 || trgLado2 == 0 || trgBase == 0){
        alert("¡No ingresaste un numero!");
        return;
    }

    if(trgLado1 != trgLado2){
        alert("Los lado no son iguales!")
        const inputTrgLado1 = document.getElementById("trgLado1").value = "";
        const inputTrgLado2 = document.getElementById("trgLado2").value = "";
        return
    }
    
    const show = document.getElementById("showRespTrg");
    show.innerText = `El perimetro de su triangulo mide: " ${perimetroTriangulo(trgLado1, trgLado2, trgBase)} "cm^2`;
})
btnTrgArea.addEventListener("click", ()=>{
    let trgBase = Number(document.getElementById("trgBase").value);
    let trgAltura = Number(document.getElementById("trgAltura").value);
    if(trgAltura == 0){
        alert("¡No ingresaste un numero!");
        return;
    }

    const show = document.getElementById("showRespTrg");
    show.innerText = `El area de su triangulo mide: ${areaTriangulo(trgBase, trgAltura)} cm`
})



/*LIMPIEZA DE CAMPOS */
btnResetCdr.addEventListener("click", ()=>{
   const inputCdrLado =  document.getElementById("cdrLado").value = "";
   const show = document.getElementById("showRespCdr").innerText = "";
})
btnResetCrlo.addEventListener("click", ()=>{
    const inputCloLado =  document.getElementById("crloRadio").value = "";
    const show = document.getElementById("showRespCrlo").innerText = "";
    
 })
btnResetTrg.addEventListener("click", ()=>{
    const inputTrgLado1 = document.getElementById("trgLado1").value = "";
    const inputTrgLado2 = document.getElementById("trgLado2").value = "";
    const inputTrgBase = document.getElementById("trgBase").value = "";
    const inputTrgAltura = document.getElementById("trgAltura").value = "";
    const show = document.getElementById("showRespTrg").innerText = "";
})



/*VALIDACIONES DE NUMEROS ENTEROS*/
const inputCdrLado = document.getElementById("cdrLado");
inputCdrLado.addEventListener("keyup", (e)=>{
    if(valideKey(e)){}else{
        alert("Ese no es un numero valido!!")
        inputCdrLado.value = " ";
    }
})
const inputCrloLado = document.getElementById("crloRadio");
inputCrloLado.addEventListener("keyup", (e)=>{
    if(valideKey(e)){}else{
        alert("Ese no es un numero valido!!")
        inputCdrLado.value = " ";
    }
})
const inputTrgLado1 = document.getElementById("trgLado1");
const inputTrgLado2 = document.getElementById("trgLado2");
const inputBase = document.getElementById("trgBase");
const inputAltura = document.getElementById("trgAltura");

/*AGREGO LOS EVENTOS A TRAVES DE UN ARRAY DE INPUTS */
[inputTrgLado1, inputTrgLado2, inputBase, inputAltura].forEach( (item) => {
    item.addEventListener("keyup", ()=>{
        if(valideKey(e)){}else{
            alert("Ese no es un numero valido!!")
            inputCdrLado.value = " ";
        }
    })
})

