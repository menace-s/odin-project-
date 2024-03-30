// Définition d'un tableau pour stocker les livres
const myLibrary = [];

submitBtn=document.getElementById("submitBtn").addEventListener("click",addBookToLibrary)
// Définition du constructeur de l'objet "book"
function book(title, author, pages, read) {
    this.title = title;         // Titre du livre
    this.author = author;       // Auteur du livre
    this.pages = pages;         // Nombre de pages du livre
    this.read = read;           // Indicateur si le livre a été lu ou non
}

// Fonction pour afficher les éléments de la bibliothèque dans un tableau HTML
function displayElmtOfTable(table) {
    // Récupération de l'élément HTML où afficher le tableau
    displayTab = document.getElementById("displayTab");

    // Parcours de chaque livre dans la bibliothèque
    for (let i = 0; i < table.length; i++) {
        // Création d'une nouvelle ligne dans le tableau
        tabNewRow = document.createElement("tr");
        displayTab.appendChild(tabNewRow);

        // Parcours de chaque propriété du livre
        for (let element in table[i]) {
            // Création d'une nouvelle colonne dans le tableau
            tabNewColumn = document.createElement("td");
            // Ajout du contenu de la propriété à la colonne
            tabNewColumn.textContent = table[i][element];
            tabNewRow.appendChild(tabNewColumn);
        }
    }
    //vider le tableau pour ne pas avoir les elements double lors de l'affichage
    myLibrary.splice(0, myLibrary.length)
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

    // Création d'un nouvel objet "book"
    theBook = new book(
        bookTitleInput,
        bookAuthorInput,
        bookPagesInput,
        bookReadInput
    );

    // Ajout du livre à la bibliothèque
    myLibrary.push(theBook);

    // Affichage des éléments de la bibliothèque dans un tableau
    displayElmtOfTable(myLibrary);

    // Affichage des informations du livre dans la console
    console.log(theBook);
    console.log(myLibrary);
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
// console.log(table)
// displayElmtOfTable(table);
