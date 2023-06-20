const url = "https://dog.ceo/api/breeds/image/random";
const btn = document.querySelector("button");
const div = document.getElementById("lesImg");

btn.addEventListener("click", nouvellePhoto);
function nouvellePhoto() {
  fetch(url)
    .then((Response) => Response.json())
    .then((Response) => {
      let rep = Response.message;
      console.log(rep);
      let img = document.createElement("img");
      img.setAttribute("src", rep);

      let card = document.createElement("div");
      div.appendChild(card);
      card.classList.add("card");
      card.style.width = "18rem";
      let cardTop = document.createElement("div");
      card.appendChild(cardTop);
      cardTop.classList.add("card-img-top");
      let cardBody = document.createElement("div");
      card.appendChild(cardBody);
      cardBody.classList.add("card-body");
      let btnSupp = document.createElement("button");
      btnSupp.classList.add("btn", "btn-danger");
      btnSupp.textContent = "Supprimer";
      cardBody.appendChild(btnSupp);
      //   cardBody.innerHTML = "";
      cardTop.appendChild(img);
      //   img.classList.add("card-body");
      img.style.height = "200px";
      btnSupp.addEventListener("click", () => {
        card.remove();
      });
    })
    .catch((error) => console.error("Erreur : " + error));
}
