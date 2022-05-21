const promedio = (arr)=>{
    const sumPromedio = arr.reduce((acum, elem)=>{
        return acum + elem
    });

    const result = sumPromedio / arr.length;
    return result;
}



const moda = (arr)=>{
    const objNumerosRepetidos = {}

    arr.map((elem)=>{
        objNumerosRepetidos[elem] ? objNumerosRepetidos[elem] += 1 : objNumerosRepetidos[elem] = 1;
    })

    /*Genera un array con varios arrays, ordena los arrays de dentro en base a los elementos de la posicion [1] */
    const arrNumerosRepetidos = Object.entries(objNumerosRepetidos).sort((a, b) => b[1] - a[1])
    
    
    const valorMasRepetido = arrNumerosRepetidos[0][0];
    const numeroVecesRepetido = arrNumerosRepetidos[0][1];
    return [valorMasRepetido, numeroVecesRepetido];
}



const mediana = (arr)=>{
    const arrHalf = parseInt(arr.length / 2);
    let esPar;

    (arr.length % 2) == 0 ? esPar=true : esPar=false;


    const arrOrdenado = arr.sort((a, b) => b - a)

    if(esPar){
        return [arrOrdenado[arrHalf], arrOrdenado[arrHalf-1]]
    }else{
        return arrOrdenado[arrHalf]
    }
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

const btnIngreso = document.getElementById("btnIngresar");
const btnReiniciar = document.getElementById("btnReiniciar");
const btnCalcPromedio = document.getElementById("btnCalcPromedio");
const btnCalcMediana = document.getElementById("btnCalcMediana");

const inputVariosNumeros = document.getElementById("inputVariosNumeros");
const showInfo = document.getElementById("showInfo");
let arrNumerosIngresados = [];


inputVariosNumeros.addEventListener("keyup", (e)=>{
    if(valideKey(e)){}else{
        inputVariosNumeros.value = "";
        alert("¡Ese numero no es valido!");
    }
})


btnIngreso.addEventListener("click", ()=>{
    if(inputVariosNumeros.value == ""){
        alert("¡No has entrado un numero!");
    }else{
        arrNumerosIngresados.push(parseInt(inputVariosNumeros.value))
        inputVariosNumeros.value = "";
        console.log(arrNumerosIngresados);
    }
})

inputVariosNumeros.addEventListener("keydown", (e)=>{
    if(e.key == "Enter"){
        e.preventDefault();
        arrNumerosIngresados.push(parseInt(inputVariosNumeros.value))
        inputVariosNumeros.value = "";
        console.log(arrNumerosIngresados);
    }
    
})

inputVariosNumeros.addEventListener("blur", ()=>{
    inputVariosNumeros.focus();
})

btnReiniciar.addEventListener("click", ()=>{
    arrNumerosIngresados = [];
    showInfo.innerText = ""
})


btnCalcPromedio.addEventListener("click", ()=>{
    if(arrNumerosIngresados.length == 0){
        alert("¡Usted no ha ingresado ningun numero!")
        return
    }

    let resultPromedio = promedio(arrNumerosIngresados);
    showInfo.innerText = `El promedio de su conjunto de numeros es: ${resultPromedio}`;

})

btnCalcMediana.addEventListener("click", ()=>{
    if(arrNumerosIngresados.length == 0){
        alert("¡Usted no ha ingresado ningun numero!")
        return
    }

    let resultMediana = mediana(arrNumerosIngresados);
    showInfo.innerText = `La mediana de su conjunto de numeros es: ${resultMediana}`
})

const btnCalcModa = document.getElementById("btnCalcModa");


btnCalcModa.addEventListener("click", ()=>{
    if(arrNumerosIngresados.length == 0){
        alert("¡Usted no ha ingresado ningun numero!")
        return
    }

    let resultModa = moda(arrNumerosIngresados);
    showInfo.innerText = `La moda de su conjunto de numeros es: ${resultModa[0]}, porque se repite ${resultModa[1]} veces`
})



