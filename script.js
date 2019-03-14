let p = document.getElementsByClassName('price');
let items = document.getElementById("items");
let totalSum = document.getElementById("sum");
let x;
let count = [];
let closeButtons = document.getElementsByClassName("overlay-close");
let bContents = document.getElementById("basket-contents");
let basket = document.getElementById("basket");
let contentItems = document.getElementById("content-items");
let theBooks = document.getElementsByClassName("books");
let selList = document.getElementById("sellist");
let salesContent = document.getElementById("salescontent");

// -----------------------------------------------------------------------------


                                                // BÖCKER (objektkonstruktor)

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



// -----------------------------------------------------------------------------

                                                                        // KÖP-FUNKTIONER

for (let i = 0; i < p.length; i++) {                    // Hitta alla köp-knappar
        let btns = p[i];
        btns.addEventListener("click", function(){
                                                        
                                                        
                styleItem();                            // Animera kundkorgsfärgen
                setTimeout(styleOut, 1000);
        })};

function styleItem(){                                   // Animera kundkorgstexten när kunden klickar på Köp
        totalSum.style.color = "rgb(55, 175, 55)";
        totalSum.style.fontSize = "20px";
        totalSum.style.transition = "all 0.6s";
        }
function styleOut(){
        totalSum.style.color = "tomato";
        totalSum.style.fontSize = "15px";                // ta bort fokusfärg och återgå till initiala värdet
}

// -----------------------------------------------------------------------------

for (let x = 0; x < p.length; x++) {                     // Samla alla köp-knappar
        p[x].addEventListener("click", buyBook);        // Lägg klickfunktion på alla köpknappar, bind buyBook-funktionen till samtliga köpknappar
     
     function buyBook(e) {
        event = e.target.id;
     
switch (event) {                                        // Beroende på vilken köpknapp som klickas på, adderas tillhörande textnod till kundkorgen (kvantitet/boktitel/pris)
        
        case event="buyharry":
        items.innerHTML = "Totalsumma:";
        let bok1antal = +document.getElementById("book1-quant").value;
        let bok1summa = book1.price*bok1antal;
        count += bok1summa;
        let elem1 = document.createElement("LI");
        let nyText1 = document.createTextNode(bok1antal + " x " + book1.title + "\n" + book1.price + " kr/st");
        elem1.appendChild(nyText1);
        contentItems.appendChild(elem1);
        break;
        
        case event="buycarl":
        items.innerHTML = "Totalsumma:";
        let bok2antal = +document.getElementById("book2-quant").value;
        let bok2summa = book2.price*bok2antal;
        count += bok2summa;
        let elem2 = document.createElement("LI");
        let nyText2 = document.createTextNode(bok2antal + " x " + book2.title + "\n" + book2.price + " kr/st");
        elem2.appendChild(nyText2);
        contentItems.appendChild(elem2);
        break;
        
        case event="buyododa":
        items.innerHTML = "Totalsumma:";
        let bok3antal = +document.getElementById("book3-quant").value;
        let bok3summa = book3.price*bok3antal;
        count += bok3summa;
        let elem3 = document.createElement("LI");
        let nyText3 = document.createTextNode(bok3antal + " x " + book3.title + "\n" + book3.price + " kr/st");
        elem3.appendChild(nyText3);
        contentItems.appendChild(elem3);
        break;
        
        case event="buyamanda":
        items.innerHTML = "Totalsumma:";
        let bok4antal = +document.getElementById("book4-quant").value;
        let bok4summa = book4.price*bok4antal;
        count += bok4summa;
        let elem4 = document.createElement("LI");
        let nyText4 = document.createTextNode(bok4antal + " x " + book4.title + "\n" + book4.price + " kr/st");
        elem4.appendChild(nyText4);
        contentItems.appendChild(elem4);
        break;

        case event="buyrobot":
        items.innerHTML = "Totalsumma:";
        let bok5antal = +document.getElementById("book5-quant").value;
        let bok5summa = book5.price*bok5antal;
        count += bok5summa;
        let elem5 = document.createElement("LI");
        let nyText5 = document.createTextNode(bok5antal + " x " + book5.title + "\n" + book5.price + " kr/st");
        elem5.appendChild(nyText5);
        contentItems.appendChild(elem5);
        break;

        case event="buyreacher":
        items.innerHTML = "Totalsumma:";
        let bok6antal = +document.getElementById("book6-quant").value;
        let bok6summa = book6.price*bok6antal;
        count += bok6summa;
        let elem6 = document.createElement("LI");
        let nyText6 = document.createTextNode(bok6antal + " x " + book6.title + "\n" + book6.price + " kr/st");
        elem6.appendChild(nyText6);
        contentItems.appendChild(elem6);
        break;

        case event="buyhedi":
        items.innerHTML = "Totalsumma:";
        let bok7antal = +document.getElementById("book7-quant").value;
        let bok7summa = book7.price*bok7antal;
        count += bok7summa;
        let elem7 = document.createElement("LI");
        let nyText7 = document.createTextNode(bok7antal + " x " + book7.title + "\n" + book7.price + " kr/st");
        elem7.appendChild(nyText7);
        contentItems.appendChild(elem7);
        break;

        case event="buykim":
        items.innerHTML = "Totalsumma:";
        let bok8antal = +document.getElementById("book8-quant").value;
        let bok8summa = book8.price*bok8antal;
        count += bok8summa;
        let elem8 = document.createElement("LI");
        let nyText8 = document.createTextNode(bok8antal + " x " + book8.title + "\n" + book8.price + " kr/st");
        elem8.appendChild(nyText8);
        contentItems.appendChild(elem8);
        break;

        case event="buyobama":
        items.innerHTML = "Totalsumma:";
        let bok9antal = +document.getElementById("book9-quant").value;
        let bok9summa = book9.price*bok9antal;
        count += bok9summa;
        let elem9 = document.createElement("LI");
        let nyText9 = document.createTextNode(bok9antal + " x " + book9.title + "\n" + book9.price + " kr/st");
        elem9.appendChild(nyText9);
        contentItems.appendChild(elem9);
        break;

        case event="buylionheart":
        items.innerHTML = "Totalsumma:";
        let bok10antal = +document.getElementById("book10-quant").value;
        let bok10summa = book10.price*bok10antal;
        count += bok10summa;
        let elem10 = document.createElement("LI");
        let nyText10 = document.createTextNode(bok10antal + " x " + book10.title + "\n" + book10.price + " kr/st");
        elem10.appendChild(nyText10);
        contentItems.appendChild(elem10);
        break;

        case event="buyjan":
        items.innerHTML = "Totalsumma:";
        let bok11antal = +document.getElementById("book11-quant").value;
        let bok11summa = book11.price*bok11antal;
        count += bok11summa;
        let elem11 = document.createElement("LI");
        let nyText11 = document.createTextNode(bok11antal + " x " + book11.title + "\n" + book11.price + " kr/st");
        elem11.appendChild(nyText11);
        contentItems.appendChild(elem11);
        break;

        case event="buysteam":
        items.innerHTML = "Totalsumma:";
        let bok12antal = +document.getElementById("book12-quant").value;
        let bok12summa = book12.price*bok12antal;
        count += bok12summa;
        let elem12 = document.createElement("LI");
        let nyText12 = document.createTextNode(bok12antal + " x " + book12.title + "\n" + book12.price + " kr/st");
        elem12.appendChild(nyText12);
        contentItems.appendChild(elem12);
        break;
}
         count = Number(count);                         // Till sist visas summan för den valda titeln/kvantiteten som en totalsumma i varukorgsfältet.
         totalSum.innerHTML = count + " kr";
         document.getElementById("order").innerHTML = "Din order består av: " + count + " kr."
         }
     }

