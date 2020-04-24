const kek = 273.15
function toKelvin() {document.getElementById("kelvin").value = parseFloat(document.getElementById("celsius").value) + kek;}
function toCelsius() {document.getElementById("celsius").value = parseFloat(document.getElementById("kelvin").value) - kek;}