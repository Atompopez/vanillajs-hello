const sujetos = ['mi mama', 'mi perro', 'mi gato', 'mi novia', 'mi hermana', 'mi maestra', 'mi hija', 'mi hermano', 'mi muñeco', 'mi tia'];
const verbos = ['se mea', 'se come', 'se cae', 'mira', 'rompe', 'bota', 'desaparece', 'pinta', 'alimenta', 'cocina'];
const complemento = ['la cama', 'el TV', 'la casa', 'el conejo', 'el otro perro', 'la planta', 'la comida', 'el cuarto', 'la silla', 'la toalla'];

function numero() {
  return Math.floor(Math.random() * 10);
}

function concatenar() {
  var texto;
  texto = sujetos[numero()] + ' ' + verbos[numero()] + ' ' + complemento[numero()];
  return texto;
}

// Esperar a que la página se haya cargado completamente
window.addEventListener('DOMContentLoaded', function() {
  var frase = document.getElementById("texto");
  frase.innerHTML = concatenar();
});
