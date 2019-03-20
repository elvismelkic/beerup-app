function handleError(error) {
  console.warn(error);
  return null;
}

export async function fetchBeer() {
  let URI = "https://api.punkapi.com/v2/beers";

  const response = await fetch(URI).catch(handleError);
  const beer = await response.json();

  return beer;
}
