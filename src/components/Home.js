import React from "react";

const Home = ({ user }) => {
  const { name, color, city } = user;
  return (
    <div id="home">
      <h1 style={{ color: color }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
};

export default Home;
