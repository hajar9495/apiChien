const url = "https://dog.ceo/api/breeds/image/random";
const btn = document.querySelector("button");
const div = document.getElementById("lesImg");

const nvllPhotoChien = async () => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const data = await response.json();

    const urlParts = data.message.split("/");
    const breedName = urlParts[4];
    const formattedBreed =
      breedName.charAt(0).toUpperCase() + breedName.slice(1);

    // 1. Création des éléments

    const col = document.createElement("div");
    col.classList.add("col-12", "col-sm-6", "col-md-4");

    const card = document.createElement("div");
    const cardImg = document.createElement("img");
    const cardBody = document.createElement("div");
    const cardTitle = document.createElement("h5");
    const btnSupp = document.createElement("button");

    // 2. Application des classes Bootstrap en pur JS (via classList.add)
    card.classList.add("card", "shadow-sm", "h-100");
    card.style.maxWidth = "22rem";

    cardImg.classList.add("card-img-top");
    cardImg.src = data.message;
    cardImg.alt = `${formattedBreed}`;
    cardImg.style.height = "220px";
    cardImg.style.objectFit = "cover";

    cardBody.classList.add("card-body", "d-flex", "flex-column");

    cardTitle.classList.add("card-title", "fs-6");
    cardTitle.textContent = `Chien de race: ${formattedBreed}`;

    btnSupp.classList.add("btn", "btn-danger", "btn-sm", "mt-auto");
    btnSupp.textContent = "Supprimer";

    // 3. Assemblage
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(btnSupp);

    card.appendChild(cardImg);
    card.appendChild(cardBody);

    col.appendChild(card);
    div.appendChild(col);

    // 4. Suppression de la carte au clic
    btnSupp.addEventListener("click", () => {
      col.remove();
    });
  } catch (error) {
    console.error("Erreur :", error);
  }
};

btn.addEventListener("click", nvllPhotoChien);
