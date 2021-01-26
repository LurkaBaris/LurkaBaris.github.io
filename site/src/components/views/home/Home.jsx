import React, { useState } from "react";
import Header from "../../header/Header";
import Popup from "../../popup/Popup";

const Home = () => {
  const [popupActive, setPopupActive] = useState(false);
  return (
    <div className="home">
      <Header popupIsActive={setPopupActive} />
      <Popup
        popupActive={popupActive}
        onHide={() => {
          setPopupActive(false);
        }}
      />
    </div>
  );
};

export default Home;
