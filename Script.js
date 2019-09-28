const salon={
  name: 'Fashion Pet',
  Phone: '9283458765',
  address: {
      street: '7th',
      number: '8965'
  },
  hourtime: {
      day: 'Mon-Fri',
      open: '9:00 Am',
      close: '5:00 Pm'
  },

  pets:[],

  count:function(){
      alert("you have registered " + this.pets.length + " pet/s.");
  }

 
}

let {name, Phone, address:{street, number}, hourtime:{day, open, close}}=salon;

console.log(name);
document.getElementById('salon').innerHTML=`<h2>welcome to ${name} </h2> <br> Tel: ${Phone} <br> address: ${street} ${number} <br> working days: ${day} - ${open} to ${close}`;

class pet{
    constructor(name,age,type,gender,breed,service,ownerName,contactPhone){
    this.hunger=10;
    this.happiness=20;
    this.name=name;
    this.age=age;
    this.type=type;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.ownerName=ownerName;
    this.contactPhone=contactPhone;
    }
    status=function(){
        console.log("hunger:" + this.hunger + "  happiness:" + this.happiness  );
    }
    feed=function(){
        this.hunger-=10;
        this.happiness +=10;
        console.log("feeding...");
    }
    contactinfo=function(){
        console.log(this.ownerName + " " + this.contactPhone);
    }
}

var pet1=new pet("shagy","5","dog","male","german","Hair Cut","Jack","6759877865");
var pet2=new pet("gooye","7","dog","male","buldog","teeth cleaning","John","4559565665");
var pet3=new pet("ozzy","3","dog","male","boxter","Hair Cut","James","8735407865");
var pet4=new pet("ganis","8","dog","female","german","bath","Armando","3960777865");

salon.pets.push(pet1);
salon.pets.push(pet2);
salon.pets.push(pet3);
salon.pets.push(pet4);

console.table(salon.pets);
NumberOfPets = function(){
    console.log("Total Number of Pets: " + salon.pets.length);
}
NumberOfPets();

document.getElementById('petsName').innerHTML=`<br> name of pets: <br> ${salon.pets[0].name} <br> ${salon.pets[1].name} <br> ${salon.pets[2].name} <br> ${salon.pets[3].name} <br> Total number of pets: ${salon.pets.length}`;
salon.count();

pet1.status();
pet1.feed();
pet1.status();
pet1.contactinfo();