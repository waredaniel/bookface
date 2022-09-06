import React from "react";
import Header from "./Header";
import PostFeed from "./Feed";
import Postfriends from "./SuggestedFriends";

function App(){
  const container = {
   display: 'flex', 
  }
  return ( 
    <React.Fragment>
      <Header />
      <div style={container}>
        <PostFeed />
        <Postfriends />
      </div>
    </React.Fragment>
  );
}

export default App;
