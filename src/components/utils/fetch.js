import faker from 'faker'

// this wrapper simulates delay on call + adding a user to revalidate
export default async function apiFetch(...args) {
  // await delay(Math.ceil(400 + Math.random() * 300))
  //   const res = await fetchMock('url1') mesma coisa
  const res = await fetch(...args)
  console.log('api ->', res) // [Function: fetchMock] queria -> { json: [Function: json] }
  console.log('api -> res.json() ->', await res.json())
  // console.log('api res ->', await res())
  // const bla = await res()
  // console.log('api res -> res.json()', await bla.json())
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
      email: faker.internet.email(),
    };
  }
