import { elements, user } from './modele.js';

document.addEventListener("DOMContentLoaded", e => {
    e.preventDefault();

    console.log("chargement du document completée");
    /* const elParent = document.querySelector("ul")
    const elImg = document.querySelector("figure img") */

    for (let data in user) {
        data != "cover" ? elements.elParent.innerHTML += `<li><strong>${data}</strong> : ${user[data]} </li>` : elements.elImg.src = `${user[data]}`;
    }
});