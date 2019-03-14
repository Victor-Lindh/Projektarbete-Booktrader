let buttons = document.getElementsByClassName("buttons");


function whoDidIt(e){
        console.log("Du klickade på: " + e.target.id);

    }
    
for (let i = 0; i < buttons.length; i++) {
    const coll = buttons[i];
    coll.addEventListener("click", whoDidIt);
}

function Book (title, author, price){

    this.title = title;
    this.author = author;
    this.price = price;
}

let book1 = new Book("Harry Potter and the Philosopher's Stone", "JK Rowling", 90);
let book2 = new Book("Cosmos", "Carl Sagan", 75);
let book3 = new Book("Hanteringen av Odöda", "John Ajvide Lindqvist", 58);
let book4 = new Book("Italian Cuisine Cookbook", "Amanda Aldini", 80);
let book5 = new Book("I, Robot", "Isaac Asimov", 65);
let book6 = new Book("Jack Reacher", "Lee Child", 60);
let book7 = new Book("Frågor jag fått om Förintelsen", "Hédi Fried", 90);
let book8 = new Book("Smaker från Vietnam: en familjehemlighet", "Kim Thúy", 47);
let book9 = new Book("Becoming", "Michelle Obama", 79);
let book10 = new Book("Bröderna Lejonhjärta", "Astrid Lindgren", 85);
let book11 = new Book("Lär dig skriva! bokstäver och ord", "Jan Magnusson", 45);
let book12 = new Book("The Art of Fantasy, Sci-fi and Steampunk", "Hiroshi Unno", 95);

let buyButtons = document.getElementsByClassName("buybutton");
let superSum = 0;

for (let x = 0; x < buyButtons.length; x++) {
   buyButtons[x].addEventListener("click", buyBook);

function buyBook(e) {

    event = e.target.id;
    switch (event) {

            case event="buybook1":
            superSum += book1.price;
            break;
            
            case event="buybook2":
            superSum += book2.price;
            break;
            
            case event="buybook3":
            superSum += book3.price;
            break;
            
            case event="buybook4":
            superSum += book4.price;;
            break;
            case event="buybook5":
            superSum += book5.price;;
            break;
            case event="buybook6":
            superSum += book6.price;;
            break;
            case event="buybook7":
            superSum += book7.price;;
            break;
            case event="buybook8":
            superSum += book8.price;;
            break;
            case event="buybook9":
            superSum += book9.price;;
            break;
            case event="buybook10":
            superSum += book10.price;;
            break;
            case event="buybook11":
            superSum += book11.price;;
            break;
            case event="buybook12":
            superSum += book12.price;;
            break;
            
    }
    document.getElementById("sum").innerHTML = superSum;
    }
}

var today= new Date(); 
var year= today.getFullYear(); 
var est= new Date('Jan 15, 1984 00:00:00 ');
var difference= today.getTime() - est.getTime();
    difference= (difference/ 31536000000);
    var elMsg = document.getElementById('age'); 
    elMsg.textContent = "Jag är " + Math.floor(difference) + ' år gammal';


   
    document.getElementById("myfirstbutt").addEventListener("click", getValue1);
    document.getElementById("mysecondbutt").addEventListener("click", getValue2);
    document.getElementById("mythirdbutt").addEventListener("click", getValue3);
    document.getElementById("allbutts").addEventListener("click", getAll);

    let numArray = [];
    
    function getValue1(){
        let n1 = document.getElementById("number1").value;
        document.getElementById("number").innerHTML = n1;

    }
    
    function getValue2(){
        let n2 = document.getElementById("number2").value;
        document.getElementById("number").innerHTML = n2;

    }
    
    function getValue3(){
        let n3 = document.getElementById("number3").value;
        document.getElementById("number").innerHTML = n3;

    }

  


    
    function getAll(){
        // let resultat = document.getElementsByClassName("numbers").value;
        
        let n1 = +document.getElementById("number1").value;
        let n2 = +document.getElementById("number2").value;
        let n3 = +document.getElementById("number3").value;

        let resultat = n1 + n2 + n3;
            document.getElementById("number").innerHTML = resultat;
        }


let titles = document.querySelector(".titles");
// let fantasy = document.querySelectorAll(".fantasy");
let theBooks = document.querySelectorAll(".books");

function showCat(){
    for (let i = 0; i < theBooks.length; i++) {
       if (theBooks[i].classList.contains("fantasy")) {
           theBooks[i].classList.toggle("show");
}else {
    theBooks[i].classList.toggle("hide");
}}}


document.getElementById("cats").addEventListener("click", showCat);

// titles.classList.contains("fantasy");

//         if (!theBooks.length(fantasy)) {
//             theBooks.style.visibility = "hidden";
//         }else{
//             theBooks.style.visibility = "visible";
//         }