// --------------------------------------------------------------------------------------------

                                                        // ÖPPNA OVERLAYS

document.getElementById("title1-info").addEventListener("click", function(){
        document.getElementById("title1-overlay").classList.add("show");
        document.getElementById("title1-price").innerHTML = book1.price + " kr";
});
document.getElementById("title2-info").addEventListener("click", function(){
        document.getElementById("title2-overlay").classList.add("show");
        document.getElementById("title2-price").innerHTML = book2.price + " kr";
});
document.getElementById("title3-info").addEventListener("click", function(){
        document.getElementById("title3-overlay").classList.add("show");
        document.getElementById("title3-price").innerHTML = book3.price + " kr";
});
document.getElementById("title4-info").addEventListener("click", function(){
        document.getElementById("title4-overlay").classList.add("show");
        document.getElementById("title4-price").innerHTML = book4.price + " kr";
});
document.getElementById("title5-info").addEventListener("click", function(){
        document.getElementById("title5-overlay").classList.add("show");
        document.getElementById("title5-price").innerHTML = book5.price + " kr";
});
document.getElementById("title6-info").addEventListener("click", function(){
        document.getElementById("title6-overlay").classList.add("show");
        document.getElementById("title6-price").innerHTML = book6.price + " kr";
});
document.getElementById("title7-info").addEventListener("click", function(){
        document.getElementById("title7-overlay").classList.add("show");
        document.getElementById("title7-price").innerHTML = book7.price + " kr";
});
document.getElementById("title8-info").addEventListener("click", function(){
        document.getElementById("title8-overlay").classList.add("show");
        document.getElementById("title8-price").innerHTML = book8.price + " kr";
});
document.getElementById("title9-info").addEventListener("click", function(){
        document.getElementById("title9-overlay").classList.add("show");
        document.getElementById("title9-price").innerHTML = book9.price + " kr";
});
document.getElementById("title10-info").addEventListener("click", function(){
        document.getElementById("title10-overlay").classList.add("show");
        document.getElementById("title10-price").innerHTML = book10.price + " kr";
});
document.getElementById("title11-info").addEventListener("click", function(){
        document.getElementById("title11-overlay").classList.add("show");
        document.getElementById("title11-price").innerHTML = book11.price + " kr";
});
document.getElementById("title12-info").addEventListener("click", function(){
        document.getElementById("title12-overlay").classList.add("show");
        document.getElementById("title12-price").innerHTML = book12.price + " kr";
});
    
                                                        // STÄNGA OVERLAYS

 document.getElementById("closeharry").addEventListener("click", function(){
        document.getElementById("title1-overlay").classList.remove("show");
        });
 document.getElementById("closecarl").addEventListener("click", function(){
        document.getElementById("title2-overlay").classList.remove("show");
        });
 document.getElementById("closejohn").addEventListener("click", function(){
        document.getElementById("title3-overlay").classList.remove("show");
        });
 document.getElementById("closeamanda").addEventListener("click", function(){
        document.getElementById("title4-overlay").classList.remove("show");
        });
 document.getElementById("closeisaac").addEventListener("click", function(){
        document.getElementById("title5-overlay").classList.remove("show");
        });
 document.getElementById("closelee").addEventListener("click", function(){
        document.getElementById("title6-overlay").classList.remove("show");
        });
 document.getElementById("closehedi").addEventListener("click", function(){
        document.getElementById("title7-overlay").classList.remove("show");
        });
 document.getElementById("closekim").addEventListener("click", function(){
        document.getElementById("title8-overlay").classList.remove("show");
        });
 document.getElementById("closemichelle").addEventListener("click", function(){
        document.getElementById("title9-overlay").classList.remove("show");
        });
 document.getElementById("closeastrid").addEventListener("click", function(){
        document.getElementById("title10-overlay").classList.remove("show");
        });
 document.getElementById("closejan").addEventListener("click", function(){
        document.getElementById("title11-overlay").classList.remove("show");
        });
 document.getElementById("closehiroshi").addEventListener("click", function(){
        document.getElementById("title12-overlay").classList.remove("show");
        });

        // --------------------------------------------------------------------------------------------

                                                // VARUKORGENS INNEHÅLL  // Funktionen gör att det visas två olika meddelanden i fältet vid kundkorgen,
                                                                        // som gör kunden uppmärksam på att det går att klicka bort innehållet.
