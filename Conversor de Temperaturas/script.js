function converterParaCelsius() {
    var temp = document.getElementById('temperatura').value;
    if (temp === "") {
        alert("Por favor, insira uma temperatura.");
        return;
    }
    var celsius = (temp - 32) * 5 / 9;
    document.getElementById('resultado').innerHTML = `${temp}°F é igual a ${celsius.toFixed(2)}°C`;
}

function converterParaFahrenheit() {
    var temp = document.getElementById('temperatura').value;
    if (temp === "") {
        alert("Por favor, insira uma temperatura.");
        return;
    }
    var fahrenheit = (temp * 9 / 5) + 32;
    document.getElementById('resultado').innerHTML = `${temp}°C é igual a ${fahrenheit.toFixed(2)}°F`;
}

function resetar() {
    document.getElementById('temperatura').value = "";
    document.getElementById('resultado').innerHTML = "";
}
