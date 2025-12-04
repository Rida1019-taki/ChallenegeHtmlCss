// creation a new element 
/**
 * document.createElement()      javascript give me access to crate a new Tag Htlm.
 * createTextNode()
 */ 

// var myParagraphe = document.createElement("p"),
// myParagrapheText = document.createTextNode("Hi my name is rida");
// myParagraphe.appendChild(myParagrapheText);
// document.body.appendChild(myParagraphe);


// Find Elements By [ ID, Class, Tag ]
/*
 * document.getElementById()        that methode give access to find element by id because id is unique and doesn't repeat 
 * document.getElementsByTagName()      that methode give access to find elements not just one but how many u have in ur code
 * document.getElementsByClassName()      that methode give access to find elements with same class name if the elements have a differents Tags
 * document.querySelectorAll()      that methode give access to find elements with same class name if the elements have a differents Tags
 */


//                Find Element by ID :


// let myElement = document.getElementById("title");
// myElement.innerHTML = 'HELLO EVERYONE';



//                Find Element by Tag :

// let myElement = document.getElementsByTagName("p");
// myElement[].innerHTML = "One Piece";
// console.log(myElement.length);


//                Find Element by Class :


// let myElement = document.getElementsByClassName("p");
// myElement[].innerHTML = "One Piece";



//                Find Element by querySelectorAll :


// let myElement = document.querySelectorAll("p.p");
// myElement[0].innerHTML = "QuerySelector";
// console.log(myElement);
// document.querySelectorAll(".p").forEach(el => {
//     el.style.color = "red";
// });
document.getElementById("mySelect").addEventListener("change", (e) => {
  alert(`Selected: ${e.target.value}`);
});

