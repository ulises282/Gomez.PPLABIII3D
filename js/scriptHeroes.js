import { actualizarHeroes } from "./heroe.js";

const $seccionHeroes = document.getElementById("Heroes");
const heroes = JSON.parse(localStorage.getItem("heroes")) || [];

console.log($seccionHeroes);
actualizarHeroes($seccionHeroes, heroes);

$(window).load(function () {
  $(".loader").fadeOut("slow");
});
