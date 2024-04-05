/*https://api.whatsapp.com/send?phone=(codigo pais)(codigo de area)(numero sin el 15)&text=*/
/* Espacio : %20  ``*/

/* Traer los inputs */
/* Crear funcion añadiendo el valor correspondiente a la variable mensaje */

export function enviar(nombre, telefono, ubicacion, metodoPago,mensajePedido, totalFinal) {
  const numero = "51977137805"; // Aquí debes colocar el número de teléfono al que quieres enviar el mensaje
  console.log("---------");
  console.log("Nombre:", nombre);
  console.log("Teléfono:", telefono);
  console.log("Ubicación:", ubicacion);
  console.log("Método de Pago:", metodoPago);
  const mensaje = `https://api.whatsapp.com/send?phone=${numero}&text=Nombre:%20${nombre}%0A%0ATeléfono:%20${telefono}%0A%0AUbicación:%20${ubicacion}%0A%0AMétodo%20de%20Pago:%20${metodoPago}%0APedido:%20${mensajePedido}%0A%0ATotal:%20${totalFinal}`;
  window.location.href = mensaje;
}
