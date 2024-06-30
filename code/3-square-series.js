// ####################################
// ##### ----- Square Series ----- ####
// ####################################

function squareSeries() {
  let number = prompt ('What number do you want the square series for?')
  number = Number (number)
let series = ' '

  while(number > 0){
square = number * number 
series = series + square + ' ,'
number = number - 1
  }
alert(series)
  
}