bContents.addEventListener("click", function(){                 
        contentItems.classList.toggle("show");                   
        if (!contentItems.classList.contains("show")){
            bContents.innerHTML = "<strong>Klicka för att se innehåll &#8628;</strong>";
        }else{
            bContents.innerHTML = "<strong>Klicka för att stänga innehåll</strong> &#8593;";
        };
});


document.getElementById("done").addEventListener("click", function(){
        document.getElementById("checkout").classList.toggle("hide");
})
// --------------------------------------------------------------------------------------------

                                // KVANTITET
                                                                                // Här hittar koden respektive värde för input=number-fälten i respektive overlay. 
document.getElementById("book1-quant").addEventListener("click", function(){    // Värdet multiplicerat med den aktuella titelns pris visas sedan bredvid input-fältet.
        let bok1antal = +document.getElementById("book1-quant").value;
        let bok1summa = book1.price*bok1antal;
        document.getElementById("title1-price").innerHTML = bok1summa + " kr";
})
document.getElementById("book2-quant").addEventListener("click", function(){
        let bok2antal = +document.getElementById("book2-quant").value;
        let bok2summa = book2.price*bok2antal;
        document.getElementById("title2-price").innerHTML = bok2summa + " kr";
})
document.getElementById("book3-quant").addEventListener("click", function(){
        let bok3antal = +document.getElementById("book3-quant").value;
        let bok3summa = book3.price*bok3antal;
        document.getElementById("title3-price").innerHTML = bok3summa + " kr";
})
document.getElementById("book4-quant").addEventListener("click", function(){
        let bok4antal = +document.getElementById("book4-quant").value;
        let bok4summa = book4.price*bok4antal;
        document.getElementById("title4-price").innerHTML = bok4summa + " kr";
})
document.getElementById("book5-quant").addEventListener("click", function(){
        let bok5antal = +document.getElementById("book5-quant").value;
        let bok5summa = book5.price*bok5antal;
        document.getElementById("title5-price").innerHTML = bok5summa + " kr";
})
document.getElementById("book6-quant").addEventListener("click", function(){
        let bok6antal = +document.getElementById("book6-quant").value;
        let bok6summa = book6.price*bok6antal;
        document.getElementById("title6-price").innerHTML = bok6summa + " kr";
})
document.getElementById("book7-quant").addEventListener("click", function(){
        let bok7antal = +document.getElementById("book7-quant").value;
        let bok7summa = book7.price*bok7antal;
        document.getElementById("title7-price").innerHTML = bok7summa + " kr";
})
document.getElementById("book8-quant").addEventListener("click", function(){
        let bok8antal = +document.getElementById("book8-quant").value;
        let bok8summa = book8.price*bok8antal;
        document.getElementById("title8-price").innerHTML = bok8summa + " kr";
})
document.getElementById("book9-quant").addEventListener("click", function(){
        let bok9antal = +document.getElementById("book9-quant").value;
        let bok9summa = book9.price*bok9antal;
        document.getElementById("title9-price").innerHTML = bok9summa + " kr";
})
document.getElementById("book10-quant").addEventListener("click", function(){
        let bok10antal = +document.getElementById("book10-quant").value;
        let bok10summa = book10.price*bok10antal;
        document.getElementById("title10-price").innerHTML = bok10summa + " kr";
})
document.getElementById("book11-quant").addEventListener("click", function(){
        let bok11antal = +document.getElementById("book11-quant").value;
        let bok11summa = book11.price*bok11antal;
        document.getElementById("title11-price").innerHTML = bok11summa + " kr";
})
document.getElementById("book12-quant").addEventListener("click", function(){
        let bok12antal = +document.getElementById("book12-quant").value;
        let bok12summa = book12.price*bok12antal;
        document.getElementById("title12-price").innerHTML = bok12summa + " kr";
})

                                                // FILTERFUNKTIONER  // Dessa funktioner lägger events på checkboxarna i headern, filtrerar fram titlar baserade på klassnamn.


