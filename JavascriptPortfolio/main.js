// Use in order to get a random number
const randomNumber = num => {
  return Math.floor(Math.random()* num)
}
const collectInfo = {
    animalSign: ['Furry Feline', 'Lazy Sloth', 'Striped Zebra', 'Silly Dog'],
    areaExplored: [' the Desert', 'Greece', 'Rome', 'the Tundra', 'California'],
    yourNeeds: ['take a nap', 'find a pizza', 'find shelter', 'have a gyro', 'go home']
}
//store the info into an Array
let shortStory = []
for (let story in collectInfo){
    let outcomeIdx = randomNumber(collectInfo[story].length)

//generate a random outcome by switching the values
switch (story) {
   case 'animalSign' : 
   shortStory.push(`You are a ${collectInfo[story][outcomeIdx]}.`)
   break;
   case 'areaExplored' :
    shortStory.push(`Currently you have stumbled your way into ${collectInfo[story][outcomeIdx]}.`)
    break;
   case 'yourNeeds' :
     shortStory.push(`While you're here you may need to ${collectInfo[story][outcomeIdx]}.`)
   break;
   default: shortStory.push("Oh no i'm not sure who you are or where you are. Please find the nearest help or simply try again.")
  }
}
const format = shortStory.join(' ');
console.log(format);