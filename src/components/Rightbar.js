import React from "react";
import './Rightbar.css';
import fibo from "../images/fibo.jpeg";
import talk from "../images/talk.jpeg";
import academy from "../images/283001501_5296884957040473_4196822930671942404_n.jpeg";
import youtube from "../images/279303394_5249225528473083_743898152449933928_n.jpeg";
import js from "../images/279303394_5249225528473083_743898152449933928_n.jpeg";
import { Input } from "web3uikit";


const Rightbar = () => {
  const trends = [
    {
      img: fibo,
      text: "ภายใต้สโลแกน “A cradle of future leaders in robotics” ฟีโบ้ ก่อตั้งโดย รศ. ดร.ชิต เหล่าวัฒนา ในปี 2538 ",
      link: "https://www.facebook.com/fibokmutt/",
    },
    {
      img: talk,
      text: "พบกับ showcase series กับ class project ในรายวิชา Foundation of Robotics จากปัญหาจริงในอุตสาหกรรม",
      link: "https://www.facebook.com/fibokmutt/photos/a.151889104873443/5294861173909518/",
    },
    {
      img: academy,
      text: "หลักสูตรปริญญาโท-เอก ทางด้านวิทยาการหุ่นยนต์และระบบอัตโนมัติ",
      link: "https://www.facebook.com/fibokmutt/photos/a.151889104873443/5296884977040471",
    },
    {
      img: js,
      text: "METAVERSE FOR SMART FACTORY CONTEST 2022 🎉",
      link: "https://www.facebook.com/fibokmutt/photos/a.151889104873443/5249225538473082/",
    },
  ];

  return (
    <>
    <div className="rightbarContent">
      <Input
      label="Search Posts"
      name="Search Posts"
      prefixIcon="search"
      labelBgColor="#141d26"
      >
      </Input>
    <div className="trends">
      Fibo News
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

