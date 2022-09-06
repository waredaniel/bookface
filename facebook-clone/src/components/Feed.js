import React from "react";
import Post from "./Post";

const mainPostFeed = [
  {
    names: 'Thato and Haley',
    location: '3A',
    issue: 'Firebase won\'t save record. Halp.'
  },
  {
    names: 'Sleater and Kinney',
    location: '4B',
    issue: 'Prop types are throwing an error.'
  },
  {
    names: 'Imani & Jacob',
    location: '9F',
    issue: 'Child component isn\'t rendering.'
  }
];

function PostFeed(){
  const postFeedStyle = {
    flex: '2',
  }
  return (
    <React.Fragment>
      <div style={postFeedStyle}>
      <hr/>
        {mainPostFeed.map((post, index) =>
          <Post names={post.names}
            location={post.location}
            issue={post.issue}
            key={index}/>
        )}
        </div>
    </React.Fragment>
  );
}

export default PostFeed;