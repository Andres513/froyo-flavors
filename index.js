const userInputString = prompt(
    "Please enter five flavors of froyo:"
)
const flavorArray = userInputString.split(",");

console.log(flavorArray);
const flavorCount = {}

for (let i = 0; i < flavorArray.length; i++){

        if (flavorCount.hasOwnProperty(flavorArray[i])){
            flavorCount[flavorArray[i]] = flavorCount[flavorArray[i]] + 1;   
        } else {
            flavorCount[flavorArray[i]] = 1;
        }
    }

console.log(flavorCount)
