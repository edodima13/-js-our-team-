//fare un oggetto con i dati della card
const team = [
    {
      name: "Wayne Barnett",
      role: "Founder & CEO",
      image: "wayne-barnett-founder-ceo.jpg",
    },
    {
      name: "Angela Caroll",
      role: "Chief Editor",
      image: "angela-caroll-chief-editor.jpg",
    },
    {
      name: "Walter Gordon",
      role: "Office Manager",
      image: "walter-gordon-office-manager.jpg",
    },
    {
      name: "Angela Lopez",
      role: "Social Media Manager",
      image: "angela-lopez-social-media-manager.jpg",
    },
    {
      name: "Scott Estrada",
      role: "Developer",
      image: "scott-estrada-developer.jpg",
    },
    {
      name: "Barbara Ramos",
      role: "Graphic Designer",
      image: "barbara-ramos-graphic-designer.jpg",
    },
  ];
  //recuperare il container per inserire i dati della card
  const teamContainer = document.querySelector(".team-container");

  //replicare le card con i dati dei membri
  for (let i = 0; i < team.length; i++){
    //dichiarare le variabili da replicare dell'oggetto
    const membriDelTeam = team [i];
    let nome = membriDelTeam.name;
    let ruolo = membriDelTeam.role;
    let immagine = membriDelTeam.image;
    //console.log( nome, ruolo, immagine)

    //crare l'elemento card dove introdurre le variabili
    const card = `
        <div class="team-card">
            <div class="card-image">
                <img
                    src="img/${immagine}"
                    alt="${nome}"
                />
            </div>
            <div class="card-text">
                <h3>${nome}</h3>
                <p>${ruolo}</p>
            </div>
            </div>
        </div>`
        console.log(card)
    //inserire l'elemento nel container nell'html
  }

