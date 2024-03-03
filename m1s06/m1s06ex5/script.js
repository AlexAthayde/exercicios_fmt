fetch('https://api.thecatapi.com/v1/images/search?limit=10', {
  method: "GET",
})
  .then((respostaFetch) => {
    return respostaFetch.json();
  })
  .then((respostaApi) => {
    for (let foto of respostaApi) {
        document.write(`<img src='${foto.url}' width='200'/>`);
    }
  })
  .catch((error) => {
    console.error(error);
  });