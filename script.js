const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

// Captura todas las imágenes dentro de .cert
document.querySelectorAll(".cert img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

// Cerrar modal al dar click en X
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar modal al hacer click fuera de la imagen
modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
});


// --- CAMBIO DE IDIOMA
const btn = document.getElementById("lang");

const changelanguage = async language =>{
    const requestJson = await fetch(`content/${language}.json`);
    const texts = await requestJson.json();

    console.log(texts);
}

btn.addEventListener("click", (e) => {
    const lang = e.target.dataset.language === "en" ? "es" : "en";
    e.target.dataset.language = lang;
    changelanguage(lang);
    // changelanguage(e.target.parentElement.dataset.language);
})
