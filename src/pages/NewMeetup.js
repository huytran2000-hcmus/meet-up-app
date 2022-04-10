import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";
import {postMeetup} from "../services/requestMeetups";

function NewMeetupPage() {
  const history = useHistory();

  async function addMeetupHandler(meetupData) {
    postMeetup(meetupData, meetupData)
      .then(() => history.push("/"))
      .catch((error) => alert(error));
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
export default NewMeetupPage;
