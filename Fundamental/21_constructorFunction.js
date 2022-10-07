
function HouseKeeper(name, age, yearsOfExperience, duties) {
    this.name = name;
    this.age = age;
    this.yearsOfExperience = yearsOfExperience;
    this.duties = duties;
}

// creating a new object

var houseKeeper1 = new HouseKeeper("Tony", 26, 7, ["Code", "Run", "Nap"]);

// display name value
console.log("His name is "+houseKeeper1.name);