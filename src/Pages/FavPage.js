import React, { useContext } from "react";
import { UserContext } from "../context";
import AllItems from "../Components/AllItems";

const FavPage = () => {
  // const [data] = useContext(Context);
  const [userData, setUserData] = useContext(UserContext);

  return (
    <section id="favouritePage">
      <div className="Container">
        <h1>Favourite Items</h1>
        <AllItems data={userData.favourites} setUserData={setUserData} />
      </div>
    </section>
  );
};

export default FavPage;
