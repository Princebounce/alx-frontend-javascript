import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [photo, user] = results;
      console.log(`${user.firstName} ${user.lastName} ${photo.body}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