document.getElementById("opt-fantasy").addEventListener("click", showFantasy);          
document.getElementById("opt-mystery").addEventListener("click", showMystery);
document.getElementById("opt-facts").addEventListener("click", showFacts);
document.getElementById("opt-kids").addEventListener("click", showKids);
document.getElementById("opt-food").addEventListener("click", showFood);
document.getElementById("opt-scifi").addEventListener("click", showFiction);


function showFantasy(){
        for (let i = 0; i < theBooks.length; i++) {
                if (theBooks[i].classList.contains("fantasy")) {
                    theBooks[i].classList.toggle("show");
         }
         else {
             theBooks[i].classList.toggle("hide");
         }}}

function showMystery(){
        for (let i = 0; i < theBooks.length; i++) {
                if (theBooks[i].classList.contains("mystery")) {
                    theBooks[i].classList.toggle("show");
         }else {
             theBooks[i].classList.toggle("hide");
         }}}

function showFacts(){
        for (let i = 0; i < theBooks.length; i++) {
                if (theBooks[i].classList.contains("facts")) {
                    theBooks[i].classList.toggle("show");
         }else {
             theBooks[i].classList.toggle("hide");
         }}}

function showKids(){
        for (let i = 0; i < theBooks.length; i++) {
                if (theBooks[i].classList.contains("kids")) {
                    theBooks[i].classList.toggle("show");
         }else {
             theBooks[i].classList.toggle("hide");
         }}}

function showFood(){
        for (let i = 0; i < theBooks.length; i++) {
                if (theBooks[i].classList.contains("food")) {
                    theBooks[i].classList.toggle("show");
         }else {
             theBooks[i].classList.toggle("hide");
         }}}

function showFiction(){
        for (let i = 0; i < theBooks.length; i++) {
                if (theBooks[i].classList.contains("scifi")) {
                    theBooks[i].classList.toggle("show");
         }else {
             theBooks[i].classList.toggle("hide");
         }}}

         document.getElementById("sellBtn").addEventListener("click", sellBook)
         
         let salesstuff = [];
         function sellBook(){

                 let sellcontact = document.getElementById("sellcontact").value;
                 let sellperson = document.getElementById("sellperson").value;
                 let selltitle = document.getElementById("selltitle").value;
                 let sellprice = +document.getElementById("sellprice").value;

         let newItem = document.createElement("LI");
         let newText = document.createTextNode("Säljare: " +sellperson + "\nBoktitel: " + selltitle + "\nKontaktuppgifter: " + sellcontact + "\nBokpris " + sellprice + " kr" +"\n\nTack för ditt inlägg! Lycka till med försäljningen!");
         newItem.appendChild(newText);
         selList.appendChild(newItem);
         
         salesContent.innerHTML = "Du har lagt till följande: " + salesstuff;
        }