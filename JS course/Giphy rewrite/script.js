const img = document.querySelector('img');
  // fetch('https://api.giphy.com/v1/gifs/translate?api_key=8PltmVYYZ2B7WBUvMceFkHZTT2dC0jsq&s=cats', {mode: 'cors'})
  //   .then(function(response) {
  //     return response.json();
  //   })
  //   .then(function(response) {
  //     img.src = response.data.images.original.url;
  //   });

async function getCats() {
  const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=8PltmVYYZ2B7WBUvMceFkHZTT2dC0jsq&s=cats', {mode: 'cors'})
  const cats = await response.json();
  img.src = cats.data.images.original.url
}

getCats()