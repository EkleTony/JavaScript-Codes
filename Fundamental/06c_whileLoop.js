
var counter = 4;

while (counter >= 0) {
    if (counter > 0) {
        newcounter = counter - 1;
        console.log(counter + " bottles on the wall, " + counter + " bottles of beer on the wall. \nTake one down and pass it around, " + newcounter + " bottles of beer on the wall \n");

    }
    else if (counter == 0) {
        console.log("No more bottles of beer on the wall, no more bottles of beer.\nGo to the the store and buy some more, "+counter + " bottles of beer on the wall.")
    }

    
    counter--;

}
