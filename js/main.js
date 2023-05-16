import { obtenerid } from "./funtions.js";
import { options } from "./funtions.js";
const buscar = document.getElementById("busqueda")

buscar.addEventListener(("click"),(el)=>{
  el.preventDefault()
  const busqueda = document.getElementById("buscar").value
  const url = `https://youtube138.p.rapidapi.com/search/?q=${busqueda}`;
 
  
  fetch(url, options)
    .then((respon) => respon.json())
    .then((datos) => obtenerid(datos));  
})









