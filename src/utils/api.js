function handleError(error) {
  console.warn(error);
  return null;
}

export async function fetchBeer() {
  let URI = "https://api.punkapi.com/v2/beers";

  const response = await fetch(URI).catch(handleError);
  let beer = await response.json();

  return beer.map(beer => ({
    ...beer,
    isFavorite: false
  }));
}

export function joinResponse() {
  let isSuccess = Math.floor(Math.random() * 10 + 1) > 3;

  return new Promise((resolve, reject) => {
    setTimeout(function() {
      if (isSuccess) {
        resolve(true);
      } else {
        //reject(new Error("There was a problem with your request."));
        resolve(false);
      }
    }, 1000);
  });
}
