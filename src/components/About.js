import React from "react";
import Link from "./Link";

const About = ({ user }) => {
  const { bio, links } = user;

  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && bio.length > 1 ? <p>{bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Link github={links.github} linkedin={links.linkedin}></Link>
    </div>
  );
};

export default About;
