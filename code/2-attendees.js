// ####################################
// ####### ----- Attendees ----- ######
// ####################################

function attendees() {
  let amount = prompt('How many attendees are there?')
  alert('What are their names?')
  let count = 0
  let numOfAttendees = amount
  let attendeeList = ''

  while (count < numOfAttendees) {
    let attendee = prompt()
    attendeeList = attendeeList + attendee + ', '
    count = count + 1
  }

  alert(attendeeList)
}

function make2() {

  let numOfNumbers = prompt('How many numbers do you want to add?')

  let count = 0
  let numOfnumbers = amount
  let numberList = ''


  while (count < numOfnumbers) {
    let newNum = prompt('name a number')
    newNum = Number(newNum)
    numberList = numberList + newNum
    numberList = Number(nmberList)
    count = count + 1
  }
  alert(numberList)
}