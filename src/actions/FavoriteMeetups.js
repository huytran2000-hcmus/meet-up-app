export const add = (meetup) => {
  return {
    type: "ADD",
    payload: meetup,
  };
};

export const remove = (meetupID) => {
  return {
    type: "REMOVE",
    payload: meetupID,
  };
};

export const isIn = (meetupID) => {
  return {
    type: "IS_IN",
    payload: meetupID,
  };
};
