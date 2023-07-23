//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://lingua-robot.p.rapidapi.com/language/v1/entries/en/${choice}`

  const url = 'https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '47bb37c61dmsh5508cd88b74f233p1e6908jsn2c423afdd4d9',
		'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if (data.media_type === 'image'){
          document.querySelector('img').src = data.hdurl
        } else if(data.media_type === 'video'){
          document.querySelector('iframe').src = data.url
        }
  
        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

// date
// : 
// "2023-05-07"
// explanation
// : 
// "Will our Sun look like this one day?  The Helix Nebula is one of brightest and closest examples of a planetary nebula, a gas cloud created at the end of the life of a Sun-like star. The outer gasses of the star expelled into space appear from our vantage point as if we are looking down a helix. The remnant central stellar core, destined to become a white dwarf star, glows in light so energetic it causes the previously expelled gas to fluoresce. The Helix Nebula, given a technical designation of NGC 7293, lies about 700 light-years away towards the constellation of the Water Bearer (Aquarius) and spans about 2.5 light-years. The featured picture was taken with the Canada-France-Hawaii Telescope (CFHT) located atop a dormant volcano in Hawaii, USA. A close-up of the inner edge of the Helix Nebula shows complex gas knots of unknown origin."
// hdurl
// : 
// "https://apod.nasa.gov/apod/image/2305/Helix2_CFHT_1917.jpg"
// media_type
// : 
// "image"
// service_version
// : 
// "v1"
// title
// : 
// "The Helix Nebula from CFHT"
// url
// : 
// "https://apod.nasa.gov/apod/image/2305/Helix2_CFHT_960.jpg"