export function obtenerid(datos) {
  const ID = datos.contents[0].video.videoId;
  document.getElementById(
    "video"
  ).src = `https://www.youtube-nocookie.com/embed/${ID}`;

  const url2 = `https://youtube138.p.rapidapi.com/video/details/?id=${ID}&hl=en&gl=US`;
  fetch(url2, options)
    .then((respon) => respon.json())
    .then((datos) => mostrardatos(datos, ID));
}
export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "125e4290femsh09c1b91ca1a0312p19f0afjsn9efde315ba2a",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

function mostrardatos(datos, ID) {
  const avatar = datos.author.avatar[0].url;
  console.log(avatar);
  document.getElementById("avatar").src = avatar;
  console.log(datos);
  document.getElementById("titulo").innerHTML = `<h1>${datos.title}</h1>`;
  document.getElementById("descrpicion").innerText = datos.description;
  document.getElementById("nombre").innerText = datos.author.title;

  const url3 = `https://youtube138.p.rapidapi.com/video/comments/?id=${ID}&hl=en&gl=US`;

  fetch(url3, options)
    .then((respons) => respons.json())
    .then((datos) => comentarios(datos, ID));
}

function comentarios(datos, ID) {
  let vacio = "";
  for (const valor of datos.comments) {
    vacio += `<hr>
      ${valor.content}
      <hr>`;
  }
  document.getElementById("comentarios").innerHTML = vacio;

  const ur4 = `https://youtube138.p.rapidapi.com/video/related-contents/?id=${ID}&hl=en&gl=US`;
  fetch(ur4, options)
    .then((respons) => respons.json())
    .then((datos) => videoRelacionado(datos));
}

function videoRelacionado(datos) {
  const limite = 5;
  let contador = 0;
  let vacio = "";
  for (const iterator of datos.contents) {
    console.log("realacionados", iterator.video.thumbnails[0].url);
    let imagen = iterator.video.thumbnails[0].url;
    contador++;
    vacio += `<div><img src="${imagen}" alt="no carga imgaen" srcset="" class="relacionados"></div>`;
    if (contador === limite) {
      break;
    }
  }
  console.log(vacio);
  document.getElementById("videosrela").innerHTML = vacio;
}
