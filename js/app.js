import { elements, user } from './modele.js';

document.addEventListener("DOMContentLoaded", e => {
    e.preventDefault();

    console.log("chargement du document completée");
    /* const elParent = document.querySelector("ul")
    const elImg = document.querySelector("figure img") */
    const buttonCopy = document.getElementById("buttonCopy");
    const copyLink = document.getElementById("copyLink");

    for (let data in user) {
        data != "cover" ? elements.elParent.innerHTML += `<li><strong>${data}</strong> : ${user[data]} </li>` : elements.elImg.src = `${user[data]}`;
    }

    /* link copy */

    buttonCopy.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(copyLink.innerText);
            Swal.fire({
                title: "Very Good",
                text: "Votre lien est copié",
                icon: "success"
            });
        } catch (err) {
            console.error("Erreur lors de la copie :", err);
        }
    });
});