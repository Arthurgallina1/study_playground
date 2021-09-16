import faker from 'faker'

// this wrapper simulates delay on call + adding a user to revalidate
export default async function apiFetch(...args) {
  await delay(Math.ceil(400 + Math.random() * 300))
  const res = await fetch(...args)
  const json = await res.json()
  json.data.push(getFakeUser())
  return json
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function getFakeUser() {
    return {
      id: 20,
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      avatar: faker.image.avatar(),
      email: faker.internet.email()
    };
  }
