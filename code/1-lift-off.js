// ####################################
// ####### ----- Lift Off ----- #######
// ####################################

function liftOff() {
  let count = 10

  while (count > 0) {
    alert(count + '...')
    count = count - 1
  }

  alert('Lift Off!')
}

function make1() {


  let max = prompt('Enter a maximum number')
  let increment = prompt('Enter a increment')
  let count = 0
  max = Number(max)
  increment = Number(increment)
  while (count <= max) {
    alert(count)
    leftover = max - count
    count = count + increment

  }
  alert('done with ' + leftover + ' leftover?')

}