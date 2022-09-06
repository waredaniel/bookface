import React from "react";
import Friends from "./Friends";

const mainPostFriends = [
  {
    names: 'John Smith',
    location: '3A',
    issue: 'Firebase won\'t save record. Halp.'
  },
  {
    names: 'Suzie Q',
    location: '4B',
    issue: 'Prop types are throwing an error.'
  },
  {
    names: 'John Q',
    location: '9F',
    issue: 'Child component isn\'t rendering.'
  }
];

function PostFriends(){
  const postFriendsStyle = {
    flex: '2',
  }
  
  return (
    <React.Fragment>
      <div style={postFriendsStyle}>
      <hr/>
        {mainPostFriends.map((friends, index) =>
          <Friends names={friends.names}
            location={friends.location}
            issue={friends.issue}
            key={index}/>
            )}
            </div>
    </React.Fragment>
  );
}

export default PostFriends;