// Use terminal commands to see what happens when we call Astronaut but do not pass in 3 arguments.

// Next, set default values for 1 or more of the parameters in constructor.

class Astronaut {
   constructor(name, age, mass){
     this.name = name;
     this.age = age;
     this.mass = mass;
   }
}

let tortoise = new Astronaut('Speedy', 120);

console.log(tortoise.name, tortoise.age, tortoise.mass);

let tortoise1 = new Astronaut();

console.log(tortoise1.name, tortoise1.age, tortoise1.mass);

// What happens if we call Astronaut and pass in MORE than 3 arguments? TRY IT!

let tortoise3 = new Astronaut('Speedy', 120, 100, 300);

console.log(tortoise3);

	
class Car {
  constructor(make, model, year, color, mpg){
     this.make = make;
     this.model = model;
     this.year = year;
     this.color = color;
     this.mpg = mpg;
  }
}

let myCar = new Car('Chevy', 'Astro', 1985, 'gray', 20);

console.log(typeof myCar.year);

let myCar1 = new Car('Tesla', 'Model S', 2019);

console.log(myCar1);