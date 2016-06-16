import config from '../config';

const url = `https://ral.lu/api/feed/?token=${config.token}`;

function getFeed() {
  console.log('fetching url', url);
  return fetch(url)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      return response;
    });
}

export default getFeed;
