
function Alien(name, tech) {
    this.name = name;
    this.tech = tech;

    this.work = function () {
        console.log("Coding to victory");

    }
    
    return 7;
}

let names = [  'John', 'Peter', 'James'];

let alien1 = new Alien('Tony', 'JS');
let alien2 = new Alien("JAVA", "Security");

console.log(alien1);
console.log(alien2);
//alien2.work();
console.log( names.length)