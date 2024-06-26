import { createUser, uploadPhoto } from './utils';

export default async function handleProfileSignup() {
  const user = await createUser();
  const photo = await uploadPhoto();
  console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
}
