document.querySelector('#check').addEventListener('click', check)

function check(s) {
  
  const day= document.querySelector('#day').value.toLowerCase()

  //conditionals
  if (day === 'tuesday' || day === 'thursday') {
    document.querySelector('#placeToSee').innerHTML = 'CLASS DAY!'
  } else if (day === 'saturday' || day === 'sunday') {
    document.querySelector('#placeToSee').innerHTML = 'Weekend!'
  } else {
    document.querySelector('#placeToSee').innerHTML = 'boring'
  }
}