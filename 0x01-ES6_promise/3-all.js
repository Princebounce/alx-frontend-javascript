import { uploadPhoto, createUser } from './utils.js';

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [photo, user] = results;
      console.log(`${user.firstName} ${user.lastName} ${photo.body}`);
    })
    .catch((error) => {
      console.error('Signup system offline');
    });
}

