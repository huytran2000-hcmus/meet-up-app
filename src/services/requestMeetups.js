const MEETUPS_URL =
  "https://react-getting-started-4f6d5-default-rtdb.firebaseio.com/meetups.json";

function getMeetups() {
  return fetch(MEETUPS_URL)
    .then((respone) => {
      if (!respone.ok) {
        throw new Error(`${respone.status}: ${respone.statusText}`);
      }
      return respone.json();
    })
    .catch((error) => {
      alert(error);
    });
}

async function postMeetup(meetupData) {
  const respone = await fetch(MEETUPS_URL, {
    method: "POST",
    body: JSON.stringify(meetupData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!respone.ok) {
    throw new Error(`${respone.status}: ${respone.statusText}`);
  }

  return respone;
}

export { getMeetups, postMeetup };
