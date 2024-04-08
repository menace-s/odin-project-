// Définition d'un tableau pour stocker les livres
const myLibrary = [];

let tabBody= document.getElementById("tabBody")

submitBtn = document
  .getElementById("submitBtn")
  .addEventListener("click", addBookToLibrary);
  
// Définition du constructeur de l'objet "book"
class book {
  constructor(title, author, pages, read) {
    this.title = title; // Titre du livre
    this.author = author; // Auteur du livre
    this.pages = pages; // Nombre de pages du livre
    this.read = read; // Indicateur si le livre a été lu ou non
  }
}

// Fonction pour afficher les éléments de la bibliothèque dans un tableau HTML
function displayElmtOfTable(table) {
  let z = 0; // index pour le numero des livres
  for (let i = 0; i < table.length; i++) {
    deletebtn = document.createElement("td");
    deletebtn.textContent = "X";

    // Création d'une nouvelle ligne dans le tableau
    tabNewRow = document.createElement("tr");
    tabNewRow.setAttribute("index", `${z}`);
    tabBody.appendChild(tabNewRow);

    // Parcours de chaque propriété du livre
    numOfRow = document.createElement("td");
    numOfRow.textContent = z;
    //pour ajouter un id
    tabNewRow.appendChild(numOfRow);
    for (let element in table[i]) {
      // Création d'une nouvelle colonne dans le tableau
      tabNewColumn = document.createElement("td");
      // Ajout du contenu de la propriété à la colonne
      tabNewColumn.textContent = table[i][element];
      tabNewRow.appendChild(tabNewColumn);
    }
    deletebtn.setAttribute("class", "deletebtn");
    tabNewRow.appendChild(deletebtn);
    z++;
  }
}
// Fonction pour ajouter un livre à la bibliothèque
function addBookToLibrary(event) {
  //annuler le chargement de la page
  event.preventDefault();
  // Récupération des valeurs des champs du formulaire
  const bookTitleInput = document.getElementById("bookTitle").value;
  const bookAuthorInput = document.getElementById("bookAuthor").value;
  const bookPagesInput = document.getElementById("bookPages").value;
  const bookReadInput = document.getElementById("bookRead").value;

if(bookTitleInput==""||bookAuthorInput==""||bookPagesInput==""||bookReadInput==""){
  alert("Please fill all the fields");
  return;
}else{

  // Création d'un nouvel objet "book"
  theBook = new book(
    bookTitleInput,
    bookAuthorInput,
    bookPagesInput,
    bookReadInput
  );
tabBody.innerHTML=" "
  // Ajout du livre à la bibliothèque
  myLibrary.push(theBook);
  console.table(myLibrary);
  // Affichage des éléments de la bibliothèque dans un tableau
  displayElmtOfTable(myLibrary);
  deleteBook()

  // Affichage des informations du livre dans la console
  // console.log(theBook);
}
  // console.log(myLibrary);
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
//liste des deletebtn

function deleteBook() {
  let deletebtns = document.getElementsByClassName("deletebtn");
  for (let index = 0; index < deletebtns.length; index++) {
    deletebtns[index].addEventListener("click", (event) => {
      let index = event.target.parentElement.getAttribute("index");
      console.log(index);
      myLibrary.splice(index, 1);
    });
  }
}
