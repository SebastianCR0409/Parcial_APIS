const obtenerChiste = () => {
    peticionApi();
};

const peticionApi = () => {
  // La URL para obtener un chiste aleatorio
    const url = 'https://v2.jokeapi.dev/joke/Any?type=single';

    axios
    .get(url)
    .then((res) => printData(res.data))
    .catch((err) => console.log(err));
};

const printData = (data) => {
    let respuesta = document.getElementById('show-info');
  // La respuesta contiene la propiedad 'joke' con el texto del chiste
    respuesta.innerHTML = `<p>${data.joke}</p>`;
};

// Asocia la función con el botón al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    let boton = document.getElementById('button_search');
    boton.addEventListener('click', obtenerChiste);
});
