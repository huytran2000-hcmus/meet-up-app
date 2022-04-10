import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";
import { useRef } from "react";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDesciption = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDesciption,
    };

    titleInputRef.current.value = "";
    imageInputRef.current.value = "";
    addressInputRef.current.value = "";
    descriptionInputRef.current.value = "";

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            ref={titleInputRef}
            placeholder="Family Gathering"
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image</label>
          <input
            type="url"
            id="image"
            ref={imageInputRef}
            placeholder="https:\\image.com"
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            ref={addressInputRef}
            placeholder="666 Fifth Avenue, Manhattan, New York City"
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            row="5"
            ref={descriptionInputRef}
            placeholder="Please fucking come!"
            required
          />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
