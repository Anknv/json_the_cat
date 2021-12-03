const request = require('request');

const breed = process.argv[2];

const findBreed = function(breedName, functionToRunWhenThingsAreDone) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (!error) {
      const data = JSON.parse(body);
      // console.log(data);
      // console.log(typeof data);
      const breed = data[0];
      functionToRunWhenThingsAreDone(breed);
    } else {
      console.log(error);
    }
  });
};

const printBreed = (breedFromResponse) => {
  if (typeof breedFromResponse === 'undefined') {
    console.log('Breed not found.');
  } else {
    console.log(breedFromResponse.description);
  }
};

findBreed(breed, printBreed);