export default async function fetchData(query) {
  var url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
  var token = '77c78afe2f24aa68ff117d56619132563ed661dc';

  var options = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Token ' + token,
    },
    body: JSON.stringify({ query: query }),
  };

  // fetch(url, options)
  //   .then((response) => response.text())
  //   .then((result) => console.log(result))
  //   .catch((error) => console.log('error', error));
  const objects = [];
  const response = await fetch(url, options);
  const data = await response.json();
  await data.suggestions.forEach((el) => objects.push(el.data));
  console.log(objects);

  return objects;
}
