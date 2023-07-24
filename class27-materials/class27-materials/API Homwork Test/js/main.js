document.querySelector('button').addEventListener('click', fetchData);

async function fetchData() {
  const choice = document.querySelector('input').value;
  const url = `https://wordsapiv1.p.rapidapi.com/words/${choice}/definitions`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '47bb37c61dmsh5508cd88b74f233p1e6908jsn2c423afdd4d9',
      'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    const definitions = result.definitions.map(def => `<li>${def.definition}</li>`).join('');
    document.querySelector('ul').innerHTML = definitions;
  } catch (error) {
    console.error(error);
  }
}

