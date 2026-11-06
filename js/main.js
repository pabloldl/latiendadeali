"use strict";
// Solo una respuesta abierta a la vez en el bloque de visita.
const questions = document.querySelectorAll("details");
questions.forEach(item => item.addEventListener("toggle", () => { if(item.open) questions.forEach(other => { if(other !== item) other.open = false; }); }));
