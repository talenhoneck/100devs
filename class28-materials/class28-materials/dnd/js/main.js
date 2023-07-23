//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value.replace(/\s+/g, '-');
  const url = `https://www.dnd5eapi.co/api/spells/${choice}/`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.subclasses)

        data.subclasses.forEach( obj => {
            console.log(obj.name)
            const li = document.createElement('li')
            li.textContent = obj.name
            document.querySelector('ul').appendChild(li)
        })
        // document.querySelector('h2').innerText = data.name
        // document.querySelector('h3').innerText = data.classes.map(sc => sc.name).join(', ')
        // document.querySelector('h4').innerText = data.subclasses.map(sc => sc.name).join(', ')  
        // document.querySelector('img').src = data.img
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

