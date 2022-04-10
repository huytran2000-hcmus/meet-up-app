import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

function MeetupItem(props) {
  const favoritesContext = useContext(FavoritesContext);
  const itemIsFavorite = favoritesContext.itemIsFavorite(props.meetup.id);
  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesContext.removeFavorite(props.meetup.id);
    } else {
      favoritesContext.addFavorite(props.meetup);
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div>
          <img
            className={classes.image}
            src={props.meetup.image}
            alt={props.meetup.title}
          />
        </div>
        <div className={classes.content}>
          <h3>{props.meetup.title}</h3>
          <address>{props.meetup.address}</address>
          <p>{props.meetup.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
