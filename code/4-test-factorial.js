// ####################################
// ####### ----- Factorial ----- ######
// ####################################

function factorial() {
  let num = prompt( 'what number do you want the factorial for?')

num = Number (num)
let factorNum = 1

while (num > 0) {
factorNum = factorNum * num
num = num -1
}

alert('The factor is ' + factorNum)

}
