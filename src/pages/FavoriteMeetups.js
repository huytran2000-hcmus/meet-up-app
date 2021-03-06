import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";

function FavoritesPage() {
  const favoritesContext = useContext(FavoritesContext);
  let content;

  if (favoritesContext.totalFavorites === 0) {
    content = <p>You got no favorites yet.</p>;
  } else {
    content = <MeetupList meetups={favoritesContext.favorites} />;
  }

  return (
    <section>
      <h1>Favorites Page</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
