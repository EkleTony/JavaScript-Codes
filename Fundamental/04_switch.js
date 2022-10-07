let day = "Saturday"

switch (day) {

    case "Sunday":
        console.log("7am");
        break; 
     case "Monday":
    case "Tuesday":
        console.log("9am");
        break;
     case "Wednesday":
     case "Thursday":
    case "Friday":
        console.log("5am");
        break;
     case "Saturday":
        console.log("3am");
}
console.log("bye")
  
