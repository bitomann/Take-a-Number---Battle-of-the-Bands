let bandNumber = 1

const takeNumber = function (bandName) {
   let bandAndNumber = `${bandNumber}, ${bandName}`
   bandNumber += 1
   return bandAndNumber
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console
const under = takeNumber("Bitallica")
console.log(under)  // This should print "2. Underdogs" in the console
// const over = takeNumber("Bitlemania")
// console.log(over)  // This should print "2. Underdogs" in the console