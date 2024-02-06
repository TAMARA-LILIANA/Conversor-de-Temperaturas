// Función para convertir grados Celsius a grados Fahrenheit

function CelsiusKelvin() {
  // Obtener el valor del input como número decimal
  let temp = parseFloat(document.getElementById("inputCelsius").value);
  
  // Verificar si se ingresó un número válido
  if (!isNaN(temp)) {
    let fahrenheitResult = (temp * 9/5) + 32;
    let kelvinResult = temp + 273.15;

    // Mostrar los resultados en los elementos correspondientes
    document.getElementById("FahrenheitResult").innerHTML = fahrenheitResult.toFixed(2);
    document.getElementById("KelvinResult").innerHTML = kelvinResult.toFixed(2);
  } else {
    alert("Por favor, ingrese un valor numérico válido en Celsius.");
  }
}


























