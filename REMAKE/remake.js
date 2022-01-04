//recuperer les donnes du formulaire
let title= document.getElementById("title");
let author= document.getElementById("author");
let price= document.getElementById("price");
let date= document.getElementById("date");
let lang= document.getElementById("lang");
let email= document.getElementById("email");
let books = [];


class Ouvrage{
constructor(title, author, price, type, date, email, language ){

    this.title = title;
    this.author = author; 
    this.price = price; 
    this.type = type;
    this.date = date; 
    this.email = email;
    this.language = language; 

  
}

openingDetail(){
    return `${this.title} is a ${this.type} in the ${this.lang} language, written by ${this.author} and published on the ${this.date}. The price of ${this.title} is ${this.price}MAD.`
}
}
//ajouter dans le tableau/valider
function ajouter(){
    let type= document.querySelector("input[name = 'select']:checked");
    let ouvrage = new Ouvrage(title.value, author.value, price.value, date.value, lang.value, email.value, type.value);
    console.log(ouvrage.openingDetail());

    books.push(ouvrage);

    for (let index = 0; index < books.length; index++) {
        console.log(books[index].openingDetail());
    }

}

function chargerTable(){
let tr;
let td1, td2, td3, td4, td5, td6, td7, td8;
for (let i = 0; i < books.length; i++) {

    td1 = document.createElement('td');
    td2 = document.createElement('td');
    td3 = document.createElement('td');
    td4 = document.createElement('td');
    td5 = document.createElement('td');
    td6 = document.createElement('td');
    td7 = document.createElement('td');
    td8 = document.createElement('td');

   //Remplir les cellules par les données de formulaire 
td1.innerHTML = books[i].title;
td2.innerHTML = books[i].author;
td3.innerHTML = books[i].price;
td4.innerHTML = books[i].date;
td5.innerHTML = books[i].email;
td6.innerHTML = books[i].lang;
td7.innerHTML = books[i].type;
td8.innerHTML =  `<button onClick="onEdit(this)>Edit</button>
<button onClick="onDelete(this)">Delete</button> `
// CREER UNE 
tr = document.createElement('tr');

tr.appendChild(td1)
tr.appendChild(td2)
tr.appendChild(td3)
tr.appendChild(td4)
tr.appendChild(td5)
tr.appendChild(td6)
tr.appendChild(td7)
tr.appendChild(td8)


table.appendChild(tr)
}
}


