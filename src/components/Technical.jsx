import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Technical = () => {
  const data = [
    {
      id: 1,
      name: "html",
      img: "/images/html.png",
    },
    {
      id: 2,
      name: "css",
      img: "/images/css.png",
    },
    {
      id: 3,
      name: "JavaScript",
      img: "/images/javascript.png",
    },
    {
      id: 4,
      name: "React",
      img: "/images/react.png",
    },
    {
      id: 5,
      name: "NodeJs",
      img: "/images/node.png",
    },
    {
      id: 6,
      name: "MySQL",
      img: "/images/mysql.png",
    },
    {
      id: 7,
      name: "Git",
      img: "/images/git.png",
    },
    {
      id: 8,
      name: "Github",
      img: "/images/GitHub.png",
    },
  ];

  return (
    <>
      <header>
        <Nav />
      </header>
      {/* <button type="submit" onClick={test}>test</button> */}
      <div className="cubeContainer">
        <h2>Technical</h2>
        <div className="carousel">
          <Carousel
            // height={460}
            width="25%"
            yOrigin={42}
            yRadius={48}
            autoPlay={true}
            stopOnHover={true}
            swipeable={true}
            showArrows={true}
          >
            {data.map((e, i) => {
              return (
                <div key={i} className="carousel__content">
                  <img src={e.img} className="carousel__img" />
                  <h3>{e.name}</h3>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Technical;
