const myDataFileUrl = "../../opgavefiler/data/story.json";
const myStoryElement = document.getElementById("theStory");
const myStoryElementTwo = document.getElementById("theStoryTwo");
const languageSelect = document.getElementById("languageSelect");
let myImage = document.createElement('img');
myImage.src = '../../opgavefiler/img/felix.jpg';


// Opgave 1
function opgaveEt() {
    fetch(myDataFileUrl)
        .then((response) => response.json())
        .then((data) => {
            myStoryElement.innerHTML = `<h2>${data.DK.headline}</h2>${data.DK.text}`;
            myStoryElement.appendChild(myImage);
        })
        .catch((error) => {
            console.error("Fejl ved indlæsning af JSON-data:", error);
        });
}
opgaveEt();


// Opgave 2
function opdaterHistorie() {
    const valgtSprog = languageSelect.value;

    fetch(myDataFileUrl)
        .then((response) => response.json())
        .then((data) => {
            let historieTekst = "";

            if (valgtSprog === "DK") {
                historieTekst = data.DK.text;
            } else if (valgtSprog === "SE") {
                historieTekst = data.SE.text;
            } else if (valgtSprog === "FI") {
                historieTekst = data.FI.text;
            } else if (valgtSprog === "UK") {
                historieTekst = data.UK.text;
            }

            myStoryElementTwo.innerHTML = `<h2>${data[valgtSprog].headline}</h2>${historieTekst}`;

        })
        .catch((error) => {
            console.error("Fejl ved indlæsning af JSON-data:", error);
        });
}

languageSelect.addEventListener("change", opdaterHistorie);

opdaterHistorie();




// Opgave 3
const userURI = "https://jsonplaceholder.typicode.com/users";
const myUserlistElement = document.getElementById("userList");

function hentOgVisBrugerData() {
    fetch(userURI)
        .then((response) => response.json())
        .then((users) => {
            let userListHTML = "";

            users.forEach((user) => {
                userListHTML += `
          <h2>${user.name}</h2>
          <p>Adresse: ${user.address.street} ${user.address.suite}<br>
             Postnummer: ${user.address.zipcode}<br>
             By: ${user.address.city}</p>
        `;
            });

            myUserlistElement.innerHTML = userListHTML;
        })
        .catch((error) => {
            console.error("Fejl ved indlæsning af brugerdata:", error);
        });
}

hentOgVisBrugerData();



// Opgave 4
const theDogElement = document.getElementById("theDog");
        const apiUrl = "https://dog.ceo/api/breeds/image/random";

        function hentOgAppendTilfældigtHundebillede() {
            fetch(apiUrl)
                .then((response) => response.json())
                .then((data) => {
                    if (data && data.message) {
                        const imageUrl = data.message;
                        const imgElement = document.createElement("img");
                        imgElement.src = imageUrl;
                        imgElement.alt = "Tilfældigt Hundebillede";
                        theDogElement.appendChild(imgElement);
                    } else {
                        console.error("Fejl ved indlæsning af hundebillede.");
                    }
                })
                .catch((error) => {
                    console.error("Fejl ved hentning af data fra API:", error);
                });
        }

        hentOgAppendTilfældigtHundebillede();

        window.addEventListener("load", hentOgAppendTilfældigtHundebillede);