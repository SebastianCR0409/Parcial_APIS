const obtenerChiste = () => {
  peticionApi();
};

const peticionApi = () => {
  const url = 'https://v2.jokeapi.dev/joke/Any?type=single';

  axios
    .get(url)
    .then((res) => printData(res.data))
    .catch((err) => console.log(err));
};

const printData = (data) => {
  let respuesta = document.getElementById('show-info');
  respuesta.innerHTML = `<p>${data.joke}</p>`;
};