let firstNumber;
let secondNumber;
let operator;
let output = "";
let newResultat;

// Sélection des éléments
let theResult = document.querySelector(".elmt4");
let calc = document.getElementById('calc-output');

// Fonctions pour la gestion de l'affichage
function getOutput() {
    return output;
}

function setOutput(a) {
    output = getOutput();
    return output += a;
}

function display(a) {
    // output = setOutput(a);
    calc.textContent = `${setOutput(a)}`;
}

function clearOutput() {
    output = "";
    calc.textContent = "";
}

// Opérations arithmétiques de base
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if(b===0){
        return "Erreur"
    }else{

        return a / b;
    }
}

// Fonction pour évaluer l'expression CHATGPT
function evaluerExpression(expression) {
    let parts = expression.split(/(\+|\-|\*|\/)/);
    let result = parseFloat(parts[0]);//Initialisation du résultat avec le premier nombre

// Boucle pour parcourir les éléments à des positions impaires dans le tableau parts pour recuperer les operateurs
    for (let i = 1; i < parts.length; i += 2) {
        const operator = parts[i]; // Récupération de l'opérateur à la position i
        const operand = parseFloat(parts[i + 1]); // Récupération de l'opérande suivant l'opérateur

        // Traitement de l'opération en fonction de l'opérateur
        switch (operator) {
            case '+':
                result = add(result, operand);
                break;
            case '-':
                result = subtract(result, operand);
                break;
            case '*':
                result = multiply(result, operand);
                break;
            case '/':
                if (operand !== 0) {
                    result = divide(result, operand);
                } else {
                    return "Erreur : Division par zéro";
                }
                break;
            default:
                return "Opérateur non valide";
        }
    }
    return result;
}

// Événement au clic sur le bouton de résultat
theResult.addEventListener("click", () => {
    newResultat = evaluerExpression(calc.textContent);
    output=""
    display(newResultat);
});
