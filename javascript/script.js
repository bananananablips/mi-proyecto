


















 let basico = prompt("banca sentadilla o peso muerto ")
if (basico ==="banca"||basico=== "sentadilla"||basico ==="peso muerto" )

{let repes = prompt ("cuantas repes fueron")
let peso = prompt("cuanto peso")
let rm =  ( parseFloat( peso)*(1+0.0333* parseFloat(repes))) ;

alert("tu rm es "  + rm)


 


let entrenamiento ={ejercicio:basico,repes:repes,peso:peso,rm:rm }


 // Obtener entrenamientos anteriores del localStorage
  let historial = JSON.parse(localStorage.getItem("entrenamientos")) || [];

  // Agregar el nuevo entrenamiento
  historial.push(entrenamiento);

  // Guardar el nuevo historial en localStorage
  localStorage.setItem("entrenamientos", JSON.stringify(historial));

  alert("¡Entrenamiento guardado!");
} else {
  alert("Ejercicio no válido");
}let guardados =prompt("quieres ver los entrenamientos guardados  (si/no)")
if (guardados==="si") {// Obtener el historial guardado
let historial = JSON.parse(localStorage.getItem("entrenamientos")) || [];

// Obtener el elemento UL donde mostraremos la lista
let lista = document.getElementById("listaEntrenamientos");

// Recorrer y mostrar los entrenamientos
historial.forEach((entreno, index) => {
  let item = document.createElement("li");
  item.textContent = `#${index + 1} → Ejercicio: ${entreno.ejercicio}, Reps: ${entreno.repes}, Peso: ${entreno.peso} kg, RM: ${entreno.rm} kg`;
  lista.appendChild(item);
});
}