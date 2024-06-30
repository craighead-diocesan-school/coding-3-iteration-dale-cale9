// ####################################
// ####### ----- Fibonacci ----- ######
// ####################################

function fibonacci() {

  let number = prompt ('What number do you want the fibonacci sequnce up to?')

  let firstnum = 0
  let secoundnum = 1
  let fibnum = 0
  let sequnce = ''

  while( fibnum < number ) {
    fibnum = firstnum + secoundnum
    firstnum = secoundnum
    secoundnum = fibnum 
    sequnce = (sequnce + fibnum + ',')
  }


alert ('0,1,' + sequnce)

}
