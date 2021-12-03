const request = require('request');

const fetchBreedDescription = function(breedName, functionToRunWhenThingsAreDone) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (!error) {
      const data = JSON.parse(body);
      // console.log(data);
      // console.log(typeof data);
      const breed = data[0];
      if (typeof breed === 'undefined') {
        functionToRunWhenThingsAreDone('Breed not found.', null);
      } else {
        functionToRunWhenThingsAreDone(null, breed.description);
      }
    } else {
      functionToRunWhenThingsAreDone(error, null);
    }
  });
};

module.exports = { fetchBreedDescription };
//fetchBreedDescription(breed, printBreed);