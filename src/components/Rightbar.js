import React from "react";
import './Rightbar.css';
import fibo from "../images/fibo.jpeg";
import talk from "../images/talk.jpeg";
import academy from "../images/academy.png";
import youtube from "../images/youtube.png";
import js from "../images/js.png";
import { Input } from "web3uikit";


const Rightbar = () => {
  const trends = [
    {
      img: fibo,
      text: "Learn how to build a Web3 FPS game using unity...",
      link: "https://www.facebook.com/fibokmutt/",
    },
    {
      img: talk,
      text: "The fisrt Moralis Project! Let's Netflix and chill...",
      link: "https://www.facebook.com/fibokmutt/photos/a.151889104873443/5294861173909518/",
    },
    {
      img: academy,
      text: "Master DeFi in 2022. Start  at the Moralis Academy...",
      link: "https://academy.moralis.io/courses/defi-101",
    },
    {
      img: js,
      text: "Become a Web3 Developer with just simple JS...",
      link: "https://academy.moralis.io/all-courses",
    },
    {
      img: youtube,
      text: "Best youtube channel to learn about Web3...",
      link: "https://www.youtube.com/channel/UCgWS9Q3P5AxCWyQLT2kQhBw",
    },
  ];

  return (
    <>
    <div className="rightbarContent">
      <Input
      label="Search Twitter"
      name="Search Twitter"
      prefixIcon="search"
      labelBgColor="#141d26"
      >
      </Input>
    <div className="trends">
      News
      {trends.map((e)=>{
        return(
        <>
     <div className="trend" onClick={()=> window.open(e.link)}>
       <img src={e.img} className="trendImg"></img>
       <div className="trendText">{e.text}</div>
      </div>
      </>
      )
        })}
    </div>
    </div>
    </>
  );
};

export default Rightbar;

