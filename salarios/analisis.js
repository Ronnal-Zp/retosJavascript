
function esPar(num){
    return (num % 2 === 0);
 }
 
 //Calcular media arimtmetica
 function calcularMediaAritmetica(lista) {
     const sumaLista = lista.reduce(
       function (valorAcumulado = 0, nuevoElemento) {
         return valorAcumulado + nuevoElemento;
       }
     );
     const promedioLista = sumaLista / lista.length;
     return promedioLista;
   }
 

 //Calcular media de salarios  
 function medianaSalarios(arr){
     const mitad = parseInt(arr.length / 2);
 
     if(esPar(arr.length)){
         const personaMitad1 = arr[mitad];
         const personaMitad2 = arr[mitad - 1];
 
         const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
         return mediana;
     }else{
         const salarioMitad = arr[mitad];
         return salarioMitad;
     }
 }


function top10(arrOrd){
  let aux = arrOrd.length * 0.1;
  let top10Salary = arrOrd.slice(0, aux)

  let personsTop10Salary = [];
  
  colombia.filter((obj)=>{
    for (const i in top10Salary) {
      if(top10Salary[i] == obj.salary) personsTop10Salary.push(obj)
    }
  })

  return personsTop10Salary;
}




const arrSalarios = colombia.map((persona)=>{
    return persona.salary;
});

const arrSalariosOrd = arrSalarios.sort((a, b)=>{
    return b - a
})

const containerEmployees = document.getElementById("containerEmployees");
const fragmentEmployees = document.createDocumentFragment();


colombia.map((obj)=>{
    const paragraph = document.createElement("p");
    paragraph.innerHTML = `<span class="bold">Empleado:</span> ${obj.name}   -   <span class="bold">Salario:</span> ${obj.salary}`
    fragmentEmployees.appendChild(paragraph);  
})
containerEmployees.appendChild(fragmentEmployees);



const showInfoEmployees = document.getElementById("showInfoEmployees");
const btnExtMediana = document.getElementById("btnExtMediana");
const btnTop10 = document.getElementById("btnTop10");
const btnLimpiar = document.getElementById("btnLimpiar");



btnLimpiar.addEventListener("click", ()=>{
  showInfoEmployees.innerText = ""
})

btnExtMediana.addEventListener("click", ()=>{
  showInfoEmployees.innerText = `La mediana del sueldo de todos los trabajadore es de: $${medianaSalarios(arrSalariosOrd)}`
})

btnTop10.addEventListener("click", ()=>{
  let top10Salarios = top10(arrSalariosOrd);
  showInfoEmployees.innerText = `Top 10 personas con mayor sueldo:`

  top10Salarios.forEach((obj)=>{
    showInfoEmployees.innerText += ` ${obj.name} - $${obj.salary}\n `;
  })
  
})


