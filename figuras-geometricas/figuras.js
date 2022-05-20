/*function calcularCuadrado(lado){
    console.log(`El lado de su cuadrado mide: ${lado}cm`);
    console.log(`El perimetro de su cuadrado mide: ${lado*4}cm`);
    console.log(`El area de su cuadrado mide: ${lado*lado}cm^2`);
}

function calcularTriangulo(lado1, lado2, base, altura){
    console.log(`Los lados de su triangulo miden: ${lado1}cm, ${lado2}cm, ${base}cm. Y su altura mide ${altura}cm`);

    console.log(`El perimetro de su triangulo mide: ${lado1+lado2+base}cm^2`);
    console.log(`El area de su triangulo es de: ${(base*altura)/2}cm`);
}

function calcularCirculo(radio){
    const diametro = radio * 2;

    console.log(`El radio de su circulo mide: ${radio}cm. Y su diametro mide: ${diametro}cm`);
    console.log(`La circunsferencia de su circulo mide: ${(diametro * Math.PI).toFixed(2)}`);
    console.log(`El area de su circulo mide: ${((radio * radio) * Math.PI).toFixed(2)}`);
}

console.group("Cuadrados");
calcularCuadrado(5);
console.groupEnd();

console.group("Triangulo");
calcularTriangulo(6, 6, 4, 5.5);
console.groupEnd();

console.group("Circle")
calcularCirculo(5);
console.groupEnd();
*/


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
  
    const show = document.getElementById("showRespCdr");
    show.innerText = `El perimetro de su cuadrado es: ${perimetroCuadrado(cdrLado)} cm^2`
})
btnCdrArea.addEventListener("click", ()=>{
    let cdrLado = Number(document.getElementById("cdrLado").value);

    const show = document.getElementById("showRespCdr");
    show.innerText = `El area de su cuadrado es: ${areaCuadrado(cdrLado)} cm`
  
})



btnCrloPerimetro.addEventListener("click", ()=>{
    let crloRadio = Number(document.getElementById("crloRadio").value);

    const show = document.getElementById("showRespCrlo");
    show.innerText = `La circunsferencia de su circulo mide: ${perimetroCirculo(crloRadio)} cm^2`;
})
btnCrloArea.addEventListener("click", ()=>{
    let crloRadio = Number(document.getElementById("crloRadio").value);

    const show = document.getElementById("showRespCrlo");
    show.innerText = `El area de su circulo mide: ${areaCirculo(crloRadio)} cm`;
})



btnTrgPerimetro.addEventListener("click", ()=>{
    let trgLado1 = Number(document.getElementById("trgLado1").value);
    let trgLado2 = Number(document.getElementById("trgLado2").value);
    let trgBase = Number(document.getElementById("trgBase").value);

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



/*VALIDACIONES DE NUMEROS */
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

