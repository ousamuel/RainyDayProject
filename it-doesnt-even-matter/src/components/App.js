import React, { useState, useEffect } from "react";
import UserStuff from "./UserStuff";
import Channels from "./DogChannels";
import TopThing from "./TopThing";
import Communities from "./Communities";
import { Outlet } from "react-router-dom";
function App() {

  return (
    <>
      <div style={{ display: "flex", height: "100vh" }}>
        <div style={{ flex: "0 0 4vw", background: "#1e1f22", width: "150px" }}>
          <Communities />
        </div>

        <div style={{ width: "240px", background: "#2b2d31", height: "100%" }}>
          <div style={{ position: "absolute", top: "0" }}>
            <TopThing />
          </div>

          <div
            id="CHAN"
            style={{ marginTop: "40px", position: "relative", height: "80%" }}
          >
            <Channels />
          </div>

          <div style={{ position: "absolute", bottom: "0", width: "240px" }}>
            <UserStuff />
          </div>
        </div>

        <div
          className="scrollbar"
          id="style-1"
          style={{
            overflowY: "scroll",
            flex: "1",
            backgroundColor: "#313338",
            color: "#2b2d31",
          }}
        >
        <Outlet/>

        </div>
      </div>
    </>
   
  );
}

export default App;