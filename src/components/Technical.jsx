import React, { useState,useEffect } from 'react'
import { Carousel } from 'react-carousel3';


const Technical =() => {

    //  const [cube, setCube] = useState({ x: 0, y: 0 });
    // const moveObject = () => {
    //        setCube({ x: cube.x + 130, y: cube.y + 10 });
    // }
    const data = [
        {
            id: 1,
            name: "html",
            img: "/images/html.png",

        },
        {
            id:2,
            name: "css",
            img: "/images/css.png"
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


    const test = (e) => {
         e.preventDefault()
        
         console.log(data)
     }
    return(
        <>
            <button type="submit" onClick={test}>test</button>
            <div className="cubeContainer">
                <h2>
                    Technical
                </h2>
                <div className="carousel">
                    <Carousel height={460} width={980} yOrigin={42} yRadius={48} autoPlay={true}>
                        {data.map((e,i)=> {
                            return(
                                <div key={i}>
                                    <img src={e.img} className="carousel__img"/>
                                    <h3>{e.name}</h3>
                                </div>
                            )
                        })}
                    </Carousel>
               </div> 
            </div>    
        </>
    )
}

export default Technical