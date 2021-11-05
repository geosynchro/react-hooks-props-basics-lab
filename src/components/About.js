import React from "react";
import Links from "./Links"

function About(props) {
  // console.log(props)
  let userBio = props.bio
  if(userBio){
      userBio = <p>{props.bio}</p>
  }else if(userBio = "") {
      userBio = null
  }else {
      userBio = null
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      {userBio}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin}/>
    </div>
  );
}

export default About;


