class Person{
    constructor(firstName, lastName, yearOfWork){
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearOfWork = yearOfWork;
    }   
       
   }
   let people = [];
   
   let person1= new Person('Zika','Ziric',8);
   let person2 = new Person('Mika', 'Mikic',3);
   let person3 = new Person('Pera','Peric',5);
   
   people.push(person1,person2,person3);
   
   
   Person.prototype.display = function(){
       return this.firstName + ' ' + this.lastName + ' is working for ' +this.yearOfWork + ' years';
   }
   
   people.forEach(person => console.log(person.display())); 