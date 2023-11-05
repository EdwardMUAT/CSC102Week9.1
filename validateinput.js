class polygon{
    constructor (sides){
        this.sides = sides;
    }
    
    alertSides(){
        alert ("This polygon has " + this.sides);
    }

areaFormula() {
    alert ("This area of this object is ...");
    }
}

class square extends polygon {
    constructor (lenght){
    super(4);
    this.lenght = lenght;
    }

area () {
    alert(this.lenght * this.lenght);
    }

areaFormula(){
    super.areaFormula();
    alert("... lenght squared.");
    }
}

function validateInput(event){
    event.preventDefault();
    let firstName = document.getElementById("fname"). value;
    console.log(firstName);
    let lastName = document.getElementById("lname"). value;
    console.log(lastName);
    let zip = document.getElementById("zip"). value;
    console.log(zip);
    // Concatenate first and last name variables
    let firstLast  = firstName + " " + lastName;
    console.log(firstName);
    //Check if firstLast has fewer than 2 characters. Exit if that is the case
    if(firstLast.length < 2){
        alert("Not enough characters. First and last name must have at least 2 characters.");
        return false;
    }
    // check if zip has 5 characters and is a number.
    const zipRegExp = /\b\d{5}\b/;
    
   if(!zipRegExp.test(zip)) {
        alert("Invalid zip code. Zip must be a number of 5 digits.");
        console.log(typeof zip)
        return false;
   }
    console.log("Validated!");
}

    window.addEventListener("DOMContentLoaded", (event) =>{
    const form = document.getElementById("myForm")
    if (form) {
        form,addEventListener("submit", validateInput)
    }


    var justAPoly = new polygon(8);
    justAPoly.alertSides();
    justAPoly.areaFormula();

    var justASquare = new square(3);
    justASquare.areaFormula();
    justASquare.area();
});